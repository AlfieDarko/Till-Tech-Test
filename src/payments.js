(function(exports) {
  function Payments() {
  }

  let _expectedPayment = 0;
  let _changeExpected = 0;


  Payments.prototype.setExpectedPayment = function(postTaxAmount) {
    _expectedPayment = postTaxAmount;
    return _expectedPayment;
  };

  Payments.prototype.takePayment = function(amount) {
    if (isNaN(amount)) {
      throw new Error("Not a valid number");
    } else if (amount < _expectedPayment) {
      throw new Error("Not enough to make payment");
    } else {
      _changeExpected = amount - _expectedPayment;
      return true
    }
  };

  Payments.prototype.returnChange = function() {
    return parseFloat(_changeExpected.toFixed(2));
  };
  exports.Payments = Payments;
})(this);
