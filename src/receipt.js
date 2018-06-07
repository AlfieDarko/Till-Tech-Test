(function(exports) {
	function Receipt() {
		this.total = new Total();
		this.tax = new Tax();
		this.discount = new Discount();
	}

	Receipt.prototype.printReceipt = function(args) {
		let self = this;

		function zip(...arrays) {
			const length = Math.min(...arrays.map(arr => arr.length));
			return Array.from(
				{
					length
				},
				(value, index) => arrays.map(array => array[index])
			);
		}

		function discountDisplayer() {
			if (self.discount.muffinDiscountBool) {
				receiptString += "10% Muffin Discount! \n";
			} else if (self.discount.spendOver50DiscountBool) {
				receiptString += "5% Off Purchases over 50 Discount! \n";
			}
		}

		let receiptString = `${args.name}'s Order: \n\n`;

		zip(args.items, this.total.calculateEach(args)).forEach(function(lineItem) {
			receiptString += lineItem[0] + ": " + lineItem[1] + "\n";
		});

		let itemsTotalDiscounts = this.discount.applyDiscounts(
			this.total.calculate(args),
			[args]
		);

		discountDisplayer();

		let itemsTotalWithoutTax = this.total.calculate(args).toFixed(2);

		let itemsTotalWith;

		let amountToTax = (
			this.tax.applyTax(this.total.calculate(args)).toFixed(2) -
			this.total.calculate(args).toFixed(2)
		).toFixed(2);

		receiptString += `
    Total: ${itemsTotalWithoutTax}
    `;

		receiptString += `Tax: ${amountToTax}
    `;
		receiptString += `Total w/ Tax: ${parseFloat(itemsTotalWithoutTax) +
			parseFloat(amountToTax)}`;

		console.log(receiptString);
		return receiptString;
	};
	exports.Receipt = Receipt;
})(this);
