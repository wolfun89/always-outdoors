const hamburger = document.querySelector(".hamburger-div");
const navLinks = document.querySelector(".main-nav");
const links = document.querySelectorAll(".main-nav li");

hamburger.addEventListener("click", () => {
	navLinks.classList.toggle("open");
})
