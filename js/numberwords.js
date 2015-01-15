var appNumWord = appNumWord || {};

// define first twenty numbers. 0 to 19
appNumWord.first20 = {"0":"zero", "1": "one", "2":"two", "3":"three", "4":"four", "5":"five", "6":"six", "7":"seven", "8":"eight", "9":"nine", "10":"ten", "11":"eleven", "12":"twelve", "13":"thirteen", "14":"fourteen", "15":"fifteen", "16":"sixteen", "17":"seventeen", "18":"eighteeen", "19":"nineteen"};

// define increments of 10 from 20 to 90
appNumWord.increments10 = {2:"twenty", 3:"thirty", 4:"forty", 5:"fifty", 6:"sixty", 7:"seventy", 8:"eighty", 9:"ninety"};

// define orders of magnitude from 100 to 1000000000000
appNumWord.ordMag = ["","thousand","million","billion","trillion"];


// return the number words for a two digit number
appNumWord.lastTwo = function( num ) {
  // convert numeric value to string for parsing later
  var numChar = num.toFixed(0);

  switch( true ) {
    case ( num === 0 ):
      return "";
    case (num >0 && num <=19 ):
      // if one of the first 19 numbers
      return appNumWord.first20[num.toFixed(0)];
    case ( num >=20 ):
      return appNumWord.increments10[ parseInt(numChar.slice(0,1)) ] + ( numChar.slice(1) === "0" ? " " :  "-" + appNumWord.first20[ numChar.slice(1) ] );
  }
}

// return the number words for a given three digit number
//  at the given order of magnitude
appNumWord.threeDigits = function( num ) {
  var wordNumber = "";
  var numChar = num.toFixed(0);

  switch( true ) {
    case ( num === 0):
      return "";
    case (num >0 && num <=19):
      return appNumWord.first20[num.toFixed(0)];
    case ( num >=20 && num <=99):
      return appNumWord.increments10[ parseInt(numChar.slice(0,1)) ] + ( numChar.slice(1) === "0" ? " " :  "-" + appNumWord.first20[ numChar.slice(1) ] );
    case ( num >=100 ):
      wordNumber += appNumWord.first20[ numChar.substring(0,1) ] + " hundred " + appNumWord.lastTwo( parseInt(numChar.substring(1)) );
      return wordNumber;
  }
}


// convert a number to words
appNumWord.numberwords = function( num ) {
  var wordNumber = "";

  switch( true ) {
    // handle blank entry
    case ( num === "" ):
      return "";
    
    // return zero
    case ( num === "0"):
      return "zero";

    // return number less than 100
    case ( num.length < 3):
      return appNumWord.threeDigits( parseInt(num) ).trim();

    // all numbers greater than 100
    case ( num.length >= 3 ):
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
        if ( parseInt(workNum) !== 0) {
          wordNumber = appNumWord.threeDigits(parseInt(workNum)) + " " + appNumWord.ordMag[currentLevel] + " " + wordNumber.trim();
        }
        // increment the order of magnitude
        currentLevel++
      }
      return wordNumber.trim();
  } // end case

}
