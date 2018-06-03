/* eslint-env es6, mocha */

describe("Products", function() {
	let products = new Products();
	describe(".list", function() {
		it("is an property that is an array", function() {
			expect(products.list).to.be.instanceof(Array);
		});

		it("is an array that contains the coffeeList object", function() {
			expect(products.list[0]).to.be.instanceof(Object);
		});

		it("contains the key value pair {'Cafe Latte': 4.75} ", () => {
			expect(products.list[0]).to.deep.contain({ "Cafe Latte": 4.75 });
		});
	});

	describe(".listProducts()", () => {
		it("returns the object of Coffee items", () => {
			expect(products.listProducts()).to.equal(products.list[0]);
		});
	});
});
