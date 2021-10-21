// Om Murugan Thunai

let speech = document.querySelector(".speech");
let profileImage = document.querySelector(".profileImage");
let profileImageClass = document.querySelector("#profileImageClass");
let profileCarouselClass = document.querySelector("#profileCarouselClass");
let speakerIcon = document.querySelector("#speaker-icon");
let backgroundMusic = document.querySelector("#background-music");

document.body.onload = load();

profileImage.addEventListener("mouseenter", showSummary);
profileImage.addEventListener("mouseleave", hideSummary);
speakerIcon.addEventListener("click", speakerToggle);

function load() {
  backgroundMusic.play();
}

function speakerToggle() {
  let str = speakerIcon.src;
  let n = str.lastIndexOf("/");
  let result = str.substring(n + 1);
  if (result === "volume-up.svg") {
    speakerIcon.src = "./images/volume-mute.svg";
    backgroundMusic.pause();
  } else {
    speakerIcon.src = "./images/volume-up.svg";
    backgroundMusic.play();
  }
}

function showSummary() {
  speech.style.display = "block";
  profileImageClass.classList.remove("col-sm-3");
  profileCarouselClass.classList.remove("col-sm-9");
  profileImageClass.classList.add("col-sm-4");
  profileCarouselClass.classList.add("col-sm-8");
}
function hideSummary() {
  speech.style.display = "none";
  profileImageClass.classList.remove("col-sm-4");
  profileCarouselClass.classList.remove("col-sm-8");
  profileImageClass.classList.add("col-sm-3");
  profileCarouselClass.classList.add("col-sm-9");
}
