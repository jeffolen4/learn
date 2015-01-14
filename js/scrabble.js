//more comments
$(document).ready(function() {

  var points = {"a":1, "e":1, "i":1, "o":1, "u":1, "l":1, "n":1, "r":1, "s":1, "t":1,
  "d":2, "g":2,
  "b":3, "c":2, "m":3, "p":3,
  "f":4, "h":4, "v":4, "w":4, "y":4,
  "k":5,
  "j":8, "x":8,
  "q":10,"z":10};

  var form = $("#form-translate");
  var word = $("#word");
  var score = $("#score");
  score.text("0");

  // $("#word").keyup( function(event) {
  // word.keyup( function(event) {
  //     wordChanged();
  //     return false;
  // });

  word.keyup( wordChanged );


  // translate a single character
  function characterValue( char ) {
    return points[char.toLowerCase()];
  }

  // translate a string/paragraph
  function wordValue( word ) {
    var wordValue = 0;
    word.split("").forEach( function (char) {
      wordValue += characterValue(char);
    });
    return wordValue;
  }

  function wordChanged( event ) {
    var wordString = word.val();
    score.text("0");
    if ( !(wordString == null || wordString === "") ) {
      score.text( wordValue( wordString ).toFixed(0) );
      return false;
    }
  }

});
