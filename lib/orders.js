(function(exports) {
	function Orders() {
		this.basket = [];
	}

	Orders.prototype.clearBasket = function() {
		this.basket.length = 0;
	};

	exports.Orders = Orders;
})(this);
