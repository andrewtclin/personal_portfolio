import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import content from "content.json";

import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";

type Props = {
  screenHeight: number;
};

function Skills({ screenHeight }: Props) {
  // content.skills.map((mainInfo) => {
  //   for (let mainType in mainInfo) {
  //     let mainTypeContent = mainInfo[mainType as keyof typeof mainInfo];
  //     console.log("mainInfo", mainInfo);
  //     console.log("mainType", mainType);
  //     console.log("mainTypeContent", mainTypeContent);
  //     for (let subType in mainTypeContent) {
  //       let subTypeContent =
  //         mainTypeContent[subType as keyof typeof mainTypeContent];
  //       console.log("subType", subType);
  //       console.log("subTypeContent:", subTypeContent);
  //     }
  //   }
  // });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <div
        className="grid grid-cols-1 gap-y-12 px-10 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#C69400]/80 z-20"
        style={
          screenHeight <= 700
            ? { height: "400px", overflowY: "scroll", marginTop: "60px" }
            : screenHeight <= 950
            ? { height: "500px", overflowY: "scroll", marginTop: "60px" }
            : { height: "100%" }
        }
      >
        {content.skills.map((mainInfo, mainInfoIdx) => (
          <div key={"mainInfo" + mainInfoIdx}>
            <p className="font-medium text-2xl flex justify-center mb-4">
              {Object.keys(mainInfo)[0]}
            </p>
            <div className="grid grid-cols-2 gap-y-6">
              {Object.keys(Object.values(mainInfo)[0]).map(
                (subType, subTypeIdx) => (
                  <div key={"subType" + subTypeIdx}>
                    <p className="font-medium text-lg border-b-2 border-b-gray-500 flex justify-center">
                      {subType}
                    </p>
                    {Object.values(mainInfo)[0][subType].map(
                      (subTypeDetail, subTypeDetailIdx) => (
                        <p
                          key={"subTypeDetailIdx" + subTypeDetailIdx}
                          className="flex justify-start pl-6"
                        >
                          {subTypeDetailIdx + 1 + ". "}
                          {subTypeDetail}
                        </p>
                      )
                    )}
                  </div>
                )
              )}
            </div>
            {mainInfoIdx !== content.skills.length - 1 ? (
              <div className="flex justify-center items-center pt-10">
                <EllipsisVerticalIcon className="h-7 w-7" />
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
      <div
        className="w-full absolute top-[30%] bg-[#C69400]/10 left-0 -skew-y-12 z-0"
        style={
          screenHeight <= 700
            ? { height: "300px" }
            : screenHeight <= 950
            ? { height: "400px" }
            : { height: "500px" }
        }
      />
    </motion.div>
  );
}

export default Skills;
