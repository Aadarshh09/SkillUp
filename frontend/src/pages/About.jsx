import React from "react"
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

import FoundingStory from "../assets/Images/FoundingStory.png";
import BannerImage1 from "../assets/Images/aboutus1.webp";
import BannerImage2 from "../assets/Images/aboutus2.webp";
import BannerImage3 from "../assets/Images/aboutus3.webp";

import ContactFormSection from "../components/core/Aboutpage/ContactFormSection";
import LearningGrid from "../components/core/Aboutpage/LearningGrid";
import Quote from "../components/core/Aboutpage/Quote";
import StatsComponenet from "../components/core/Aboutpage/Stats";
import Highlightedtext from "../components/core/HomePage/Highlightedtext";
import Footer from "../components/common/Footer";

// ========================= REVIEW SLIDER ============================
const avatarPlaceholders = {
  avatar1: "https://i.pravatar.cc/150?img=1",
  avatar2: "https://i.pravatar.cc/150?img=2",
  avatar3: "https://i.pravatar.cc/150?img=3",
  avatar4: "https://i.pravatar.cc/150?img=4",
  avatar5: "https://i.pravatar.cc/150?img=5",
  avatar6: "https://i.pravatar.cc/150?img=6",
  avatar7: "https://i.pravatar.cc/150?img=7",
};

const CustomReviewSlider = () => {
  const reviews = [
    { name: "Abhishek S.", review: "SkillUp got me job-ready in 6 months. The projects are incredible.", avatar: avatarPlaceholders.avatar1 },
    { name: "Deepanshu M.", review: "The mentor support is unmatched. Real-world feedback is key.", avatar: avatarPlaceholders.avatar2 },
    { name: "Adarsh K.", review: "Best coding platform I've ever used. The live sandbox is amazing.", avatar: avatarPlaceholders.avatar3 },
    { name: "Riya J.", review: "I finally understood React Hooks thanks to their advanced course.", avatar: avatarPlaceholders.avatar4 },
    { name: "Anuj L.", review: "CI/CD integration was a game-changer for my DevOps career.", avatar: avatarPlaceholders.avatar5 },
    { name: "Ujjwal P.", review: "Perfect content depth, exactly what I needed to grow as a dev.", avatar: avatarPlaceholders.avatar6 },
    { name: "Paras T.", review: "Learned more here in a month than a year of university.", avatar: avatarPlaceholders.avatar7 },
  ];

  const marqueeReviews = [...reviews, ...reviews];

  return (
    <div className="relative overflow-hidden py-16 w-full bg-richblack-900 border-t border-b border-richblack-800">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-content {
          display: flex;
          width: calc(372px * ${reviews.length * 2});
          animation: marquee 45s linear infinite;
        }
      `}</style>

      <div className="marquee-content">
        {marqueeReviews.map((r, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[340px] h-64 p-7 mx-4
              bg-[#0d0d12] border border-richblack-700/40 rounded-2xl
              shadow-md hover:shadow-yellow-500/30
              transition duration-400 flex flex-col"
          >
            <div className="flex text-yellow-500 text-sm mb-2">
              {[...Array(5)].map((_, a) => <FaStar key={a} />)}
            </div>
            <p className="text-richblack-200 text-base h-28 leading-relaxed">
              “{r.review}”
            </p>
            <div className="mt-auto flex items-center border-t border-richblack-600/50 pt-4">
              <img src={r.avatar} className="w-12 h-12 rounded-full mr-3" alt=""/>
              <p className="text-richblack-5 font-semibold">{r.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


// ========================= PAGE ================================
const About = () => {
  return (
    <div className="bg-richblack-950 text-white overflow-x-hidden">

      {/* ---------- HERO SECTION ---------- */}
      <motion.section
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-richblack-700"
      >
        <div className="relative mx-auto w-11/12 max-w-maxContent flex flex-col gap-10 text-center">

          <header className="mx-auto pt-20 pb-20 lg:w-[70%]">
            <h1 className="text-4xl font-semibold">
              Driving Innovation in Online Education for a{" "}
              <Highlightedtext text="Brighter Future" />
            </h1>
            <p className="mt-4 text-base text-richblack-300">
              SkillUp is at the forefront of driving innovation in online education.
              We are passionate about creating a brighter future by offering industry-ready courses.
            </p>
          </header>

          <div className="sm:h-[70px] lg:h-[150px]" />

          {/* IMAGES - NO MOTION */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[30%]
           grid grid-cols-3 w-full gap-3 lg:gap-5">
            <img src={BannerImage1} alt="" className="rounded-xl object-cover h-[180px] lg:h-[260px]" />
            <img src={BannerImage2} alt="" className="rounded-xl object-cover h-[180px] lg:h-[260px]" />
            <img src={BannerImage3} alt="" className="rounded-xl object-cover h-[180px] lg:h-[260px]" />
          </div>
        </div>
      </motion.section>


      {/* ---------- QUOTE SECTION ---------- */}
      <motion.section
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="border-b border-richblack-700"
      >
        <div className="mx-auto w-11/12 max-w-maxContent">
          <div className="h-[100px]" />
          <Quote />
        </div>
      </motion.section>


      {/* ---------- STORY SECTION ---------- */}
      <motion.section
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-richblack-300"
      >
        <div className="mx-auto w-11/12 max-w-maxContent flex flex-col gap-14">

          <div className="flex flex-col lg:flex-row justify-between gap-10">
            <div className="my-24 flex flex-col lg:w-[50%] gap-10">
              <h1 className="text-4xl font-semibold bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] text-transparent bg-clip-text">
                Our Founding Story
              </h1>
              <p>
                Our e-learning platform was born out of a shared vision to transform education...
              </p>
              <p>
                We witnessed firsthand the limitations of traditional education
                and built a platform that makes learning accessible for all.
              </p>
            </div>

            <img src={FoundingStory} alt="FoundingStory" className="shadow-[0_0_20px_0] shadow-[#FC6767]" />
          </div>

          <div className="flex flex-col lg:flex-row justify-between gap-10">
            <div className="my-24 flex flex-col lg:w-[40%] gap-10">
              <h1 className="text-4xl font-semibold bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text">
                Our Vision
              </h1>
              <p>We are redefining how people learn — accessible, scalable, powerful.</p>
            </div>

            <div className="my-24 flex flex-col lg:w-[40%] gap-10">
              <h1 className="text-4xl font-semibold bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text">
                Our Mission
              </h1>
              <p>We create a collaborative learning community to help every learner grow.</p>
            </div>
          </div>
        </div>
      </motion.section>


      {/* ---------- STATS ---------- */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <StatsComponenet />
      </motion.section>


      {/* ---------- LEARNING GRID & CONTACT ---------- */}
      <section className="mx-auto mt-20 w-11/12 max-w-maxContent flex flex-col gap-10">
        <LearningGrid />
        <ContactFormSection />
      </section>


      {/* ---------- REVIEWS ---------- */}
      <section className="mx-auto my-20 w-11/12 max-w-maxContent flex flex-col gap-10">
        <h1 className="text-center text-4xl font-semibold">Hear From Our Community</h1>
        <CustomReviewSlider />
      </section>

      <Footer />
    </div>
  );
};

export default About;
