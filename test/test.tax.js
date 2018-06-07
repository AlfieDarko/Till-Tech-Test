/* eslint-env es6, mocha */

describe("Tax", function() {
	let tax;
	let calculate;
	describe(".applyTax()", function() {
		beforeEach(function() {
			tax = new Tax();
			calculate = sinon.stub(Total.prototype, "calculate");
		});

		afterEach(function() {
			Total.prototype.calculate.restore();
			// Unwraps the spy
		});

		it("returns applied taxrate of 8.64% on the total", function() {
			calculate.returns(4.75);
			expect(tax.applyTax(calculate())).to.eql(5.16);
		});

		it("returns correct applied taxrate of 8.64% on multiple totals", function() {
			calculate.returns(20.4);
			expect(tax.applyTax(calculate())).to.eql(22.16);
		});
	});
});
