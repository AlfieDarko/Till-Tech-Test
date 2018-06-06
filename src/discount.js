(function(exports) {
  function Discount() {}

  Discount.prototype.applyDiscounts = function(total, showBasket) {
    let discountRate = 0
    let discountedTotal = 0
    discountedTotal = total

    if (showBasket[0].items.includes('') || showBasket[0].items.includes("Chocolate Chip Muffin") || showBasket[0].items.includes('Muffin Of The Day')) {
      discountRate += 10
    }

    if (total > 50) {
      discountRate += 5
    }

    discountedTotal = total -= ((total / 100) * discountRate)
    return discountedTotal
  };

  exports.Discount = Discount
})(this)

// showBasket.hasProperty('Blueberry Muffin') || showBasket.hasProperty('Chocolate Chip Muffin') || showBasket.hasProperty('Muffin Of The Day')