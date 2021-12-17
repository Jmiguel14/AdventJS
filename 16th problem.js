function decodeNumber(symbols) {
  const decodedSymbols = [...symbols].map((symbol) => {
    if (symbol === ".") return 1;
    if (symbol === ",") return 5;
    if (symbol === ":") return 10;
    if (symbol === ";") return 50;
    if (symbol === "!") return 100;
    return NaN;
  });
  return decodedSymbols.reduce((acc, value, i) => {
    const nextValue = decodedSymbols[i + 1];
    if (nextValue === undefined) {
      acc += value;
      return acc;
    }
    if (value < nextValue) {
      acc -= value;
    } else {
      acc += value;
    }
    return acc;
  }, 0);
}
