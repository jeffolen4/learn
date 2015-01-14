
// translate a single word
function translateWord( word ) {

  var consonantStart = word.match(/\b([^ aeiou]+)\S*/);
  if ( !(consonantStart === null) ) {
    // starts with a consonant
    if ( consonantStart[1].indexOf("q") < 0 ) {
      return word.slice( consonantStart[1].length ) + consonantStart[1] + "ay";
    } else {
      return word.slice( consonantStart[1].length+1 ) + consonantStart[1] + "uay";
    }
  } else {
    // starts with a vowel
    return word + "way";
  }

}

// translate a string/paragraph
function translateString( str ) {
  var words = str.split(" ");
  var translated = "";
  words.forEach( function (word) {
    translated += translateWord( word ) + " ";
  });
  return translated.trim();
}


$(document).ready(function() {

  var form = $("#form-translate");
  var pigLatin = $("#translated");
  var transText = $("#untranslated");

  form.submit( function (event) {
    if ( transText.val() === null || transText.val() === "" ) {
      pigLatin.val("");
    } else {
      pigLatin.val(translateString(transText.val()));
    }
    $(".results").show();
    //return false;
    event.preventDefault();
  })

});
