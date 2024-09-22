import { PaginationCard } from "@/components/shared/PaginationCard";
import { ProductCard } from "@/components/shared/Product";
import { ProductCardSkeleton } from "@/components/shared/ProductSkeleton";
import { useGetAllProductsQuery } from "@/redux/api/ProductsApi";
import { Product } from "@/types";
import { useState } from "react";

const Products = () => {
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("price");
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const {
    data: products,
    isFetching,
    isLoading,
  } = useGetAllProductsQuery([
    { name: "limit", value: 6 },
    { name: "page", value: page },
    { name: "sort", value: sortBy || "price" },
    { name: "minPrice", value: minPrice },
    { name: "maxPrice", value: maxPrice },
    { name: "searchTerm", value: searchTerm },
  ]);
  console.log(products, "products");

  return (
    <div className="container min-h-screen px-4 mx-auto my-10 md:px-10">
      <div className="flex justify-center pb-10 text-center ">
        <h1 className="pb-3 text-3xl font-semibold border-b-2 border-primary w-fit text-primary lg:text-4xl">
          All Products
        </h1>
      </div>
      {(isFetching || isLoading) && (
        <div className="grid justify-between grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </div>
      )}
      {products?.data?.result?.length === 0 ? (
        <div className=" flex justify-center items-center min-h-[60vh]">
          <h1 className="text-2xl text-primary">No Product available</h1>
        </div>
      ) : (
        <div className="grid justify-between grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {products?.data?.result?.map((product: Product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
      )}
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
