const buttonRed = document.getElementById("button-red");
const buttonGreen = document.getElementById("button-green");
const buttonBlue = document.getElementById("button-blue");
const buttonYellow = document.getElementById("button-yellow");

buttonRed.addEventListener("click", function () {
  document.body.style.backgroundColor = "#FF0000";
});

buttonGreen.addEventListener("click", function () {
  document.body.style.backgroundColor = "#00FF00";
});

buttonBlue.addEventListener("click", function () {
  document.body.style.backgroundColor = "#1E90FF";
});

buttonYellow.addEventListener("click", function () {
  document.body.style.backgroundColor = "#FFFF00";
});
