/* eslint-env es6, mocha */
describe("Till", function() {
	describe(".total", function() {
		it("is a property that holds the total", () => {
			let till = new Till();
			expect(till.total).to.eql(0);
		});
	});

	describe(".calculateTotal()", function() {
		it("returns total of 1 item from the basket", function() {
			let till = new Till();

			let basket = sinon.stub(Orders.prototype, "showBasket").returns([
				{
					name: "Tom",
					items: ["Cafe Latte"]
				}
			]);
			expect(till.calculateTotal()).to.eql(4.75);
		});
	});
});
