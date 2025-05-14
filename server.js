const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/mindmosaic", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Schema and Model
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});
const moodSchema = new mongoose.Schema({
  userId: String,
  mood: String,
  note: String,
  date: { type: Date, default: Date.now },
});
const User = mongoose.model("User", userSchema);
const Mood = mongoose.model("Mood", moodSchema);

// Routes
app.post("/api/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = new User({ username, password });
    await user.save();
    res.status(201).send("User registered");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (user) {
    res.send("Login successful");
  } else {
    res.status(401).send("Invalid credentials");
  }
});

app.post("/api/mood", async (req, res) => {
  const { userId, mood, note } = req.body;
  try {
    const entry = new Mood({ userId, mood, note });
    await entry.save();
    res.status(201).send("Mood entry saved");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.get("/api/moods/:userId", async (req, res) => {
  const moods = await Mood.find({ userId: req.params.userId });
  res.json(moods);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
