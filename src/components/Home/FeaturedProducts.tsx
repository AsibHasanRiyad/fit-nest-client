import { useGetAllProductsQuery } from "@/redux/api/ProductsApi";
import { Product } from "@/types";
import { Link } from "react-router-dom";
import Header from "../shared/Title";
import { Button } from "../ui/button";
import { CircleDollarSign, Dumbbell } from "lucide-react";
import { GoArrowRight } from "react-icons/go";
import { FeaturedSkeleton } from "../shared/FeaturedSkeleton";

const FeaturedProducts = () => {
  const { data: products, isLoading } = useGetAllProductsQuery([
    { name: "limit", value: 6 },
  ]);
  // console.log(products);
  return (
    <section className="mt-10 ">
      <Header
        header="Featured Products"
        description="Discover our handpicked selection of cutting-edge fitness equipment designed to elevate your workout experience."
      />
      <div className="max-w-screen-xl px-2 py-4 mx-auto sm:py-4 lg:px-6">
        <div className="grid h-full grid-cols-1 gap-4 mt-10 sm:grid-cols-2 md:grid-cols-4">
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className={`col-span-2 sm:col-span-1 ${
                    index === 0 || index === 5
                      ? "md:col-span-2"
                      : "md:col-span-1"
                  } bg-gray-50 h-auto md:h-full flex flex-col`}
                >
                  <FeaturedSkeleton />
                </div>
              ))
            : products?.data?.result?.map((product: Product, index: number) => (
                <div
                  key={product._id}
                  className={`col-span-2 sm:col-span-1 ${
                    index === 0 || index === 5
                      ? "md:col-span-2"
                      : "md:col-span-1"
                  } bg-gray-50 h-auto md:h-full flex flex-col`}
                >
                  <div className="w-full h-full relative rounded-3xl overflow-hidden mx-auto bg-gradient-to-r from-[#1D2235] to-[#121318] p-5 ">
                    <div className="relative z-10">
                      <img
                        src={product.image}
                        alt="image"
                        className="object-cover w-full h-44 rounded-2xl"
                      />
                      <div className="relative z-20 py-4">
                        <h2 className="text-xl font-bold text-left text-white">
                          {product.name}
                        </h2>
                        <p className="flex items-center justify-start gap-2 mt-4 text-left text-neutral-200">
                          <Dumbbell className=" text-primary" />
                          {product.category}
                        </p>
                        <p className="flex items-center justify-start gap-2 mt-4 text-left text-neutral-200">
                          <CircleDollarSign className=" text-primary" />
                          {product.price}
                        </p>
                      </div>
                      <div className="flex items-center justify-end ">
                        <Link to={`/products/${product._id}`}>
                          <Button
                            variant="expandIcon"
                            Icon={GoArrowRight}
                            iconPlacement="right"
                            className="p-0 px-3 py-1 h-fit bg-primary text-third hover:bg-primary/90"
                          >
                            Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
        </div>
        <div className="flex items-center justify-center pt-10 ">
          <Link to={"/products"}>
            <Button className="text-center text-white">See All</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
