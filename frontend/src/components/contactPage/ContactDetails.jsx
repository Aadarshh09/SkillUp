import React from "react"
import { motion } from "framer-motion"
import { BiWorld } from "react-icons/bi"
import { IoCall } from "react-icons/io5"
import { HiChatBubbleLeftRight } from "react-icons/hi2"

const contactDetails = [
  {
    icon: HiChatBubbleLeftRight,
    heading: "Chat With Us",
    description: "Our friendly team is here to help you anytime.",
    details: "info@skillup.com",
  },
  {
    icon: BiWorld,
    heading: "Visit Us",
    description: "Come and meet us at our office HQ.",
    details: "XYZ-City, XYZ-Country",
  },
  {
    icon: IoCall,
    heading: "Call Us",
    description: "Mon - Fri • 8AM to 5PM",
    details: "+91 XXXXXXXXXX",
  },
]

const ContactDetails = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col gap-6 rounded-xl bg-richblack-800/60 backdrop-blur-xl p-6 border border-richblack-700"
    >
      {contactDetails.map((item, idx) => (
        <motion.div
          key={idx}
          whileHover={{ scale: 1.02 }}
          className="p-4 rounded-lg bg-richblack-900/40 border border-richblack-700 flex flex-col gap-2"
        >
          <div className="flex items-center gap-3">
            <item.icon size={28} className="text-yellow-50" />
            <h1 className="text-xl font-semibold text-richblack-5">
              {item.heading}
            </h1>
          </div>

          <p className="text-sm text-richblack-200">{item.description}</p>

          <p className="text-richblack-100 font-semibold">{item.details}</p>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default ContactDetails
