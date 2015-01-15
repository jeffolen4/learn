
// define first twenty numbers. 0 to 19
var first20 = {"1": "one", "2":"two", "3":"three", "4":"four", "5":"five", "6":"six", "7":"seven", "8":"eight", "9":"nine", "10":"ten",
"11":"eleven", "12":"twelve", "13":"thirteen", "14":"fourteen", "15":"fifteen", "16":"sixteen", "17":"seventeen", "18":"eighteeen",
"19":"nineteen", "0":"zero"};

// define increments of 10 from 20 to 90
var increments10 = {2:"twenty", 3:"thirty", 4:"forty", 5:"fifty", 6:"sixty", 7:"seventy", 8:"eighty", 9:"ninety"};

// define orders of magnitude from 100 to 1000000000000
var ordMag = ["","thousand","million","billion","trillion"];

// return the number words for a two digit number
function lastTwo ( num ) {
  // return blank if the last two digits are zero
  if ( num === "00") {
    return "";
  }
  // if not one of the first 19 numbers
  if ( !(first20[num]) ) {
    return increments10[ parseInt(num.slice(0,1)) ] + "-"
    + ( num.slice(1) === "0" ? " " : first20[ num.slice(1) ] );
  }

  // if one of the first 19 numbers
  return first20[num];
}

// return the number words for a given three digit number
//  at the given order of magnitude
function threeDigits( num ) {
  var wordNumber = "";
  switch( num.length ) {
    case 1:
      return first20[num];
    case 2:
      return lastTwo(num);
    case 3:
      wordNumber += first20[ num.substring(0,1) ] + " hundred ";
      wordNumber += lastTwo( num.substring(1) );
      return wordNumber;
  }
}


// convert a number to words
function numberwords( num ) {

  var wordNumber = "";

  // if this number is < 100 then return the value
   if ( num.length < 3 ) {
     return threeDigits( num, "").trim();
   } else {
    // if greater than 100 then loop thru each group of
    //   three digits
    var currentLevel = 0;
    while ( num.length > 0 ) {
      // if more than three digits remain then chop out the
      //   the three we are currently working with
      if ( num.length > 3) {
        var workNum = num.slice(-3);
        num = num.substring(0,(num.length-3));
      } else {
        // if 3 or less remain then convert remaining digits and
        //   clear the number
        workNum = num;
        num = "";
      }
      wordNumber = threeDigits(workNum) + " " + ordMag[currentLevel] + " " + wordNumber.trim();
      // increment the order of magnitude
      currentLevel++
    }
  }
  return wordNumber.trim();
}

//more comments
$(document).ready(function() {

  var form = $("#form-translate");
  var words = $("#words");
  var inputNum = $("#num");
  words.text("");

  inputNum.keyup( numberChanged );

  function numberChanged( event ) {
    var num = inputNum.val();
    words.text("");
    if ( !(num == null || num === "") ) {
      score.text( numberWords( num );
      return false;
    }
  }

});
