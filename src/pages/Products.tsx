import { ProductCard } from "@/components/shared/Product";
import { useGetAllProductsQuery } from "@/redux/api/ProductsApi";
import { Product } from "@/types";

const Products = () => {
  const { data: products } = useGetAllProductsQuery(undefined);
  console.log(products);
  return (
    <div className="container min-h-screen mx-auto my-10">
      <div className="flex justify-center pb-10 text-center ">
        <h1 className="pb-3 text-3xl font-semibold border-b-2 border-primary w-fit text-primary lg:text-4xl">
          All Products
        </h1>
      </div>
      <div className="grid justify-between grid-cols-3 gap-10">
        {products?.data?.map((product: Product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
