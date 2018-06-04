/* eslint-env es6, mocha */

describe('Tax', function() {
  describe('.applyTax()', function() {

    it('returns applied taxrate of 8.64% on the total', function() {
      let tax = new Tax()

      let calculate = sinon.stub(Total.prototype, "calculate").returns(4.75)
      expect(tax.applyTax(calculate())).to.eql(5.16)
    });

    it('returns correct applied taxrate of 8.64% on multiple totals', function() {
      let tax = new Tax()
      Total.prototype.calculate.restore(); // Unwraps the spy
      let calculate = sinon.stub(Total.prototype, "calculate").returns(20.40)
      expect(tax.applyTax(calculate())).to.eql(22.16)
    });
  });
});
