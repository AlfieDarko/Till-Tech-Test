(function(exports) {
  function Basket() {
    this.basketArray = []
  }

  Basket.prototype.clearBasket = function() {
    this.basketArray.length = 0
  };

  exports.Basket = Basket

})(this)
