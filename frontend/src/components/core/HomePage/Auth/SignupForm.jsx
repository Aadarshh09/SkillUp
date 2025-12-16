import { useState, useEffect, useRef } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { sendOtp } from "../../../../services/operations/authAPI";
import { setSignupData } from "../../../../slices/authSlice";
import { ACCOUNT_TYPE } from "../../../../utils/constants";

function SignupForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [stage, setStage] = useState("form"); // form → success → otp

  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.STUDENT);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { firstName, lastName, email, password, confirmPassword } = formData;

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // Password Strength Meter
  const [strength, setStrength] = useState(0);

  useEffect(() => {
    let s = 0;
    if (password.length >= 6) s++;
    if (/[A-Z]/.test(password)) s++;
    if (/\d/.test(password)) s++;
    if (/[^A-Za-z0-9]/.test(password)) s++;
    setStrength(s);
  }, [password]);

  // Handle change
  const handleOnChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle submit
  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    // Start success animation
    setStage("success");

    // After animation, trigger OTP page
    setTimeout(() => {
      const signupData = { ...formData, accountType };
      dispatch(setSignupData(signupData));
      dispatch(sendOtp(email, navigate));
      setStage("otp");
    }, 1200);
  };

  return (
    <AnimatePresence mode="wait">
      {/* ========================= FORM ================================= */}
      {stage === "form" && (
        <motion.div
          key="form"
          initial={{ x: 180, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -180, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="
            w-full flex flex-col gap-6 p-8 rounded-xl
            bg-white/5 backdrop-blur-xl border border-white/10 
            shadow-[0_4px_24px_rgba(0,0,0,0.30)]
          "
        >
          {/* Animated TABS */}
          <div className="flex bg-richblack-800 rounded-md overflow-hidden">
            {["Student", "Instructor"].map((tab) => {
              const active =
                tab === "Student"
                  ? ACCOUNT_TYPE.STUDENT
                  : ACCOUNT_TYPE.INSTRUCTOR;

              return (
                <motion.button
                  key={tab}
                  onClick={() => setAccountType(active)}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    flex-1 py-3 text-center text-sm font-semibold
                    transition-all duration-300
                    ${
                      active === accountType
                        ? "bg-yellow-400 text-black"
                        : "text-richblack-100 hover:bg-white/10"
                    }
                  `}
                >
                  {tab}
                </motion.button>
              );
            })}
          </div>

          {/* FORM */}
          <form onSubmit={handleOnSubmit} className="flex flex-col gap-5">
            <div className="flex gap-4">
              <InputField
                label="First Name"
                name="firstName"
                value={firstName}
                onChange={handleOnChange}
                placeholder="firstName"
              />
              <InputField
                label="Last Name"
                name="lastName"
                value={lastName}
                onChange={handleOnChange}
                placeholder="lastName"
              />
            </div>

            <InputField
              label="Email Address"
              name="email"
              type="email"
              value={email}
              onChange={handleOnChange}
              placeholder="you@email.com"
            />

            <PasswordField
              label="Create Password"
              name="password"
              value={password}
              onChange={handleOnChange}
              show={showPassword}
              toggle={() => setShowPassword((p) => !p)}
              placeholder="Enter password"
            />

            {/* YELLOW PASSWORD STRENGTH BAR */}
            <div className="flex gap-1 mt-[-4px]">
              {[1, 2, 3, 4].map((lvl) => (
                <div
                  key={lvl}
                  className={`h-[6px] flex-1 rounded-full transition-all duration-300 ${
                    strength >= lvl ? "bg-yellow-300" : "bg-richblack-700"
                  }`}
                />
              ))}
            </div>

            <PasswordField
              label="Confirm Password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleOnChange}
              show={showConfirm}
              toggle={() => setShowConfirm((p) => !p)}
              placeholder="Confirm password"
            />

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.2 }}
              type="submit"
              className="
                bg-yellow-50 text-black font-semibold rounded-md py-3
                shadow-lg hover:shadow-yellow-300/40 transition-all
              "
            >
              Create Account
            </motion.button>
          </form>
        </motion.div>
      )}

      {/* ========================= SUCCESS ================================= */}
      {stage === "success" && (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center gap-4 text-white pt-6 pb-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-24 h-24 rounded-full border border-yellow-400 bg-yellow-300/20 flex items-center justify-center"
          >
            <span className="text-yellow-300 text-4xl">✓</span>
          </motion.div>
          <p className="text-lg">Sending OTP...</p>
        </motion.div>
      )}

      {/* ========================= OTP SCREEN =============================== */}
      {stage === "otp" && <OtpScreen />}
    </AnimatePresence>
  );
}

export default SignupForm;

/* =====================================================
   REUSABLE INPUT COMPONENTS
===================================================== */

function InputField({ label, name, type = "text", value, placeholder, onChange }) {
  return (
    <label className="w-full group">
      <p className="text-sm text-richblack-5 mb-1 group-focus-within:text-yellow-50">
        {label} <sup className="text-pink-200">*</sup>
      </p>
      <motion.input
        whileFocus={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        required
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full bg-richblack-800 text-white rounded-md p-3 shadow-inner focus:outline-none border border-transparent focus:border-yellow-50"
      />
    </label>
  );
}

function PasswordField({ label, name, value, placeholder, show, toggle, onChange }) {
  return (
    <label className="relative w-full group">
      <p className="text-sm text-richblack-5 mb-1 group-focus-within:text-yellow-50">
        {label} <sup className="text-pink-200">*</sup>
      </p>
      <motion.input
        whileFocus={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        required
        type={show ? "text" : "password"}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full bg-richblack-800 text-white rounded-md p-3 pr-12 shadow-inner focus:outline-none border border-transparent focus:border-yellow-50"
      />
      <span className="absolute right-3 top-[42px] cursor-pointer" onClick={toggle}>
        {show ? <AiOutlineEyeInvisible fontSize={22} /> : <AiOutlineEye fontSize={22} />}
      </span>
    </label>
  );
}


function OtpScreen() {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const refs = useRef([]);

  const handleChange = (v, i) => {
    if (!/^[0-9]?$/.test(v)) return;
    const copy = [...otp];
    copy[i] = v;
    setOtp(copy);
    if (v && i < 5) refs.current[i + 1].focus();
  };

  const handleBackspace = (e, i) => {
    if (e.key === "Backspace" && !otp[i] && i > 0) refs.current[i - 1].focus();
  };

  return (
    <motion.div
      key="otp"
      initial={{ x: 180, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -180, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center text-white"
    >
      <h2 className="text-lg mb-3">Enter OTP</h2>

      <div className="flex gap-3 mt-3">
        {otp.map((d, i) => (
          <input
            key={i}
            maxLength={1}
            ref={(el) => (refs.current[i] = el)}
            onChange={(e) => handleChange(e.target.value, i)}
            onKeyDown={(e) => handleBackspace(e, i)}
            className="w-12 h-12 rounded-md bg-richblack-800 text-center text-xl border border-white/20 focus:border-yellow-400 outline-none"
          />
        ))}
      </div>
    </motion.div>
  );
}
