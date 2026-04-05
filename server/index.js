const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `📩 New Portfolio Message from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:auto;padding:24px;background:#0d1117;color:#c9d1d9;border-radius:8px">
          <h2 style="color:#00e5ff;margin-bottom:16px">New Contact Form Submission</h2>
          <p><strong style="color:#a0b0c8">Name:</strong> ${name}</p>
          <p><strong style="color:#a0b0c8">Email:</strong> <a href="mailto:${email}" style="color:#00e5ff">${email}</a></p>
          <hr style="border-color:#21262d;margin:16px 0"/>
          <p><strong style="color:#a0b0c8">Message:</strong></p>
          <p style="line-height:1.6">${message}</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
require('dotenv').config();

