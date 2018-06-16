/* eslint-env es6, mocha */
let spy = sinon.spy();
describe("Receipt", function() {
  let receipt;
  let returnBasket;
  let takePayment;
  let verifyPayment;
  let calculateEach;

  describe(".printReceipt()", function() {
    beforeEach(function() {
      receipt = new Receipt(Total, Tax, Discount, Products);

      returnBasket = {
        name: "Tom",
        items: ["Cafe Latte", "Single Espresso"]
      };
    });

    afterEach(function() {});

    it("prints a receipt including the correct name of order", function() {
      expect(receipt.printReceipt(returnBasket)).to.include("Tom's Order:");
    });

    it("prints a receipt including the correct price of order", function() {
      expect(receipt.printReceipt(returnBasket)).to.include("Total: £6.80");
    });

    it("prints a receipt including the correct items ", function() {
      expect(receipt.printReceipt(returnBasket)).to.include(
        "Cafe Latte: £4.75"
      );
    });

    it("prints a receipt not including incorrect items ", function() {
      expect(receipt.printReceipt(returnBasket)).to.not.include("Banana");
    });

    it("includes single cost of line item Cafe Latte", function() {
      expect(receipt.printReceipt(returnBasket)).to.include(
        "Cafe Latte: £4.75"
      );
    });

    it("includes single cost of line item Single Expresso", function() {
      expect(receipt.printReceipt(returnBasket)).to.include(
        "Single Espresso: £2.05"
      );
    });

    it("includes total with the Taxrate applied", function() {
      expect(receipt.printReceipt(returnBasket)).to.include(
        "Total w/ Tax: £7.39"
      );
    });
  });
});
