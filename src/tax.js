(function(exports) {
  function Tax() {
  }

  Tax.prototype.applyTax = function(total) {
    const TAXRATE = 8.64
    let postTaxTotal = 0
    let additionalTax = (total / 100) * TAXRATE
    postTaxTotal = parseFloat((additionalTax + total).toFixed(2))
    return postTaxTotal
  };

  exports.Tax = Tax;
})(this)
