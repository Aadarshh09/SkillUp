exports.contactUsEmail = (
  email,
  firstName,
  lastName,
  message,
  phoneNo,
  countryCode
) => {
  return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SkillUp Contact Form Confirmation</title>
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
      padding: 30px;
      text-align: center;
    }

    .logo {
      max-width: 180px;
      margin-bottom: 20px;
    }

    h1 {
      color: #1a202c;
      font-size: 22px;
      margin-bottom: 20px;
    }

    p {
      font-size: 16px;
      line-height: 1.6;
      margin: 0 0 15px 0;
    }

    .details {
      text-align: left;
      background-color: #f9f9f9;
      padding: 15px;
      border-radius: 6px;
      margin: 20px 0;
      font-size: 15px;
      color: #555;
    }

    .footer {
      font-size: 14px;
      color: #888888;
      margin-top: 25px;
    }

    .footer a {
      color: #888888;
      text-decoration: none;
    }

    @media (max-width: 600px) {
      .container {
        padding: 20px;
      }
    }
  </style>
</head>

<body>
  <div class="container">
    <h1>Contact Form Confirmation</h1>
    <p>Dear ${firstName} ${lastName},</p>
    <p>Thank you for reaching out to SkillUp. We have received your message and will respond as soon as possible.</p>
    <div class="details">
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone Number:</strong> ${countryCode} ${phoneNo}</p>
      <p><strong>Message:</strong> ${message}</p>
    </div>
    <p>We appreciate your interest and will get back to you shortly.</p>
    <div class="footer">
      Need immediate assistance? Contact us at <a href="mailto:support@skillup.com">support@skillup.com</a>.
    </div>
  </div>
</body>

</html>`;
};
