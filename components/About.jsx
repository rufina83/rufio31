/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#1c9492]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I am a hardworking person and has self-learning abilities.
          </p>
          <p className="py-2 text-gray-600">
            I'm a Front-End web developer with years of client-facing experience
            at SaaS companies, I gained experience in various technological
            departments, in which I handled technical faults in the level of the
            commercial and private sectors. I have always had a knack for
            technology and working with computers. At the end of 2021, I started
            working with HTML and CSS to make some minor edits on a small
            business website that I was operating. What I thought was just a few
            small projects turned into a love for programming.
          </p>
          <p className="py-2 text-gray-600">
            Fascinated with how intricate programming can be. Then I was quickly
            drawn to learn more by Udemy online courses and other resources. I
            started learning javascript and I became more enthused with making
            websites interactive. I then started to learn deeper about new
            technologies such as React JS and build different websites. I am now
            spending my time building projects with React JS and learning new
            technologies.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
