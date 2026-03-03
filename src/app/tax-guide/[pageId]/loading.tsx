export default function TopicLoading() {
  return (
    <main className="max-w-2xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
      <div className="h-4 w-28 bg-gray-100 rounded animate-pulse mb-4" />

      <div className="mb-6">
        <div className="h-7 w-64 bg-gray-200 rounded animate-pulse" />
      </div>

      <div className="bg-white rounded-xl shadow-sm p-5 sm:p-6 space-y-4">
        <div className="h-4 w-full bg-gray-100 rounded animate-pulse" />
        <div className="h-4 w-5/6 bg-gray-100 rounded animate-pulse" />
        <div className="h-4 w-4/6 bg-gray-100 rounded animate-pulse" />
        <div className="h-6 w-48 bg-gray-200 rounded animate-pulse mt-6" />
        <div className="h-4 w-full bg-gray-100 rounded animate-pulse" />
        <div className="h-4 w-3/4 bg-gray-100 rounded animate-pulse" />
        <div className="h-4 w-5/6 bg-gray-100 rounded animate-pulse" />
      </div>
    </main>
  );
}
