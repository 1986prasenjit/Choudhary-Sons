import React from "react";
import { assets } from "../../assets/assets/frontend_assets/assests";

const Hero = () => {
  return (
    <>
      <div className="pt-5">
        <div className="w-full  flex flex-col sm:flex-row border border-gray-600">
          <div className="w-1/2 flex items-center justify-center">
            <div className="flex gap-10 flex-col">
              <div className="flex gap-1 items-center">
                <h3 className="text-base font-semibold tracking-wider uppercase">
                  our Best sellers
                </h3>
                <span className="bg-gray-700 h-0.5 w-10 border"></span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl capitalize tracking-widest font-bold">
                Latest Arrivals
              </h2>
              <div className="flex gap-1 items-center">
                <span className="bg-gray-700 h-0.5 w-10 border"></span>
                <h3 className="text-base font-semibold tracking-wider uppercase">
                  shop now
                </h3>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <img
              src={assets.heroImg}
              alt="Website Hero section image"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
