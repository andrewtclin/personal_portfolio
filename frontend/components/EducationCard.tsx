import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  info: {
    institution: string;
    degree: string;
    logo: string;
    date: string;
  };
};

function EducationCard({ info }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-2 flex-shrink-0 w-[280px] sm:w-[400px] h-full snap-center bg-[#292929] p-4 pt-8 cursor-pointer overflow-hidden text-white">
      <Image
        width={64}
        height={64}
        className="w-24 h-24 object-cover object-center mt-8"
        src={info.logo}
        alt="company logo"
        unoptimized={true}
      />
      <div className="px-0 flex flex-col items-center pt-6">
        <h4 className="text-md sm:text-lg text-center">{info.institution}</h4>
        <p className="font-bold text-lg sm:text-xl text-center pt-6">
          {info.degree}
        </p>

        <p className="uppercase py-6 text-gray-300">{info.date}</p>
      </div>
    </article>
  );
}

export default EducationCard;
