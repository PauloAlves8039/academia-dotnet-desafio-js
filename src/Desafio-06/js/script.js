const paragraph = document.getElementById("paragraph");

let fontColor = "#000000";
let backgroundColor = "#FFFFFF";

function changeTextColor() {
  fontColor = fontColor === "#000000" ? "#FFFFFF" : "#000000";
  paragraph.style.color = fontColor;
}

function changeBackgroundColor() {
  backgroundColor = backgroundColor === "#FFFFFF" ? "black" : "#FFFFFF";
  paragraph.style.backgroundColor = backgroundColor;
}
