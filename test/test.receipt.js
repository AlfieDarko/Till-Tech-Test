/* eslint-env es6, mocha */
let spy = sinon.spy();
describe("Receipt", function() {
  let receipt;
  let returnBasket;
  let takePayment;
  let verifyPayment;
  let calculateEach;
  let totalStub
  let productsStub

  let totalMock
  let productsMock
  describe(".printReceipt()", function() {
    beforeEach(function() {

      sinon.stub(Total.prototype, 'calculate').callsFake(() => 6.80)
      sinon.stub(Total.prototype, 'calculateEach').callsFake(() => [ 4.75, 2.05 ])

      console.log(total.calculate(), 'woo');

      sinon
      .stub(Products.prototype, 'listProducts')
      .callsFake(() => (
        {
          "Cafe Latte": 4.75,
          "Flat White": 4.75,
          Cappucino: 3.85,
          "Single Espresso": 2.05,
          "Double Espresso": 3.75,
          Americano: 3.75,
          Cortado: 4.55,
          Tea: 3.65,
          "Choc Mudcake": 6.4,
          "Choc Mousse": 8.2,
          Affogato: 14.8,
          Tiramisu: 11.4,
          "Blueberry Muffin": 4.05,
          "Chocolate Chip Muffin": 4.05,
          "Muffin Of The Day": 4.55
        }
      ))
      receipt = new Receipt( Total, Tax, Discount, Products);

      returnBasket = {
        name: "Tom",
        items: ["Cafe Latte", "Single Espresso"]
      };
    });

    afterEach(function() {
      Total.prototype.calculate.restore()
      Total.prototype.calculateEach.restore()

      Products.prototype.listProducts.restore()
    });

    it("prints a receipt including the correct name of order", function() {
      expect(receipt.printReceipt(returnBasket)).to.include("Tom's Order:");
    });

    it("prints a receipt including the correct price of order", function() {
      expect(receipt.printReceipt(returnBasket)).to.include("Total: £6.80");
    });

    it("prints a receipt including the correct items ", function() {
      console.log(receipt.printReceipt(returnBasket), 'lol');
      expect(receipt.printReceipt(returnBasket)).to.include(
        "Cafe Latte: £4.75"
      );
    });

    it("prints a receipt not including incorrect items ", function() {
      expect(receipt.printReceipt(returnBasket)).to.not.include("Banana");
    });

    it("includes single cost of line item Cafe Latte", function() {
console.log(receipt.printReceipt(returnBasket), 'loged')

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
