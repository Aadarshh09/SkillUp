const Razorpay = require("razorpay");

console.log(
  "Razorpay ENV →",
  process.env.RAZORPAY_KEY_ID,
  process.env.RAZORPAY_KEY_SECRET
);

const razorpay = new Razorpay({
  key_id: String(process.env.RAZORPAY_KEY_ID),
  key_secret: String(process.env.RAZORPAY_KEY_SECRET),
});

module.exports = razorpay;
