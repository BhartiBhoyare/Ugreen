import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Simplify = () => {
  return (
    <div className="bg-gray-100 mt-24 pt-28">
      <div className=" flex justify-center font-bold text-4xl">
        Simplify Life With UGREEN
      </div>
      <div className="grid grid-rows-2 gap-5 mt-14">
        {/* Top row - Single column spanning full width */}
        <div className="bg-white flex">
          <img
            className="w-[50rem] cursor-pointer duration-200 hover:scale-105"
            src="https://www.ugreen.com/cdn/shop/files/Home_pc_3840x.png?v=1692241376"
            alt=""
          />
          <div className="px-11 pt-12 cursor-pointer">
            <p className="font-bold text-2xl">
              Transform Your Home Into a Hub{" "}
            </p>
            <p className="text-gray-500 text-lg mt-5">
              Discover tech that creates connections and enhances creativity.
            </p>
            <button className="flex items-center mt-48 text-green-400">
              Learn More <IoIosArrowForward className="mt-1" />
            </button>
          </div>
        </div>

        {/* Bottom row - 3 equal columns */}
        <div className="grid grid-cols-3 gap-5">
          <div className="bg-white rounded-lg cursor-pointer">
            <img
              className="h-[17.3rem] w-full rounded-t-lg duration-200 hover:scale-105"
              src="https://www.ugreen.com/cdn/shop/files/pic2_3840x.png?v=1730769074"
              alt=""
            />
            <div className="px-6 pt-6">
              <p className="font-bold text-2xl">Essentials for Travellers</p>
              <button className="flex items-center mt-6 text-green-400"> Learn More <IoIosArrowForward className="mt-1" /></button>
            </div>
          </div>
          <div className="bg-white rounded-lg cursor-pointer">
            <img
              className="rounded-t-lg duration-200 hover:scale-105"
              src="https://www.ugreen.com/cdn/shop/files/Business_pc_3840x.png?v=1692241376"
              alt=""
            />
            <div className="px-6 pt-6">
              <p className="font-bold text-2xl">Productivity Boosters for Professionals</p>
              <button className="flex items-center mt-6 text-green-400"> Learn More <IoIosArrowForward className="mt-1" /></button>
            </div>
          </div>
          <div className="bg-white rounded-lg cursor-pointer">
            <img
              className="rounded-t-lg duration-200 hover:scale-105"
              src="https://www.ugreen.com/cdn/shop/files/Game_pc_3840x.png?v=1692241376"
              alt=""
            />
            <div className="px-6 pt-6">
              <p className="font-bold text-2xl">Gear for Gamers</p>
              <button className="flex items-center mt-6 text-green-400"> Learn More <IoIosArrowForward className="mt-1" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simplify;
