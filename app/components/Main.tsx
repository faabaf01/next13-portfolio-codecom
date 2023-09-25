import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

//h-100vw = h-screen
const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase mt-16 text-sm tracking-widest text-[#508991]">
            A LITTLE BIT ABOUT ME
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&apos;m <span className="text-[#74b3ce]">Farah</span>
          </h1>
          <h1 className="py-2 text-gray-700">
            Aspiring User Experience Designer
          </h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Graduted in 2022 from University Malaya with a Bachelor of Science
            in <strong>Bioinformatics</strong> - a study that involves computer
            science and information technology to process biological data. Was a
            self-taught Frontend Developer. Interested in creating user-friendly
            websites using JavaScript and React. Currently enrolled in UX Design
            course as part of the 2023 K-Youth Development Program with
            Excelerate Asia. Eager to expand my skills in areas like user
            research, wireframing, and prototyping.
            <br />
            <strong>
              Actively seeking an internship opportunity as a UX Designer
            </strong>
            .
            {/* Currently, I am focused on learning and building a
            responsive front-end web applications while integrating back-end
            technologies to my projects. */}
          </p>

          <Link href="/heuristic">
            <button className="cursor-pointer pl-6 pr-8 py-3">
              See UX Design portfolio
            </button>
          </Link>

          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
