var queenAttack = function(queenArray, opponentArray) {

  //testing for positions off chess board

  function isBetween( value, start, end ) {
    return ( value >= start && value <= end );
  }

  function isAcceptablePositions( coords ) {
    return ( isBetween( coords[0], 1, 8) && isBetween( coords[1], 1, 8) )
  }


  if ( !(isAcceptablePositions( queenArray ) && isAcceptablePositions( opponentArray )) ) {
    return false;
  }

  // test for in line vertically e.g. x-coords match
  if ( queenArray[0] === opponentArray[0] ) {
    return true;
  }

  // test for in line hortizonitally e.g. y-coords match
  if ( queenArray[1] === opponentArray[1] ) {
    return true;
  }

  // if ( Math.abs(queenArray[0] - opponentArray[0]) === Math.abs(queenArray[1] - opponentArray[1]) ) {
  //   return true;
  // }

  var abs_x = queenArray[0] - opponentArray[0];
  var abs_y = queenArray[1] - opponentArray[1];

  if (abs_x < 0 ) {
    abs_x = abs_x * -1;
  }

  if (abs_y < 0 ) {
    abs_y = abs_y * -1;
  }

  if ( abs_x === abs_y ) {
    return true;
  }

  return false;

};

// $(document).ready(function() {
//   $("form#leap-year").submit(function(event) {
//     var year = parseInt($("input#year").val());
//     var result = leapYear(year);
//
//     $(".year").text(year);
//     if (!result) {
//       $(".not").text("not");
//     } else {
//       $(".not").text("");
//     }
//
//     $("#result").show();
//     event.preventDefault();
//   });
// });
