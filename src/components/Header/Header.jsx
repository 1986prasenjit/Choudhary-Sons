import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../../assets/assets/frontend_assets/assests";

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  console.log(isMenuVisible);
  return (
    <>
      <div className="pt-2">
        <div className="flex items-center justify-between px-4 w-full">
          <Link to="/">
            <div className="">
              <h1 className="uppercase text-base sm:text-xl lg:text-2xl text-yellow-600 font-bold">
                choudhary&sons
              </h1>
            </div>
          </Link>
          <ul className="hidden sm:flex gap-5 items-center">
            <NavLink to="/">
              <p className="sm:text-xs lg:text-[15px] text-gray-700 uppercase font-semibold">
                Home
              </p>
              <hr className="hidden w-full border-none h-[2px] bg-yellow-500" />
            </NavLink>
            <NavLink to="/collections">
              <p className="sm:text-xs lg:text-[15px] text-gray-700 uppercase font-semibold">
                Collections
              </p>
              <hr className="hidden w-full border-none h-[2px] bg-yellow-500" />
            </NavLink>
            <NavLink to="/about">
              <p className="sm:text-xs lg:text-[15px] text-gray-700 uppercase font-semibold">
                About
              </p>
              <hr className="hidden w-full border-none h-[2px] bg-yellow-500" />
            </NavLink>
            <NavLink to="/contact">
              <p className="sm:text-xs lg:text-[15px] text-gray-700 uppercase font-semibold">
                Contact
              </p>
              <hr className="hidden w-full border-none h-[2px] bg-yellow-500" />
            </NavLink>
          </ul>
          <div className="flex items-center gap-4">
            <img
              src={assets.search_icon}
              className="w-3 sm:w-4 cursor-pointer"
              alt="Menu bar search icon"
            />

            <div className="group relative">
              <Link to="/login">
                <img
                  className="w-3 sm:w-4 cursor-pointer"
                  src={assets.profile_icon}
                  alt="Menu bar profile_icon"
                />
              </Link>
              <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                  <p className="cursor-pointer hover:text-black">Logout</p>
                  <p className="cursor-pointer hover:text-black">Profile</p>
                  <p className="cursor-pointer hover:text-black">Orders</p>
                </div>
              </div>
            </div>

            <Link to="/cart" className="relative">
              <img
                src={assets.cart_icon}
                className="w-3 sm:w-4 cursor-pointer"
                alt="Menu bar cart icon"
              />
              <p className="absolute -bottom-2 -right-3 bg-yellow-500 text-white text-xs font-semibold px-1 rounded"></p>
            </Link>
            <div className="block sm:hidden">
              <img
                onClick={() => setIsMenuVisible(true)}
                src={assets.menu_icon}
                className="w-3 cursor-pointer"
                alt="Mobile Menu Icon"
              />
              <div
                className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
                  isMenuVisible ? "w-full" : "w-0"
                }`}
              >
                <div className="flex flex-col text-gray-600">
                  <div
                    onClick={() => setIsMenuVisible(false)}
                    className="flex items-center gap-4 p-3"
                  >
                    <img
                      src={assets.dropdown_icon}
                      alt="Mobile menu closing button"
                      className="cursor-pointer h-4 rotate-180"
                    />
                    <p>BACK</p>
                  </div>
                  <NavLink
                    onClick={() => setIsMenuVisible(false)}
                    className="py-2 pl-6 border border-gray-400 text-md font-bold uppercase"
                    to="/"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    onClick={() => setIsMenuVisible(false)}
                    className="py-2 pl-6 border border-gray-400 text-md font-bold uppercase"
                    to="/about"
                  >
                    About
                  </NavLink>
                  <NavLink
                    onClick={() => setIsMenuVisible(false)}
                    className="py-2 pl-6 border border-gray-400 text-md font-bold uppercase"
                    to="/collections"
                  >
                    Collection
                  </NavLink>
                  <NavLink
                    onClick={() => setIsMenuVisible(false)}
                    className="py-2 pl-6 border border-gray-400 text-md font-bold uppercase"
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
