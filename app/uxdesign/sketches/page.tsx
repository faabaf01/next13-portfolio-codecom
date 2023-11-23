import Image from "next/image";
import Link from "next/link";
import React from "react";
import sketch1 from "../../../public/images/Sketches/sketch1.jpg";

function SketchesPage() {
  return (
    <>
      <div className="w-screen h-[40vh] lg:h-[50vh] relative flex items-center justify-center">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10"></div>

        <div className="absolute max-w-[1240px] w-full text-white z-10 p-2 text-center">
          <h2 className="py-5">Mini Case Study</h2>
          <h3>UX Design</h3>
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto grid md:grid-cols-3 p-8 mb-40">
        <p className="text-black col-span-2 pb-5">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          &nbsp;&gt;&nbsp;
          <Link href="/uxdesign" className="hover:underline">
            UX Portfolio
          </Link>
          &nbsp;&gt;&nbsp;
          <Link href="/uxdesign/sketches" className="hover:underline">
            Sketches
          </Link>
        </p>
        <div className="col-span-4 ">
          <h2>Sketches</h2>

          <p className="py-4 text-gray-600">
            Welcome to Sketches! This page is to showcase some of my{" "}
            <strong>Sketches</strong> that I drew during the UX Design bootcamp
            as exercises. It is incredibly enjoyable because it allows your
            imagination to roam freely, while your hands bring those imaginative
            visions to life on paper.
          </p>
          <div className="w-full h-full overflow-hidden rounded-md shadow-md">
            <Image
              src={sketch1}
              alt="pic"
              width={700}
              height={700}
              className="object-cover"
            />
          </div>

          <Link href="/uxdesign">
            <button className="cursor-pointer mt-10 p-16 py-3">Go back</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SketchesPage;
