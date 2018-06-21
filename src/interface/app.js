let basket = new Basket();
let payments = new Payments();
let products = new Products();
let total = new Total(products);
let tax = new Tax();
let discount = new Discount();
let receipt = new Receipt(total, tax, discount);
let till = new Till(basket, payments, receipt);
let display = new Display();
let buttons = new Buttons();
// is this the proper way to declare instances in an app like this?
