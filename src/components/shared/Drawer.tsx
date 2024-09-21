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
import { ShoppingCart } from "lucide-react";

export function CartSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="relative">
          <Button className="bg-transparent hover:bg-transparent text-primary p-0 m-0">
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
            Make changes to your profile here. Click save when you're done.
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
