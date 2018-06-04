/* eslint-env es6, mocha */

describe('Tax', function() {
  describe('.applyTax()', function() {
    it('returns applied taxrate of 8.64% on the total', function() {
      let tax = new Tax()

      let calculate = sinon.stub(Total.prototype, "calculate").returns(4.75)
      console.log(calculate());
      expect(tax.applyTax(calculate())).to.eql(5.16)
    });
  });
});
