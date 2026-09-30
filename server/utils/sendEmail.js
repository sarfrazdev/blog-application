import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_LOGIN,
    pass: process.env.EMAIL_PASS,
  },
});


export const sendOTPEmail = async (email, otp) => {
  await transporter.sendMail({
    from: `"My Website" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Verify Your Email",

    html: `
      <div style="font-family: Arial; padding: 20px;">

        <h2>Email Verification</h2>

        <p>Your OTP for registration is:</p>

        <h1>${otp}</h1>

        <p>
          This OTP is valid for 5 minutes.
        </p>

        <p>
          If you did not request this OTP,
          please ignore this email.
        </p>

      </div>
    `,
  });
};

// export const sendWelcomeEmail = async (email, name) => {
//   await transporter.sendMail({
//     from: `"My Website" <${process.env.EMAIL_USER}>`,
//     to: email,
//     subject: "Welcome to Our Website 🎉",

//     html: `
//       <div style="font-family: Arial; padding: 20px;">

//         <h1>Welcome ${name}! 🎉</h1>

//         <p>
//           Your registration has been completed successfully.
//         </p>

//         <p>
//           Your email has been verified.
//         </p>

//         <h2>Welcome to our website ❤️</h2>

//         <p>
//           We are happy to have you with us.
//         </p>

//         <p>
//           You can now login and start using our website.
//         </p>

//         <p>
//           Thank you for joining us!
//         </p>

//       </div>
//     `,
//   });
// };
export const sendWelcomeEmail = async (email, name) => {
  try {
    console.log("Sending welcome email to:", email);

    const info = await transporter.sendMail({
      from: `"My Website" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Welcome to Our Website 🎉",
      html: `
        <div style="font-family: Arial; padding: 20px;">
          <h1>Welcome ${name}! 🎉</h1>

          <p>Your registration has been completed successfully.</p>

          <p>Your email has been verified.</p>

          <h2>Welcome to our website ❤️</h2>

          <p>You can now login and start using our website.</p>

          <p>Thank you for joining us!</p>
        </div>
      `,
    });

    console.log("WELCOME MAIL SENT:", info.messageId);

    return info;

  } catch (error) {
    console.error("WELCOME MAIL ERROR:", error);
    throw error;
  }
};