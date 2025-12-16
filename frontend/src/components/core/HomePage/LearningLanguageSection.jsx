import React from "react";
import { motion } from "framer-motion";
import Highlightedtext from "./Highlightedtext";
import CTAButton from "../../../components/core/HomePage/CTAButton";

import Know_your_progress from "../../../assets/Images/Know_your_progress.png";
import Compare_with_others from "../../../assets/Images/Compare_with_others.svg";
import Plan_your_lessons from "../../../assets/Images/Plan_your_lessons.svg";

// Staggered Fade + Lift Animation
const imageVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.25,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

// Floating smooth animation
const floatEffect = {
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const LearningLanguageSection = () => {
  return (
    <div className="my-24">

      {/* HEADER SECTION */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl font-semibold text-center"
      >
        Your swiss knife for
        <Highlightedtext text={" learning any language"} />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-4 text-center text-richblack-300 font-medium lg:w-[72%] mx-auto leading-7 text-base"
        >
          Learning multiple languages becomes effortless with our intelligent
          system — featuring 20+ languages, realistic voice-over, progress
          tracking, personalized schedules, and more advanced tools.
        </motion.p>
      </motion.div>

      {/* IMAGES SECTION */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mt-14">

        {/* IMAGE 1 */}
        <motion.img
          custom={0}
          initial="hidden"
          whileInView="visible"
          variants={imageVariants}
          viewport={{ once: true }}
          src={Know_your_progress}
          alt=""
          className="object-contain lg:-mr-32 w-[260px] lg:w-[330px] transition-all duration-300 hover:scale-[1.03] hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
        />

        {/* IMAGE 2 - FLOATING */}
        <motion.img
          custom={1}
          initial="hidden"
          whileInView="visible"
          variants={imageVariants}
          {...floatEffect}
          viewport={{ once: true }}
          src={Compare_with_others}
          alt=""
          className="object-contain w-[260px] lg:w-[310px] lg:-mb-10 -mt-10 transition-all duration-300 hover:scale-[1.03] hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]"
        />

        {/* IMAGE 3 */}
        <motion.img
          custom={2}
          initial="hidden"
          whileInView="visible"
          variants={imageVariants}
          viewport={{ once: true }}
          src={Plan_your_lessons}
          alt=""
          className="object-contain lg:-ml-36 lg:-mt-5 -mt-14 w-[260px] lg:w-[310px] transition-all duration-300 hover:scale-[1.03] hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
        />

      </div>

      {/* CTA BUTTON */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-fit mx-auto mt-14 mb-16"
      >
        <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
          <CTAButton active={true} linkto={"/signup"}>
            <div>Learn More</div>
          </CTAButton>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LearningLanguageSection;
