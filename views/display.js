let display = {
  viewTotal: function() {
    let basket = till.basket.returnBasket();
    let totalCalculated = till.receipt.total.calculate(basket);
    let appliedDisc = till.receipt.discount.applyDiscounts(
      totalCalculated,
      basket
    );
    let itemsTotalDiscounts = till.receipt.discount.applyDiscounts(
      totalCalculated,
      basket
    );
    console.log(itemsTotalDiscounts.toFixed(2));
    let itemsTotalWithoutTax = till.receipt.total.calculate(basket).toFixed(2);
    let appliedTax = till.receipt.tax.applyTax(totalCalculated).toFixed(2);
    let amountToTax = appliedTax - totalCalculated;

    let totalWithTax =
      parseFloat(itemsTotalDiscounts.toFixed(2)) + parseFloat(amountToTax);
    $("#total-text-area").val(totalWithTax.toFixed(2));

    console.log(till.receipt.printReceipt(basket));
  },

  printRceipt: function() {
    console.log(till.receipt.printReceipt(till.basket.returnBasket()));
  }
};
