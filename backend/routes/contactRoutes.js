import express from "express";
import Message from "../models/Message.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newMsg = new Message(req.body);
    await newMsg.save();
    res.status(201).json({ message: "Message saved successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Failed to save message" });
  }
});

export default router;