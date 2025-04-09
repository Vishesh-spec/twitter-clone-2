const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let tweets = [];

// Get all tweets
app.get("/tweets", (req, res) => {
    res.json(tweets);
});

// Post a new tweet
app.post("/tweets", (req, res) => {
    const { content } = req.body;
    if (!content.trim()) {
        return res.status(400).json({ error: "Tweet cannot be empty" });
    }
    const newTweet = { content, timestamp: new Date() };
    tweets.unshift(newTweet);
    res.status(201).json(newTweet);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});