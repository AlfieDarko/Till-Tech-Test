(function(exports) {
  function Discount() {}

  Discount.prototype.applyDiscounts = function(total, returnBasket) {
    let destructuredBasket = returnBasket.items;
    let inputTotal = total;
    let muffinDiscountBool = false;
    let spendOver50DiscountBool = false;
    let discountRate = 0;
    let discountedTotal = 0;
    discountedTotal = total;

    destructuredBasket.forEach(function(element) {
      if (
        element.includes("Blueberry Muffin") ||
        element.includes("Chocolate Chip Muffin") ||
        element.includes("Muffin Of The Day")
      ) {
        muffinDiscountBool = true;
      }
    });

    if (total > 50) {
      discountRate += 5;
      spendOver50DiscountBool = true;
    }

    if (muffinDiscountBool) {
      discountRate += 10;
    }

    discountedTotal = inputTotal -= (total / 100) * discountRate;
    return discountedTotal;
  };

  exports.Discount = Discount;
})(this);
