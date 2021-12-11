function shouldBuyFidelity(times) {
  const singleUseMovieTicket = 12 * times;
  let fidelityCard = 250;
  for (var time = 1; time <= times; time++) {
    fidelityCard += 12 * 0.75 ** time;
  }
  return fidelityCard < singleUseMovieTicket;
}
