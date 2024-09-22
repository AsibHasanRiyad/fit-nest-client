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

export function CartSidebar() {
  const cardData = useAppSelector(selectCart);

  const check = () => {
    console.log(cardData, "cart data");
  };
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="relative">
          <Button className="p-0 m-0 bg-transparent hover:bg-transparent text-primary">
            <ShoppingCart />
          </Button>
          <span className="absolute  -top-1 -right-4 bg-primary w-5 h-5 flex justify-center items-center text-third text-[10px] rounded-full ">
            4
          </span>
        </div>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            <Button onClick={() => check()}>Hello</Button>
          </SheetDescription>
        </SheetHeader>

        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
