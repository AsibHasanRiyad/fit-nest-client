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
import { logout } from "@/redux/features/authSlice";
import { useCreateServiceMutation } from "@/redux/features/serviceApi";
import { PlusCircleIcon } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export type TService = {
  name: string;
  description: string;
  price: number;
  duration: number;
  isDeleted: boolean;
  _id?: string;
};

export function CreateProduct({ refetch }: { refetch: () => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TService>();
  const [createService, { error, isLoading }] = useCreateServiceMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if ((error as any)?.data?.message === "jwt expired") {
    dispatch(logout());
    navigate("/signin");
  }

  const onSubmit: SubmitHandler<TService> = async (data) => {
    try {
      data.isDeleted = false;
      const res = await createService(data).unwrap();
      if (res.success) {
        toast.success(res.message);
        refetch();
      }
    } catch (err) {
      toast.error((err as any)?.data?.message || "Something went wrong");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2 text-white bg-primary">
          {" "}
          <span>
            <PlusCircleIcon />
          </span>{" "}
          Create Service
        </Button>
      </DialogTrigger>
      <DialogContent className=" max-w-[350px] md:max-w-[550px]  lg:max-w-[625px] bg-secondary   border border-white border-opacity-30">
        <DialogHeader>
          <DialogTitle className="text-2xl font-medium text-primary">
            Create a Service
          </DialogTitle>
          <DialogDescription className=" text-neutral-400">
            Create a comprehensive service offering for CleanCarCo.
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
                  required: "Service name is required",
                })}
                type="text"
                id="name"
                placeholder="Name of your service"
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
              <Label className="text-white" htmlFor="duration">
                Duration (minutes)
              </Label>
              <Input
                type="number"
                {...register("duration", {
                  required: "Duration is required",
                  valueAsNumber: true,
                })}
                id="duration"
                placeholder="Duration"
                className={`${errors.duration ? "border-red-500" : ""}`}
              />
              {errors.duration && (
                <span className="text-sm text-red-500">
                  {errors.duration.message}
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
