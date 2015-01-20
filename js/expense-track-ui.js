$(document).ready(function() {

  var form = $("#entryform");
  var expense = appExpenseTrack.expense;
  var expenseCategory = appExpenseTrack.expenseCategory;

  var qty = $("#qty");
  var price = $("#price");
  var desc = $("#desc");
  var addCategory = $("#btn-category");
  var categoryDesc = $("#category-desc");


  // handle adding categories
  addCategory.click( function(event) {

    // validate input
    if ( categoryDesc.val() === "" || categoryDesc.val().length <= 3 ) {
      alert("Category name must be more than 3 characters");
      return false;
    };

    // create the new category object
    var newCategory = new expenseCategory( categoryDesc.val() );
    categoryDesc.val("");

    // add the link to the list
    $(".categories").append("<p id=\"category" + newCategory.identity + "\">" + newCategory.desc + "</p>" );
    var categoryLink = $("#category" + newCategory.identity);

    // change the heading to show the new category as the current category
    //   that items can be added to
    $("#current-category").text(newCategory.desc);

    // create the new detail expenses table and display it
    var newCategoryTable = $("table.template").clone();
    newCategoryTable.attr("id", "expense-table" + newCategory.identity );
    newCategoryTable.removeClass("template");
    $(".expense-tables").hide();

    // add the new detail expense table to the DOM and display it
    $(".expenses-column").append(newCategoryTable);
    newCategoryTable.show();

    // give the "grand total" a unique Id so we can reference it later
    var grandTotalSpan = newCategoryTable.children("tfoot").find("span");
    grandTotalSpan.attr("id", "grandtotal" + newCategory.identity );

    // create the "add expense" button specific to this category and display it
    var newButton = $("button.template").clone();
    newButton.attr("id", "add-expense"+ newCategory.identity );
    newButton.removeClass("template");
    $(".expense-buttons").append(newButton);
    $(".expense-button").hide();
    newButton.show();


    /*
    ======================================================
     Set all the events for the new DOM items
    ======================================================
    */

    categoryLink.click( function () {
      // hide all the currently active add buttons
      $(".expense-button").hide();

      // hide all the currently active detail tables
      $(".expense-tables").hide();

      // $("#add-expense" + $(this).attr("id").slice(-1) ).show();
      // $("#expense-table" + $(this).attr("id").slice(-1) ).show();
      $("#add-expense" + newCategory.identity ).show();
      $("#expense-table" + newCategory.identity ).show();
      $("#current-category").text(newCategory.desc);

    });

    // set the event for when the user adds expenses to this category
    newButton.click( function () {

      if ( !( $.isNumeric(qty.val()) ) ) {
        alert("Quantity must be a valid number.");
        return false;
      }

      if ( !($.isNumeric(price.val()) ) ) {
        alert("Price must be a valid number.");
        return false;
      }

      var newExpense = new expense( desc.val(), parseInt(qty.val()), parseFloat(price.val()) );
      newExpense.getTotalPrice();

      newCategory.expenses.push( newExpense );

      $("#expense-table" + newCategory.identity + " > tbody:last").append("<tr>" +
      "<td>" + newExpense.desc +  "</td>" +
      "<td>" + newExpense.quantity.toFixed(0) +  "</td>" +
      "<td>" + newExpense.unitPrice.toFixed(2) +  "</td>" +
      "<td>" + newExpense.totalPrice.toFixed(2) +  "</td></tr>");

      var grandTotal = 0;
      newCategory.expenses.forEach( function (expense) {
        grandTotal += expense.totalPrice;
      });

      $("#grandtotal" + newCategory.identity).text(grandTotal.toFixed(2));

      price.val("");
      qty.val("");
      desc.val("");

      event.preventDefault();
    });

    event.preventDefault();

  });

});
