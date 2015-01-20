var appExpenseTrack = appExpenseTrack || {};

var categoryCount = categoryCount || 0;

appExpenseTrack.expense = function (desc, qty, unitPrice) {
  this.quantity = qty;
  this.desc = desc;
  this.unitPrice = unitPrice;
  this.getTotalPrice = function() {
    this.totalPrice = this.unitPrice * this.quantity;
  }
};

appExpenseTrack.expenseCategory = function( desc ) {
  this.identity = ++categoryCount;
  this.desc = desc;
  this.grandTotal = 0;
  this.expenses = [];
};
