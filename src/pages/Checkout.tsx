import { clearCart, selectCart } from "@/redux/features/CartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import {
  Banknote,
  Locate,
  Mail,
  Phone,
  Receipt,
  ShoppingBasket,
  UserRound,
} from "lucide-react";
import React, { useState } from "react";
import { useCreateOrderMutation } from "@/redux/api/OrderApi";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const cardData = useAppSelector(selectCart);
  const [createOrder, { isLoading }] = useCreateOrderMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const products = cardData.items.map((item) => ({
    productId: item.id,
    quantity: item.quantity,
  }));
  const [selectedMethod, setSelectedMethod] = useState("radio_1");
  const totalAmount = cardData?.items?.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedMethod(event.target.value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const orderData = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      address: data.address,

      products,
      totalPrice: totalAmount.toFixed(2),
    };

    try {
      const res = await createOrder(orderData).unwrap();
      console.log(res);
      if (res.success) {
        toast.success(res.message);
        navigate("/");
        dispatch(clearCart());
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="flex items-center justify-center w-full min-h-[90vh]">
      <div className="grid gap-20 lg:grid-cols-2">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Order Summary</p>
          <p className="text-gray-400">
            Check your items. And select a suitable shipping method.
          </p>
          <div className="px-2 py-4 mt-8 space-y-3 bg-white border rounded-lg sm:px-6">
            {cardData.items.map((cart) => (
              <div
                key={cart.id}
                className="flex flex-col items-center gap-8 bg-white rounded-lg sm:flex-row"
              >
                <img
                  className="object-cover object-center w-16 h-12 m-2 border rounded-md"
                  src={cart.image}
                  alt=""
                />
                <div className="flex flex-col w-full px-4 py-4">
                  <span className="text-sm font-semibold">{cart.name}</span>
                  <p className="text-base font-bold text-primary">
                    ${cart.price}
                  </p>
                  <p className="flex items-center gap-1 text-base font-bold text-primary">
                    <ShoppingBasket className="w-4 " /> {cart.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <p className="mt-8 text-lg font-medium">Shipping Methods</p>
            <form className="grid gap-6 mt-5">
              {[
                {
                  id: "radio_1",
                  label: "Cash on Delivery",
                  imgSrc: <Receipt />,
                },
                {
                  id: "radio_2",
                  label: "Stripe",
                  imgSrc: <Banknote />,
                },
              ].map((method) => (
                <div className="relative" key={method.id}>
                  <input
                    className="hidden peer"
                    id={method.id}
                    type="radio"
                    name="shippingMethod"
                    value={method.id}
                    checked={selectedMethod === method.id}
                    onChange={handleChange}
                  />
                  <span className="box-content absolute block w-3 h-3 -translate-y-1/2 bg-white border-8 border-gray-300 rounded-full peer-checked:border-gray-700 right-4 top-1/2"></span>
                  <label
                    htmlFor={method.id}
                    className={`flex p-4 border rounded-lg cursor-pointer select-none ${
                      selectedMethod === method.id
                        ? "border-2 border-gray-700 bg-gray-50"
                        : "border-gray-300"
                    }`}
                  >
                    {method.imgSrc}
                    <div className="ml-5">
                      <span className="mt-2 font-semibold">{method.label}</span>
                    </div>
                  </label>
                </div>
              ))}
            </form>
          </div>
        </div>
        <div className="px-4 pt-8 mt-10 lg:mt-0">
          <p className="text-xl font-medium">Payment Details</p>
          <p className="text-gray-400">
            Complete your order by providing your payment details.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              {/* Name Field */}
              <label className="block mt-4 mb-2 text-sm font-medium">
                Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 text-sm border border-gray-200 rounded-md shadow-sm outline-none pl-11 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="your name"
                  {...register("name", { required: "Name is required" })}
                />
                <div className="absolute inset-y-0 left-0 inline-flex items-center px-3 pointer-events-none">
                  <UserRound className="w-5 text-gray-500" />
                </div>
              </div>
              {errors.name?.message && (
                <p className="text-sm text-red-500">
                  {errors.name.message.toString()}
                </p>
              )}

              {/* Email Field */}
              <label className="block mt-4 mb-2 text-sm font-medium">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 text-sm border border-gray-200 rounded-md shadow-sm outline-none pl-11 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="your.email@gmail.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                />
                <div className="absolute inset-y-0 left-0 inline-flex items-center px-3 pointer-events-none">
                  <Mail className="w-5 text-gray-500" />
                </div>
              </div>
              {errors.email?.message && (
                <p className="text-sm text-red-500">
                  {errors.email.message.toString()}
                </p>
              )}

              {/* Phone Field */}
              <label className="block mt-4 mb-2 text-sm font-medium">
                Phone
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="phone"
                  className="w-full px-4 py-2 text-sm border border-gray-200 rounded-md shadow-sm outline-none pl-11 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="+88000000000"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Enter a valid phone number",
                    },
                  })}
                />
                <div className="absolute inset-y-0 left-0 inline-flex items-center px-3 pointer-events-none">
                  <Phone className="w-5 text-gray-500" />
                </div>
              </div>
              {errors.phone?.message && (
                <p className="text-sm text-red-500">
                  {errors.phone.message.toString()}
                </p>
              )}

              {/* Address Field */}
              <label className="block mt-4 mb-2 text-sm font-medium">
                Address
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="address"
                  className="w-full px-4 py-2 text-sm border border-gray-200 rounded-md shadow-sm outline-none pl-11 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Dhaka"
                  {...register("address", { required: "Address is required" })}
                />
                <div className="absolute inset-y-0 left-0 inline-flex items-center px-3 pointer-events-none">
                  <Locate className="w-5 text-gray-500" />
                </div>
              </div>
              {errors.address?.message && (
                <p className="text-sm text-red-500">
                  {errors.address.message.toString()}
                </p>
              )}

              {/* Total Section */}
              <div className="flex items-center justify-between mt-6">
                <p className="font-medium text-gray-900">Total</p>
                <p className="text-lg font-semibold text-gray-900">
                  ${totalAmount.toFixed(3)}
                </p>
              </div>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-2 mt-4 mb-8 font-medium text-white rounded-md bg-primary"
            >
              Place Order{" "}
              {isLoading && (
                <p
                  className="inline-block ml-4 h-4 w-4 animate-spin rounded-full border-4 text-gray-100 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status"
                ></p>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
