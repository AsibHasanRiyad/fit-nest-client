export const FeaturedSkeleton = () => {
  return (
    <div className="relative w-full h-full p-8 mx-auto overflow-hidden bg-[#1A1F2F] rounded-3xl animate-pulse">
      <div className="relative z-10">
        <div className="w-full h-32 bg-gray-400 rounded-2xl"></div>
        <div className="relative z-20 py-4">
          <div className="w-3/4 h-6 mb-2 bg-gray-400 rounded"></div>
          <div className="w-1/2 h-6 mb-2 bg-gray-400 rounded"></div>
          <div className="w-1/3 h-6 bg-gray-400 rounded"></div>
        </div>
      </div>
    </div>
  );
};
