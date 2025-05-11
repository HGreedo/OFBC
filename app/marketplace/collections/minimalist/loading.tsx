import { Skeleton } from "@/components/ui/skeleton"

export default function MinimalistCollectionLoading() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section Skeleton */}
      <div className="relative bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Skeleton className="mb-6 h-6 w-32" />
            <Skeleton className="mb-6 h-16 w-full sm:h-20 md:h-24" />
            <Skeleton className="mb-8 h-24 w-full" />
            <div className="flex flex-wrap gap-3">
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-6 w-28" />
              <Skeleton className="h-6 w-20" />
            </div>
          </div>
        </div>
      </div>

      {/* Minimalist Principles Section Skeleton */}
      <div className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Skeleton className="mb-8 h-8 w-64" />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <Skeleton className="mb-4 h-16 w-16 rounded-full" />
                <Skeleton className="mb-2 h-6 w-40" />
                <Skeleton className="h-24 w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Products Section Skeleton */}
      <div className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Skeleton className="mb-8 h-8 w-64" />
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="group">
                <Skeleton className="aspect-square w-full rounded-md" />
                <Skeleton className="mt-4 h-4 w-24" />
                <Skeleton className="mt-2 h-6 w-full" />
                <div className="mt-2 flex items-center justify-between">
                  <Skeleton className="h-6 w-16" />
                  <Skeleton className="h-4 w-20" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
