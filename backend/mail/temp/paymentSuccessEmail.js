exports.paymentSuccessEmail = (name, amount, orderId, paymentId) => {
  return `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>SkillUp - Payment Confirmation</title>
      <style>
          body {
              background-color: #f5f7fa;
              margin: 0;
              padding: 0;
              font-family: Arial, Helvetica, sans-serif;
              color: #222;
          }
  
          .container {
              max-width: 600px;
              background: #ffffff;
              margin: 40px auto;
              padding: 30px;
              border-radius: 14px;
              box-shadow: 0 8px 24px rgba(0,0,0,0.1);
              text-align: center;
          }
  
          .heading {
              font-size: 24px;
              font-weight: 700;
              margin-bottom: 20px;
              color: #111827;
          }
  
          .body-text {
              font-size: 16px;
              line-height: 1.6;
              color: #374151;
              margin-bottom: 20px;
          }
  
          .highlight {
              font-weight: 700;
              color: #000;
          }
  
          .footer {
              margin-top: 30px;
              font-size: 14px;
              color: #6b7280;
          }
  
          .footer a {
              color: #111;
              text-decoration: none;
              font-weight: bold;
          }
      </style>
  </head>
  
  <body>
      <div class="container">
  
          <!-- Heading -->
          <div class="heading">Payment Successful</div>
  
          <!-- Body -->
          <div class="body-text">
              <p>Hi <span class="highlight">${name}</span>,</p>
  
              <p>Your payment has been successfully processed.</p>
  
              <p>
                  Amount Paid: <span class="highlight">₹${amount}</span><br />
                  Payment ID: <span class="highlight">${paymentId}</span><br />
                  Order ID: <span class="highlight">${orderId}</span>
              </p>
  
              <p>
                  Your course access has been activated.  
                  You can now continue your SkillUp learning journey.
              </p>
          </div>
  
          <!-- Footer -->
          <div class="footer">
              For any support, feel free to contact us at  
              <a href="mailto:support@skillup.com">support@skillup.com</a>.  
              We're always here to help!
          </div>
      </div>
  </body>
  
  </html>`;
};
