import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";

// interface ProjectsInt {

//     id: number;
//     image: string;
//     title: string;
//     description: string;
//     link: string;
//     buttonText: string;

// }

const projects = [
  {
    id: 1,
    image: "/thumbnails/img1.png",
    title: "1️⃣ Heuristic Evaluation",
    description:
      "A mini study of a shopping app, applying Jakob Nielsen's 10 principles to understand app's good design.",
    link: "/uxdesign/heuristic",
    buttonText: "See Evaluation",
  },
  {
    id: 2,
    image: "/thumbnails/img2.png",
    title: "2️⃣ Sketches",
    description:
      "A mini study of a shopping app, applying Jakob Nielsen's 10 principles to understand app's good design.",
    link: "/uxdesign/sketches",
    buttonText: "See Sketches",
  },
  {
    id: 3,
    image: "/thumbnails/img3.png",
    title: "3️⃣ Wireframes",
    description:
      "A mini study of a shopping app, applying Jakob Nielsen's 10 principles to understand app's good design.",
    link: "/uxdesign/wireframes",
    buttonText: "See Wireframes",
  },
];

const PortfolioItem = ({ project }: any) => (
  <div className="bg-blue-100 rounded-lg p-5 flex flex-col items-center">
    <div className="p-10">
      <Image
        src={project.image}
        width={300}
        height={300}
        alt={`Portfolio ${project.id}`}
        className="w-full h-32 sm:h-48 object-cover"
      />
    </div>
    <div className="text-center">
      <h1 className="text-2xl font-bold pb-4">{project.title}</h1>
      <span className="block text-gray-500 text-sm">{project.description}</span>
      <Link href={project.link}>
        <button className="cursor-pointer mt-10 p-16 py-3">
          {project.buttonText}
        </button>
      </Link>
    </div>
  </div>
);

const Uxportfolio = () => (
  <>
    {/* Header Section */}
    <div className="w-screen h-[40vh] lg:h-[50vh] relative flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10"></div>

      <div className="absolute max-w-[1240px] w-full text-white z-10 p-2 text-center">
        <h2 className="py-5">UX Design Portfolio</h2>
        <h3>Design with love for simplicity 🌟</h3>
      </div>
    </div>

    {/* Introduction Section */}
    <div className="text-center">
      <span>
        From initial sketches to detailed wireframes and Heuristic Evaluations,
        each project tells a unique story.
      </span>
    </div>

    {/* Portfolio Section */}
    <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
      {projects.map((project) => (
        <PortfolioItem key={project.id} project={project} />
      ))}
    </div>
  </>
);

export default Uxportfolio;
