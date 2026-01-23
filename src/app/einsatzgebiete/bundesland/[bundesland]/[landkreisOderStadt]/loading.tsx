export default function Loading() {
  return (
    <>
      {/* Hero Skeleton */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            {/* Breadcrumb Skeleton */}
            <div className="h-4 w-80 bg-white/10 rounded mb-8" />
            
            {/* Title Skeleton */}
            <div className="max-w-3xl">
              <div className="h-12 w-full bg-white/10 rounded mb-4" />
              <div className="h-6 w-full bg-white/10 rounded mb-2" />
              <div className="h-6 w-3/4 bg-white/10 rounded" />
            </div>
          </div>
        </div>
      </section>

      {/* Content Skeleton */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main Column */}
            <div className="lg:col-span-2 animate-pulse">
              {/* Key Takeaways Skeleton */}
              <div className="h-32 bg-accent-50 rounded-xl mb-12" />

              {/* Content Sections */}
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="mb-12">
                  <div className="h-8 w-64 bg-primary-100 rounded mb-4" />
                  <div className="h-4 w-full bg-primary-50 rounded mb-2" />
                  <div className="h-4 w-3/4 bg-primary-50 rounded mb-6" />
                  <div className="h-48 bg-primary-50 rounded-xl" />
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 animate-pulse">
              <div className="sticky top-24 space-y-6">
                <div className="h-48 bg-primary-900 rounded-xl" />
                <div className="h-40 bg-primary-50 rounded-xl" />
                <div className="h-32 bg-white rounded-xl border border-primary-100" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
