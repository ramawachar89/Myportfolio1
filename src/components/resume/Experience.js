import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">Novemebr2022-Present</p> */}
          <h2 className="text-4xl font-bold"> Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            
            title="Front-end Developer"
            subTitle="Trainee At Function"
            result="Bengaluru Karnataka"
            des="I take training in FunctionUp as a Front_End Developer."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Nov2022-Present</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Front-End Developer"
            subTitle="FunctionUp"
            result="Bengaluru Karnataka"
            des="Developed front-end user interfaces for several complex web applications with HTML, CSS, and JavaScript.
            •Utilized React frameworks to create interactive, responsive, and user-friendly web designs.."
          />
         
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
