(function(exports) {
  function Payments() {
    this.expectedPayment = 0
  }

  Payments.prototype.takePayment = function(amount) {
    if (isNaN(amount)) {
      throw new Error("Not a valid number")
    } else if (amount < this.expectedPayment) {
      throw new Error("Not enough to make payment")

    }
  }

  //   Payments.prototype.verifyPayment = function(amount) {
  //     this.expectedPayment = amount
  //   };
  // };

  Payments.prototype.verifyPayment = function(postTaxAmount) {
    this.expectedPayment = postTaxAmount
    return this.expectedPayment
  };

  exports.Payments = Payments
})(this)
