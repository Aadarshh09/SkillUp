import { motion } from "framer-motion";
import loginImg from "../assets/Images/login.webp";
import Template from "../components/core/HomePage/Auth/Template";

function Login() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full h-full"
    >
      <Template
        title={
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Welcome Back
          </motion.span>
        }
        description1={
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Build skills for today, tomorrow, and beyond.
          </motion.span>
        }
        description2={
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Education to future-proof your career.
          </motion.span>
        }
        image={loginImg} // image is static now
        formType="login"
      />
    </motion.div>
  );
}

export default Login;
