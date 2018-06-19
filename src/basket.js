(function(exports) {
  class Basket {
    constructor() { }

    clearBasket() {
      _basket.length = 0;
    }

    returnBasket() {
      if (_basket[0] === undefined) {
        return _basket;
      }
      else {
        return _basket[0];
      }
    }
    
    addToBasket(order) {
      _basket.push(order);
    }
  }

  const _basket = [];

  exports.Basket = Basket;
})(this);
