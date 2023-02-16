import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col md:flex-row relative h-screen text-center md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src="/images/about_profile_pic.jpg"
        className="mt-32 mr-4 md:mr-0 w-36 h-36 md:w-64 md:h-96 xl:w-[500px] xl:h-[600px] rounded-full md:rounded-lg overflow-hidden flex-shrink-0 object-cover object-top"
      />

      <div className="space-y-5 px-0 md:px-10 md:mt-32">
        <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold pl-4 text-center md:text-start md:pl-0">
          Some information about{" "}
          <span className="underline decoration-[#C69400]/50">me</span>.{" "}
        </h4>
        <p className="text-sm sm:text-base text-left py-4 overflow-y-scroll h-48 md:h-80">
          I am a Software Engineer who has led and built enterprise-level
          projects in various fields: ERP Systems, Machine & Deep Learning,
          Scripting & Automating, Web & Desktop Applications.
          <br />
          <br /> I have experience and comprehensive knowledge in full-stack
          development of web and desktop applications, machine learning and deep
          learning.
          <br />
          <br />
          Also, I have a development team - JAStudio, and have worked with
          clients from different countries with significant accomplishments -{" "}
          <a
            href="https://jastudio-tech.com/"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            JAStudio
          </a>{" "}
          <br />
          <br />
          In my free time, I enjoy writing articles to share my knowledge in
          technology, especially for AI -{" "}
          <a
            href="https://medium.com/@chuntcdj"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Medium
          </a>
          <br />
          <br />
          Get to know more about me -{" "}
          <a
            href="https://www.linkedin.com/in/andrewtclin/"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </motion.div>
  );
}

export default About;
