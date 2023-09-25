import React from "react";
import Image from "next/legacy/image";
import ShopeeFront from "../../public/heuristic/ShopeeFront.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Slider from "../components/Slider";
import Link from "next/link";

const HeuristicPage = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10"></div>

        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Mini Case Study</h2>
          <h3>UX Design</h3>
        </div>
      </div>

      <div className="max-w-[1040px] mx-auto p-2 grid md:grid-cols-3 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Heuristic Evaluation</h2>
          <p className="mb-[50px] leading-loose">
            This is a Mini Case Study of an app that I commonly use. I chose the
            app <strong>Shopee</strong> - the popular e-commerce platform in
            South East Asia. The platform provides customers with an easy,
            secure and fast online shopping experience through strong payment
            and fulfillment support. Let&apos;s go through Jakob Nielsen&apos;s
            10 general principles for interaction design.
          </p>
          <Slider />
        </div>

        {/* <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Figma
              </p>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-1"></div>
          </div>
        </div> */}
      </div>
      <Link href="/">
        <button className="cursor-pointer pl-6 pr-8 py-3">Go back</button>
      </Link>
    </div>
  );
};

export default HeuristicPage;
