# 🎵 AudioStreamX (or *YourChosenName*)

**AudioStreamX** is a lightweight web-based music streaming app built using the **YouTube Data API v3** and a custom **Node.js + yt-dlp** backend. It allows users to search YouTube using keywords, retrieves video IDs, fetches direct audio stream URLs via the server, and plays audio in-browser using the `<audio>` tag—no iframes!

> ⚠️ **Not deployed publicly** — this project was built purely for learning API integration and backend streaming techniques.

---

## 🔍 Table of Contents

1. [Features](#features)  
2. [Tech Stack](#tech-stack)  
3. [How It Works](#how-it-works)  
4. [Project Structure](#project-structure)  
5. [Getting Started](#getting-started)  
6. [Security & API Key](#security--api-key)  
7. [Demo](#demo)  
8. [Future Enhancements](#future-enhancements)  
9. [License](#license)

---

## 🧰 Features

- Search YouTube via keywords and display thumbnail and title results  
- Retrieve video IDs and fetch direct audio URLs server-side using **yt-dlp**  
- Play audio via `<audio>` in the browser smoothly (no YouTube embed)  
- Simple responsive UI with basic play/pause controls

---

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, Vanilla JavaScript  
- **Backend**: Node.js, Express, yt-dlp (`execFile`), CORS  
- **API**: YouTube Data API v3 (for video search)

---

## 🧭 How It Works

1. User enters a search term and clicks “Search”  
2. Frontend fetches top 3 videos using the YouTube Data API  
3. Videos are displayed with thumbnails and play buttons  
4. When a play button is clicked, the app:
   - Sends the video ID to the backend `/audio/:videoId` endpoint  
   - Server runs `yt-dlp` to fetch the direct audio URL  
   - Returns the streamable URL to the frontend  
5. Frontend sets the URL on `<audio>` and plays it  

---

[![Watch the demo](https://img.youtube.com/vi/YOUR_VIDEO_ID/0.jpg)](https://youtu.be/YOUR_VIDEO_ID)

