const btn = document.querySelector(".btn-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const image = document.getElementById("abt-btm-img");
console.log(image);

const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
  document.body.classList.toggle("dark-theme");
  image.src = "assets/aboutBottom.png"; // Change this to the path of your dark theme image
} else if (currentTheme === "light") {
  document.body.classList.toggle("light-theme");
  image.src = "assets/abtbottomlite.png"; // Change this to the path of your light theme image
}

btn.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
    var theme = document.body.classList.contains("light-theme")
      ? "light"
      : "dark";
    image.src = theme === "light" ? "assets/aboutBottom.png" : "assets/abtbottomlite.png";
  } else {
    document.body.classList.toggle("dark-theme");
    var theme = document.body.classList.contains("dark-theme")
      ? "dark"
      : "light";
    image.src = theme === "dark" ? "assets/abtbottomlite.png" : "assets/aboutBottom.png";
  }
  localStorage.setItem("theme", theme);
});
