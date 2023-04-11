import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
         
          <h2 className="text-4xl font-bold">Achievements</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="FunctionUp Summer Coding Camp."
            subTitle="Winner in FSOC ."
            result="Success"
            des="I am thrilled to announce that my project has been selected as one of the top three in the FunctionUp Summer of Code Contest. "
          />
          <ResumeCard
            title=" Certification In Debate Competion."
             
             result="Success"
            des="i am participate in debate competition Amravati"
          />
         
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
        <h2 className="text-4xl font-bold">Projects Achievements</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Online-Compiler"
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="I am thrilled to announce that these project has been selected as one of the top three in the FunctionUp Summer of Code Contest."
          />
          {/* <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          /> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
