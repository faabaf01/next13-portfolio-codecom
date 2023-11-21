import React from "react";
import Image from "next/legacy/image";
import avatar from "../../public/images/avatar.png";
import Link from "next/link";

const HeuristicPage = () => {
  return (
    <>
      <div className="w-screen h-[40vh] lg:h-[50vh] relative flex items-center justify-center">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10"></div>

        <div className="absolute max-w-[1240px] w-full text-white z-10 p-2 text-center">
          <h2 className="py-2">UX Design Portfolio</h2>
          <h3 className="text-[#81c0ff]">Design with love for simplicity 🌟</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-3 gap-8">
        <div className="col-span-4">
          <div className="container mx-auto my-8">
            <div className="flex mb-8">
              <div className="w-1/2 px-14 pt-10">
                <h2 className="text-2xl font-bold pb-4">
                  1️⃣ Heuristic Evaluation
                </h2>
                <p>
                  A mini study of a shopping app, applying Jakob Nielsen&apos;s
                  10 principles to understand app&apos;s good design.
                </p>
                <Link href="/uxdesign/heuristic">
                  <button className="cursor-pointer mt-10 p-16 py-3">
                    See Evaluation
                  </button>
                </Link>
              </div>
              <div className="w-1/2 pl-10">
                <Image
                  src={avatar}
                  alt="Portfolio 1"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="flex mb-8">
              <div className="w-1/2 pl-8 lg:pl-14">
                <Image
                  src={avatar}
                  alt="Portfolio 1"
                  className="w-full h-auto"
                />
              </div>
              <div className="w-1/2 px-14 pt-10 ">
                <h2 className="text-2xl font-bold mb-4">2️⃣ Sketches</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link href="/uxdesign/sketches">
                  <button className="cursor-pointer mt-10 p-16 py-3">
                    See Sketches
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex mb-8">
              <div className="w-1/2 px-14 pt-10 ">
                <h2 className="text-2xl font-bold pb-4">3️⃣ Wireframes</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link href="/uxdesign/wireframes">
                  <button className="cursor-pointer mt-10 p-16 py-3">
                    See Wireframes
                  </button>
                </Link>
              </div>
              <div className="w-1/2 pl-10">
                <Image src={avatar} alt="Project 3" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeuristicPage;
