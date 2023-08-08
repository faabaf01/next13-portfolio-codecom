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
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET&apos;S BUILD SOMETHING TOGETHER{" "}
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&apos;m <span className="text-[#51c2e5]">Farah</span>
          </h1>
          <h1 className="py-2 text-gray-700">
            A Self-taught Front-End Web Developer
          </h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I recently graduted in 2022 from University Malaya with
            <strong> Bachelor of Science in Bioinformatics</strong> - field of
            study that involves using computer science and information
            technology to process biological data. After graduating, I developed
            interests in programming and decided to become a front-end web
            developer. Currently, I am focused on learning and building a
            responsive front-end web applications and integrating back-end
            technologies to my projects.
          </p>
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
