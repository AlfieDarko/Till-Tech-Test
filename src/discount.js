(function(exports) {
  function Discount() {}

  Discount.prototype.applyDiscounts = function(total) {
    let discountedTotal = 0
    discountedTotal = total

    if (total > 50) {
      discountedTotal -= (total / 100) * 5
    }
    return discountedTotal
  };

  exports.Discount = Discount
})(this)
