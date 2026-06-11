import express from "express";
import Message from "../models/Message.js";
import nodemailer from "nodemailer";

const router = express.Router();

// @route   POST /api/contact
// @desc    Submit a contact form message
router.post("/", async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Please enter name, email, and message" });
  }

  try {
    // 1. Save to Database
    const newMessage = new Message({
      name,
      email,
      phone,
      subject,
      message
    });
    await newMessage.save();

    // 2. Send Email if credentials are set in .env
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const receiverEmail = process.env.RECEIVER_EMAIL || "alammahtabph@gmail.com";

    if (emailUser && emailPass) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: emailUser,
          pass: emailPass
        }
      });

      const mailOptions = {
        from: emailUser,
        to: receiverEmail,
        subject: `New Portfolio Message: ${subject || "Contact Form Submission"}`,
        html: `
          <h3>New Contact Message from Portfolio Website</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Nodemailer Error sending email:", error.message);
        } else {
          console.log("Email sent successfully:", info.response);
        }
      });
    } else {
      console.log("Email credentials not configured in .env. Skipping email dispatch.");
    }

    return res.status(201).json({ 
      success: true, 
      message: "Message sent successfully!" 
    });
  } catch (error) {
    console.error("Error saving contact message:", error.message);
    return res.status(500).json({ error: "Server error, please try again later" });
  }
});

export default router;
