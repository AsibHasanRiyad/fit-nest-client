import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useDeleteProductMutation } from "@/redux/api/ProductsApi";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export interface DeleteServiceProps {
  id: string;
}

export function DeleteProduct({ id }: DeleteServiceProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [open, setOpen] = useState(false);
  const [deleteService, { isLoading }] = useDeleteProductMutation();

  const handleDelete = async (serviceId: string) => {
    try {
      setIsSubmitting(true);
      const res = await deleteService(serviceId);

      if (res?.data?.success) {
        toast.success(res?.data?.message);
        setOpen(false);
      }
    } catch (error) {
      console.error("Failed to delete service:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div
          className="flex items-center gap-2 cursor-pointer hover:text-primary "
          onClick={() => setOpen(true)}
        >
          <Trash2 />
          Delete
        </div>
      </DialogTrigger>
      <DialogContent className=" max-w-[380px] rounded-lg md:max-w-[625px] bg-secondary text-third">
        <DialogHeader>
          <DialogTitle>Delete Product</DialogTitle>
          <DialogDescription>
            Click confirm to delete this product.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button
            onClick={() => handleDelete(id)}
            disabled={isLoading || isSubmitting}
            type="submit"
            className="text-white "
          >
            {isSubmitting ? "Deleting..." : "Confirm"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
