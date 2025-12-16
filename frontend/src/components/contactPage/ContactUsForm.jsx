import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"

import CountryCode from "../../data/countrycode.json"
import { apiConnector } from "../../services/apiconnector"
import { contactusEndpoint } from "../../services/apis"

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm()

  const submitContactForm = async (data) => {
    try {
      setLoading(true)
      await apiConnector("POST", contactusEndpoint.CONTACT_US_API, data)
      toast.success("Message sent successfully!")
      setLoading(false)
    } catch (err) {
      toast.error("Something went wrong. Try again!")
      setLoading(false)
    }
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        firstName: "",
        lastName: "",
        message: "",
        phoneNo: "",
      })
    }
  }, [reset, isSubmitSuccessful])

  return (
    <form
      onSubmit={handleSubmit(submitContactForm)}
      className="flex flex-col gap-6 w-[80%] mx-auto"
    >
      {/* Name fields */}
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label className="lable-style">First Name *</label>
          <input
            type="text"
            placeholder="Enter first name"
            className="form-style"
            {...register("firstName", { required: true })}
          />
          {errors.firstName && <span className="error-text">Required</span>}
        </div>

        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label className="lable-style">Last Name *</label>
          <input
            type="text"
            placeholder="Enter last name"
            className="form-style"
            {...register("lastName")}
          />
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label className="lable-style">Email *</label>
        <input
          type="email"
          placeholder="Enter email"
          className="form-style"
          {...register("email", { required: true })}
        />
        {errors.email && <span className="error-text">Enter valid email</span>}
      </div>

      {/* Phone */}
      <div className="flex flex-col gap-2">
        <label className="lable-style">Phone Number *</label>

        <div className="flex justify-between gap-3">
          <select
            className="form-style w-[100px]"
            {...register("countrycode", { required: true })}
          >
            {CountryCode.map((ele, idx) => (
              <option key={idx} value={ele.code}>
                {ele.code} - {ele.country}
              </option>
            ))}
          </select>

          <input
            type="number"
            placeholder="12345 67890"
            className="form-style flex-1"
            {...register("phoneNo", {
              required: "Phone number required",
              minLength: { value: 10, message: "Invalid number" },
              maxLength: { value: 12, message: "Invalid number" },
            })}
          />
        </div>

        {errors.phoneNo && (
          <span className="error-text">{errors.phoneNo.message}</span>
        )}
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label className="lable-style">Message *</label>
        <textarea
          rows="6"
          placeholder="Enter your message"
          className="form-style"
          {...register("message", { required: true })}
        />
        {errors.message && <span className="error-text">Required</span>}
      </div>

      {/* Button */}
      <button
        disabled={loading}
        type="submit"
        className={`rounded-md bg-yellow-50 px-6 py-3 font-bold text-black 
                  shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)]
                  hover:scale-95 transition-all duration-200 disabled:bg-richblack-500`}
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  )
}

export default ContactUsForm
