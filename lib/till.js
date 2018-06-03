(function(exports) {
	function Till() {
		this.total = 0;
	}

	Till.prototype.calculateTotal = function() {
		return this.total;
	};
	exports.Till = Till;
})(this);
