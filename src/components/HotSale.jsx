import React from 'react'
import star from '../assets/star.png'

const HotSale = () => {
  const items = [
    {
      url: "https://www.ugreen.com/cdn/shop/files/X688_45513_pc_400x.png?v=1725504461",
      title: "UGREEN Uno Charger 100W",
      prize: "$47.99",
      cutPrize: "$59.99",
      src: star,
      rating: "(73)"
    
    },
    {
      url: "https://www.ugreen.com/cdn/shop/files/nexode-pro-65w-3-port-gan-ultra-slim-fast-charger-861187_400x.png?v=1719426292",
      title: "UGREEN Nexode Pro 65W 3-Port GaN Ultra-Slim iphone Charger",
      prize: "$47.59",
      cutPrize: "$55.99",
      src: star,
      rating: "(24)"
    },
    {
      url: "https://www.ugreen.com/cdn/shop/files/ugreen-nexode-power-bank-20000mah-130w-with-smart-digital-display-428579_400x.png?v=1722989165",
      title: "UGREEN Nexode Power Bank 20000mAh 130W with Smart Digital Display",
      prize: "$64.99",
      cutPrize: "$99.99",
      src: star,
      rating: "(29)"
    },
    {
      url: "https://www.ugreen.com/cdn/shop/files/ugreen-nexode-power-bank-25000mah-200w-672523_400x.png?v=1721663449",
      title: "UGREEN Nexode Power Bank 25000mAh 200W with Smart Digital Display",
      prize: "$89.99",
      cutPrize: "$129.99",
      src: star,
      rating: "(8)"
    },
    {
      url: "https://www.ugreen.com/cdn/shop/products/ugreen-nexode-300w-usb-c-gan-charger-5-ports-desktop-charger-992657_400x.png?v=1692791058",
      title: "UGREEN Nexode 300W USB C GaN Charger-5 Ports Desktop Charger",
      prize: "$135.99",
      cutPrize: "$269.99",
      src: star,
      rating: "(12)"
    },
    {
      url: "https://www.ugreen.com/cdn/shop/files/ugreen-nasync-dxp4800-plus-715786_400x.png?v=1731670090",
      title: "UGREEN NASync DXP4800 Plus",
      prize: "$699.99",
      src: star,
      rating: "(45)"
    },
    {
      url: "https://www.ugreen.com/cdn/shop/files/ugreen-nasync-dxp2800-830297_400x.webp?v=1724212777",
      title: "UGREEN NASync DXP2800",
      prize: "$349.99",
      src: star,
      rating: "(31)"
    },
    {
      url: "https://www.ugreen.com/cdn/shop/files/ugreen-nasync-dxp4800-704804_400x.webp?v=1724212778",
      title: "UGREEN NASync DXP4800",
      prize: "$549.99",
      src: star,
      rating: "(18)"
    },
  ];
  return (
    <div className='mt-20'>
      <div className='font-bold text-2xl flex justify-center'>Hot Sale</div>
      <div className='grid grid-cols-4 gap-3 place-self-center mt-20'>
        {items.map(({url, title, prize, cutPrize, src, rating}) => (
          <div className='bg-gray-50 py-6 px-6 rounded-xl'>
            <img className='size-64 cursor-pointer duration-200 hover:scale-110' src={url} alt="" />
            <div className='h-12 overflow-hidden text-ellipsis line-clamp-2 mt-2 text-gray-500 cursor-pointer'>{title}</div>
            <div className='flex items-center mt-4'>
              <p className='font-bold mr-4'>{prize}</p>
              <p className='text-gray-400 text-xs font-bold line-through mr-7'>{cutPrize}</p>
              <div className='flex ml-4'>
              <img className='size-[0.8rem] mx-[0.1rem]' src={src} alt="" />
              <img className='size-[0.8rem] mx-[0.1rem]' src={src} alt="" />
              <img className='size-[0.8rem] mx-[0.1rem]' src={src} alt="" />
              <img className='size-[0.8rem] mx-[0.1rem]' src={src} alt="" />
              <img className='size-[0.8rem] mx-[0.1rem]' src={src} alt="" />
              </div>
              <p className='text-gray-500 ml-1'>{rating}</p>
            </div>
            <button className='bg-black text-white rounded-full text-sm py-1 px-24 mt-4 hover:bg-green-400'>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HotSale
