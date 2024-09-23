import { useGetSingleProductQuery } from "@/redux/api/ProductsApi";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "@/redux/features/CartSlice";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { DialogDescription } from "@radix-ui/react-dialog";

export type TCart = {
  id: string;
  name: string;
  price: number;
  image?: string;
  quantity: number;
};

const CartContent = ({ cartData }: { cartData: TCart }) => {
  const dispatch = useDispatch();

  const { data } = useGetSingleProductQuery(cartData.id);
  const availableQuantity = data?.data?.stockQuantity;

  const handleIncrease = () => {
    if (cartData.quantity < availableQuantity) {
      dispatch(increaseQuantity(cartData.id));
    } else {
      toast.error(`Cannot add more than ${availableQuantity} items in stock`);
    }
  };

  // Handle decreasing quantity
  const handleDecrease = () => {
    if (cartData.quantity > 1) {
      dispatch(decreaseQuantity(cartData.id));
    } else {
      toast.error("Quantity can't be less than 1");
    }
  };
  // delete cart data
  const handleRemove = () => {
    dispatch(removeFromCart(cartData.id));
    toast.success(`${cartData.name} has been removed from the cart`);
  };

  return (
    <div className="flex flex-col w-full px-6 space-y-4 dark:bg-gray-900 dark:text-gray-100">
      <ul className="flex flex-col divide-y dark:divide-gray-700">
        <li className="flex flex-col items-center py-6 sm:justify-between">
          <div className="flex w-full space-x-2 sm:space-x-4">
            <img
              className="flex-shrink-0 object-cover w-24 h-24 rounded outline-none dark:border-transparent dark:bg-gray-500"
              src={cartData?.image}
              alt={cartData.name}
            />
            <div className="flex justify-between w-full pb-4 ">
              <div className="flex-1 w-full pb-2 space-x-2 ">
                <div className="space-y-1">
                  <h3 className="font-semibold sm:pr-8">{cartData?.name}</h3>

                  <p className="text-sm dark:text-gray-400">
                    ${cartData?.price}
                  </p>

                  {/* Quantity */}
                  <div className="flex items-center border-gray-400 w-fit">
                    <button onClick={handleDecrease}>
                      <Minus className="w-4" />
                    </button>
                    <input
                      type="text"
                      className="w-6 font-semibold text-center text-gray-900 outline-none"
                      value={cartData?.quantity}
                      readOnly
                    />
                    <button onClick={handleIncrease}>
                      <Plus className="w-4" />
                    </button>
                  </div>

                  {/* Display available stock */}
                  <p className="text-sm text-gray-500">
                    In stock: {availableQuantity}
                  </p>
                </div>
              </div>
              <div className="flex text-sm divide-x">
                <Dialog>
                  <DialogTrigger>
                    <Trash2 />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Are you absolutely sure?</DialogTitle>
                      <DialogDescription>
                        You won't be able to reverse this action. Click delete
                        to remove this product from cart
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <Button
                        className=" text-third"
                        onClick={() => handleRemove()}
                      >
                        Delete
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CartContent;
