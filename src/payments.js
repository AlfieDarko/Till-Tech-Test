(function(exports) {
  class Payments {
    constructor() {
    }
    setExpectedPayment(postTaxAmount) {
      _expectedPayment = postTaxAmount;
      return _expectedPayment;
    }
    takePayment(amount) {
      if (isNaN(amount)) {
        throw new Error("Not a valid number");
      }
      else if (amount < _expectedPayment) {
        throw new Error("Not enough to make payment");
      }
      else {
        _changeExpected = amount - _expectedPayment;
        return true;
      }
    }
    returnChange() {
      return parseFloat(_changeExpected.toFixed(2));
    }
  }

  let _expectedPayment = 0;
  let _changeExpected = 0;




  exports.Payments = Payments;
})(this);
