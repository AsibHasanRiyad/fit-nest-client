import { decreaseQuantity, increaseQuantity } from "@/redux/features/CartSlice";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
export type TCart = {
  id: string;
  name: string;
  price: number;
  image?: string;
  quantity: number;
};

const CartContent = ({ cartData }: { cartData: TCart }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseQuantity(cartData.id));
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity(cartData.id));
  };

  console.log(cartData);
  return (
    <div className="flex flex-col w-full px-6 space-y-4 overflow-y-scroll dark:bg-gray-900 dark:text-gray-100">
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
                    {cartData?.price}
                  </p>
                  {/* quantity */}
                  <div className="flex items-center border-gray-400 w-fit">
                    <button onClick={() => handleDecrease()}>
                      <Minus className="w-4" />
                    </button>
                    <input
                      type="text"
                      className="w-6 font-semibold text-center text-gray-900 outline-none"
                      value={cartData?.quantity}
                      readOnly
                    />
                    <button onClick={() => handleIncrease()}>
                      <Plus className="w-4" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex text-sm divide-x">
                <button
                  type="button"
                  className="flex items-center px-2 py-1 pl-0 space-x-1"
                >
                  <Trash2 />
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CartContent;
