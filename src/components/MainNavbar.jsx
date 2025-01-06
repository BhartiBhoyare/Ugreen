import React from "react";
import { PiShoppingCartSimple } from "react-icons/pi";
import { LuUser } from "react-icons/lu";
import { GoSearch } from "react-icons/go";
import { GrLocation } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";
import { FaBars } from "react-icons/fa6";

const MainNavbar = () => {
  return (
    <div
      className="bg-cover bg-center h-screen text-white relative"
      style={{
        backgroundImage:
          "url('https://www.ugreen.com/cdn/shop/files/CES_-pc_3840x.png?v=1735540700')",
      }}
    >
      <nav className="flex justify-between items-center px-8 py-3 cursor-pointer">
        <img
          className="h-8"
          src="https://cdn.shopify.com/s/files/1/0257/5246/9566/files/ugreen_logo.svg?v=1723547296"
          alt=""
        />
        <div className="flex space-x-11 text-base">
          <a href="#products" className="hover:text-gray-400 hover:underline">
            Products
          </a>
          <a href="#ces2025" className="hover:text-gray-400 hover:underline">
            CES 2025
          </a>
          <a href="#deals" className="hover:text-gray-400 hover:underline">
            Deals
          </a>
          <a href="#new-arrivals" className="hover:text-gray-400 hover:underline">
            New Arrivals
          </a>
          <a href="#support" className="hover:text-gray-400 hover:underline">
            Support
          </a>
        </div>
        <div className="flex space-x-6 text-lg">
          <GoSearch className="hover:text-gray-400 cursor-pointer size-6" />
          <LuUser className="hover:text-gray-400 cursor-pointer size-6" />
          <div className="relative">
            <PiShoppingCartSimple className="hover:text-gray-400 cursor-pointer size-6" />
            <span className="absolute left-3 bottom-3 cursor-pointer bg-black text-xs rounded-full px-1">
              0
            </span>
          </div>
        </div>
        <div className="lg:hidden">
          <FaBars />
        </div>
      </nav>
      <div className="pt-40 pl-44">
        <img
          className="h-4 cursor-pointer mb-6"
          src="https://cdn.shopify.com/s/files/1/0257/5246/9566/files/ug-ces-logo.png?v=1734573030"
          alt=""
        />
        <p className="font-bold text-2xl cursor-pointer">
          Activate the Possibility of{" "}
        </p>
        <img
          className="h-12 cursor-pointer"
          src="https://cdn.shopify.com/s/files/1/0257/5246/9566/files/ug-ces-ainas.png?v=1734573031"
          alt=""
        />
        <div className="flex items-center text-xs cursor-pointer mt-3">
          <GrLocation className="mr-1" />
          Booth #30525, South Hall 1, LVCC, Las Vegas
        </div>
        <button className="flex items-center border-2 border-white px-5 py-2 rounded-full text-xs mt-7 cursor-pointer font-bold hover:bg-green-400 hover:border-green-400">
          Learn More <IoIosArrowForward className="ml-1" />
        </button>
      </div>
      <div className="flex justify-center space-x-60 mt-44 text-gray-500">
        <div className="flex items-center space-x-2">
          <img
            className="h-5"
            src="https://cdn.shopify.com/s/files/1/0257/5246/9566/files/1_a38141e5-3ba1-4aca-a605-5e0acf6ed117.png?v=1687256464"
            alt=""
          />
          <p>Local Warehouse</p>
        </div>
        <div className="flex items-center space-x-2">
          <img
            className="h-5"
            src="https://cdn.shopify.com/s/files/1/0257/5246/9566/files/3_72beac30-5c9a-4088-ab3b-787daa53e026.png?v=1687256465"
            alt=""
          />
          <p>30-day Risk-Free Trial*</p>
        </div>
        <div className="flex items-center space-x-2">
          <img
            className="h-5"
            src="https://cdn.shopify.com/s/files/1/0257/5246/9566/files/2_ffbc175e-64b9-42cb-bede-4802cac9db94.png?v=1687256464"
            alt=""
          />
          <p>Two-year Product Warranty</p>
        </div>
      </div>
      <div
        className="lg:hidden bg-cover bg-center h-screen text-white relative"
        style={{
          backgroundImage:
            "url('https://www.ugreen.com/cdn/shop/files/CES_-mo_1536x.png?v=1735540699')",
        }}
      ></div>
    </div>
  );
};

export default MainNavbar;
