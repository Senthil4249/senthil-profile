// Om Murugan Thunai

let speech = document.querySelector(".speech");
let profileImage = document.querySelector(".profileImage");
let profileImageClass = document.querySelector("#profileImageClass");
let profileCarouselClass = document.querySelector("#profileCarouselClass");
profileImage.addEventListener("mouseenter", showSummary);
profileImage.addEventListener("mouseleave", hideSummary);

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
