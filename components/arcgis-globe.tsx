"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

// Define the event location type
interface EventLocation {
  id: string
  name: string
  location: string
  coordinates: [number, number] // [longitude, latitude]
  date: string
}

interface ArcGisGlobeProps {
  eventLocations: EventLocation[]
  onEventSelect: (eventId: string) => void
}

export function ArcGisGlobe({ eventLocations, onEventSelect }: ArcGisGlobeProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const viewRef = useRef<any>(null)
  const mountedRef = useRef(true)
  const [scriptLoaded, setScriptLoaded] = useState(false)

  // Set mountedRef to false when component unmounts
  useEffect(() => {
    return () => {
      mountedRef.current = false
    }
  }, [])

  // Function to load ArcGIS script
  useEffect(() => {
    if (typeof window === "undefined") return

    console.log("Attempting to load ArcGIS script...")

    // Check if script is already loaded
    if (document.querySelector('script[src*="arcgis"]')) {
      console.log("ArcGIS script already exists in DOM")
      setScriptLoaded(true)
      return
    }

    // Load CSS first
    const link = document.createElement("link")
    link.rel = "stylesheet"
    link.href = "https://js.arcgis.com/4.28/esri/themes/light/main.css"
    document.head.appendChild(link)

    // Then load the script
    const script = document.createElement("script")
    script.src = "https://js.arcgis.com/4.28/"
    script.async = true

    script.onload = () => {
      console.log("ArcGIS script loaded successfully")
      if (mountedRef.current) {
        setScriptLoaded(true)
      }
    }

    script.onerror = (e) => {
      console.error("Failed to load ArcGIS script:", e)
      if (mountedRef.current) {
        setError("Failed to load the map. Please check your internet connection and try again.")
        setLoading(false)
      }
    }

    document.head.appendChild(script)
  }, [])

  // Initialize the map once the script is loaded
  useEffect(() => {
    if (!scriptLoaded || !mapRef.current) {
      console.log("Script not loaded or map ref not available yet")
      return
    }

    console.log("Initializing ArcGIS map...")

    // Create a cleanup function
    let cleanup = () => {}

    // Initialize the map
    const initMap = () => {
      try {
        // Use require with a simpler approach
        window.require(
          [
            "esri/Map",
            "esri/views/SceneView",
            "esri/layers/GraphicsLayer",
            "esri/Graphic",
            "esri/geometry/Point",
            "esri/PopupTemplate",
            "esri/symbols/SimpleMarkerSymbol",
          ],
          (Map, SceneView, GraphicsLayer, Graphic, Point, PopupTemplate, SimpleMarkerSymbol) => {
            if (!mountedRef.current || !mapRef.current) return

            console.log("ArcGIS modules loaded, creating map...")

            // Create a simple map
            const map = new Map({
              basemap: "gray-vector",
            })

            // Create a graphics layer for event points
            const eventsLayer = new GraphicsLayer()
            map.add(eventsLayer)

            // Create the view
            const view = new SceneView({
              container: mapRef.current,
              map: map,
              camera: {
                position: {
                  x: 0,
                  y: 20,
                  z: 20000000,
                },
                tilt: 0,
              },
              environment: {
                background: {
                  type: "color",
                  color: [255, 255, 255, 1], // White background
                },
                starsEnabled: false,
                atmosphereEnabled: false,
              },
              ui: {
                components: ["zoom"],
              },
            })

            // Store the view reference
            viewRef.current = view

            // Wait for the view to be ready
            view
              .when(() => {
                if (!mountedRef.current) return

                console.log("ArcGIS view ready, adding event markers...")

                // Add event locations to the map
                eventLocations.forEach((event) => {
                  // Create a point
                  const point = new Point({
                    longitude: event.coordinates[0],
                    latitude: event.coordinates[1],
                  })

                  // Create a marker symbol
                  const markerSymbol = new SimpleMarkerSymbol({
                    color: [255, 148, 61, 0.9], // #ff943d with 0.9 opacity
                    outline: {
                      color: [255, 255, 255], // White outline
                      width: 2,
                    },
                    size: 14,
                  })

                  // Create a popup template
                  const popupTemplate = new PopupTemplate({
                    title: event.name,
                    content: `
                  <div style="padding: 10px;">
                    <p><strong>Location:</strong> ${event.location}</p>
                    <p><strong>Date:</strong> ${event.date}</p>
                    <button class="event-details-btn" data-event-id="${event.id}">View Details</button>
                  </div>
                `,
                  })

                  // Create a graphic and add it to the layer
                  const graphic = new Graphic({
                    geometry: point,
                    symbol: markerSymbol,
                    popupTemplate: popupTemplate,
                    attributes: {
                      id: event.id,
                      name: event.name,
                      location: event.location,
                      date: event.date,
                    },
                  })

                  eventsLayer.add(graphic)
                })

                // Handle click events
                view.on("click", (event) => {
                  if (!mountedRef.current) return

                  view
                    .hitTest(event)
                    .then((response) => {
                      if (!mountedRef.current) return

                      const graphic = response.results.filter((result) => result.graphic.layer === eventsLayer)[0]
                        ?.graphic

                      if (graphic) {
                        // Open the popup
                        view.popup.open({
                          features: [graphic],
                          location: event.mapPoint,
                        })

                        // Add event listeners to buttons
                        setTimeout(() => {
                          if (!mountedRef.current) return

                          const buttons = document.querySelectorAll(".event-details-btn")
                          buttons.forEach((button) => {
                            button.addEventListener("click", (e) => {
                              const eventId = (e.target as HTMLElement).getAttribute("data-event-id")
                              if (eventId && mountedRef.current) {
                                onEventSelect(eventId)
                                if (viewRef.current) {
                                  viewRef.current.popup.close()
                                }
                              }
                            })
                          })
                        }, 100)
                      }
                    })
                    .catch((err) => {
                      console.warn("Error in hitTest:", err)
                    })
                })

                // Update the UI state
                if (mountedRef.current) {
                  console.log("ArcGIS map fully initialized and ready")
                  setLoading(false)
                }
              })
              .catch((err) => {
                console.error("Error in view initialization:", err)
                if (mountedRef.current) {
                  setError("Failed to initialize the map view. Please try again later.")
                  setLoading(false)
                }
              })

            // Setup cleanup function
            cleanup = () => {
              console.log("Cleaning up ArcGIS resources...")
              if (viewRef.current) {
                try {
                  if (viewRef.current.popup) {
                    viewRef.current.popup.close()
                  }
                  viewRef.current.container = null
                  viewRef.current.destroy()
                  viewRef.current = null
                } catch (e) {
                  console.warn("Error during view cleanup:", e)
                }
              }
            }
          },
          (err) => {
            console.error("Error loading ArcGIS modules:", err)
            if (mountedRef.current) {
              setError("Failed to load map components. Please try the Calendar View instead.")
              setLoading(false)
            }
          },
        )
      } catch (err) {
        console.error("Error in ArcGIS initialization:", err)
        if (mountedRef.current) {
          setError(`Failed to initialize the map: ${err instanceof Error ? err.message : String(err)}`)
          setLoading(false)
        }
      }
    }

    // Initialize with a slight delay to ensure DOM is ready
    const timer = setTimeout(initMap, 500)

    // Cleanup function
    return () => {
      clearTimeout(timer)
      cleanup()
    }
  }, [scriptLoaded, eventLocations, onEventSelect])

  // Fallback content when there's an error
  if (error) {
    return (
      <Card className="p-6">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-red-600 mb-2">Map Loading Error</h3>
          <p className="mb-4">{error}</p>
          <p className="mb-4">Please try the Calendar View instead to see all events.</p>
          <Button onClick={() => window.location.reload()} className="mr-2">
            Retry
          </Button>
        </div>
      </Card>
    )
  }

  return (
    <Card className="relative overflow-hidden">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <div className="text-center">
            <Loader2 className="h-8 w-8 animate-spin text-white mx-auto" />
            <p className="text-white mt-2">Loading 3D Globe...</p>
          </div>
        </div>
      )}
      <div
        ref={mapRef}
        className="w-full h-[500px] md:h-[600px] lg:h-[700px]"
        style={{ visibility: loading ? "hidden" : "visible" }}
      />
    </Card>
  )
}

// Add this to make TypeScript happy with the window properties
declare global {
  interface Window {
    require: any
  }
}
