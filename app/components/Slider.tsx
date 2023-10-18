"use client";
import Image from "next/legacy/image";
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RiStopMiniFill } from "react-icons/ri";
import ShopeeStart from "../../public/heuristic/slides-shopee/ShopeeStart.jpg";
import Shopee1 from "../../public/heuristic/slides-shopee/Shopee1.jpg";
import Shopee2 from "../../public/heuristic/slides-shopee/Shopee2.jpg";
import Shopee3 from "../../public/heuristic/slides-shopee/Shopee3.jpg";
import Shopee4 from "../../public/heuristic/slides-shopee/Shopee4.jpg";
import Shopee5 from "../../public/heuristic/slides-shopee/Shopee5.jpg";
import Shopee6 from "../../public/heuristic/slides-shopee/Shopee6.jpg";
import Shopee7 from "../../public/heuristic/slides-shopee/Shopee7.jpg";
import Shopee8 from "../../public/heuristic/slides-shopee/Shopee8.jpg";
import Shopee9 from "../../public/heuristic/slides-shopee/Shopee9.jpg";
import Shopee10 from "../../public/heuristic/slides-shopee/Shopee10.jpg";
import ShopeeEnd from "../../public/heuristic/slides-shopee/ShopeeEnd.jpg";

const Slider = () => {
  const slides = [
    {
      url: ShopeeStart.src,
    },
    {
      url: Shopee1.src,
    },
    {
      url: Shopee2.src,
    },
    {
      url: Shopee3.src,
    },
    {
      url: Shopee4.src,
    },
    {
      url: Shopee5.src,
    },
    {
      url: Shopee6.src,
    },
    {
      url: Shopee7.src,
    },
    {
      url: Shopee8.src,
    },
    {
      url: Shopee9.src,
    },
    {
      url: Shopee10.src,
    },
    {
      url: ShopeeEnd.src,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  //index = 0,1,2,3,4 slideslength is 5
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: React.SetStateAction<number>) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1000px] h-[600px] m-auto pb-10 px-4 group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-300"
      >
        {/* Left Arrow */}
        <div className="absolute top-[80%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="absolute top-[80%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
      </div>

      <div className="flex top-4 py-2 justify-center">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-xl cursor-pointer"
          >
            <RiStopMiniFill />
          </div>
        ))}
      </div>

      {/* <div
        style={{ backgroundImage: `url(${ShopeeFront.src})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div> */}
    </div>
  );
};

export default Slider;
