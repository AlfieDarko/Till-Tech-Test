(function(exports) {
	function Till() {
		this.orders = new Orders();
		this.total = 0;
	}

	Till.prototype.calculateTotal = function() {
		let items = this.orders.showBasket()[0].items;
		// loop throughh items
		// if key exist in product obj~
		// add return value to this.tootal
		// return this.total

		for (let i of items) {
			console.log(items);
			if (this.orders.products.hasOwnProperty(i)) {
				console.log(this.orders.products[i]);
				console.log(this.total);
				this.total += this.orders.products[i];
			}
		}

		return this.total;
	};
	exports.Till = Till;
})(this);
