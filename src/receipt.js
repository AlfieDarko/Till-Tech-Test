(function(exports) {
	function Receipt() {
		this.total = new Total();
		this.tax = new Tax();
		this.discount = new Discount();
	}

	Receipt.prototype.printReceipt = function(args) {
		let self = this;
		let receiptString;

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

		receiptString = `${args.name}'s Order: \n\n`;

		zip(args.items, this.total.calculateEach(args)).forEach(function(lineItem) {
			receiptString += lineItem[0] + ": " + lineItem[1] + "\n";
		});

		let itemsTotalDiscounts = this.discount.applyDiscounts(
			this.total.calculate(args),
			[args]
		);

		let itemsTotalWithoutTax = this.total.calculate(args).toFixed(2);

		let amountToTax = (
			this.tax.applyTax(this.total.calculate(args)).toFixed(2) -
			this.total.calculate(args).toFixed(2)
		).toFixed(2);

		let totalWithTax =
			parseFloat(itemsTotalWithoutTax) + parseFloat(amountToTax);

		receiptString += `
		Total: ${itemsTotalDiscounts.toFixed(2)}
		`;

		discountDisplayer();

		receiptString += `Tax: ${amountToTax}
		`;
		receiptString += `Total w/ Tax: ${totalWithTax}
			`;

		console.log(receiptString);
		return receiptString;
	};
	exports.Receipt = Receipt;
})(this);
