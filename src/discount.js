(function(exports) {
  class Discount {
    constructor() {}
    applyDiscounts(total, returnBasket) {
      // let destructuredBasket = returnBasket.items;
      let inputTotal = total;
      let discountedTotal = 0;
      discountedTotal = total;

      this.resetDiscounts();
      this.returnMuffinDiscountBool(returnBasket);
      this.returnSpendOver50DiscountBool(total);

      discountedTotal = inputTotal -= (total / 100) * _discountRate;
      return discountedTotal;
    }

    returnMuffinDiscountBool(returnBasket) {
      let destructuredBasket = returnBasket.items;

      ['Blueberry Muffin',
      'Chocolate Chip Muffin',
      'Muffin Of The Day'].some(
        typeOfMuffin => destructuredBasket.includes(typeOfMuffin)
      ) ? (
       _discountRate = 10, _muffinDiscountBool = true
      ) : (
      _discountRate = 0, _muffinDiscountBool = false
      )

      return _muffinDiscountBool;
    }

    returnSpendOver50DiscountBool(amount) {
      if (amount > 50) {
        _discountRate += 5;
        _spendOver50DiscountBool = true;
      }
      return _spendOver50DiscountBool;
    }

    resetDiscounts() {
      _spendOver50DiscountBool = false;
      _muffinDiscountBool = false;
      _discountRate = 0;
    }
  }

  let _muffinDiscountBool = false;
  let _spendOver50DiscountBool = false;
  let _discountRate = 0;

  exports.Discount = Discount;
})(this);
