/* eslint-env es6, mocha */

describe('Receipt', function() {
  let receipt

  beforeEach(function() {
    receipt = new Receipt()
  });

  describe('.printReceipt()', function() {
    it('prints a receipt including name of order', function() {
      let calculate = sinon.stub(Orders.prototype, "showBasket").returns(['John', 'Cafe Latte'])
      expect(receipt.printReceipt(calculate())).to.include('John')
    });

    it('prints a receipt including name and food order', function() {
      Orders.prototype.showBasket.restore(); // Unwraps the spy
      let calculate = sinon.stub(Orders.prototype, "showBasket").returns(['John', 'Cafe Latte'])

      expect(receipt.printReceipt(calculate())).to.include('Cafe Latte')

    });
  });
});
