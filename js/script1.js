const card = document.querySelectorAll(".card");
// const card1 = document.querySelector(".container");

for (let i = 0; i < card.length; i++) {
  card[i].onclick = function () {
    card[i].classList.toggle("is-flipped");
  };
}

const banner = document.getElementsByClassName("banner")[0];
const blocks = document.getElementsByClassName("blocks");
for (let i = 0; i < 400; i++) {
  banner.innerHTML += "<div class='blocks'></div>";
  const duration = Math.random() * 5;
  blocks[i].style.animationDuration = duration + "s";
}

const hamburger = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
