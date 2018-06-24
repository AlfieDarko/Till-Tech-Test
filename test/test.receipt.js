/* eslint-env es6, mocha */
let spy = sinon.spy();
describe("Receipt", function() {
  let receipt;
  let returnBasket;
  let takePayment;
  let verifyPayment;
  let calculateLinePrice;
  let totalStub;
  let productsStub;

  let totalMock;
  let productsMock;
  describe(".printReceipt()", function() {
    beforeEach(function() {
      sinon.stub(Total.prototype, "calculate").callsFake(() => 6.8);
      sinon
        .stub(Total.prototype, "calculateLinePrice")
        .callsFake(() => [4.75, 2.05]);

      sinon.stub(Payments.prototype, "setExpectedPayment").callsFake(() => 7.39)

      sinon.stub(Payments.prototype, "takePayment").callsFake(() => 10)


      receipt = new Receipt(Total, Tax, Discount, Products);

      returnBasket = {
        name: "Tom",
        items: ["Cafe Latte", "Single Espresso"]
      };
    });

    afterEach(function() {
      Total.prototype.calculate.restore();
      Total.prototype.calculateLinePrice.restore();
      Payments.prototype.setExpectedPayment.restore()
      Payments.prototype.takePayment.restore()
    });

    it("prints a receipt including the correct name of order", function() {
      receipt.createReceipt(returnBasket)
      expect(receipt.printReceipt()).to.include("Tom's Order:");
    });

    it("prints a receipt including the correct price of order", function() {
      expect(receipt.printReceipt()).to.include("  Total: £6.80");
    });

    it("prints a receipt including the correct items ", function() {
      expect(receipt.printReceipt()).to.include(
        "Cafe Latte: £4.75"
      );
    });

    it("prints a receipt not including incorrect items ", function() {
      expect(receipt.printReceipt()).to.not.include("Banana");
    });

    it("includes single cost of line item Cafe Latte", function() {
      expect(receipt.printReceipt()).to.include(
        "Cafe Latte: £4.75"
      );
    });

    it("includes single cost of line item Single Expresso", function() {
      expect(receipt.printReceipt()).to.include(
        "Single Espresso: £2.05"
      );
    });

    it("includes total with the Taxrate applied", function() {
      expect(receipt.printReceipt()).to.include(
        "  Total w/ Tax: £7.39"
      );
    });

    it('includes the amount of cash paid by the customer', () => {
    receipt.addCashPaidFromTillToReceipt(10)
    console.log(receipt.printReceipt(returnBasket));

      expect(receipt.printReceipt(returnBasket)).to.include(
        "    Amount Paid: £10"
      )
    });

    it('includes the amount of change the customer is expected to receive', () => {
      receipt.addChangeGivenFromTillToReceipt(2.61)
      expect(receipt.printReceipt()).to.include(
        "    Change Given: £2.61"
      )
    });


  });
});
