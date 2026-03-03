export default function TaxGuideLoading() {
  return (
    <main className="max-w-2xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
      <div className="mb-5">
        <div className="h-6 w-48 bg-gray-200 rounded animate-pulse" />
        <div className="h-4 w-72 bg-gray-100 rounded animate-pulse mt-2" />
      </div>

      <div className="space-y-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-5"
          >
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-gray-100 rounded animate-pulse" />
              <div className="h-5 flex-1 bg-gray-100 rounded animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
