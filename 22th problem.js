function countDecorations(bigTree) {
  if (bigTree) {
    let value = bigTree["value"];
    return (value +=
      countDecorations(bigTree["right"]) + countDecorations(bigTree["left"]));
  } else {
    return 0;
  }
}
