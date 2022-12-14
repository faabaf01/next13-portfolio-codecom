import Image from "next/legacy/image";
import React from "react";
import aboutImg from "../../public/about/aboutImg.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">Not your normal developer</p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            a, expedita incidunt exercitationem sint eum eaque dolorum quod
            cupiditate unde aut vero, quia, inventore amet ducimus quae
            architecto provident beatae!
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam magnam
            voluptates doloribus nobis neque soluta laborum quas voluptate
            sapiente, libero, obcaecati asperiores. Voluptatum ea eum dicta
            consectetur aspernatur? Dolorum, placeat.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={aboutImg} alt="about" height={426} width={640} />
        </div>
      </div>
    </div>
  );
};

export default About;
