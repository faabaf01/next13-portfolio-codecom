import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

//h-100vw = h-screen
const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-fit w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest mt-10 text-[#508991]">
            A LITTLE BIT ABOUT ME
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&apos;m <span className="text-[#74b3ce]">Farah</span>
          </h1>
          <h1 className="py-2 text-gray-700">
            A Self-taught Frontend Web Developer
          </h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Graduted in 2022 from University Malaya with a Bachelor of Science
            in <u>Bioinformatics</u> - a field of study that involves using
            computer science and information technology to process biological
            data. Interested about creating user-friendly websites using
            JavaScript and React. Currently enrolled in UX Design course as part
            of the 2023 K-Youth Development Program with Excelerate Asia. Eager
            to embark on a new journey in learning and expanding skills in areas
            like user research, wireframing, and prototyping.
            <br />
            <strong>
              Actively seeking an internship opportunity as a UX Designer
            </strong>
            .
            {/* Currently, I am focused on learning and building a
            responsive front-end web applications while integrating back-end
            technologies to my projects. */}
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
