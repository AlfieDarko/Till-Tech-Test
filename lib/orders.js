(function(exports) {
	function Orders() {
		this.basket = [];
	}

	Orders.prototype.clearBasket = function() {
		this.basket.length = 0;
	};

	Orders.prototype.showBasket = function() {
		return this.basket;
	};

	// Orders.prototype.addToBasket = function(name, food) {
	// 	// take a name, and take a food item
	// 	let args = [];
	// 	for (var i = 1; i < arguments.length; i++) {
	// 		args.push(arguments[i]);
	// 	}
	//
	// 	let newOrder = {
	// 		name,
	// 		items: [...args]
	// 	};
	//
	// 	this.basket.push(newOrder);
	// };

	exports.Orders = Orders;
})(this);
