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
    // TO FIX BUG, JUST ACCEPT OBJECT AS IT IS AND PUSH INTO BASKET!!

    // so we can extend the scope of this inside of internal functions
    let self = this;

    // so we can skip the name in the arguments and push the food into an array
    let args = Array.from(arguments)
    .slice(1)


    // Now ww will create an newOrder object with our items and name
    let newOrder = {
      name,
      items: [...args]
    };

    _basket.push(newOrder);
  };

  exports.Basket = Basket;
})(this);
