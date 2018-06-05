/* eslint-env es6, mocha */

describe('Receipt', function() {
  let receipt
  let showBasket

  describe('.printReceipt()', function() {
    beforeEach(function() {
      receipt = new Receipt()
      showBasket = sinon.stub(Orders.prototype, "showBasket")

      showBasket.returns({
        name: "Tom",
        items: ["Cafe Latte", "Single Espresso"]
      })

    });

    afterEach(function() {
      Orders.prototype.showBasket.restore()
    });

    it('prints a receipt including the correct name of order', function() {
      expect(receipt.printReceipt(showBasket())).to.include('Tom')
    });

    it('prints a receipt including the correct price of order', function() {
      expect(receipt.printReceipt(showBasket())).to.include(6.80)
    });

    it('prints a receipt including the correct items ', function() {
      expect(receipt.printReceipt(showBasket())).to.include('Cafe Latte')
    });

    it('prints a receipt not including incorrect items ', function() {
      expect(receipt.printReceipt(showBasket())).to.not.include('Banana')
    });

    it('includes single cost of line item Cafe Latte', function() {
      expect(receipt.printReceipt(showBasket())).to.include('Cafe Latte: 4.75')
    });
  });

});
