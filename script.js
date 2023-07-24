var startTime = new Date().getTime();

function getRandomColor() {
  var letters = "0123456789ABCDEF".split("");
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.round(Math.random() * 15)];
  }
  return color;
}

function move() {
  var left;
  var top;
  var wh;

  left = Math.floor(Math.random() * 300);
  top = Math.floor(Math.random() * 300);
  wh = Math.floor(Math.random() * 300) + 100;

  document.getElementById("shape").style.left = left + "px";
  document.getElementById("shape").style.top = top + "px";
  document.getElementById("shape").style.width = wh + "px";
  document.getElementById("shape").style.height = wh + "px";
  document.getElementById("shape").style.backgroundColor = getRandomColor();

  document.getElementById("shape").style.display = "block";

  startTime = new Date().getTime();
}

move();

document.getElementById("shape").addEventListener("click", function () {
  document.getElementById("shape").style.display = "none";

  var endTime = new Date().getTime();

  var timeTaken = (endTime - startTime) / 1000;
  // alert(timeTaken);

  document.getElementById("para").innerHTML = timeTaken + " " + "s";

  move();
});
