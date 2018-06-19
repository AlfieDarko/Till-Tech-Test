(function(exports) {
  class Till {
    constructor(Basket, Payments, Receipt) {
      this.basket = Basket;
      this.payments = Payments;
      this.receipt = Receipt;
    }
    makePayment(cashPayment) {
      let calculatedTotal = this.receipt.total.calculate(this.basket.returnBasket());
      console.log(calculatedTotal, "calculatedTotal");
      let applicatedDiscounts = this.receipt.discount.applyDiscounts(calculatedTotal, this.basket.returnBasket());
      console.log(applicatedDiscounts, "applicatedDiscounts");
      let applicatedTax = this.receipt.tax.applyTax(applicatedDiscounts);
      console.log(applicatedTax, "applicatedTax");
      let expectedPayment = this.payments.setExpectedPayment(applicatedTax);
      console.log(expectedPayment, "expectedPayment");
      console.log(this.payments.takePayment(cashPayment));
      this.payments.takePayment(cashPayment);
      let returnedChange = this.payments.returnChange();
      console.log(returnedChange);
    }
    printReceipt() {
      this.receipt.printReceipt();
    }
  }



  exports.Till = Till;
})(this);
