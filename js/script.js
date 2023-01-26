// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// Ketika hamburger menu diclick
document.querySelector("#hamburger-menu").onclick = () => {
  console.log("Munculin hamburger menu");
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

// const searchBar = document.querySelector(".navbar .navbar-extra .searchbar");

// document.querySelector("#search").onclick = () => {
//   searchBar.classList.toggle("active");
// };

// animation search bar
// document.getElementById("search-input").classList.add("animate-input");

// JavaScript function to show search input on logo click
function showSearchInput() {
  var searchInput = document.getElementById("search-input");
  searchInput.classList.toggle("show-search-input");
  console.log("FunctionExecuted");
}
