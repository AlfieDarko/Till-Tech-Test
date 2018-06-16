(function(exports) {
  function Discount() {
  }

  Discount.prototype.applyDiscounts = function(total, returnBasket) {
    let destructuredBasket = returnBasket[0]
    let inputTotal = total
    let muffinDiscountBool = false
    let spendOver50DiscountBool = false
    let discountRate = 0;
    let discountedTotal = 0;
    discountedTotal = total;

    returnBasket.forEach(function(element) {
      if (element.items.includes("Blueberry Muffin") ||
          element.items.includes("Chocolate Chip Muffin") ||
          element.items.includes("Muffin Of The Day")) {
            muffinDiscountBool = true;
          }
    });

    if (total > 50) {
      discountRate += 5;
      spendOver50DiscountBool = true;
    }

    if (muffinDiscountBool) {
      discountRate += 10
    }

    discountedTotal = inputTotal -= (total / 100) * discountRate;
    return discountedTotal;
  };

  exports.Discount = Discount;
})(this);
