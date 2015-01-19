$(document).ready(function() {

  function newNiftyCounter() {
    var count = 0;
    var counter = {
    "more": function() { return ++count; },
    "less": function() { return --count; },
    "reset": function() { count = 0; return count; }
    }
    return counter;
  }

  // button to add a new counter
  var createCounter = $("#new");

  // process an add
  createCounter.click( function () {
    // create a new counter
    var newCounter = newNiftyCounter();

    // create variables for each of the DOM items to be added
    //  for each new counter
    var newRow = $("<div class=\"row\"></div>");
    var newButtonGrp = $("<div class=\"btn-group\" role=\"group\"></div>");
    var newAdd = $("<button type=\"button\" class=\"btn btn-default more\">Add</button>");
    var newSubtract = $("<button type=\"button\" class=\"btn btn-default less\">Subtract</button>");
    var newReset = $("<button type=\"button\" class=\"btn btn-default reset\">Reset</button>");
    var newDelete = $("<button type=\"button\" class=\"btn btn-default delete\">Delete</button>");
    var newVal = $("<span class=\"count-value\">0</span>");

    // append each of the buttons and the output value items
    //  to the newRow div
    newButtonGrp.append(newAdd);
    newButtonGrp.append(newSubtract);
    newButtonGrp.append(newReset);

    newRow.append(newButtonGrp)
    newRow.append(newVal);
    newRow.append(newDelete);

    // set event handlers for each button
    newAdd.click(function() {newVal.text(newCounter.more())});

    newSubtract.click(function() {newVal.text(newCounter.less())});

    newReset.click(function() {newVal.text(newCounter.reset())});

    newDelete.click(function() { newRow.remove() });

    // append the new row to the DOM
    $("#main").append( newRow );

  });

});
