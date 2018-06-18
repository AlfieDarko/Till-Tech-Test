(function(exports) {
  function Discount() {}

  let muffinDiscountBool = false;
  let spendOver50DiscountBool = false;
  let discountRate = 0;

  Discount.prototype.applyDiscounts = function(total, returnBasket) {
    let destructuredBasket = returnBasket.items;
    let inputTotal = total;
    // let muffinDiscountBool;
    // let spendOver50DiscountBool;
    let discountedTotal = 0;
    discountedTotal = total;
    // I am abstracting the discount bits into two things, the first will check for muffins and adjust discouunt discountRate
    //  the second will check for total and adjust discount rate, finally we will then apply discounts.
    // then we can do the check for discount bools if so then push discount marker to array
    this.resetDiscounts();
    this.returnMuffinDiscountBool(returnBasket);
    this.returnSpendOver50DiscountBool(total);

    // this.returnMuffinDiscountBool(destructuredBasket);
    // this.returnSpendOver50DiscountBool(amount);
    discountedTotal = inputTotal -= (total / 100) * discountRate;
    console.log(discountedTotal);
    return discountedTotal;
  };
  // function returning wherther the muffinDiscount bool should be on or not
  Discount.prototype.returnMuffinDiscountBool = function(returnBasket) {
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
  };

  Discount.prototype.returnSpendOver50DiscountBool = function(amount) {
    if (amount > 50) {
      discountRate += 5;
      spendOver50DiscountBool = true;
    }
    return spendOver50DiscountBool;
  };

  Discount.prototype.resetDiscounts = function() {
    spendOver50DiscountBool = false;
    muffinDiscountBool = false;
    discountRate = 0;
  };

  exports.Discount = Discount;
})(this);
