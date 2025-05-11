import { Skeleton } from "@/components/ui/skeleton"

export default function ResortCollectionLoading() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section Skeleton */}
      <div className="relative bg-blue-50 text-gray-900">
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

      {/* Resort Styles Section Skeleton */}
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

      {/* All Products Section Skeleton */}
      <div className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <Skeleton className="h-8 w-64" />
            <Skeleton className="mt-4 h-10 w-40 sm:mt-0" />
          </div>

          <div className="mb-8 flex flex-wrap gap-2">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="h-8 w-24" />
            ))}
          </div>

          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {[...Array(8)].map((_, i) => (
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

          <div className="mt-12 flex justify-center">
            <Skeleton className="h-10 w-32" />
          </div>
        </div>
      </div>

      {/* Designers Section Skeleton */}
      <div className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Skeleton className="mb-8 h-8 w-64" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="rounded-lg bg-white p-6 shadow-sm">
                <Skeleton className="h-6 w-48" />
                <Skeleton className="mt-2 h-24 w-full" />
                <Skeleton className="mt-4 h-4 w-40" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Styling Tips Section Skeleton */}
      <div className="bg-blue-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Skeleton className="mx-auto h-8 w-64" />
            <Skeleton className="mx-auto mt-4 h-24 w-full" />
            <div className="mt-8 flex justify-center">
              <Skeleton className="h-10 w-48" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
