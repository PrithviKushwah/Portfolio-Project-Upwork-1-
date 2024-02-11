const btn = document.querySelector(".btn-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const abt_btm_img = document.getElementById("abt-btm-img");
const abt_line = document.getElementById("abt-line");


const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
  document.body.classList.toggle("dark-theme");
  abt_btm_img.src = "assets/aboutBottom.png"; 
  abt_line.src = "assests/abtline.png";
} else if (currentTheme === "light") {
  document.body.classList.toggle("light-theme");
  abt_btm_img.src = "assets/abtbottomlite.png"; 
  abt_line.src = "assets/abtlinelight.png";
}

btn.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
    var theme = document.body.classList.contains("light-theme")
      ? "light"
      : "dark";
      abt_btm_img.src = theme === "light" ? "assets/aboutBottom.png" : "assets/abtbottomlite.png";
      abt_line.src = theme === "light" ? "assets/abtline.png" : "assets/abtlinelight.png";

  } else {
    document.body.classList.toggle("dark-theme");
    var theme = document.body.classList.contains("dark-theme")
      ? "dark"
      : "light";
      abt_btm_img.src = theme === "dark" ? "assets/abtbottomlite.png" : "assets/aboutBottom.png";
      abt_line.src = theme === "dark" ? "assets/abtlinelight.png" : "assets/abtline.png";

  }
  localStorage.setItem("theme", theme);
});