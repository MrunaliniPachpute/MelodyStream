const express = require("express");
const cors = require("cors");
const { execFile } = require("child_process");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello! Use /audio/:videoId to get an audio URL.");
});

app.get("/audio/:videoId", (req, res) => {
  const videoId = req.params.videoId;
  const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;

  // Use execFile to bypass shell and run .exe directly
  execFile("./yt-dlp.exe", ["-f", "bestaudio[ext=m4a]", "--get-url", youtubeUrl], (err, stdout, stderr) => {
    console.log("✅ yt-dlp stdout:", stdout);
    if (stderr) console.error("⚠️ yt-dlp stderr:", stderr);

    if (err) {
      console.error("❌ execFile error:", err);
      return res.status(500).json({ error: stderr || err.message });
    }

    const audioUrl = stdout.trim();
    res.json({ audioUrl });
  });
});

app.listen(5000, () => {
  console.log("✅ Server running on http://localhost:5000");
});
