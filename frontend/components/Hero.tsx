import React from "react";
import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import Link from "next/link";
import { motion } from "framer-motion";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi. I'm Ta-Chun Lin.",
      "An engineer in...",
      "Machine Learning.",
      "Deep Learning.",
      "Web Development.",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-8 text-center overflow-hidden">
      <div className="flex flex-col items-center sm:flex-row pt-12 sm:mb-8">
        <motion.img
          className="relative rounded-xl w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 mx-auto object-cover hover:scale-105 transition duration-500 ease-in-out cursor-pointer "
          src="/images/hero_profile_pic.jpg"
          alt="Profile Image"
        />
        <div className="w-80 pl-0 sm:pl-6 pt-5 grid grid-cols-2 gap-y-4 mt-4 sm:mt-0 z-20">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#education">
            <button className="heroButton">Education</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
          <Link href="#contact">
            <button className="heroButton">Contact</button>
          </Link>
        </div>
      </div>

      <div className="z-20">
        <h2 className="text-md sm:text-lg md:text-xl uppercase text-gray-500 pb-4 tracking-[5px] md:tracking-[15px] ">
          ML | DL | Software
        </h2>

        <h1 className="text-2xl lg:text-4xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#C69400" />
        </h1>
      </div>
    </div>
  );
}

export default Hero;
