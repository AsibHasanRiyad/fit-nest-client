import { PaginationCard } from "@/components/shared/PaginationCard";
import PriceRange from "@/components/shared/PriceRange";
import { ProductCard } from "@/components/shared/Product";
import { ProductCardSkeleton } from "@/components/shared/ProductSkeleton";
import { SelectCategory } from "@/components/shared/SelectCategory";
import { SortBy } from "@/components/shared/ShortBy";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useGetAllProductsQuery } from "@/redux/api/ProductsApi";
import { Product } from "@/types";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Products = () => {
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("price");
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const handleCategoryChange = (category: string, isChecked: boolean) => {
    setSelectedCategories((prev) =>
      isChecked ? [...prev, category] : prev.filter((cat) => cat !== category)
    );
  };

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category =
    queryParams.size !== 0 ? queryParams.get("category") || "" : null;

  // Build the arguments dynamically, only include category if it's set
  const queryArgs = [
    { name: "limit", value: 8 },
    { name: "page", value: page },
    { name: "sort", value: sortBy || "price" },
    { name: "minPrice", value: minPrice },
    { name: "maxPrice", value: maxPrice },
    { name: "searchTerm", value: searchTerm },
  ];

  if (selectedCategories.length > 0) {
    queryArgs.push({ name: "category", value: selectedCategories.join(",") });
  }
  if ((category?.length as number) > 0) {
    queryArgs.push({ name: "category", value: category as string });
  }
  selectedCategories.forEach((category) => {
    queryArgs.push({ name: "category", value: category });
  });

  const { data: products, isLoading } = useGetAllProductsQuery(queryArgs);

  const handlePriceRangeChange = (min: number, max: number) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  const handleSelectSort = (data: string) => {
    setSortBy(data);
  };

  const handleSearch = () => {
    setPage(1);
  };

  console.log(products, "products");

  return (
    <div className="container min-h-screen px-4 mx-auto my-10 md:px-10">
      <div className="flex justify-center pb-10 text-center ">
        <h1 className="pb-3 text-3xl font-semibold border-b-2 border-primary w-fit text-primary lg:text-4xl">
          All Products
        </h1>
      </div>
      <div className="grid grid-cols-5">
        {/* Search and filter section */}
        <div className="pr-0 xl:pr-10 space-y-3 mb-10 col-span-1 2xl:min-w-[250px]">
          <div className="flex items-center w-full gap-2 ">
            <Input
              type="text"
              placeholder="Name"
              className="w-full "
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button className="text-white bg-primary" onClick={handleSearch}>
              Search
            </Button>
          </div>
          <div className="flex flex-row justify-between gap-5 2xl:flex-col ">
            <div className="flex flex-col items-start gap-3 font-medium text-primary ">
              <p>Sort By:</p>
              <SortBy handleSelectSort={handleSelectSort} />
            </div>
            <div className="flex flex-col items-start space-y-8 font-medium">
              <h1 className=" text-primary">Price Range:</h1>
              <PriceRange onPriceRangeChange={handlePriceRangeChange} />
            </div>
          </div>
          <div>
            <h1 className="mt-4 mb-2 font-semibold text-primary">
              Filter by Category
            </h1>
            <SelectCategory
              selectedCategories={selectedCategories}
              onCategoryChange={handleCategoryChange}
            />
          </div>
        </div>

        <div className="col-span-4 ">
          {isLoading ? (
            <div className="grid justify-between grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <ProductCardSkeleton key={index} />
              ))}
            </div>
          ) : products?.data?.result?.length === 0 ? (
            <div className="flex justify-center items-center min-h-[60vh]">
              <h1 className="text-2xl text-primary">No Product available</h1>
            </div>
          ) : (
            <div className="grid justify-between grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
              {products?.data?.result?.map((product: Product) => (
                <ProductCard product={product} key={product._id} />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mt-10 ">
        <PaginationCard
          currentPage={page}
          totalPages={products?.data?.meta?.totalPage}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
};

export default Products;
