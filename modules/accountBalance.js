var random = require('./random.js');
var convertToUSDString = require('./dollarString.js');

function balanceAmount() {

  return convertToUSDString(random(100,10000));
}

module.exports.balanceAmount = balanceAmount;
module.exports.balanceText = "Account balance: \n";
