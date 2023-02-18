import React from "react";
import { motion } from "framer-motion";
import content from "content.json";
import { LinkIcon } from "@heroicons/react/24/solid";

type Props = {
  screenHeight: number;
};

function Projects({ screenHeight }: Props) {
  const projects = [1, 2, 3];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-center md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl pl-4">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#C69400]/80">
        {content.projects.map((project, idx) => (
          <div
            key={idx}
            className="pt-40 md:pt-48 w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-start h-screen"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={project.img}
              alt=""
              className="object-contain w-40 h-40 md:w-60 md:h-60"
            />
            <div className="px-0 md:px-10 max-w-6xl flex flex-col items-center">
              <h4 className="text-2xl font-semibold text-center underline decoration-[#C69400]/50">
                {idx + 1} of {content.projects.length}
              </h4>
              <p className="text-2xl font-semibold text-center py-2">
                {project.title}{" "}
              </p>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex justify-center items-center"
                >
                  <LinkIcon className="ml-2 text-[#C69400] h-5 w-5 animate-pulse cursor-pointer" />
                </a>
              ) : (
                ""
              )}
              <p
                className="text-center w-80 pt-4"
                // style={
                //   screenHeight <= 700
                //     ? {
                //         height: "192px",
                //         overflowY: "scroll",
                //       }
                //     : screenHeight > 700 && screenHeight <= 800
                //     ? {
                //         height: "250px",
                //         overflowY: "scroll",
                //       }
                //     : screenHeight > 800 && screenHeight <= 900
                //     ? {
                //         height: "300px",
                //         overflowY: "scroll",
                //       }
                //     : { height: "100%" }
                // }
              >
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div
        className="w-full absolute top-[30%] bg-[#C69400]/10 left-0 -skew-y-12 z-0"
        style={
          screenHeight <= 700
            ? { height: "300px" }
            : screenHeight > 700 && screenHeight <= 950
            ? { height: "400px" }
            : { height: "500px" }
        }
      />
    </motion.div>
  );
}

export default Projects;
