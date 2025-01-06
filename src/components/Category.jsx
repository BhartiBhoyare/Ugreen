import React from "react";
import img1 from "../assets/mobile.png";
import img2 from "../assets/hub.png";
import img3 from "../assets/charger.png";
import img4 from "../assets/power-bank.png";
import img5 from "../assets/usb.png";
import img6 from "../assets/quality.png";

const Category = () => {
  const links = [
    {
      src: img1,
      title: "Charges",
    },
    {
      src: img2,
      title: "Hubs & Docks",
    },
    {
      src: img3,
      title: "iPhone Chargers",
    },
    {
      src: img4,
      title: "Power Banks",
    },
    {
      src: img5,
      title: "Cables",
    },
    {
      src: img6,
      title: "Bundles",
    },
  ];
  return (
    <div className="flex flex-col items-center mt-28">
      <p className="font-bold text-4xl">Shop by Category</p>
      <div className="flex mt-20 font-bold space-x-32">
      {links.map(({ src, title }) => (
        <div className="flex flex-col items-center cursor-pointer duration-200 hover:scale-110">
          <img className="size-16" src={src} alt="" />
          <p className="mt-4">{title}</p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Category;
