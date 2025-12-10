const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// test data for news
let posts = [
  { id: 1, title: "Welcome to Football Fan Zone", body: "First post!" },
];

// GET /api/news  (for your News page)
app.get("/api/news", (req, res) => {
  res.json(posts);
});

// POST /api/contact  (for your Contact form)
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log("New contact message:", { name, email, message });
  res.status(201).json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`Backend server listening on http://localhost:4000`);
});
