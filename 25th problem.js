function canMouseEat(direction, game) {
  let mPosition = [];
  game.forEach((row, iRow) =>
    row.forEach((_, iCol) => {
      if (game[iRow][iCol] == "m") {
        mPosition = [iRow, iCol];
      }
    })
  );
  const [iRow, iCol] = mPosition;
  const directions = {
    up: () => iRow > 0 && game[iRow - 1][iCol] == "*",
    down: () => iRow < game.length - 1 && game[iRow + 1][iCol] == "*",
    right: () => game[iRow][iCol + 1] == "*",
    left: () => game[iRow][iCol - 1] == "*",
  };
  return directions[direction]();
}
