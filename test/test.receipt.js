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
      sinon
        .stub(Total.prototype, "calculate")
        .callsFake(() => 6.8);
      sinon
        .stub(Total.prototype, "calculateLinePrice")
        .callsFake(() => [4.75, 2.05]);
      sinon
        .stub(Payments.prototype, "setExpectedPayment")
        .callsFake(() => 7.39)
      sinon
        .stub(Payments.prototype, "takePayment")
        .callsFake(() => 10)
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

    // printReceipt ends
  });

  describe('.addCashPaidFromTillToReceipt()', () => {
    it('adds cash paid to the till  on the receipt', () => {
      receipt.clearReceipt()
      receipt.addCashPaidFromTillToReceipt(50)
      expect(receipt.printReceipt(returnBasket)).to.include(
        "    Amount Paid: £50"
      )
    });
  })

  describe('.addChangeGivenFromTillToReceipt()', () => {
    it('adds change given to customer on the receipt', () => {
      console.log(receipt);
      receipt.addChangeGivenFromTillToReceipt(2.61)
      expect(receipt.printReceipt()).to.include(
        "    Change Given: £2.61"
      )
    });
  });


  describe('clearReceipt()', () => {
    it('clears the receipt Array', () => {
      receipt.clearReceipt()
      expect(receipt.printReceipt()).to.eql([])
    });

  });

  describe('.addDiscountAlertOnReceipt()', () => {
    it('adds text that shows the customer that a muffin discount of 10% has been applied', () => {
      let muffinBasket = {
        name: "Muffin Man",
        items: ["Chocolate Chip Muffin", "Cafe Latte", "Flat White"]
      }
      receipt.addDiscountAlertOnReceipt(muffinBasket)
      console.log(receipt.printReceipt());
    expect(receipt.printReceipt()).to.include("10% Muffin Discount!")
    });
  });

    describe('addShopDetailsToReceipt()', () => {

      it('adds shop details like telephone number and address to the top of the receipt', () => {
         receipt.addShopDetailsToReceipt()
         expect(receipt.printReceipt()).to.include(
           "The Coffee Connection",
           "123 Lakeside Way",
           "E2CA LB4",
           "Tel:0207 324 5342"
         )

      });

    });

  describe('.addDateTimeToReceipt()', () => {

    beforeEach(() => {
      sinon
        .stub(Date.prototype, 'toLocaleDateString')
        .returns('18/04/1991')
      sinon
        .stub(Date.prototype, 'toLocaleTimeString')
        .returns('09:00:00')

    });
    afterEach(() => {
      Date.prototype.toLocaleDateString.restore()
      Date.prototype.toLocaleTimeString.restore()
    });

    it('it adds the date and time to the receipt', () => {
      receipt.clearReceipt()
      receipt.createReceipt(returnBasket)
      expect(receipt.printReceipt()).to.include("18/04/1991 09:00:00 \n")
    });
  });


});
