$(document).ready(function(){
  let till = new Till()

  let customerNameFromInput

  $( "#add-name-button" ).click(function() {
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
        console.log($(sel).val())
      });

      console.log(itemsArray);
console.log($("#items-in-dropdown option:selected").length);

   let destructure = []
   destructure.length = $("#items-in-dropdown option:selected").length

      till.orders.addToBasket(customerNameFromInput, itemsArray);

      console.log( let [v1, v2] = ("#items-in-dropdown option:selected").split());

      // console.log(till.orders.showBasket(), let [v1, v2] = ("#items-in-dropdown option:selected").split( ));
    }



  })


});

// for(element in till.orders.products) {
//   let opt = document.createElement("option");
//   opt.value = element
//   opt.innertHTML =   `${element}: ${till.orders.products[element]}`;
//
//
//   // append it to the select element
//   newSelect.appendChild(opt);
//   index++
// }
