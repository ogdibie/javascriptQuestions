function minChange(change, coinsAvailable) {
  const res = [];
  const coinAmounts = [25, 10, 5, 1];
  const coinNames = ["Quarter", "Dime", "Nickel", "Penny"];
  let index = 0;
  let remainingChange = change;
  while (remainingChange > 0 && index < coinAmounts.length) {
    let numCoin = Math.floor(remainingChange / coinAmounts[index]);
    let availableCoin = coinsAvailable[index];
    let coinsUsed = numCoin > availableCoin ? availableCoin : numCoin;

    res.push(coinsUsed + " " + coinNames[index]);
    remainingChange = remainingChange - coinsUsed * coinAmounts[index];
    index++;
  }

  if (index == coinAmounts.length && remainingChange > 0) return [];
  return res;
}

module.exports = minChange;
