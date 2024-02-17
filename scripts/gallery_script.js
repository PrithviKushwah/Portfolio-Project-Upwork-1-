const btn = document.querySelector(".btn-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const abt_line = document.getElementById("abt-line");
const abt_line2 = document.getElementById("abt-line2");
const abt_line3 = document.getElementById("abt-line3");
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
  abt_line.src = "assets/abtlinelight.png";
  abt_line2.src = "assets/abtlinelight.png";
  abt_line3.src = "assets/abtlinelight.png";
  document.body.classList.toggle("dark-theme");
} else if (currentTheme === "light") {
  document.body.classList.toggle("light-theme");
  abt_line.src = "assets/abtline.png";
  abt_line2.src = "assets/abtline.png";
  abt_line3.src = "assets/abtline.png";
}

btn.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
    var theme = document.body.classList.contains("light-theme")
      ? "light"
      : "dark";
    abt_line.src = theme === "light" ? "assets/abtline.png" : "assets/abtlinelight.png";
    abt_line2.src = theme === "light" ? "assets/abtline.png" : "assets/abtlinelight.png";
    abt_line3.src = theme === "light" ? "assets/abtline.png" : "assets/abtlinelight.png";

  } else {
    document.body.classList.toggle("dark-theme");
    var theme = document.body.classList.contains("dark-theme")
      ? "dark"
      : "light";
    abt_line.src = theme === "dark" ? "assets/abtlinelight.png" : "assets/abtline.png";
    abt_line2.src = theme === "dark" ? "assets/abtlinelight.png" : "assets/abtline.png";
    abt_line3.src = theme === "dark" ? "assets/abtlinelight.png" : "assets/abtline.png";
  }
  localStorage.setItem("theme", theme);
});
