import Link from "next/link";
import React from "react";
import Slider from "../../components/Slider";

function Heuristicpage() {
  return (
    <>
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10"></div>

        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Mini Case Study</h2>
          <h3>UX Design</h3>
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto grid md:grid-cols-3 pt-8 mb-40">
        <div className="col-span-4 ">
          <p>Project</p>
          <h2>Heuristic Evaluation</h2>

          <p className="py-4 text-gray-600">
            This is a Mini Case Study of an app that I regularly use. I choose
            the app <strong>Shopee</strong> - the popular e-commerce platform in
            South East Asia. The platform provides customers with an easy,
            secure and fast online shopping experience through strong payment
            and fulfillment support. Let&apos;s go through Jakob Nielsen&apos;s
            10 general principles for interaction design with this example app.
          </p>

          <Slider />

          <Link href="/">
            <button className="cursor-pointer mt-10 p-16 py-3">Go back</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Heuristicpage;
