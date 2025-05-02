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
  const [scriptLoaded, setScriptLoaded] = useState(false)

  // Function to safely load the ArcGIS script
  useEffect(() => {
    if (typeof window === "undefined") return

    // Only load the script once
    if (window.esriLoaded) {
      setScriptLoaded(true)
      return
    }

    const script = document.createElement("script")
    script.src = "https://js.arcgis.com/4.28/"
    script.async = true
    script.crossOrigin = "anonymous" // Add crossOrigin attribute

    // Add proper error handling
    script.onerror = (e) => {
      console.error("Failed to load ArcGIS script:", e)
      setError("Failed to load the map. Please check your internet connection and try again.")
      setLoading(false)
    }

    script.onload = () => {
      window.esriLoaded = true
      setScriptLoaded(true)
    }

    document.head.appendChild(script)

    return () => {
      // Clean up is not needed for script tags that were added to the DOM
    }
  }, [])

  // Initialize the map once the script is loaded
  useEffect(() => {
    if (!scriptLoaded || !mapRef.current || typeof window === "undefined") return

    let view: any = null
    let cleanup: (() => void) | null = null

    const initMap = () => {
      try {
        // Use a try-catch block to catch any errors during initialization
        window.require(
          [
            "esri/Map",
            "esri/views/SceneView",
            "esri/layers/GraphicsLayer",
            "esri/Graphic",
            "esri/geometry/Point",
            "esri/PopupTemplate",
            "esri/symbols/SimpleMarkerSymbol",
            "esri/layers/TileLayer",
            "esri/layers/ElevationLayer",
            "esri/Ground",
          ],
          (
            Map: any,
            SceneView: any,
            GraphicsLayer: any,
            Graphic: any,
            Point: any,
            PopupTemplate: any,
            SimpleMarkerSymbol: any,
            TileLayer: any,
            ElevationLayer: any,
            Ground: any,
          ) => {
            // Create a custom basemap with white oceans and black continents
            const customBasemap = {
              baseLayers: [
                new TileLayer({
                  url: "https://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Light_Gray_Base/MapServer",
                  // Apply invert effect to make oceans white and land black
                  effect: "invert() brightness(1.1)",
                }),
              ],
            }

            // Create a simple map with custom styling
            const map = new Map({
              basemap: customBasemap,
              ground: new Ground({
                surfaceColor: [0, 0, 0], // Black ground surface
              }),
            })

            // Create a graphics layer for event points
            const eventsLayer = new GraphicsLayer()
            map.add(eventsLayer)

            // Create the view with minimal configuration
            view = new SceneView({
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
              highlightOptions: {
                color: [255, 148, 61], // #ff943d
                fillOpacity: 0.4,
              },
            })

            // Wait for the view to be ready before adding graphics
            view
              .when(() => {
                // Add event locations to the map
                eventLocations.forEach((event) => {
                  // Create a point
                  const point = new Point({
                    longitude: event.coordinates[0],
                    latitude: event.coordinates[1],
                  })

                  // Create a marker symbol with the requested orange color
                  const markerSymbol = new SimpleMarkerSymbol({
                    color: [255, 148, 61, 0.9], // #ff943d with 0.9 opacity
                    outline: {
                      color: [255, 255, 255], // White outline
                      width: 2,
                    },
                    size: 14, // Slightly larger for better visibility
                  })

                  // Create a popup template with custom styling
                  const popupTemplate = new PopupTemplate({
                    title: event.name,
                    content: `
                      <p><strong>Location:</strong> ${event.location}</p>
                      <p><strong>Date:</strong> ${event.date}</p>
                      <button class="event-details-btn" data-event-id="${event.id}" style="background-color: #ff943d;">View Details</button>
                    `,
                    overwriteActions: true,
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

                // Use the popup-open event instead of watch
                view.on("click", () => {
                  // Wait for the popup to be created in the DOM
                  setTimeout(() => {
                    const buttons = document.querySelectorAll(".event-details-btn")
                    buttons.forEach((button) => {
                      button.addEventListener("click", (e) => {
                        const eventId = (e.target as HTMLElement).getAttribute("data-event-id")
                        if (eventId) {
                          onEventSelect(eventId)
                          view.popup.close()
                        }
                      })
                    })
                  }, 100)
                })

                setLoading(false)
              })
              .catch((err: any) => {
                console.error("Error initializing view:", err)
                setError("Error initializing the map view. Please try again later.")
                setLoading(false)
              })

            // Set up cleanup function
            cleanup = () => {
              if (view) {
                view.container = null
                view.destroy()
              }
            }
          },
        )
      } catch (err) {
        console.error("Error in ArcGIS initialization:", err)
        setError(`Failed to initialize the map: ${err instanceof Error ? err.message : String(err)}`)
        setLoading(false)
      }
    }

    // Initialize the map with a slight delay to ensure the DOM is ready
    const timer = setTimeout(initMap, 100)

    // Cleanup function
    return () => {
      clearTimeout(timer)
      if (cleanup) cleanup()
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
    esriLoaded: boolean
  }
}
