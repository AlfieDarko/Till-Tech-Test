let Buttons = {
  addName: function() {
    let customerNameFromInput
    if ($("#customer-names-input").val()) {
      customerNameFromInput = $("#customer-names-input").val()
      $("#customer-names-input").prop("disabled", true);
      $("#add-name-button").prop("disabled", true);
    }
  },
  //
  addToCart: function() {


   }

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
}
