import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { login } from "../../../../services/operations/authAPI";

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const { email, password } = formData;

  const handleOnChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password, navigate));
  };

  return (
    <motion.form
      onSubmit={handleOnSubmit}
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="mt-6 w-full flex flex-col gap-y-6 p-8 rounded-xl 
                 bg-white/5 backdrop-blur-xl border border-white/10 
                 shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
    >
      {/* Email */}
      <label className="relative w-full group">
        <p className="text-richblack-5 mb-1 text-sm group-focus-within:text-yellow-50 transition-all">
          Email Address <sup className="text-pink-200">*</sup>
        </p>

        <motion.input
          whileFocus={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          required
          type="email"
          name="email"
          value={email}
          onChange={handleOnChange}
          placeholder="Enter your email"
          className="w-full bg-richblack-800 text-richblack-5 rounded-md p-3
                     shadow-inner focus:outline-none border border-transparent
                     focus:border-yellow-50 transition-all"
        />
      </label>

      {/* Password */}
      <label className="relative w-full group">
        <p className="text-richblack-5 mb-1 text-sm group-focus-within:text-yellow-50 transition-all">
          Password <sup className="text-pink-200">*</sup>
        </p>

        <motion.input
          whileFocus={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          required
          type={showPassword ? "text" : "password"}
          name="password"
          value={password}
          onChange={handleOnChange}
          placeholder="Enter your password"
          className="w-full bg-richblack-800 text-richblack-5 rounded-md p-3 pr-12
                     shadow-inner focus:outline-none border border-transparent
                     focus:border-yellow-50 transition-all"
        />

        {/* Eye Icon */}
        <span
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-[42px] cursor-pointer"
        >
          {showPassword ? (
            <AiOutlineEyeInvisible fontSize={23} color="#AFB2BF" />
          ) : (
            <AiOutlineEye fontSize={23} color="#AFB2BF" />
          )}
        </span>

        {/* Forgot password */}
        <Link to="/forgot-password">
          <p className="mt-1 text-xs text-blue-100 hover:text-blue-200 transition">
            Forgot Password?
          </p>
        </Link>
      </label>

      {/* Submit Button */}
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        type="submit"
        className="bg-yellow-50 text-black font-semibold rounded-md py-3 
                   shadow-lg hover:shadow-yellow-500/30 transition-all"
      >
        Sign In
      </motion.button>
    </motion.form>
  );
}

export default LoginForm;
