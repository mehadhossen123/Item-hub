const Loading = () => {
  return (
    <div className="mt-20 flex justify-center animate-pulse">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-xl p-6">
        {/* Image Skeleton */}
        <div className="flex justify-center mb-4">
          <div className="h-48 w-48 bg-gray-200 rounded-lg" />
        </div>

        {/* Product Name */}
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-3" />

        {/* Description */}
        <div className="h-4 bg-gray-200 rounded w-full mb-2" />
        <div className="h-4 bg-gray-200 rounded w-5/6 mb-4" />

        {/* Price */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-6 w-24 bg-gray-300 rounded" />
          <div className="h-4 w-16 bg-gray-200 rounded" />
        </div>

        {/* Rating & Sold */}
        <div className="flex gap-4 mb-4">
          <div className="h-4 w-32 bg-gray-200 rounded" />
          <div className="h-4 w-20 bg-gray-200 rounded" />
        </div>

        {/* Category */}
        <div className="h-4 w-40 bg-gray-200 rounded mb-4" />

        {/* Specs */}
        <div className="mb-4 space-y-2">
          <div className="h-5 w-32 bg-gray-300 rounded" />
          <div className="h-4 w-full bg-gray-200 rounded" />
          <div className="h-4 w-5/6 bg-gray-200 rounded" />
          <div className="h-4 w-2/3 bg-gray-200 rounded" />
        </div>

        {/* FAQ */}
        <div className="mb-6 space-y-2">
          <div className="h-5 w-24 bg-gray-300 rounded" />
          <div className="h-4 w-full bg-gray-200 rounded" />
          <div className="h-4 w-5/6 bg-gray-200 rounded" />
        </div>

        {/* Buy Button */}
        <div className="h-12 bg-gray-300 rounded-lg w-full" />
      </div>
    </div>
  );
};

export default Loading;
