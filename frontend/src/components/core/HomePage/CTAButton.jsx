import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function CTAButton({ children, active, linkto }) {
  return (
    <Link to={linkto}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.92 }}
        className={`
          text-center text-[15px] px-7 py-3 rounded-lg font-semibold 
          transition-all duration-300 w-fit cursor-pointer
          shadow-[0_0_20px_rgba(0,0,0,0.15)]
          ${active 
            ? "bg-gradient-to-r from-yellow-300 to-yellow-100 text-black shadow-yellow-300/20" 
            : "bg-richblack-800 text-richblack-100 shadow-richblack-900/50"
          }
          hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]
        `}
      >
        {children}
      </motion.div>
    </Link>
  );
}

export default CTAButton;
