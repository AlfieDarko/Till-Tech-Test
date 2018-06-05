/* eslint-env es6, mocha */

describe('Receipt', function() {
  let receipt
  let showBasket

  describe('.printReceipt', function() {
    beforeEach(function() {
      receipt = new Receipt()
      showBasket = sinon.stub(Orders.prototype, "showBasket")
    });

    afterEach(function() {
      Orders.prototype.showBasket.restore()
    });
    it('prints a receipt including the correct name of order', function() {
      showBasket.returns({
        name: "Tom",
        items: ["Cafe Latte", "Single Espresso"]
      })

      expect(receipt.printReceipt(showBasket())).to.include('Tom')
    });

    it('prints a receipt including the correct price of order', function() {
      showBasket.returns({
        name: "Tom",
        items: ["Cafe Latte", "Single Espresso"]
      })

      expect(receipt.printReceipt(showBasket())).to.include(6.80)
    });

    it('prints a receipt including the correct items ', function() {
      showBasket.returns({
        name: "Tom",
        items: ["Cafe Latte", "Single Espresso"]
      })

      expect(receipt.printReceipt(showBasket())).to.include('Cafe Latte')
    });

    it('prints a receipt not including correct items ', function() {
      showBasket.returns({
        name: "Tom",
        items: ["Cafe Latte", "Single Espresso"]
      })

      expect(receipt.printReceipt(showBasket())).to.not.include('Banana')
    });

  });

});
// describe('Receipt', function() {
//   let receipt
//   let showBasket
//   beforeEach(function() {
//     receipt = new Receipt()
//
//     showBasket = sinon.stub(Orders.prototype, "showBasket").returns({
//       name: "Tom",
//       items: ["Cafe Latte", "Single Espresso"]
//     })
//
//   });
//
//   afterEach(function() {
//     Orders.prototype.showBasket.restore();
//     console.log('working');
//     Unwraps the spy
//
//   });
//
//   describe('.printReceipt()', function() {
//     beforeEach(function() {
//       Orders.prototype.showBasket.restore();
//       console.log('working2');
//       Unwraps the spy
//
//     });
//     afterEach(function() {
//       Orders.prototype.showBasket.restore();
//
//     });
//
//     it('prints a receipt including name of order', function() {
//       let showBasket = sinon.stub(Orders.prototype, "showBasket").returns(['John', 'Cafe Latte'])
//       expect(receipt.printReceipt(showBasket())).to.include('John')
//     });
//
//     it('prints a receipt including name and food order', function() {
//       Orders.prototype.showBasket.restore();
//       Unwraps the spy
//       let showBasket = sinon.stub(Orders.prototype, "showBasket").returns(['John', 'Cafe Latte'])
//
//       expect(receipt.printReceipt(showBasket())).to.include('Cafe Latte')
//
//     });
//
//     it('prints a receipt including name, food order and food price', function() {
//        Orders.prototype.showBasket.restore();
//        Unwraps the spy
//
//       let showBasket = sinon.stub(Orders.prototype, "showBasket").returns({
//         name: "Tom",
//         items: ["Cafe Latte", "Single Espresso"]
//       })
//       console.log(' is this right');
//       console.log(showBasket());
//       expect(receipt.printReceipt(showBasket())).to.include(6.80)
//     });
//
//   });
// });