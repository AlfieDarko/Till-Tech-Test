/* eslint-env es6, mocha */

describe('Tax', function() {
  describe('.applyTax', function() {
    it('applys a tax on the .total() of 8.64%', function() {
      let tax = new Tax()

      let total = sinon.stub(Till.prototype, "calculateTotal").returns(4.75)

      expect(tax.applyTax).to.eql(5.43)
    });
  });
});
