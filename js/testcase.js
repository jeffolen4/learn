// $(document).ready(function() {
//   var toUpCase = function(word) {
//     return word.charAt(0).toUpperCase() + word.slice(1);
//   });
// });
function ucaseWord (word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

var testcase = function(str) {
    var words = str.toLowerCase().split(" ");
    var newStr = "";
    words.forEach( function (word) {
      newStr += ucaseWord(word) + " ";
    });
    return newStr.trim();
};

// function compare (a, b) {
//   var y = a.toLowerCase().split("").sort().join("");
//   var z = b.toLowerCase().split("").sort().join("");
//   if ( z === y ) {
//     return true;
//   } else {
//     return false;
//   }
// }

function checkLetter( string, letter ) {
  if ( string.indexOf(letter) < 0 ) {
    return false;
  } else {
    return true;
  }
}

function compare(a, b) {
  var letters = a.toLowerCase().split("");
  var bLowerCase = b.toLowerCase();
  var isAnagram = true;
  var i = 0;
  while ( i < letters.length ) {
    if ( !(checkLetter( bLowerCase, letters[i] )) ) {
      isAnagram = false;
      i = letters.length;
    }
    i++;
  }
  return isAnagram;
}

// var testcase = function(word) {
//   return word.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
// };
