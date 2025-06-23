const API_KEY = "xxxxxxxxxxxxxxxxxxxxxxxx";
let searchQuery = ""; // dynamic keyword from search box
const maxResults = 3;
let inp = document.querySelector(".inpSearch");
let searchIcon = document.querySelector(".search-icon");
let thumbnail = document.querySelectorAll(".thumbnail");
let SongTitle = document.querySelectorAll(".SongTitle");
let description = document.querySelectorAll(".description");

let makeActiveImg = document.querySelector(".makeActiveImg");
let makeActiveTitle = document.querySelector(".makeActiveTitle");
let makeActiveDes = document.querySelector(".makeActiveDes");

let playIcon = document.querySelectorAll(".playSearched");

let activeAudio = document.querySelector(".activeAudio");





searchIcon.addEventListener("click", function () {
  let SongName = inp.value;
  inp.value = "";
  console.log(SongName);
  playSong(SongName);
});

async function playSong(SongName) {
  searchQuery = SongName;
  let data = await getSongs(searchQuery);

  //console.log(data);

  for (let i = 0; i < 3; i++) {
    description[i].innerText =
      data.items[i].snippet.channelTitle + " Channel...";
    let fullTitle = data.items[i].snippet.title;
    let cleanTitle = fullTitle.split(/[-|]/)[0].trim();
    SongTitle[i].innerText = cleanTitle;
    imgLink = data.items[i].snippet.thumbnails.high.url;
    thumbnail[i].setAttribute("src", imgLink); 

    playIcon[i].onclick = async () => {
      makeActiveImg.setAttribute("src", data.items[i].snippet.thumbnails.high.url);
      makeActiveTitle.innerText = SongTitle[i].innerText; 
      makeActiveDes.innerText =  description[i].innerText;
      let videoId = data.items[i].id.videoId;
      //console.log(activeAudio);
      //console.log(`https://www.youtube.com/embed/${videoId}`)
      //activeAudio.setAttribute("src", `https://www.youtube.com/embed/${videoId}`);

      activeAudio.setAttribute("src", data.audioUrl);
      activeAudio.play();

      const responseFromServer = await fetch(`http://localhost:5000/audio/${videoId}`);
      const dataFromServer = await responseFromServer.json();

    // Fetch audio stream URL from backend
    try {
      const response = await fetch(`http://localhost:5000/audio/${videoId}`);
      const result = await response.json();
      const audioUrl = result.audioUrl;
      document.querySelector("audio").setAttribute("src", audioUrl);
      document.querySelector("audio").play();
    } catch (error) {
      console.error("Failed to load audio:", error);
    }

    };
  }
}

async function getSongs(searchQuery) {
  try {
    let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${encodeURIComponent(
      searchQuery
    )}&maxResults=${maxResults}&key=${API_KEY}`;
    let res = await fetch(url); //returns a response
    let data = await res.json(); //returns an object
    return data;
  } catch (err) {
    console.log(`Error fecthed ${err}`);
  }
}


