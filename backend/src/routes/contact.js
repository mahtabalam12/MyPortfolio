import express from "express";
import Message from "../models/Message.js";

const router = express.Router();

// @route   POST /api/contact
// @desc    Submit a contact form message
router.post("/", async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Please enter name, email, and message" });
  }

  try {
    const newMessage = new Message({
      name,
      email,
      phone,
      subject,
      message
    });

    await newMessage.save();
    return res.status(201).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error saving contact message:", error.message);
    return res.status(500).json({ error: "Server error, please try again later" });
  }
});

export default router;
