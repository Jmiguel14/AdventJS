export default function getCoins(change) {
  const coins = [50, 20, 10, 5, 2, 1];
  const result = coins.map((coin) => {
    const division = Math.floor(change / coin);
    change = change % coin;
    return division;
  });
  return result.reverse();
}

export default function getCoins(change) {
  const coins = [50, 20, 10, 5, 2, 1];
  const result = new Array(6).fill(0);
  coins.forEach((coin, index) => {
    while (change >= coin) {
      result[index]++;
      change -= coin;
    }
  });
  return result.reverse();
}


function getCombinedCoins(change, coins) {
  const filteredCoins = coins.filter((el) => el <= change);
  let finalCoins = [];
  let lowerCoinCombination = change / filteredCoins[0];
  let coin = filteredCoins[0];
  for (var i = 1; i < filteredCoins.length; i++) {
    const coinDivision = change / filteredCoins[i];
    if (coinDivision < lowerCoinCombination) {
      lowerCoinCombination = coinDivision;
      coin = filteredCoins[i];
    }
  }
  //aumentar coins que se repiten, dar cambio con coin mínima que aún se me permite
  while (change >= coin) {
    finalCoins.push(coin);
    change = change - coin;
  }

  let remainingChange = change % coin;
  if (filteredCoins.includes(remainingChange) || remainingChange === 0) {
    if (remainingChange !== 0) finalCoins.push(remainingChange);
    return finalCoins;
  } else {
    return finalCoins.concat(getCombinedCoins(remainingChange, filteredCoins));
  }
}

function getCoins(change) {
  const coins = [1, 2, 5, 10, 20, 50];
  const combinedCoins = getCombinedCoins(change, coins);
  const coinsChange = coins.map((el) => {
    let amount = 0;
    combinedCoins.forEach((e) => (e === el ? amount++ : ""));
    return amount;
  });
  return coinsChange;
}
