(function(exports) {
  class Basket {
    constructor() {}

    clearBasket() {
      _basket.length = 0;
    }

    returnBasket() {
      console.log(_basket);
      return _basket[0] === undefined ? _basket : _basket[0];
    }

    addToBasket(order) {
      _basket.push(order);
    }
  }

  const _basket = [];

  exports.Basket = Basket;
})(this);
