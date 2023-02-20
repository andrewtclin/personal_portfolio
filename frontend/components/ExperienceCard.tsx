import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  info: {
    title: string;
    company: string;
    company_logo: string;
    date: string;
    job_summary: string[];
  };
  screenHeight: number;
};

function ExperienceCard({ info, screenHeight }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-2 flex-shrink-0 w-[280px] sm:w-[400px] h-full snap-center bg-[#292929] p-4 pt-8 cursor-pointer overflow-hidden text-white">
      <Image
        width={64}
        height={64}
        className="w-16 h-16  object-cover object-center"
        src={info.company_logo}
        alt="company logo"
        unoptimized={true}
      />
      <div className="px-0 flex flex-col items-center">
        <h4 className="text-md sm:text-lg text-center">{info.company}</h4>
        <p className="font-bold text-lg sm:text-xl mt-1 text-center">
          {info.title}
        </p>

        <p className="uppercase py-4 text-gray-300">{info.date}</p>
        <div
          className="overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#C69400]/80 pr-4"
          style={screenHeight >= 780 ? { height: "100%" } : { height: "200px" }}
        >
          <ul className="list-disc space-y-2 ml-5 text-sm sm:text-base">
            {info.job_summary.length
              ? info.job_summary.map((content, idx) => (
                  <li key={idx}>{content}</li>
                ))
              : ""}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default ExperienceCard;
