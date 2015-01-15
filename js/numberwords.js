var first20 = {"1": "one", "2":"two", "3":"three", "4":"four", "5":"five", "6":"six", "7":"seven", "8":"eight", "9":"nine", "10":"ten",
"11":"eleven", "12":"twelve", "13":"thirteen", "14":"fourteen", "15":"fifteen", "16":"sixteen", "17":"seventeen", "18":"eighteeen",
"19":"nineteen", "0":"zero"};

var factors10 = {2:"twenty", 3:"thirty", 4:"forty", 5:"fifty", 6:"sixty", 7:"seventy", 8:"eighty", 9:"ninety"};

var exponentValues = ["hundred","thousand","million","billion","trillion"];


function threeDigits( num, currentLevel ) {
  var wordNumber = "";
  switch( num.length ) {
    case 1:
      return first20[num] + " " + currentLevel;
    case 2:
      return lastTwo(num) + " " + currentLevel;
    case 3:
      wordNumber += first20[ num.substring(0,1) ] + " " + currentLevel + " ";
      wordNumber += lastTwo( num.substring(1) );
      return wordNumber;
  }
}


function lastTwo ( num ) {
  if ( !(first20[num]) ) {
    return factors10[ parseInt(num.slice(0,1)) ] + "-" + ( num.slice(1) == "0" ? "" : first20[ num.slice(1) ] );
  } else {
    return first20[num];
  }
}

function numberwords( num ) {

  var wordNumber = "";

  if ( num.length < 3 ) {
    return threeDigits( num, "");
  } else {
    currentLevel = 0;
    while ( num.length > 0 ) {
      if ( num.length > 3) {
        var workNum = num.slice(-3);
        num = num.substring(0,(num.length-3));
      } else {
        workNum = num;
        num = "";
      }
      wordNumber += threeDigits(workNum, exponentValues[currentLevel]);
      currentLevel++
    }
  }
  return wordNumber;
}

//
//   switch( num.length ) {
//
//     case 1:
//       return first20[num];
//
//     case 2:
//       return lastTwo( num );
//
//     case 3:
//       return threeDigits( num, "");
//
//     case 4:
//       wordNumber += threeDigits( num.substring(0,1), "thousand" ) + " " + threeDigits( num.substring(1,4) )
//       return wordNumber;
//
//     case 5:
//       wordNumber += lastTwo( num.substring(0,2) ) + " " + exponentValues[num.length-1] + " ";
//       wordNumber += threeDigits( num.substring(2) )
//       return wordNumber;
//
//     case 6:
//       wordNumber += threeDigits( num.substring(0,3) ) + " " + exponentValues[num.length-2] + " ";
//       wordNumber += threeDigits( num.substring(3) )
//       return wordNumber;
//
//   }
//
//   return false;
// };

//more comments
$(document).ready(function() {

  var form = $("#form-translate");
  var word = $("#word");
  var score = $("#score");
  score.text("0");

  word.keyup( wordChanged );

  function wordChanged( event ) {
    var wordString = word.val();
    score.text("0");
    if ( !(wordString == null || wordString === "") ) {
      score.text( wordValue( wordString ).toFixed(0) );
      return false;
    }
  }

});
