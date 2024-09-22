import { selectCart } from "@/redux/features/CartSlice";
import { useAppSelector } from "@/redux/hook";
import {
  Banknote,
  Locate,
  Mail,
  Phone,
  Receipt,
  UserRound,
} from "lucide-react";
import { useState } from "react";

const Checkout = () => {
  const cardData = useAppSelector(selectCart);
  const [selectedMethod, setSelectedMethod] = useState("radio_1");

  const handleChange = (event) => {
    setSelectedMethod(event.target.value);
  };

  return (
    <div className="flex items-center justify-center w-full min-h-[86vh]">
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
                className="flex flex-col items-center gap-10 bg-white rounded-lg sm:flex-row"
              >
                <img
                  className="object-cover object-center h-24 m-2 border rounded-md w-28"
                  src={cart.image}
                  alt=""
                />
                <div className="flex flex-col w-full px-4 py-4">
                  <span className="font-semibold">{cart.name}</span>
                  <p className="text-lg font-bold">${cart.price}</p>
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
          <div>
            <label className="block mt-4 mb-2 text-sm font-medium">Name</label>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 text-sm border border-gray-200 rounded-md shadow-sm outline-none pl-11 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="your name"
              />
              <div className="absolute inset-y-0 left-0 inline-flex items-center px-3 pointer-events-none">
                <UserRound />
              </div>
            </div>
            <label className="block mt-4 mb-2 text-sm font-medium">Email</label>
            <div className="relative">
              <input
                type="text"
                id="email"
                name="email"
                className="w-full px-4 py-3 text-sm border border-gray-200 rounded-md shadow-sm outline-none pl-11 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="your.email@gmail.com"
              />
              <div className="absolute inset-y-0 left-0 inline-flex items-center px-3 pointer-events-none">
                <Mail />
              </div>
            </div>
            <label className="block mt-4 mb-2 text-sm font-medium">Phone</label>
            <div className="relative">
              <input
                type="text"
                id="phone"
                name="phone"
                className="w-full px-4 py-3 text-sm border border-gray-200 rounded-md shadow-sm outline-none pl-11 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="+88000000000"
              />
              <div className="absolute inset-y-0 left-0 inline-flex items-center px-3 pointer-events-none">
                <Phone />
              </div>
            </div>
            <label className="block mt-4 mb-2 text-sm font-medium">
              Address
            </label>
            <div className="relative">
              <input
                type="text"
                id="address"
                name="address"
                className="w-full px-4 py-3 text-sm border border-gray-200 rounded-md shadow-sm outline-none pl-11 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Dhaka"
              />
              <div className="absolute inset-y-0 left-0 inline-flex items-center px-3 pointer-events-none">
                <Locate />
              </div>
            </div>

            <div className="flex items-center justify-between mt-6">
              <p className="text-sm font-medium text-gray-900">Total</p>
              <p className="text-2xl font-semibold text-gray-900">$408.00</p>
            </div>
          </div>
          <button className="w-full px-6 py-3 mt-4 mb-8 font-medium text-white bg-gray-900 rounded-md">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
