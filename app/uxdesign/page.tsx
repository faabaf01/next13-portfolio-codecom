import React from "react";
import Image from "next/legacy/image";
import img1 from "../../public/thumbnails/img1.png";
import img2 from "../../public/thumbnails/img2.png";
import img3 from "../../public/thumbnails/img3.png";
import Link from "next/link";

const Uxportfolio = () => {
  return (
    <>
      <div className="w-screen h-[40vh] lg:h-[50vh] relative flex items-center justify-center">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10"></div>

        <div className="absolute max-w-[1240px] w-full text-white z-10 p-2 text-center">
          <h2 className="py-5">UX Design Portfolio</h2>
          <h3>Design with love for simplicity 🌟</h3>
        </div>
      </div>
      <div className="text-center">
        <span>
          From initial sketches to detailed wireframes and Heuristic
          Evaluations, each project tells a unique story.
        </span>
      </div>

      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
        <div className="bg-blue-100 rounded-lg p-5 flex flex-col items-center">
          <div className="p-10">
            <Image
              src={img1}
              alt="Portfolio 1"
              className="w-full h-32 sm:h-48 object-cover"
            />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold pb-4">1️⃣ Heuristic Evaluation</h1>
            <span className="block text-gray-500 text-sm">
              A mini study of a shopping app, applying Jakob Nielsen&apos;s 10
              principles to understand app&apos;s good design.
            </span>
            <Link href="/uxdesign/heuristic">
              <button className="cursor-pointer mt-10 p-16 py-3">
                See Evaluation
              </button>
            </Link>
          </div>
        </div>
        {/* NEXT PROJECT */}
        <div className="bg-blue-100 rounded-lg p-5 flex flex-col items-center">
          <div className="p-10">
            <Image
              src={img2}
              alt="Portfolio 2"
              className="w-full h-32 sm:h-48 object-cover"
            />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold pb-4">2️⃣ Sketches</h1>
            <span className="block text-gray-500 text-sm">
              A mini study of a shopping app, applying Jakob Nielsen&apos;s 10
              principles to understand app&apos;s good design.
            </span>
            <Link href="/uxdesign/sketches">
              <button className="cursor-pointer mt-10 p-16 py-3">
                See Sketches
              </button>
            </Link>
          </div>
        </div>
        {/* NEXT PROJECT */}
        <div className="bg-blue-100 rounded-lg p-5 flex flex-col items-center">
          <div className="p-10">
            <Image
              src={img3}
              alt="Portfolio 1"
              className="w-full h-32 sm:h-48 object-cover"
            />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold pb-4">3️⃣ Wireframes</h1>
            <span className="block text-gray-500 text-sm">
              A mini study of a shopping app, applying Jakob Nielsen&apos;s 10
              principles to understand app&apos;s good design.
            </span>
            <Link href="/uxdesign/wireframes">
              <button className="cursor-pointer mt-10 p-16 py-3">
                See Wireframes
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Uxportfolio;
