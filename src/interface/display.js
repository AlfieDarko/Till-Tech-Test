(function(exports) {
  class Display {
    constructor(till) {
    }

    viewTotal() {
      let basket = till.returnBasket();
      let preTotal = till.calculate(basket);
      let preTotalWithDiscounts = till.applyDiscounts(
        preTotal,
        basket
      );
      let appliedTax = till.applyTax(preTotal).toFixed(2);
      let amountToTax = appliedTax - preTotal;
      let totalWithTax =
        parseFloat(preTotalWithDiscounts.toFixed(2)) + parseFloat(amountToTax);
      $("#total-text-area").val(totalWithTax.toFixed(2));
    }

    printReceipt() {
      let receipt = till.printReceipt(till.returnBasket());
      $("#receipt-text-area").val(
        receipt.map(
          receiptLine => `${receiptLine}` + "\n"
        ).join('')
      );
    }
  }

  exports.Display = Display;
})(this);
