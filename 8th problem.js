//while loop
function maxProfit(prices) {
  while (prices.length > 0) {
    const minPrize = Math.min(...prices);
    const maxPrize = Math.max(...prices);

    const minPrizeIndex = prices.indexOf(minPrize);
    const maxPrizeIndex = prices.indexOf(maxPrize);
    if (minPrizeIndex < maxPrizeIndex) {
      return maxPrize - minPrize;
    }
    if (minPrize === prices.at(-1)) prices.pop();
    if (maxPrize === prices.at(0)) prices.shift();
  }
  return -1;
}

//recursion 
function maxProfit(prices) {
  const minPrize = Math.min(...prices);
  const maxPrize = Math.max(...prices);
  const minPrizeIndex = prices.indexOf(minPrize);
  const maxPrizeIndex = prices.indexOf(maxPrize);
  if (minPrizeIndex < maxPrizeIndex) {
    return maxPrize - minPrize;
  }
  if (minPrize === prices.at(-1)) prices.pop();
  if (maxPrize === prices.at(0)) prices.shift();
  if (prices.length === 0) return -1;
  return maxProfit(prices);
}
