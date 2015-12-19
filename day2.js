var input = require('./day2.json');
var wrapping = 0;
var ribbons = 0;
var lines = input["input"];
lines.some(function (line) {
  var numbers = line.split("x");
  var length = numbers[0];
  var width = numbers[1];
  var height = numbers[2];
  var areas = [length * width, length * height, width * height];
  var total = (
      (2 * areas[0]) + (2 * areas[1]) +
      (2 * areas[2]) + Math.min.apply(null, areas)
  );
  var sorted = numbers.sort(function (a, b) {
    return a - b;
  });
  var secondTotal = (length*width*height + (sorted[0]*2 + sorted[1]*2));
  ribbons += secondTotal;
  wrapping += total;
});

console.log(ribbons);