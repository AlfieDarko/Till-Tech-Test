(function(exports) {
  function Payments() {}

  Payments.prototype.takePayment = function(amount) {
    if (isNaN(amount)) {
      throw new Error("Not a valid number")
    }
  };

  exports.Payments = Payments
})(this)
