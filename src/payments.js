(function(exports) {
  class Payments {
    constructor() {}
    setExpectedPayment(postTaxAmount) {
      _expectedPayment = postTaxAmount;
      return _expectedPayment;
    }
    takePayment(amountGiven) {
      if (isNaN(amountGiven)) {
        throw new Error("Not a valid number");
      }
      if (amountGiven < _expectedPayment) {
        throw new Error("Not enough to make payment");
      }
      _amountGiven = amountGiven
      _changeExpected = amountGiven - _expectedPayment;
      return true;
    }
    returnChange() {
      return parseFloat(_changeExpected.toFixed(2));
    }

    showExpectedPayment() {
      return _expectedPayment
    }

    showAmountGiven() {
      return _amountGiven
    }
  }

  let _amountGiven = 0
  let _expectedPayment = 0;
  let _changeExpected = 0;

  exports.Payments = Payments;
})(this);
