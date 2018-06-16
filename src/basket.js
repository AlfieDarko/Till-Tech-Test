(function(exports) {
  function Basket() {}

  const _basket = []

  Basket.prototype.clearBasket = function() {
    _basket.length = 0
  };

  Basket.prototype.returnBasket = function() {
    if (_basket[0] === undefined) {
      return _basket
    } else {
      return _basket[0];
    }
  };

  Basket.prototype.addToBasket = function(name, food) {
    // takes a name, and take a food item

    // so we can extend the scope of this inside of internal functions
    let self = this;

    let args = [];

    // so we can skip the name in the arguments and push the food into an array
    for (var i = 1; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    // if it is successful we will create an order object with our items and name
    let newOrder = {
      name,
      items: [...args]
    };

    _basket.push(newOrder);
  };

  exports.Basket = Basket;
})(this);
