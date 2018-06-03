/* eslint-env es6, mocha */

describe("Till", function() {
	describe(".total", () => {
		it("is a property that holds the total", () => {
			let till = new Till();
			expect(till.total).to.eql(0);
		});
	});

	// describe(".calculateTotal()", function() {
	// 	it("returns an integer", () => {
	// 		expect(Till.calculateTotal()).to.satisfy(Number.isInteger);
	// 	});
	// });
});
