// 🌸 LOVE QUOTES BY ROSE COLOR
const LOVE_QUOTES = {
  red: "Like this red rose, my love for you only grows stronger with time ❤️",
  pink: "This pink rose holds all the gentle moments where my heart smiled because of you 💕",
  white: "This white rose promises a love that is calm, honest, and eternal 🤍"
};

// 🎵 BACKEND MUSIC CONFIG
const MUSIC_FILE = "ros1.mpeg";

document.getElementById("giveRoseBtn").addEventListener("click", giveRose);

function giveRose() {
  const name = document.getElementById("nameInput").value || "My Love";
  const color = document.getElementById("roseColor").value;

  // Switch UI
  document.getElementById("formSection").classList.add("hidden");
  document.getElementById("roseSection").classList.remove("hidden");

  // Name + glow text
  const nameEl = document.getElementById("herName");
  nameEl.textContent = name;

  const glowColors = {
    red: "crimson",
    pink: "hotpink",
    white: "white"
  };
  nameEl.style.textShadow = `0 0 25px ${glowColors[color]}`;

  // 🌸 Quote
  document.getElementById("loveQuote").textContent =
    LOVE_QUOTES[color] || "This rose blooms only for you 💖";

  // 🌟 Rose background glow
  const glowBox = document.getElementById("roseGlow");
  glowBox.className = "rose-glow"; // reset
  glowBox.classList.add(`glow-${color}`);

  // 🎵 Background music (plays fully)
  const music = document.getElementById("bgMusic");
  music.pause();
  music.currentTime = 0;
  music.src = MUSIC_FILE;
  music.load();
  music.play().catch(() => {});
}