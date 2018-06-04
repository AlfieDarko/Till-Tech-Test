/* eslint-env es6, mocha */

describe('Receipt', function() {
  let receipt

  beforeEach(function() {
    receipt = new Receipt()
  });

  describe('.printReceipt()', function() {
    it('prints receipt', function() {

      expect(receipt.printReceipt()).to.eql('hello')
    });
  });
});
