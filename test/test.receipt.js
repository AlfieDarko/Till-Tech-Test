/* eslint-env es6, mocha */

describe("Receipt", function() {
  let receipt;
  let returnBasket;
  let takePayment;
  let verifyPayment;

  describe(".printReceipt()", function() {
    beforeEach(function() {
      receipt = new Receipt();
      returnBasket = sinon.stub(Basket.prototype, "returnBasket");

      returnBasket.returns({
        name: "Tom",
        items: ["Cafe Latte", "Single Espresso"]
      });

      verifyPayment = sinon.stub(Payments.prototype, "verifyPayment");
      takePayment = sinon.stub(Payments.prototype, "takePayment");
    });

    afterEach(function() {
      Basket.prototype.returnBasket.restore();
      Payments.prototype.verifyPayment.restore();
      Payments.prototype.takePayment.restore();
    });

    it("prints a receipt including the correct name of order", function() {
      expect(receipt.printReceipt(returnBasket())).to.include("Tom");
    });

    it("prints a receipt including the correct price of order", function() {
      expect(receipt.printReceipt(returnBasket())).to.include("Total: £6.80");
    });

    it("prints a receipt including the correct items ", function() {
      expect(receipt.printReceipt(returnBasket())).to.include("Cafe Latte");
    });

    it("prints a receipt not including incorrect items ", function() {
      expect(receipt.printReceipt(returnBasket())).to.not.include("Banana");
    });

    it("includes single cost of line item Cafe Latte", function() {
      expect(receipt.printReceipt(returnBasket())).to.include(
        "Cafe Latte: £4.75"
      );
    });

    it("includes single cost of line item Single Expresso", function() {
      expect(receipt.printReceipt(returnBasket())).to.include(
        "Single Espresso: £2.05"
      );
    });

    it("includes total with the Taxrate applied", function() {
      expect(receipt.printReceipt(returnBasket())).to.include(
        "Total w/ Tax: £7.39"
      );
    });
  });
});
