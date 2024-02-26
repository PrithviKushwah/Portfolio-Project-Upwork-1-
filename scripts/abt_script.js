const btn = document.querySelector(".btn-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const abt_btm_img = document.getElementById("abt-btm-img");
const abt_line = document.getElementById("abt-line");
const abt_bg=document.getElementById("abt-bg")

const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
  abt_btm_img.src = "assets/abtbottomlite.png"; 
  abt_line.src = "assets/abtlinelight.png";
  abt_bg.src="assets/abtbg-dark.png";
  document.body.classList.toggle("dark-theme");
} else if (currentTheme === "light") {
  document.body.classList.toggle("light-theme");
  abt_btm_img.src = "assets/aboutBottom.png"; 
  abt_line.src = "assets/abtline.png";
  abt_bg.src = "assets/abtbg.png";
}

btn.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
    var theme = document.body.classList.contains("light-theme")
      ? "light"
      : "dark";
      abt_btm_img.src = theme === "light" ? "assets/aboutBottom.png" : "assets/abtbottomlite.png";
      abt_line.src = theme === "light" ? "assets/abtline.png" : "assets/abtlinelight.png";
      abt_bg.src = theme === "light" ? "assets/abtbg.png" : "assets/abtbg.png";

  } else {
    document.body.classList.toggle("dark-theme");
    var theme = document.body.classList.contains("dark-theme")
      ? "dark"
      : "light";
      abt_btm_img.src = theme === "dark" ? "assets/abtbottomlite.png" : "assets/aboutBottom.png";
      abt_line.src = theme === "dark" ? "assets/abtlinelight.png" : "assets/abtline.png";
      abt_bg.src = theme === "dark" ? "assets/abtbg-dark.png" : "assets/abtbg-dark.png";

  }
  localStorage.setItem("theme", theme);
});
