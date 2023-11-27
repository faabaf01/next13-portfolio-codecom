"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

//h-100vw = h-screen
const Main = () => {
  useEffect(() => {
    const Typed = require("typed.js");
    new Typed(".is-visible", {
      strings: ["Aspiring UX Designer", "Aspiring Web Developer"],
      // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
      stringsElement: null,
      // typing speed
      typeSpeed: 30,
      // time before typing starts
      startDelay: 900,
      // backspacing speed
      backSpeed: 30,
      // time before backspacing
      backDelay: 500,
      // loop
      loop: true,
      // false = infinite
      // loopCount: 5,
      // show cursor
      showCursor: false,
      // character for cursor
      cursorChar: "|",
      // attribute to type (null == text)
      attr: null,
    });
  }, []);
  return (
    <div id="home" className="w-full h-auto text-center">
      <div className="max-w-[1240] w-full h-full mx-auto p-4 flex justify-center items-center">
        <div className="mt-28">
          <p className="uppercase text-sm tracking-widest text-[#4088d1]">
            A LITTLE BIT ABOUT ME
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&apos;m <span className="text-[#4088d1]">Farah</span>
          </h1>
          <div className="h-[50px]">
            {/* - It is animation title. You can change animation variation by changing extra class to one of next classes: zoom, rotate-1, letters type, letters rotate-2, loading-bar, slide, clip, letters rotate-3, letters scale, push. cd-headline class can not be removed.  */}
            <div className="my_self">
              <h2 className="cd-headline clip text-gray-700">
                <span className="cd-words-wrapper">
                  <b className="is-visible"></b>
                </span>
              </h2>
            </div>
          </div>

          <p className="mt-5 mx-3">
            <strong>
              Actively seeking a full-time position as a Jr Frontend Web
              Developer and available to start on January 1st, 2024.
            </strong>
            {/* Currently, I am focused on learning and building a
            responsive front-end web applications while integrating back-end
            technologies to my projects. */}
          </p>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            A self-taught Frontend Web Developer. Graduated in Dec 2022 from
            University Malaya with a Bachelor of Science in Bioinformatics.
            Completed UX Design course from General Assembly, as part of the
            2023 K-Youth Development Program with Excelerate Asia. Currently
            working as an intern at Edvolution Enterprise.
          </p>
          {/* <p> - a study that involves computer
            science and information technology to process biological data. 
            A self-taught Frontend Developer, starting a career as a UX Designer.
            Passionate about user research, wireframing and prototyping.</p> */}
          <Link href="/uxdesign">
            <button className="cursor-pointer pl-6 pr-8 py-3 mb-8">
              See UX Design portfolio
            </button>
          </Link>

          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <SocIcons icon={<FaLinkedinIn />} text="LinkedIn" />
            <SocIcons icon={<FaGithub />} text="GitHub" />
            <SocIcons icon={<AiOutlineMail />} text="E-mail" />
            <SocIcons icon={<BsFillPersonLinesFill />} text="Contact Info" />
          </div>

          {/* <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

interface SocIconsProps {
  icon: React.ReactNode;
  text?: string;
}

const SocIcons = ({ icon, text }: SocIconsProps) => (
  <div className="social-icons group">
    {icon}

    <span className="social-tooltip group-hover:scale-100">{text}</span>
  </div>
);

export default Main;
