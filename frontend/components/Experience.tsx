import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import content from "content.json";

type Props = {
  screenHeight: number;
};

function Experience({ screenHeight }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl pl-4">
        Experience
      </h3>

      <div className="mt-24 flex space-x-5 overflow-x-scroll overflow-y-hidden h-[80%] w-full p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#C69400]/80">
        {content.experience.map((info, idx) => (
          <ExperienceCard key={idx} info={info} screenHeight={screenHeight} />
        ))}
      </div>
    </motion.div>
  );
}

export default Experience;
