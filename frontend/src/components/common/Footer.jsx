import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";

import Logo from "../../assets/Logo/Logo-Full-Light.png";

const Footer = () => {
  return (
    <footer className="bg-[#0A0F1C] border-t border-white/10">
      {/* Top Section */}
      <div className="w-11/12 max-w-[1400px] mx-auto py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand + Socials */}
        <div className="space-y-4">
          <img
            src={Logo}
            alt="SkillUp Logo"
            className="w-[150px] opacity-90 hover:opacity-100 transition"
          />

          <p className="text-richblack-300 text-[14px] leading-6">
            Empowering the next generation of developers through interactive
            learning, hands-on projects, and expert-led guidance.
          </p>

          <div className="flex gap-4 text-richblack-300 text-2xl">
            <FaFacebook className="hover:text-white transition cursor-pointer" />
            <FaGoogle className="hover:text-white transition cursor-pointer" />
            <FaTwitter className="hover:text-white transition cursor-pointer" />
            <FaYoutube className="hover:text-white transition cursor-pointer" />
          </div>
        </div>

        {/* Column */}
        <div className="space-y-4">
          <h3 className="text-richblack-50 font-semibold text-lg">
            Company
          </h3>
          <ul className="space-y-2 text-richblack-300">
            {["About", "Careers", "Affiliates"].map((item, i) => (
              <li key={i}>
                <Link
                  to={item.toLowerCase()}
                  className="hover:text-white transition"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column */}
        <div className="space-y-4">
          <h3 className="text-richblack-50 font-semibold text-lg">
            Resources
          </h3>
          <ul className="space-y-2 text-richblack-300">
            {[
              "Articles",
              "Blog",
              "Chart Sheet",
              "Code Challenges",
              "Docs",
              "Projects",
              "Videos",
              "Workspaces",
            ].map((item, i) => (
              <li key={i}>
                <Link
                  to={item.toLowerCase().split(" ").join("-")}
                  className="hover:text-white transition"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column */}
        <div className="space-y-4">
          <h3 className="text-richblack-50 font-semibold text-lg">
            Community
          </h3>
          <ul className="space-y-2 text-richblack-300">
            {["Forums", "Chapters", "Events"].map((item, i) => (
              <li key={i}>
                <Link
                  to={item.toLowerCase()}
                  className="hover:text-white transition"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <h3 className="text-richblack-50 font-semibold text-lg mt-6">
            Plans
          </h3>
          <ul className="space-y-2 text-richblack-300">
            {[
              "Paid memberships",
              "For students",
              "Business solutions",
            ].map((item, i) => (
              <li key={i}>
                <Link
                  to={item.toLowerCase().split(" ").join("-")}
                  className="hover:text-white transition"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/10">
        <div className="w-11/12 max-w-[1400px] mx-auto py-6 flex flex-col md:flex-row justify-between items-center text-sm text-richblack-400">
          
          {/* Policies */}
          <div className="flex gap-4 mb-4 md:mb-0">
            {["Privacy Policy", "Cookie Policy", "Terms"].map((item, i) => (
              <Link
                key={i}
                to={item.toLowerCase().split(" ").join("-")}
                className="hover:text-white transition"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-center">
            Made with UPES © {new Date().getFullYear()} SkillUp
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
