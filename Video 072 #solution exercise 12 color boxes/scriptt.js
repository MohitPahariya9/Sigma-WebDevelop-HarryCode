//hexadecimal code
var boxes = document.querySelectorAll(".box");

for (var i = 0; i < boxes.length; i++) {
  var box = boxes[i];

  //generate random color (16777215 is white in decimal)
  var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  //random background color chnge
  var randomBackgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);

  box.style.color = randomColor;
  box.style.backgroundColor = randomBackgroundColor;

  box.textContent = randomColor;
}
