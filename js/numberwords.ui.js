$(document).ready(function() {

  // define local variable for "global" function
  var numberwords = appNumWord.numberwords;

  // create variables for often used jQuery objects
  var form = $("#form-translate");
  var words = $("#words");
  var inputNum = $("#num");

  // clear the initial text of the result field
  words.text("");

  // set "keyup" event for input text field
  inputNum.keyup( numberChanged );

  // local function to process change in input number
  function numberChanged( event ) {
    // get the input text
    var num = inputNum.val();
    // clear the result text
    words.text("");
    // only process the input number if it is a valid number
    if ( num !== null && !(isNaN(num)) ) {
      words.text( numberwords( num ) );
      return false;
    }
  }

});
