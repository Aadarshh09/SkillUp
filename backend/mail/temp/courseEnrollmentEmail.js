exports.courseEnrollmentEmail = (courseName, name) => {
  return `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>SkillUp - Course Enrollment Confirmation</title>
  
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
              color: #111;
          }
  
          .cta {
              display: inline-block;
              background: #FFC300;
              color: #111;
              padding: 12px 28px;
              border-radius: 8px;
              text-decoration: none;
              font-size: 16px;
              font-weight: bold;
              margin-top: 10px;
              transition: 0.2s ease-in-out;
          }
  
          .cta:hover {
              background: #ffcf3e;
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
          <div class="heading">Course Enrollment Successful</div>
  
          <!-- Body Text -->
          <div class="body-text">
              <p>Hi <span class="highlight">${name}</span>,</p>
  
              <p>
                  Congratulations! You have successfully enrolled in the course  
                  <span class="highlight">"${courseName}".</span>
              </p>
  
              <p>
                  Your learning journey begins now. Access your dashboard to start the course, track progress, and explore your new learning path.
              </p>
  
              <!-- CTA Button -->
              <a class="cta" href="#">Go to Dashboard</a>
          </div>
  
          <!-- Footer -->
          <div class="footer">
              If you need any help, contact us at  
              <a href="mailto:support@skillup.com">support@skillup.com</a>.  
              We're here to support your growth!
          </div>
      </div>
  </body>
  
  </html>`;
};
