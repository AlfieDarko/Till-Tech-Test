(function(exports) {
  function Payments() {
    this.expectedPayment = 0;
    this.changeExpected = 0;
  }

  Payments.prototype.verifyPayment = function(postTaxAmount) {
    this.expectedPayment = postTaxAmount;
    return this.expectedPayment;
  };

  Payments.prototype.takePayment = function(amount) {
    if (isNaN(amount)) {
      throw new Error("Not a valid number");
    } else if (amount < this.expectedPayment) {
      throw new Error("Not enough to make payment");
    } else {
      this.changeExpected = amount - this.expectedPayment;
      return true
    }
  };

  Payments.prototype.returnChange = function() {
    return parseFloat(this.changeExpected.toFixed(2));
  };
  exports.Payments = Payments;
})(this);
