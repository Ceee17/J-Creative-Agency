// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// Ketika hamburger menu diclick
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik selain hamburger nya buat ilangin menunya
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Toggle class buat search bar

const searchBar = document.querySelector(".navbar .navbar-extra .searchbar");

document.querySelector("#search").onclick = () => {
  searchBar.classList.toggle("active");
};
