# 🎵 MelodyStream

**MelodyStream** is a lightweight web-based music streaming app built using the **YouTube Data API v3** and a custom **Node.js + yt-dlp** backend. It allows users to search YouTube using keywords, retrieves video IDs, fetches direct audio stream URLs via the server, and plays audio in-browser using the `<audio>` tag—no iframes!

> ⚠️ **Not deployed publicly** — this project was built purely for learning API integration and backend streaming techniques.

---
| Section                                        | Description                                                                                  |
| --------------------------------------------- | -------------------------------------------------------------------------------------------- |
| [🎯 Features](#features)                      | Search any song via YouTube Data API, show thumbnails & titles, and play audio directly.     |
| [🛠️ Tech Stack](#tech-stack)                 | Frontend: HTML, CSS, JS (for learning DOM & fetch)<br>Backend: Node.js + Express + yt-dlp<br>API: YouTube Data API v3 |
| [🧭 How It Works](#how-it-works)              | 1. User searches → YouTube API returns video IDs<br>2. ID sent to backend → yt-dlp fetches audio<br>3. Audio URL streamed to `<audio>` tag and played |
| [📁 Project Structure](#project-structure)    | File/folder breakdown                                                                        |
| [🚀 Getting Started](#getting-started)        | Setup instructions for local use                                                             |
| [🎬 Demo](#demo)                              | Video walkthrough                                                                            |
| [📄 License](#license)                        | Usage rights and license type                                                                |

---
![Demo Video](./Stramify.mp4)





