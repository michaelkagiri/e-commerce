import React from "react";
import { Title } from "../components/Title";
import { CartTotal } from "../components/CartTotal";
import { assets } from "../assets/assets";

const PlaceOrder = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t ">
        {/* ---------left side----------- */}
        <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
          <div className="text-xl sm:text-2xl my-3">
            <Title text1={"DELIVERY"} text2={"INFORMATION"} />

            <div className="flex gap-3 mb-4">
              <input
                className="border border-gray-300 rounded py-1.5 px-3.5 w-full text-sm"
                type="text"
                placeholder="First name"
              />
              <input
                className="border border-gray-300 rounded py-1.5 px-3.5 w-full text-sm"
                type="text"
                placeholder="Last name"
              />
            </div>

            <input
              className="border border-gray-300 mb-4 rounded py-1.5 px-3.5 w-full text-sm"
              type="email"
              placeholder="email"
            />
            <input
              className="border border-gray-300 mb-4 rounded py-1.5 px-3.5 w-full text-sm"
              type="text"
              placeholder="street"
            />

            <div className="flex gap-3 mb-4">
              <input
                className="border border-gray-300 rounded py-1.5 px-3.5 w-full text-sm"
                type="text"
                placeholder="City"
              />
              <input
                className="border border-gray-300 rounded py-1.5 px-3.5 w-full text-sm"
                type="text"
                placeholder="State"
              />
            </div>

            <div className="flex gap-3 mb-4">
              <input
                className="border border-gray-300 rounded py-1.5 px-3.5 w-full text-sm"
                type="number"
                placeholder="zip code"
              />
              <input
                className="border border-gray-300 rounded py-1.5 px-3.5 w-full text-sm"
                type="text"
                placeholder="Country"
              />
            </div>

            <input
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full text-sm"
              type="number"
              placeholder="phone"
            />
          </div>
        </div>

        {/* --------right side--------- */}

        <div className="mt-8">
          <div className="mt-8 min-w-80">
            <CartTotal />
          </div>

          <div className="mt-12">
            <Title text1={"PAYMENT"} text2={"METHOD"} />

            <div className="flex gap-3 flex-col lg:flex-row">
              {/* stripe payments */}
              <div className="flex items-center gap-3 border py-2 px-3 cursor-pointer">
                <p className={`min-w-3.5 h-3.5 border rounded-full`}></p>

                <img className="h-5 mx-4" src={assets.stripe_logo} alt="" />
              </div>

              {/* razor payments */}
              <div className="flex items-center gap-3 border py-2 px-3 cursor-pointer">
                <p className={`min-w-3.5 h-3.5 border rounded-full`}></p>

                <img className="h-5 mx-4" src={assets.razorpay_logo} alt="" />
              </div>

              {/* cash on delivery */}
              <div className="flex items-center gap-3 border py-2 px-3 cursor-pointer">
                <p className={`min-w-3.5 h-3.5 border rounded-full`}></p>
                <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { PlaceOrder };
