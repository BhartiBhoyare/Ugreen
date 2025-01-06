import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-black px-6 py-3 cursor-grab">
      <div className="lg:flex items-center space-x-1 cursor-pointer hidden">
        <img className="h-6 pt-1" src="https://cdn.shopify.com/s/files/1/0257/5246/9566/files/ugreen_logo.svg?v=1723547296" alt="" />
        <span className="text-white text-sm font-extralight">|</span>
        <span className="text-white text-xs font-bold pt-1 pl-1">NAS</span>
      </div>

      <div className="text-white text-sm cursor-pointer">
        Activate the Possibility of Ai NAS | CES 2025
      </div>

      <div className="lg:flex hidden items-center space-x-2 cursor-pointer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
          alt="US Flag"
          className="w-6 h-4"
        />
        <span className="text-white text-sm">United States / English</span>
      </div>
    </nav>
  );
};

export default Navbar;
