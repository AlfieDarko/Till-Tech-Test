(function(exports) {
  function Tax() {}

  Tax.prototype.applyTax = function(total) {

    const TAXRATE = 8.64

    let additionalTax = (total / 100) * TAXRATE
    return parseFloat((additionalTax + total).toFixed(2))
  };

  exports.Tax = Tax;
})(this)
