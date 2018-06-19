(function(exports) {
  class Display {
    constructor() {}

    viewTotal() {
      let basket = till.basket.returnBasket();
      let preTotal = till.receipt.total.calculate(basket);
      let preTotalWithDiscounts = till.receipt.discount.applyDiscounts(
        preTotal,
        basket
      );
      let appliedTax = till.receipt.tax.applyTax(preTotal).toFixed(2);
      let amountToTax = appliedTax - preTotal;

      let totalWithTax =
        parseFloat(preTotalWithDiscounts.toFixed(2)) + parseFloat(amountToTax);
      $("#total-text-area").val(totalWithTax.toFixed(2));
    }

    printReceipt() {
      let receipt = till.receipt.printReceipt(till.basket.returnBasket());
      $("#receipt-text-area").val(
        receipt.map(
          receiptLine => `${receiptLine}

        `
        )
      );
    }
  }

  exports.Display = Display;
})(this);
