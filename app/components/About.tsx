import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";
import aboutImg from "../../public/about/aboutImg.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#077C82]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            <i>
              “Develop a passion for learning. If you do, you will never cease
              to grow.”
            </i>
            – Anthony J. D&apos;Angelo
          </p>
          <p className="py-2 text-gray-600">
            Right after I graduated, I developed an interest in programming and
            aspired to become a frontend web developer. I began my journey by
            joining in a startup company as an intern. The company provided
            valuable resources for me to learn the essential skillsets in
            frontend web development. As a result, I was able to deploy multiple
            projects into my Github.
          </p>
          <p className="py-2 text-gray-600">
            However, I soon realized that the path to become a web developer was
            challenging and I require more experiences in this field.
            Undeterred, I decided to explore a different area within the IT
            field. Guess what - I enrolled myself into a{" "}
            <strong>UX Design bootcamp</strong>! Which means, I will be learning
            new skills to become a <strong>UX Designer</strong>, a field that is
            also interesting for me since I often found myself drawn to the
            design aspects of web development and the impact it has on user
            satisfaction. Currently, I am actively seeking internship
            opportunity as a UX Designer.
          </p>
          <p className="py-2 text-[#077C82] underline cursor-pointer">
            <Link href={"https://github.com/faabaf01"}>
              Check out some of my latest projects.
            </Link>
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
