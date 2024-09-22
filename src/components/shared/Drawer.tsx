import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { selectCart } from "@/redux/features/CartSlice";
import { useAppSelector } from "@/redux/hook";
import { ShoppingCart } from "lucide-react";
import CartContent from "../CartContent";

export function CartSidebar() {
  const cardData = useAppSelector(selectCart);
  const totalAmount = cardData?.items?.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalAdded = cardData?.items?.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="relative">
          <Button className="p-0 m-0 bg-transparent hover:bg-transparent text-primary">
            <ShoppingCart />
          </Button>
          <span className="absolute  -top-1 -right-4 bg-primary w-5 h-5 flex justify-center items-center text-third text-[10px] rounded-full ">
            {totalAdded}
          </span>
        </div>
      </SheetTrigger>

      <SheetContent className=" min-w-[400px] p-0 py-10 px-4 overflow-scroll">
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
          <SheetDescription></SheetDescription>
          {cardData?.items?.length > 0 ? (
            <div>
              {cardData.items.map((cart) => (
                <CartContent key={cart.id} cartData={cart} />
              ))}
              <hr />
              <div className="py-4 space-y-4 ">
                <div className="space-y-1 text-right">
                  <p>
                    Total amount:
                    <span className="font-semibold">
                      $ {totalAmount.toFixed(3)}
                    </span>
                  </p>
                </div>
                <div className="flex justify-end space-x-4">
                  <Button className="p-8 px-2 py-0 my-0 text-xs text-white h-7">
                    Checkout
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <p className=" flex h-[70vh] justify-center text-xl text-primary items-center">
              No Data Available
            </p>
          )}
        </SheetHeader>

        <SheetFooter>
          <SheetClose asChild>
            {/* <Button type="submit">Save changes</Button> */}
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
