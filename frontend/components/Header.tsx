import React from "react";
import { SocialIcon } from "react-social-icons";

import { motion } from "framer-motion";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          className="hover:-translate-y-0.5 duration-300 ease-in"
          url="https://www.linkedin.com/in/andrewtclin/"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          className="hover:-translate-y-0.5 duration-300 ease-in"
          url="https://github.com/andrewtclin/"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          className="hover:-translate-y-0.5 duration-300 ease-in"
          url="https://medium.com/@chuntcdj"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
          label="Medium"
        />

        <SocialIcon
          className="hover:-translate-y-0.5 duration-300 ease-in"
          url="https://jastudio-tech.com/"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
          label="Dev. Team"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer hover:scale-125 duration-300 ease-in"
          url="#contact"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="hidden md:inline-flex uppercase text-sm text-gray-500 font-medium">
          Get in Touch
        </p>
      </motion.div>
    </header>
  );
}
