import React from "react"
import ContactUsForm from "./ContactUsForm"
import { motion } from "framer-motion"

const ContactForm = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="border border-richblack-700 shadow-xl bg-richblack-800/60 backdrop-blur-xl text-richblack-300 rounded-xl p-7 lg:p-12 flex flex-col gap-4"
    >
      <h1 className="text-4xl font-semibold text-richblack-5 leading-tight">
        Got an idea? We’ve got the skills.  
        <br /> Let’s build something great!
      </h1>

      <p className="text-richblack-200">
        Share your details and we’ll get back to you shortly.
      </p>

      <div className="mt-6">
        <ContactUsForm />
      </div>
    </motion.div>
  )
}

export default ContactForm
