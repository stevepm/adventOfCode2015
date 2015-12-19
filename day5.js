var words = require("./day5.json")["input"];
var bad = ["ab", "cd", "pq", "xy"];
var vowels = ["a", "e", "i", "o", "u"];
var goodCounter = 0;

words.some(function (input) {
  var good = true;

  var numVowels = 0;
  var duplicates = 0;

  input.split("").some(function (letter, index) {
    vowels.some(function (vowel) {
      if (letter === vowel) {
        numVowels++;
        return;
      }
    });

    if (index > 0) {
      if (input[index - 1] === letter) {
        duplicates++;
      } else {
        var twoLetters = input[index - 1] + letter;
        bad.some(function (badLetters) {
          if (twoLetters === badLetters) {
            good = false;
            return;
          }
        });
      }
    }

    if (!good) {
      return;
    }

  });

  if (numVowels > 2 && duplicates > 0 && good) {
    goodCounter++;
  }

});

console.log(goodCounter);

