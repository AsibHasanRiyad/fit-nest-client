/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUpdateProductMutation } from "@/redux/api/ProductsApi";
import { Product } from "@/types";
import { Edit } from "lucide-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

export function UpdateProduct({ product }: { product: Product }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>();
  const [updateProduct, { isLoading }] = useUpdateProductMutation();
  const [open, setOpen] = useState(false);

  const onSubmit: SubmitHandler<Product> = async (data) => {
    try {
      const _id = product._id;
      const payload = { ...data, _id };
      // console.log(payload);
      const res = await updateProduct(payload).unwrap();
      if (res.success) {
        toast.success(res.message);
        setOpen(false);
      }
    } catch (err) {
      toast.error((err as any)?.data?.message || "Something went wrong");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="flex items-center gap-2 ">
          {" "}
          <Edit className="cursor-pointer " />
          Edit
        </div>
      </DialogTrigger>
      <DialogContent className=" max-w-[380px] rounded-lg md:max-w-[625px] bg-secondary   border border-white border-opacity-30">
        <DialogHeader>
          <DialogTitle className="text-2xl font-medium text-primary">
            Update Service
          </DialogTitle>
          <DialogDescription className=" text-neutral-400">
            Update comprehensive service offering for CleanCarCo.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid items-center w-full gap-4 py-4">
            <div className="flex flex-col space-y-4">
              <Label className="text-white" htmlFor="name">
                Service Name :
              </Label>
              <Input
                {...register("name", {
                  required: "Product name is required",
                })}
                defaultValue={product.name}
                type="text"
                id="name"
                placeholder="Name of your product"
                className={`${errors.name ? "border-red-500" : ""}`}
              />
              {errors.name && (
                <span className="text-sm text-red-500">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div className="flex flex-col space-y-4">
              <Label className="text-white" htmlFor="description">
                Description :
              </Label>
              <Input
                type="text"
                {...register("description", {
                  required: "Description is required",
                })}
                defaultValue={product.description}
                id="description"
                placeholder="Description"
                className={`${errors.description ? "border-red-500" : ""}`}
              />
              {errors.description && (
                <span className="text-sm text-red-500">
                  {errors.description.message}
                </span>
              )}
            </div>
            <div className="flex flex-col space-y-4">
              <Label className="text-white" htmlFor="description">
                Description :
              </Label>
              <Input
                type="text"
                {...register("description", {
                  required: "Description is required",
                })}
                defaultValue={product.description}
                id="description"
                placeholder="Description"
                className={`${errors.description ? "border-red-500" : ""}`}
              />
              {errors.description && (
                <span className="text-sm text-red-500">
                  {errors.description.message}
                </span>
              )}
            </div>
            <div className="flex flex-col space-y-4">
              <Label className="text-white" htmlFor="description">
                Category :
              </Label>
              <Input
                type="text"
                {...register("category", {
                  required: "Category is required",
                })}
                defaultValue={product.category}
                id="category"
                placeholder="Category"
                className={`${errors.category ? "border-red-500" : ""}`}
              />
              {errors.category && (
                <span className="text-sm text-red-500">
                  {errors.category.message}
                </span>
              )}
            </div>
            <div className="flex flex-col space-y-4">
              <Label className="text-white" htmlFor="description">
                Stock Quantity :
              </Label>
              <Input
                type="number"
                {...register("stockQuantity", {
                  required: "Stock Quantity is required",
                  valueAsNumber: true,
                })}
                defaultValue={product.stockQuantity}
                id="stockQuantity"
                placeholder="Stock Quantity"
                className={`${errors.stockQuantity ? "border-red-500" : ""}`}
              />
              {errors.stockQuantity && (
                <span className="text-sm text-red-500">
                  {errors.stockQuantity.message}
                </span>
              )}
            </div>
            <div className="flex flex-col space-y-4">
              <Label className="text-white" htmlFor="price">
                Price
              </Label>
              <Input
                defaultValue={product.price}
                {...register("price", {
                  required: "Price is required",
                  valueAsNumber: true,
                })}
                type="number"
                id="price"
                placeholder="Price"
                className={`${errors.price ? "border-red-500" : ""}`}
              />
              {errors.price && (
                <span className="text-sm text-red-500">
                  {errors.price.message}
                </span>
              )}
            </div>
          </div>
          <DialogFooter className="flex justify-end w-full">
            <Button type="submit" className="text-gray-100 bg-primary ">
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <p>Updating</p>
                  <p
                    className="inline-block h-4 w-4 animate-spin rounded-full border-4 text-gray-100 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] "
                    role="status"
                  ></p>
                </span>
              ) : (
                "Update"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
