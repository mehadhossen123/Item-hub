const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center animate-pulse">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6">
        <div className="h-6 bg-gray-300 rounded w-1/2 mb-6" />

        <div className="space-y-4">
          <div className="h-10 bg-gray-200 rounded" />
          <div className="h-10 bg-gray-200 rounded" />
        </div>

        <div className="h-12 bg-gray-300 rounded mt-6" />
      </div>
    </div>
  );
};

export default Loading;
