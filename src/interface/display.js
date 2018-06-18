let display = {
  viewTotal: function() {
    // clean up! you have multiple variable declarations that hold
    // the same values
    let basket = till.basket.returnBasket();

    let totalCalculated = till.receipt.total.calculate(basket);

    let appliedDisc = till.receipt.discount.applyDiscounts(
      totalCalculated,
      basket
    );

    // Do yoou need this?
    let itemsTotalDiscounts = till.receipt.discount.applyDiscounts(
      totalCalculated,
      basket
    );

    // Do you need this?
    let itemsTotalWithoutTax = till.receipt.total.calculate(basket).toFixed(2);

    let appliedTax = till.receipt.tax.applyTax(totalCalculated).toFixed(2);
    let amountToTax = appliedTax - totalCalculated;

    let totalWithTax =
      parseFloat(itemsTotalDiscounts.toFixed(2)) + parseFloat(amountToTax);
    $("#total-text-area").val(totalWithTax.toFixed(2));
  },

  printRceipt: function() {
    let receipt = till.receipt.printReceipt(till.basket.returnBasket());

    $("#receipt-text-area").val(
      receipt.map(
        receiptLine => `${receiptLine}
        
      `
      )
    );
  }
};
