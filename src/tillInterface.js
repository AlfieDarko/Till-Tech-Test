$(document).ready(function() {
  let till = new Till()

  let customerNameFromInput
  let cartItems = $('#cart-with-items')
  console.log(cartItems);

  $("#add-name-button").click(function() {
    if ($("#customer-names-input").val()) {
      customerNameFromInput = $("#customer-names-input").val()
      $("#customer-names-input").prop("disabled", true);
      $("#add-name-button").prop("disabled", true);
    }
    console.log(customerNameFromInput);
  });

  $("#add-to-cart-button").click(function() {
    if (customerNameFromInput == null) {
      alert('Enter the customer name!')
    } else {
      let itemsArray = []
      $("#items-in-dropdown option:selected").each(function(i, sel) {
        itemsArray.push($(sel).val())
      });
      // console.log(itemsArray);
      till.orders.basket.push({name: customerNameFromInput, items: itemsArray})
      // console.log(till.orders.showBasket());
      till.orders.showBasket()[0].items.forEach(function(item) {
        let option = document.createElement("option")
        console.log(option);
        option.textContent = item;
        option.disabled = true
        document.getElementById('cart-with-items').appendChild(option)
      })

      $("#add-to-cart-button").prop("disabled", true)
    }
  });

  $("#clear-cart-button").click(function() {

    till.orders.clearBasket()

    $('#cart-with-items').find('option').remove().end()
    $("#add-to-cart-button").prop("disabled", false)

  })
})
