const express = require("express");
const crypto = require("crypto");
const db = require("./db");

const router = express.Router();

router.post("/submit", async (req, res) => {
  try {
    const { email, message } = req.body;

    if (!email || !message) {
      return res.status(400).json({ message: "email and message are required" });
    }

    const enquiryId = crypto.randomUUID();

    await db.query(
      "INSERT INTO enquiries (enquiry_id, email, message) VALUES ($1, $2, $3)",
      [enquiryId, email, message]
    );

    res.status(201).json({ message: "Enquiry submitted", enquiry_id: enquiryId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to submit enquiry" });
  }
});

module.exports = router;
