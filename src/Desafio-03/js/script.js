const inputColor = document.getElementById("color-select");

inputColor.addEventListener("change", function () {
  let selectedColor = inputColor.value;

  if (selectedColor === "red") {
    document.body.style.backgroundColor = "#FF0000";
  } else if (selectedColor === "green") {
    document.body.style.backgroundColor = "#00FF00";
  } else if (selectedColor === "blue") {
    document.body.style.backgroundColor = "#1E90FF";
  } else if (selectedColor === "yellow") {
    document.body.style.backgroundColor = "#FFFF00";
  } else {
    document.body.style.backgroundColor = "#FFFFFF";
  }
});
