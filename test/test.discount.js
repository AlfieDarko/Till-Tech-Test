/* eslint-env es6, mocha */

describe("Discount", function() {
	let discount;
	let calculate;
	let showBasket;
	describe(".applyDiscounts()", function() {
		beforeEach(function() {
			discount = new Discount();
			calculate = sinon.stub(Total.prototype, "calculate");

			showBasket = sinon.stub(Orders.prototype, "showBasket");
		});

		afterEach(function() {
			Total.prototype.calculate.restore();
			Orders.prototype.showBasket.restore();

			// Unwraps the spy
		});

		it("applies 5% discount on orders over 50", function() {
			calculate.returns(100);
			showBasket.returns([
				{
					name: "John",
					items: [
						"Affogato",
						"Affogato",
						"Affogato",
						"Affogato",
						"Affogato",
						"Affogato",
						"Affogato"
					]
				}
			]);

			expect(discount.applyDiscounts(calculate(), showBasket())).to.eql(95);
		});

		it("applies a 10% discount on orders containing Muffins", function() {
			calculate.returns(12.7);
			showBasket.returns([
				{
					name: "John",
					items: ["Chocolate Chip Muffin", "Cafe Latte", "Flat White"]
				}
			]);

			expect(discount.applyDiscounts(calculate(), showBasket())).to.eql(11.43);
		});
	});
});
