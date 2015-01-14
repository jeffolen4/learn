function getWordsByCount ( words, countedWords ) {
  var orderedByCount = [];
  words.forEach( function ( word ) {
    count = countedWords[word];
    if (!(count in orderedByCount)) {
      orderedByCount[count] = [index];
    } else {
      orderedByCount[count].push(index);
    };
  });
  return orderedByCount;
}

// function getWordsByCount ( words, countedWords ) {
//   return false;
// }

function getWordsUsageCount ( words, str ) {
  var countedWords = {};
  for (var i=0; i < words.length; i++ ) {
    if (!(words[i] in countedWords) ) {
      countedWords[words[i]] = (str.match( new RegExp(words[i], "g"))).length;
    };
  };
  return countedWords;
}


function sortByTimesUsed ( str ) {


  // return blank string a blank string is passed
  if ( str === "" ) {
    return "";
  }

  // return false if the value is a number
  if (!(isNaN(str))) {
    return false;
  }

  // split the string into an array
  var words = str.split(" ");
  // create a variable to hold each word and its count
  var countedWords = getWordsUsageCount( words, str );
  var orderedByCount = getWordsByCount( words, countedWords );

  var outputString = ""
  // loop thru the wordsByCount array and build the output string
  for (var x in orderedByCount) {
    outputString = orderedByCount[x].join(" ") + " " + outputString;
  }
  // trim the trailing space
  return outputString.trim();
}
