const Razorpay = require("razorpay");

if (!process.env.RAZORPAY_KEY_ID) {
  throw new Error("Razorpay key missing from environment");
}

const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

module.exports = razorpayInstance;
