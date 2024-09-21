import { useState } from "react";
import { useGetSingleProductQuery } from "@/redux/api/ProductsApi";
import { Minus, Plus } from "lucide-react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BiCartAdd } from "react-icons/bi";

const ProductDetails = () => {
  const { id } = useParams();
  const { data } = useGetSingleProductQuery(id);

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (type: string) => {
    if (type === "increment") {
      setQuantity(quantity + 1);
    } else if (type === "decrement" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="container mx-auto my-10">
      <section className="py-24">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Product Image */}
            <div className="w-full h-full mx-auto">
              <img
                src={data?.data?.image}
                alt={data?.data?.name}
                className="object-cover h-full lg:min-h-[500px] mx-auto rounded-2xl"
              />
            </div>
            {/* Product Details */}
            <div className="flex items-center justify-center">
              <div className="w-full mt-8 lg:pl-8 xl:pl-16 lg:mt-0">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-gray-900">
                    {data?.data?.name}
                  </h2>
                  <p className="text-base text-gray-500">
                    {data?.data?.category}
                  </p>
                </div>
                <div className="flex items-center mb-8">
                  <h5 className="text-2xl font-semibold text-gray-900">
                    ${data?.data?.price}
                  </h5>
                </div>
                <p className="pb-10">{data?.data?.description}</p>
                {/* Quantity and Add to Cart */}
                <div className="flex items-center gap-3 mb-8">
                  {/* Quantity Selector */}
                  <div className="flex items-center border border-gray-400 rounded-full">
                    <button
                      className="px-4 py-3"
                      onClick={() => handleQuantityChange("decrement")}
                    >
                      <Minus />
                    </button>
                    <input
                      type="text"
                      className="w-12 font-semibold text-center text-gray-900 outline-none"
                      value={quantity}
                      readOnly
                    />
                    <button
                      className="px-4 py-3"
                      onClick={() => handleQuantityChange("increment")}
                    >
                      <Plus />
                    </button>
                  </div>
                  {/* Add to Cart Button */}
                  <Button className="flex gap-2.5 text-white ">
                    <BiCartAdd className="w-7 h-7 " />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
