import React from 'react';
import { motion } from "framer-motion";

// Icons Import
import { FaArrowRight, FaStar } from "react-icons/fa"
import { Link } from "react-router-dom"

// Image and Video Import
import Banner from "../assets/Images/banner.mp4"

// Component Imports 
import Footer from "../components/common/Footer"
import CTAButton from "../components/core/HomePage/CTAButton"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import Highlightedtext from "../components/core/HomePage/Highlightedtext"
import InstructorSection from "../components/core/HomePage/InstructorSection"
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection"
import TimelineSection from "../components/core/HomePage/TimelineSection"

// --- Placeholder Avatars ---
const avatarPlaceholders = {
    avatar1: "https://i.pravatar.cc/150?img=1",
    avatar2: "https://i.pravatar.cc/150?img=2",
    avatar3: "https://i.pravatar.cc/150?img=3",
    avatar4: "https://i.pravatar.cc/150?img=4",
    avatar5: "https://i.pravatar.cc/150?img=5",
    avatar6: "https://i.pravatar.cc/150?img=6",
    avatar7: "https://i.pravatar.cc/150?img=7",
};

// -------------------------------------------------------------------
// ReviewSlider Component
// -------------------------------------------------------------------
const ReviewSlider = () => {
    const reviews = [
        { name: "Abhishek", review: "SkillUp got me job-ready in 6 months. The projects are incredible.", avatar: avatarPlaceholders.avatar1 },
        { name: "Deepanshu", review: "The mentor support is unmatched. Real-world feedback is key.", avatar: avatarPlaceholders.avatar2 },
        { name: "Adarsh", review: "Best coding platform I've ever used. The live sandbox is amazing.", avatar: avatarPlaceholders.avatar3 },
        { name: "Riya", review: "I finally understood React Hooks, thanks to their advanced course.", avatar: avatarPlaceholders.avatar4 },
        { name: "Anuj", review: "The CI/CD integration section was a game-changer for my DevOps skills.", avatar: avatarPlaceholders.avatar5 },
        { name: "Ujjwal", review: "The curriculum's focus on modern technologies is exactly what I needed.", avatar: avatarPlaceholders.avatar6 },
        { name: "Paras", review: "Learned more here in a month than I did in a year of university.", avatar: avatarPlaceholders.avatar7 },
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
                            <img src={r.avatar} className="w-12 h-12 rounded-full mr-3" alt={r.name}/>
                            <p className="text-richblack-5 font-semibold">{r.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// -------------------------------------------------------------------
// Animation Variants
// -------------------------------------------------------------------
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } }
};

// -------------------------------------------------------------------
function Home() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-richblack-900 overflow-x-hidden"
        >

            {/* ========================================
              Section 1: Hero & Code Demonstration
            ======================================== */}
            <motion.div variants={sectionVariants} className="relative mx-auto flex flex-col items-center text-white w-11/12 max-w-maxContent pt-16">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 opacity-5 blur-[150px] rounded-full animate-pulse-slow pointer-events-none"></div>
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-yellow-500 opacity-5 blur-[120px] rounded-full animate-pulse-slow-reverse pointer-events-none"></div>
                
                <Link to={"/signup"}>
                    <div className="group p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 
                        transition-all duration-500 hover:scale-105 hover:shadow-blue-200/30 hover:bg-richblack-900 w-fit
                        shadow-[0_0_20px_0] shadow-blue-500/20 z-10 relative">
                        <div className="flex flex-row items-center rounded-full group-hover:bg-richblack-900 p-2 px-6 gap-2">
                            <p className="text-sm md:text-base">Become a SkillUp Instructor</p>
                            <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300"/>
                        </div>
                    </div>
                </Link>
                
                <div className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-center mt-8 leading-tight tracking-tighter z-10">
                    <h1 className="leading-tight">
                        Unlock <span className='text-yellow-500'>Peak Performance</span>
                        <br/>
                        with
                        <Highlightedtext text={" SkillUp Coding"} />
                    </h1>
                </div>

                <div className="text-center max-w-[900px] mt-6 text-base sm:text-lg text-richblack-300 font-light z-10">
                    <p>
                        Master the most in-demand tech skills with our curated, project-based
                        courses. Learn at your own pace, get personalized feedback from
                        industry veterans, and join a global community of developers.
                    </p>
                </div>

                <div className="flex flex-row gap-5 mt-10 z-10">
                    <CTAButton active={true} linkto={"/signup"}>
                        Start Learning Today
                    </CTAButton>
                    <CTAButton active={false} linkto={"/login"}>
                        Explore Courses
                    </CTAButton>
                </div>

                <div className="relative my-20 mx-3 max-w-[90%] w-full lg:w-[1000px] shadow-[0_0_80px_0] shadow-blue-500/10 z-10 rounded-xl overflow-hidden">
                    <div className="relative z-10 transform transition-transform duration-700 hover:scale-[1.01]">
                        <video muted autoPlay loop className="rounded-xl aspect-video border border-blue-500/30" style={{boxShadow: "20px 20px 0px 0px #FFD60A"}}>
                            <source src={Banner} type="video/mp4" />
                        </video>
                    </div>
                </div>

                {/* Code Sections */}
                <motion.div variants={sectionVariants} className="max-w-[100%] mt-20">
                    <CodeBlocks
                        direction={"row"}
                        heading={<div className="text-4xl font-bold ">Launch Your <Highlightedtext text={"First Project"} /> in Minutes</div>}
                        subheading={"Stop watching tutorials and start building. Our interactive coding playgrounds let you apply concepts instantly, getting you job-ready faster than ever."}
                        ctabtn1={{ text: "Try it yourself", linkto: "/signup", active: true }}
                        ctabtn2={{ text: "Learn more", linkto: "/login", active: false }}
                        codeBlock={`// SkillUp: Modern React Component\nimport React from 'react';\n\nconst SkillCard = ({ title, desc }) => (\n  <div className="card-hover-effect">\n    <h2>{title}</h2>\n    <p>{desc}</p>\n  </div>\n);\n\nexport default SkillCard;`}
                        codeColor={"text-yellow-25"}
                    />
                </motion.div>

                <motion.div variants={sectionVariants} className="max-w-[100%] mt-28 mb-36">
                    <CodeBlocks
                        direction={"reverse"}
                        heading={<div className="text-4xl font-bold">Deploy with <Highlightedtext text={" Absolute Confidence"} /> and speed</div>}
                        subheading={"Master version control, CI/CD, and deployment pipelines. Write clean, professional code that adheres to industry standards, setting you up for success."}
                        ctabtn1={{ text: "Continue Lesson", linkto: "/signup", active: true }}
                        ctabtn2={{ text: "Get a Preview", linkto: "/login", active: false }}
                        codeBlock={`// SkillUp: Deployment Pipeline YAML\nversion: 2.1\njobs:\n  build-and-test:\n    docker:\n      - image: cimg/node:20.1\n    steps:\n      - checkout\n      - run: npm install\n      - run: npm test\n  deploy:\n    requires: [build-and-test]\n    steps:\n      - run: npm run deploy-to-prod`}
                        codeColor={"text-caribbeangreen-300"}
                    />
                </motion.div>
            </motion.div>

            {/* Section Divider */}
            <motion.div variants={sectionVariants} className="h-[1px] w-full bg-richblack-700 my-10"></motion.div>

            {/* ========================================
              Section 2: Job-Ready Skills & Timeline
            ======================================== */}
            <motion.div variants={sectionVariants} className="bg-richblack-900 text-richblack-5">
                <div className="w-11/12 max-w-maxContent flex flex-col items-center justify-center gap-5 mx-auto pt-16 pb-16">
                    <div className="mb-10 flex flex-col md:flex-row justify-between gap-10 mt-10 lg:gap-0">
                        <div className="text-4xl font-bold lg:w-[45%] ">
                            <Highlightedtext text={"Get the skills"} /> you need for a <Highlightedtext text={"high-demand, future-proof job."} />
                        </div>
                        <div className="flex flex-col items-start gap-10 lg:w-[40%]">
                            <div className="text-lg text-richblack-300">
                                The job market is constantly evolving. **SkillUp** ensures you're
                                always ahead of the curve, equipping you with more than just
                                technical knowledge—you gain a competitive specialist mindset.
                            </div>
                            <div className="flex flex-row justify-start w-full">
                                <CTAButton active={true} linkto={"/contact"}>
                                    <div className="">Contact Sales</div>
                                </CTAButton>
                            </div>
                        </div>
                    </div>
                    
                    <TimelineSection />
                    <LearningLanguageSection />
                </div>
            </motion.div>

            {/* ========================================
              Section 3: Instructor, Reviews & Footer
            ======================================== */}
            <motion.div variants={sectionVariants} className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
                <InstructorSection />
                <h2 className="text-center text-5xl font-extrabold mt-20 mb-12 text-transparent bg-clip-text bg-gradient-to-r from-richblack-5 to-blue-200">
                    What Our Learners Said
                </h2>
                <ReviewSlider />
            </motion.div>

            <Footer />

        </motion.div>
    )
}

export default Home;
