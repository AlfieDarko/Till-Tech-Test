$(document).ready(function() {
  $("#add-name-button").click(function() {
    Buttons.addName();
  });

  $("#add-to-cart-button").click(function() {
    Buttons.addToCart();
  });

  $("#clear-cart-button").click(function() {
    Buttons.clearCart();
  });

  $("#pay-button").click(function() {
    $(".modal").addClass("is-active");
  });

  $("#submit-to-till-button").click(function() {
    Buttons.submitToTill();
  });

  $("#cancel-submit-button").click(function() {
    Buttons.cancelPayment();
  });

  $(".delete").click(function() {
    $(".modal").removeClass("is-active");
  });

  //
  // $("#add-to-cart-button").click(function() {
  //   if (customerNameFromInput == null) {
  //     alert('Enter the customer name!')
  //   } else {
  //     let itemsArray = []
  //     $("#items-in-dropdown option:selected").each(function(i, sel) {
  //       itemsArray.push($(sel).val())
  //     });
  //     till.orders.basket.push({name: customerNameFromInput, items: itemsArray})
  //
  //     till.orders.returnBasket()[0].items.forEach(function(item) {
  //       let option = document.createElement("option")
  //       option.textContent = item;
  //       option.disabled = true
  //       document.getElementById('cart-with-items').appendChild(option)
  //     })
  //
  //     $("#add-to-cart-button").prop("disabled", true)
  //
  //     let totalToPay = till.tax.applyTax(till.discount.applyDiscounts(till.total.calculate(till.orders.returnBasket()[0]).toFixed(2), till.orders.returnBasket([0])))
  //
  //     $("#total-text-area").val(totalToPay)
  //
  //   }
  // });
  //
  // $("#clear-cart-button").click(function() {
  //   till.orders.clearBasket()
  //   $('#cart-with-items').find('option').remove().end()
  //   $("#add-to-cart-button").prop("disabled", false)
  // })
  //
  // $("#pay-button").click(function() {
  //   $(".modal").addClass("is-active");
  // });
  //
  // $("#cancel-submit-button").click(function() {
  //   $(".modal").removeClass("is-active");
  // })
  //
  // $(".delete").click(function() {
  //   $(".modal").removeClass("is-active");
  // });
  //
  // $("#submit-to-till-button").click(function() {
  //
  //   till.makePayment()
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
  // })
});
