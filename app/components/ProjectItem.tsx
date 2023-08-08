import React from "react";
import Image, { StaticImageData } from "next/legacy/image";
import Link from "next/link";

interface Props {
  title: string;
  backgroundImg: StaticImageData;
  projectUrl: string;
}

const ProjectItem = ({ title, backgroundImg, projectUrl }: Props) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#077C82] to-[#78D4E1]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="bgimg"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">React JS</p>
        <Link href={projectUrl}>
          <p className="text-center px-10 py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
