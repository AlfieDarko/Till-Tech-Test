(function(exports) {
	function Till() {
		this.orders = new Orders();
		this.total = 0;
	}

	Till.prototype.calculateTotal = function() {
		let items = this.orders.showBasket()[0].items;

		for (let i of items) {
			if (this.orders.products.hasOwnProperty(i)) {
				this.total += this.orders.products[i];
			}
		}

		return this.total;
	};
	exports.Till = Till;
})(this);
