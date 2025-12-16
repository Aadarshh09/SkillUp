import React from "react";
import { FaStar } from "react-icons/fa";

import Footer from "../components/common/Footer";
import ContactDetails from "../components/contactPage/ContactDetails";
import ContactForm from "../components/contactPage/ContactForm";

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

            <p className="text-richblack-200 text-base h-28 leading-relaxed">“{r.review}”</p>

            <div className="mt-auto flex items-center border-t border-richblack-600/50 pt-4">
              <img src={r.avatar} className="w-12 h-12 rounded-full mr-3" />
              <p className="text-richblack-5 font-semibold">{r.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ========================= CONTACT PAGE ============================
const Contact = () => {
  return (
    <div className="mt-20 text-white">

      <div className="w-11/12 max-w-maxContent mx-auto flex flex-col lg:flex-row gap-10">
        <div className="lg:w-[40%]">
          <ContactDetails />
        </div>

        <div className="lg:w-[60%]">
          <ContactForm />
        </div>
      </div>

      <div className="w-11/12 max-w-maxContent mx-auto my-20 text-center">
        <h1 className="text-4xl font-semibold mb-8">Reviews from other learners</h1>
        <CustomReviewSlider />
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
