/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectItem from "./ProjectItem";
import columbiaImg from "/public/assets/projects/columbia.png";
import bankImg from "/public/assets/projects/bank.jpg";
import mapImg from "/public/assets/projects/mapty.png";
import productImg from "/public/assets/projects/tea.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#1c9492]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Columbia"
            backgroundImg={columbiaImg}
            projectUrl="/columbia"
            tech="React JS"
          />
          <ProjectItem
            title="BankApp"
            backgroundImg={bankImg}
            projectUrl="/bank"
            tech="Javascript"
          />
          <ProjectItem
            title="mapty"
            backgroundImg={mapImg}
            projectUrl="/map"
            tech="Javascript"
          />
          <ProjectItem
            title="Tea Products"
            backgroundImg={productImg}
            projectUrl="/product"
            tech="Next JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
