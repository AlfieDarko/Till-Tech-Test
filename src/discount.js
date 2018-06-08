(function(exports) {
  function Discount() {
    this.muffinDiscountBool = false;
    this.spendOver50DiscountBool = false;
  }

  Discount.prototype.applyDiscounts = function(total, showBasket) {
    let discountRate = 0;
    let discountedTotal = 0;
    discountedTotal = total;

    if (showBasket[0].items.includes("Blueberry Muffin") || showBasket[0].items.includes("Chocolate Chip Muffin") || showBasket[0].items.includes("Muffin Of The Day")) {
      discountRate += 10;
      this.muffinDiscountBool = true;
    } else {
      this.muffinDiscountBool = false;
    }

    if (total > 50) {
      discountRate += 5;
      this.spendOver50DiscountBool = true;
    } else {
      this.spendOver50DiscountBool = false;
    }

    discountedTotal = total -= (total / 100) * discountRate;
    return discountedTotal;
  };

  exports.Discount = Discount;
})(this);
