import { useState } from "react";
import { useGetSingleProductQuery } from "@/redux/api/ProductsApi";
import { Minus, Plus } from "lucide-react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BiCartAdd } from "react-icons/bi";
import ProductDetailsSkeleton from "@/components/shared/ProductDetailsSkeleton";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { addToCart, selectCart } from "@/redux/features/CartSlice";
import { toast } from "sonner";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading, isFetching } = useGetSingleProductQuery(id);

  const [quantity, setQuantity] = useState(1);
  const dispatch = useAppDispatch();

  const cart = useAppSelector(selectCart);

  const cartItem = cart.items.find((item) => item.id === id);
  const currentCartQuantity = cartItem ? cartItem.quantity : 0;

  const handleAddToCart = () => {
    if (quantity + currentCartQuantity > data.data.stockQuantity) {
      toast.error("Cannot add more than available stock");
      return;
    }

    const product = {
      id: data.data._id,
      name: data.data.name,
      price: data.data.price,
      image: data.data.image,
      quantity,
    };
    dispatch(addToCart(product));
    toast.success("Product added to the cart");
  };

  const handleQuantityChange = (type: string) => {
    if (type === "increment") {
      if (quantity + currentCartQuantity < data?.data?.stockQuantity) {
        setQuantity(quantity + 1);
      } else {
        toast.error("Quantity exceeds available stock");
      }
    } else if (type === "decrement" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (isLoading || isFetching) {
    return <ProductDetailsSkeleton />;
  }

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

                <h5 className="mb-8 text-2xl font-semibold text-gray-900">
                  ${data?.data?.price}
                </h5>
                <h5 className="mb-2 font-semibold text-gray-900 ">
                  Available Quantity:{" "}
                  <span className=" text-primary">
                    {data?.data?.stockQuantity}
                  </span>
                </h5>

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
                  <Button
                    onClick={handleAddToCart}
                    className="flex gap-2.5 text-white"
                    disabled={
                      quantity + currentCartQuantity > data?.data?.stockQuantity
                    } // Disable if quantity exceeds stock
                  >
                    <BiCartAdd className="w-7 h-7" />
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
