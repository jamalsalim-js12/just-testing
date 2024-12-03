import { Heart } from "lucide-react";

import React from "react";

const AuthLeft = () => {
  return (
    <div className="h-full flex lg:w-[95%] xl:w-[90%] flex-col justify-center gap-y-24 bg-black rounded-3xl p-12">
      <Heart className="text-blue-300 h-8 w-8" strokeWidth={3} />
      <div className=" flex flex-col justify-between h-full">
        <div className="flex flex-col gap-y-8">
          <h1 className="text-white lg:text-4xl xl:text-5xl lg:w-[15ch] font-semibold">
            Streamline Your Hotel Operations with Ease
          </h1>
          <p className="text-neutral-400 lg:w-[40ch]">
            Expand your reach and connect with a broader audience of potential
            guests
          </p>
        </div>
        <div className="w-full bg-[#9A7E6F]/70 flex flex-col gap-y-3 rounded-xl p-5 ">
          <p className="text-white/70 text-sm">
            {
              "This platform has completely transformed the way we managed our property. With it's intuitive tools and seamless features, we've been able to reach more guests and streamline our operations like never before. Our bookings have skyrocketed, and our team loves how easy it is to use"
            }
          </p>

          <div className="flex gap-x-2 items-center">
            <div className="w-10 h-10 rounded-full bg-white"></div>
            <div>
              <p className="text-sm font-medium text-white">Ariana Grande</p>
              <p className="text-white/60 text-xs">Hotel Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLeft;
