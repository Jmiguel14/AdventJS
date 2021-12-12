function getMinJump(obstacles) {
  let found = false;
  for (var minLength = 1; ; minLength++) {
    found = obstacles.every((el) => el % minLength !== 0);
    if (found) return minLength;
  }
}
