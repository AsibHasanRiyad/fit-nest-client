const ProductDetailsSkeleton = () => {
  return (
    <div className="container mx-auto my-10">
      <section className="py-24">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="w-full h-full mx-auto">
              <div className="object-cover w-full h-[500px] mx-auto rounded-2xl bg-gray-300 animate-pulse"></div>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-full mt-8 lg:pl-8 xl:pl-16 lg:mt-0">
                <div className="mb-6">
                  <div className="w-3/4 h-8 mb-2 bg-gray-300 rounded-lg animate-pulse"></div>

                  <div className="w-1/4 h-4 bg-gray-300 rounded-lg animate-pulse"></div>
                </div>
                <div className="flex items-center mb-8">
                  <div className="w-1/4 h-6 bg-gray-300 rounded-lg animate-pulse"></div>
                </div>

                <div className="mb-8 space-y-4">
                  <div className="w-full h-4 bg-gray-300 rounded-lg animate-pulse"></div>
                  <div className="w-full h-4 bg-gray-300 rounded-lg animate-pulse"></div>
                  <div className="w-3/4 h-4 bg-gray-300 rounded-lg animate-pulse"></div>
                </div>

                <div className="flex items-center gap-3 mb-8">
                  <div className="flex items-center rounded-full animate-pulse">
                    <div className="w-40 h-12 bg-gray-300 rounded-full"></div>
                    {/* <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                    <div className="w-12 h-12 bg-gray-300 rounded-full"></div> */}
                  </div>

                  <div className="bg-gray-300 rounded-md w-36 h-9 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailsSkeleton;
