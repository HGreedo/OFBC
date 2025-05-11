import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ResortCollectionLoading() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section Skeleton */}
      <section className="mb-16">
        <div className="relative h-[400px] w-full overflow-hidden rounded-xl bg-gray-200">
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent flex flex-col justify-center p-8">
            <Skeleton className="h-12 w-3/4 max-w-md mb-4" />
            <Skeleton className="h-6 w-full max-w-xl mb-2" />
            <Skeleton className="h-6 w-5/6 max-w-xl mb-2" />
            <Skeleton className="h-6 w-4/6 max-w-xl" />
          </div>
        </div>
      </section>

      {/* Resort Style Essentials Skeleton */}
      <section className="mb-16">
        <Skeleton className="h-10 w-64 mx-auto mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <Card key={i}>
              <CardHeader>
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4" />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Products Skeleton */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <Skeleton className="h-8 w-64" />
          <Skeleton className="h-10 w-40" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <Card key={i} className="overflow-hidden">
              <div className="relative h-[300px] bg-gray-200" />
              <CardHeader>
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2" />
              </CardHeader>
              <CardFooter className="flex justify-between">
                <Skeleton className="h-6 w-20" />
                <Skeleton className="h-10 w-32" />
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* All Products Skeleton */}
      <section className="mb-16">
        <Skeleton className="h-8 w-64 mb-8" />
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="all" disabled>
              All
            </TabsTrigger>
            <TabsTrigger value="beachwear" disabled>
              Beachwear
            </TabsTrigger>
            <TabsTrigger value="vacation" disabled>
              Vacation Attire
            </TabsTrigger>
            <TabsTrigger value="tropical" disabled>
              Tropical Elegance
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="relative h-[300px] bg-gray-200" />
                <CardHeader>
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/2" />
                </CardHeader>
                <CardFooter className="flex justify-between">
                  <Skeleton className="h-6 w-20" />
                  <Skeleton className="h-10 w-32" />
                </CardFooter>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </section>

      {/* Designer Spotlight Skeleton */}
      <section className="mb-16">
        <Skeleton className="h-8 w-64 mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <Card key={i}>
              <CardHeader>
                <div className="relative h-[200px] w-[200px] mx-auto rounded-full overflow-hidden mb-4 bg-gray-200" />
                <Skeleton className="h-6 w-40 mx-auto mb-2" />
                <Skeleton className="h-4 w-32 mx-auto" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-4 w-full mb-2 mx-auto" />
                <Skeleton className="h-4 w-full mb-2 mx-auto" />
                <Skeleton className="h-4 w-5/6 mx-auto" />
              </CardContent>
              <CardFooter className="flex justify-center">
                <Skeleton className="h-10 w-32" />
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Resort Styling Tips Skeleton */}
      <section className="mb-16">
        <div className="bg-blue-50 rounded-xl p-8">
          <Skeleton className="h-8 w-64 mx-auto mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Skeleton className="h-6 w-40 mb-4" />
              <div className="space-y-4">
                {[...Array(4)].map((_, i) => (
                  <Skeleton key={i} className="h-4 w-full" />
                ))}
              </div>
            </div>
            <div>
              <Skeleton className="h-6 w-48 mb-4" />
              <div className="space-y-4">
                {[...Array(4)].map((_, i) => (
                  <Skeleton key={i} className="h-4 w-full" />
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <Skeleton className="h-10 w-64" />
          </div>
        </div>
      </section>
    </div>
  )
}
