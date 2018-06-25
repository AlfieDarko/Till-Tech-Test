(function(exports) {
  class Display {
    constructor(till) {
      this.till = till
    }

    viewTotal() {
      let basket = this.till.returnBasket();
      let preTotal = this.till.calculate(basket);
      let preTotalWithDiscounts = this.till.applyDiscounts(
        preTotal,
        basket
      );
      let appliedTax = this.till.applyTax(preTotal).toFixed(2);
      let amountToTax = appliedTax - preTotal;
      let totalWithTax =
        parseFloat(preTotalWithDiscounts.toFixed(2)) + parseFloat(amountToTax);
      $("#total-text-area").val(totalWithTax.toFixed(2));
    }

    printReceipt() {
      let receipt = this.till.printReceipt(this.till.returnBasket());
      $("#receipt-text-area").val(
        receipt.map(
          receiptLine => `${receiptLine}` + "\n"
        ).join('')
      );
    }

    resetDisplay(){
      $("#customer-names-input").val("")
      $("#customer-names-input").prop("disabled", false);
      $("#add-name-button").prop("disabled", false);
      $("#total-text-area").val('')
      $("#receipt-text-area").val('')
    }
  }

  exports.Display = Display;
})(this);
