/* eslint-env es6, mocha */

describe("Tax", function() {
	let tax;
	let calculate;
	describe(".applyTax()", function() {
		beforeEach(function() {
			tax = new Tax();
		});

		afterEach(function() {
			// Unwraps the spy
		});

		it("returns applied taxrate of 8.64% on the total", function() {
			expect(tax.applyTax(4.75)).to.eql(5.16);
		});

		it("returns correct applied taxrate of 8.64% on multiple totals", function() {
			expect(tax.applyTax(20.4)).to.eql(22.16);
		});
	});
});
