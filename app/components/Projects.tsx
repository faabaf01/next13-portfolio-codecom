// import Image from "next/legacy/image";
// import Link from "next/link";
import React from "react";
import pokemonImg from "../../public/projects/pokemon.jpg";
import linkedinImg from "../../public/projects/linkedin.jpg";
import netflixImg from "../../public/projects/netflix.jpg";
import shoeFinderImg from "../../public/projects/shoefinder.jpg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#4088d1]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Pokemon Finder"
            backgroundImg={pokemonImg}
            projectUrl="/pokemon"
          />
          <ProjectItem
            title="LinkedIn"
            backgroundImg={linkedinImg}
            projectUrl="/linkedin"
          />
          <ProjectItem
            title="Netflix"
            backgroundImg={netflixImg}
            projectUrl="/netflix"
          />
          <ProjectItem
            title="ShoeFinder"
            backgroundImg={shoeFinderImg}
            projectUrl="/shoefinder"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
