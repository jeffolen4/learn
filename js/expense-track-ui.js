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

    // add the link to the list
    $(".categories").append("<p class=\"category\">" + categoryDesc.val() + "</p>"  );

    // create the new detail expenses table and display it
    var newCategoryTable = $("table.template").clone();
    newCategoryTable.attr("id", "table-category" + newCategory.identity );
    $(".template").hide();
    $("#table-category" + newCategory.identity ).show();

    // create the "add expense" button specific to this category and display it
    var newButton = $(".add-expense").clone();
    newButton.attr("id", "add-expense"+ newCategory.identity );

    newButton.show();

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

      $("#expense-table" + newCategory.identity + " > tbody:last").append("<tr class=\"table-striped\">" +
      "<td>" + newExpense.desc +  "</td>" +
      "<td>" + newExpense.quantity.toFixed(0) +  "</td>" +
      "<td>" + newExpense.unitPrice.toFixed(2) +  "</td>" +
      "<td>" + newExpense.totalPrice.toFixed(2) +  "</td></tr>");

      var grandTotal = 0;
      newCategory.expenses.forEach( function (expense) {
        grandTotal += expense.totalPrice;
      });

      $("#grandtotal").text(grandTotal.toFixed(2));

      price.val("");
      qty.val("");
      desc.val("");

      event.preventDefault();
    });

    event.preventDefault();

  })


  // handle adding expenses
  form.submit(function(event) {

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

    $("#expense-table > tbody:last").append("<tr class=\"table-striped\">" +
                      "<td>" + newExpense.desc +  "</td>" +
                      "<td>" + newExpense.quantity.toFixed(0) +  "</td>" +
                      "<td>" + newExpense.unitPrice.toFixed(2) +  "</td>" +
                      "<td>" + newExpense.totalPrice.toFixed(2) +  "</td></tr>");

    grandTotal += newExpense.totalPrice;
    $("#grandtotal").text(grandTotal.toFixed(2));

    price.val("");
    qty.val("");
    desc.val("");

    event.preventDefault();
  });

});
