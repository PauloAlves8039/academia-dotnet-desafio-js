const paragraph = document.getElementById("paragraph");

let fontColor = "#000000";
let backgroundColor = "#FFFFFF";
let currentSize = window.getComputedStyle(paragraph, null).getPropertyValue("font-size");
let text = paragraph.innerText;

function changeTextColor() {
  fontColor = fontColor === "#000000" ? "#FFFFFF" : "#000000";
  paragraph.style.color = fontColor;
}

function changeBackgroundColor() {
  backgroundColor = backgroundColor === "#FFFFFF" ? "black" : "#FFFFFF";
  paragraph.style.backgroundColor = backgroundColor;
}

function increaseFontSize() {
  currentSize = (parseFloat(currentSize) + 1) + "px";
  paragraph.style.fontSize = currentSize;
}

function decreaseFontSize() {
  currentSize = (parseFloat(currentSize) - 1) + "px";
  paragraph.style.fontSize = currentSize;
}

function convertToUppercase() {
  paragraph.innerText = text.toUpperCase();
}

function convertToLowercase() {
  paragraph.innerText = text.toLowerCase();
}
