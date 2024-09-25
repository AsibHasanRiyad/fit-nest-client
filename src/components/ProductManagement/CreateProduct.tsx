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
import { useCreateProductMutation } from "@/redux/api/ProductsApi";
import { Product } from "@/types";
import { BadgePlus } from "lucide-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

export function CreateProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>();
  const [CreateProduct, { isLoading }] = useCreateProductMutation();
  const [open, setOpen] = useState(false);

  const onSubmit: SubmitHandler<Product> = async (data) => {
    // console.log(data);
    try {
      const res = await CreateProduct(data).unwrap();
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
        <Button className="flex items-center gap-2 text-white bg-primary ">
          {" "}
          <BadgePlus /> Create New Product
        </Button>
      </DialogTrigger>
      <DialogContent className=" max-w-[380px] rounded-lg md:max-w-[625px] bg-secondary   border border-white border-opacity-30">
        <DialogHeader>
          <DialogTitle className="text-2xl font-medium text-primary">
            Create New Product
          </DialogTitle>
          <DialogDescription className=" text-neutral-400">
            {/* Update comprehensive service offering for CleanCarCo. */}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid items-center w-full gap-4 py-4">
            <div className="flex flex-col space-y-4">
              <Label className="text-white" htmlFor="name">
                Product Name :
              </Label>
              <Input
                {...register("name", {
                  required: "Product name is required",
                })}
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
            <div className="flex flex-col space-y-4">
              <Label className="text-white" htmlFor="image">
                Image
              </Label>
              <Input
                {...register("image", {
                  required: "Image is required",
                })}
                type="text"
                id="image"
                placeholder="Image Url"
                className={`${errors.image ? "border-red-500" : ""}`}
              />
              {errors.image && (
                <span className="text-sm text-red-500">
                  {errors.image.message}
                </span>
              )}
            </div>
          </div>
          <DialogFooter className="flex justify-end w-full">
            <Button type="submit" className="text-gray-100 bg-primary ">
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <p>Creating</p>
                  <p
                    className="inline-block h-4 w-4 animate-spin rounded-full border-4 text-gray-100 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] "
                    role="status"
                  ></p>
                </span>
              ) : (
                "Create"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
