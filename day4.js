var key = "yzbqklnj";
var counter = 0;
var md5 = require('js-md5');
var found = false;
while (!found) {
  var hash = md5(key + counter);
  found = startsWithXZeros(hash, 6);
  counter++;
}

function startsWithXZeros(hash, num) {
  var found = true;
  var split = hash.split("");
  for (var i = 0; i < num; i++){
    if (split[i] != 0){
      found = false;
    }
  }
  //if (split[0] == 0 && split[1] == 0 && split[2] == 0
  //    && split[3] == 0 && split[4] == 0) {
  //  found = true;
  //}
  return found;
}

console.log(counter - 1);