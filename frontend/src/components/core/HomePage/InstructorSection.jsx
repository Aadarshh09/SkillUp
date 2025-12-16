import React from "react";
import CTAButton from "../../../components/core/HomePage/CTAButton";
import { FaArrowRight } from "react-icons/fa";
import Instructor from "../../../assets/Images/Instructor.png";
import { motion } from "framer-motion";

const InstructorSection = () => {
  return (
    <div className="w-full py-20">
      <div className="flex flex-col lg:flex-row items-center gap-20">

        {/* IMAGE SIDE */}
        <motion.div
          className="lg:w-[50%] relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="absolute top-[-20px] left-[-20px] h-full w-full rounded-xl bg-gradient-to-br from-purple-500/30 to-blue-500/20 blur-xl"></div>

          <img
            src={Instructor}
            alt="Instructor"
            className="relative rounded-xl shadow-[0px_10px_40px_rgba(0,0,0,0.35)]"
          />
        </motion.div>

        {/* TEXT SIDE */}
        <motion.div
          className="lg:w-[50%] flex flex-col gap-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Modern Heading */}
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-snug">
            Become an{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              instructor
            </span>
          </h1>

          {/* Description */}
          <p className="text-richblack-300 text-[17px] leading-relaxed w-[95%]">
            Instructors from across the globe are teaching millions at SkillUp.
            We empower you with tools, knowledge, and support so you can share
            what you love and inspire learners worldwide.
          </p>

          <motion.div
            className="w-fit"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <CTAButton active={true} linkto={"/signup"}>
              <div className="flex items-center gap-3 text-lg">
                Start Teaching Today <FaArrowRight />
              </div>
            </CTAButton>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default InstructorSection;
