const COINS = [5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

/**
 * calculateChange accepts three parameters (totalPayable, cashPaid, coinsAvail)
 * and calculates the change in "coins" that needs to be returned.
 * @param {number} totalPayable the integer amount (in pennies) to be paid
 * @param {number} cashPaid the integer amount (in pennies) the person paid
 * @param {array} [coinsAvail=COINS] the list of coins to select change from.
 * @returns {array} list of coins we need to dispense to the person as change
 * @example calculateChange(215, 300); // returns [50, 20, 10, 5]
 */
module.exports = function calculateChange (totalPayable, cashPaid, coinsAvail) {
  const coins = coinsAvail || COINS; // if coinsAvail param undefined use COINS
  return coins.reduce(function (change, coin) {
    const sum = change.reduce(function (sum, coin) { return sum + coin }, 0);
    const remaining = cashPaid - totalPayable - sum;
    const times_coin_fits = Math.floor(remaining / coin);
    return change.concat(Array(times_coin_fits).fill(coin));
  }, []); // change array starts out empty and gets filled itteratively.
};
