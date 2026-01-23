export default function Loading() {
  return (
    <>
      {/* Hero Skeleton */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            {/* Breadcrumb Skeleton */}
            <div className="h-4 w-64 bg-white/10 rounded mb-8" />
            
            {/* Title Skeleton */}
            <div className="max-w-3xl">
              <div className="h-6 w-40 bg-white/10 rounded-full mb-6" />
              <div className="h-12 w-full bg-white/10 rounded mb-4" />
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
            {/* Section Title */}
            <div className="h-8 w-64 bg-primary-100 rounded mb-8" />
            
            {/* Grid Skeleton */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="h-28 bg-primary-50 rounded-xl border border-primary-100"
                />
              ))}
            </div>

            {/* Second Section */}
            <div className="h-8 w-48 bg-primary-100 rounded mb-8" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="h-20 bg-primary-50 rounded-xl border border-primary-100"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
