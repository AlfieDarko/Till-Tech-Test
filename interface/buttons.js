let customerNameFromInput;

let Buttons = {
  addName: function() {
    if ($("#customer-names-input").val()) {
      customerNameFromInput = $("#customer-names-input").val();
      $("#customer-names-input").prop("disabled", true);
      $("#add-name-button").prop("disabled", true);
    }
  },
  //
  addToCart: function() {
    if (customerNameFromInput == null) {
      alert("Enter the customer name!");
    } else {
      let items = [];
      $("#items-in-dropdown option:selected").each(function(i, sel) {
        items.push($(sel).val());
      });

      till.basket.addToBasket({
        name: customerNameFromInput,
        items: [...items]
      });
      till.basket.returnBasket().items.forEach(function(item) {
        let option = document.createElement("option");
        option.textContent = item;
        option.disabled = true;
        document.getElementById("cart-with-items").appendChild(option);
      });

      $("#add-to-cart-button").prop("disabled", true);
      display.viewTotal();
    }
  },

  clearCart: function() {
    till.basket.clearBasket();
    $("#cart-with-items")
      .find("option")
      .remove()
      .end();
    $("#add-to-cart-button").prop("disabled", false);
    $("#total-text-area").val(0);
  },

  submitToTill: function() {
    let moneyInTillTextArea = $("#money-in-till-text-area").val();
    console.log(moneyInTillTextArea);

    let totalCalc = till.receipt.total.calculate(till.basket.returnBasket());

    till.makePayment(moneyInTillTextArea);
    // $("#money-in-till-text-area").val();
    //
    //
    //   if (till.payments.takePayment($("#money-in-till-text-area").val())) {
    //     $(".modal").removeClass("is-active");
    //
    //     let receipt = till.receipt.printReceipt(till.orders.returnBasket()[0]);
    //
    //     $("#receipt-text-area").val(receipt + `\n CASH: £${$("#money-in-till-text-area").val()} \n CHANGE: £${till.payments.returnChange()}`)
    //
    //   } else {
    //     alert('Not enough money!')
    //   }
  },

  printReceipt: function() {},

  cancelPayment: function() {
    $(".modal").removeClass("is-active");
  },

  nextOrder: function() {}
};
//   $("#add-to-cart-button").click(function() {
//     if (customerNameFromInput == null) {
//       alert('Enter the customer name!')
//     } else {
//       let itemsArray = []
//       $("#items-in-dropdown option:selected").each(function(i, sel) {
//         itemsArray.push($(sel).val())
//       });
//       till.orders.basket.push({name: customerNameFromInput, items: itemsArray})
//
//       till.orders.returnBasket()[0].items.forEach(function(item) {
//         let option = document.createElement("option")
//         option.textContent = item;
//         option.disabled = true
//         document.getElementById('cart-with-items').appendChild(option)
//       })
//
//       $("#add-to-cart-button").prop("disabled", true)
//
//       let totalToPay = till.tax.applyTax(till.discount.applyDiscounts(till.total.calculate(till.orders.returnBasket()[0]).toFixed(2), till.orders.returnBasket([0])))
//
//       $("#total-text-area").val(totalToPay)
//     }
//   });
