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

    // returnMuffinDiscountBool function returning whether the
    // muffinDiscount bool should be on or not
    returnMuffinDiscountBool(returnBasket) {
      let destructuredBasket = returnBasket.items;
      // pass just basket items into destructuredBasket variable
      // goes through the elements and checks if they have a muffin,
      // rendering muffinDiscountBool as true
      destructuredBasket.forEach(function(element) {
        if (
          element.includes("Blueberry Muffin") ||
          element.includes("Chocolate Chip Muffin") ||
          element.includes("Muffin Of The Day")
        ) {
          _discountRate = 10;
          console.log(_discountRate);
          _muffinDiscountBool = true;
        }
      });
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
