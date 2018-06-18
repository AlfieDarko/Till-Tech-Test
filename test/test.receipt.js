/* eslint-env es6, mocha */
let spy = sinon.spy();
describe("Receipt", function() {
  let receipt;
  let returnBasket;
  let takePayment;
  let verifyPayment;
  let calculateEach;
  let totalStub;
  let productsStub;

  let totalMock;
  let productsMock;
  describe(".printReceipt()", function() {
    beforeEach(function() {
      sinon.stub(Total.prototype, "calculate").callsFake(() => 6.8);
      sinon
        .stub(Total.prototype, "calculateEach")
        .callsFake(() => [4.75, 2.05]);

      receipt = new Receipt(Total, Tax, Discount, Products);

      returnBasket = {
        name: "Tom",
        items: ["Cafe Latte", "Single Espresso"]
      };
    });

    afterEach(function() {
      Total.prototype.calculate.restore();
      Total.prototype.calculateEach.restore();
    });

    it("prints a receipt including the correct name of order", function() {
      console.log(returnBasket, "basket in !!!!!!!!!!!!!!!!!!! tests");
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
