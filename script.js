const forward = document.querySelector("#forward");
const backward = document.querySelector("#backward");
const source = document.querySelector("#audioPlayer");
const artistPic = document.querySelector("#artistPic");
const artistName = document.querySelector("#artistName");

const playList = [
  {
    name: "J.Cole",
    image: "images/j-cole-real.jpeg",
    songLinks: [
      "Songs/J_cole_January_28th_(thinkNews.com.ng).mp3",
      "Songs/J_cole_Fire_Squad_(thinkNews.com.ng).mp3",
      "Songs/J_cole_Love_Yourz_(thinkNews.com.ng).mp3",
      "Songs/J_cole_03_Adolescence_(thinkNews.com.ng).mp3",
    ],
  },

  {
    name: "Future",
    image: "images/future-baddest.jpg",
    songLinks: [
      "Songs/Future_-_Bust_Down_Soloplay.ng.mp3",
      "Songs/Future-Mask-Off-via-Naijafinix.com_.mp3",
    ],
  },
  {
    name: "Wizkid",
    image: "images/wizkid.jpg",
    songLinks: [
      "Songs/Wizkid_ft_Drake_-_Come_Closer.mp3",
      "Songs/WizKid-African-Bad-Gyal-featChris-Brown.mp3",
    ],
  },
];

function playSong() {
  let currentSong = playList[nextSong];
  let currentSongLink = currentSong.songLinks[songLinkIndex];
  source.src = currentSongLink;
  artistName.innerText = playList[nextSong].name;
  artistPic.src = playList[nextSong].image;
}

let nextSong = 0;
let songLinkIndex = 0;

const next = () => {
  songLinkIndex++;
  if (songLinkIndex < playList[nextSong].songLinks.length - 1) {
    playSong();
  } else {
    songLinkIndex = 0;
    nextSong++;
    if (nextSong >= playList.length) {
nextSong = 0;
    }
  }
  playSong();

  console.log(`I am nextSong ${nextSong}`)
  console.log(`I am songLinkIndex ${songLinkIndex}`)
};

forward.addEventListener("click", next);
const prevSong = () => {
  songLinkIndex--;
  if (songLinkIndex < 0) {
    nextSong--;
    if (nextSong < 0) {
      nextSong = playList.length - 1;
    }
    songLinkIndex = playList[nextSong].songLinks.length - 1;
  }
  playSong();
  console.log(`I am nextSong ${nextSong}`);
  console.log(`I am songLinkIndex ${songLinkIndex}`);
};

backward.addEventListener("click", prevSong);
