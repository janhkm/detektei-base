export default function Loading() {
  return (
    <>
      {/* Hero Skeleton */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            {/* Breadcrumb Skeleton */}
            <div className="h-4 w-48 bg-white/10 rounded mb-8" />
            
            {/* Title Skeleton */}
            <div className="max-w-3xl">
              <div className="h-6 w-32 bg-white/10 rounded-full mb-6" />
              <div className="h-12 w-full bg-white/10 rounded mb-4" />
              <div className="h-12 w-3/4 bg-white/10 rounded mb-6" />
              <div className="h-6 w-full bg-white/10 rounded mb-2" />
              <div className="h-6 w-2/3 bg-white/10 rounded" />
            </div>
          </div>
        </div>
      </section>

      {/* Content Skeleton */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            {/* Grid Skeleton */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {Array.from({ length: 16 }).map((_, i) => (
                <div
                  key={i}
                  className="h-24 bg-primary-50 rounded-xl border border-primary-100"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
