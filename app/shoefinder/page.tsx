import Image from "next/legacy/image";
import React from "react";
import shoeFinderImg from "../../public/projects/shoefinder.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

//why you enjoy doing it
//why you chose that project
//what you learnt in that project
//any obstacles you had to overcome (programming wise)

export default function ShoefinderPage() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={shoeFinderImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">ShoeFinder UI</h2>
          <h3>React JS / CSS / HTML</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This app was built using React JS and is hosted on Vercel. Users are
            able to search for shoes based on filter on the left side which
            include price, color and category to retrieve a list of shoes. In
            upcoming update, you will be able to view specific shoe information.
            User authentication will also be added so you can signup and signin
            to your account with an email address in order to save your favorite
            shoes.
          </p>
          <Link href={"https://ecom-shoes-adv-filtering.vercel.app/"}>
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </Link>
          <Link href={"https://github.com/faabaf01/adv-filtering"}>
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                HTML
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <button className="cursor-pointer mt-10 p-16 py-3">Go Home</button>
        </Link>
      </div>
    </div>
  );
}
