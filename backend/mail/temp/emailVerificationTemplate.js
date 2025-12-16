const otpTemplate = (otp, firstName) => {
  return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SkillUp OTP Verification</title>
  <style>
    body {
      background-color: #f4f6f8;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      margin: 0;
      padding: 0;
      color: #333;
    }

    .container {
      max-width: 600px;
      margin: 40px auto;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
      padding: 40px 30px;
      text-align: center;
    }

    h1 {
      color: #1a202c;
      font-size: 24px;
      margin-bottom: 20px;
    }

    p {
      font-size: 16px;
      line-height: 1.6;
      margin: 0 0 20px 0;
    }

    .otp {
      display: inline-block;
      padding: 18px 28px;
      background-color: #ffbf00;
      color: #000000;
      font-size: 22px;
      font-weight: bold;
      border-radius: 6px;
      letter-spacing: 2px;
      margin: 25px 0;
      text-decoration: none;
    }

    .footer {
      font-size: 14px;
      color: #888888;
      margin-top: 30px;
    }

    .footer a {
      color: #888888;
      text-decoration: none;
    }

    @media (max-width: 600px) {
      .container {
        padding: 30px 20px;
      }

      .otp {
        padding: 15px 22px;
        font-size: 20px;
      }
    }
  </style>
</head>

<body>
  <div class="container">
    <h1>Hello ${firstName || "User"},</h1>
    <p>Welcome to <strong>SkillUp</strong>! To complete your registration, please use the One-Time Password (OTP)
      below to verify your account.</p>
    <div class="otp">${otp}</div>
    <p>This OTP is valid for 5 minutes. If you did not request this email, you can safely ignore it.</p>
    <p>After verification, you will have full access to all SkillUp features.</p>
    <div class="footer">
      Need help? Contact us at <a href="mailto:support@skillup.com">support@skillup.com</a>.
    </div>
  </div>
</body>

</html>`;
};

module.exports = otpTemplate;
