(function(exports) {
  function Basket() {}

  const _basket = [];

  Basket.prototype.clearBasket = function() {
    _basket.length = 0;
  };

  Basket.prototype.returnBasket = function() {
    if (_basket[0] === undefined) {
      return _basket;
    } else {
      return _basket[0];
    }
  };

  Basket.prototype.addToBasket = function(order) {
    console.log([order], "whats going in basket");
    _basket.push(order);
  };

  exports.Basket = Basket;
})(this);
