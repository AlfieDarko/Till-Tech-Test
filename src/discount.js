(function(exports) {
  class Discount {
    constructor() {}
    applyDiscounts(total, returnBasket) {
      let destructuredBasket = returnBasket.items;
      let inputTotal = total;
      let discountedTotal = 0;
      discountedTotal = total;

      this.resetDiscounts();
      this.returnMuffinDiscountBool(returnBasket);
      this.returnSpendOver50DiscountBool(total);

      discountedTotal = inputTotal -= (total / 100) * discountRate;
      console.log(discountedTotal);
      return discountedTotal;
    }

    // returnMuffinDiscountBool function returning wherther the
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
          discountRate += 10;
          muffinDiscountBool = true;
        }
      });
      return muffinDiscountBool;
    }

    returnSpendOver50DiscountBool(amount) {
      if (amount > 50) {
        discountRate += 5;
        spendOver50DiscountBool = true;
      }
      return spendOver50DiscountBool;
    }

    resetDiscounts() {
      spendOver50DiscountBool = false;
      muffinDiscountBool = false;
      discountRate = 0;
    }
  }

  let muffinDiscountBool = false;
  let spendOver50DiscountBool = false;
  let discountRate = 0;

  exports.Discount = Discount;
})(this);
