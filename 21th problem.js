function canCarry(capacity, trip) {
  let totalGifts = 0;
  for (var i = 0; i < trip.length; i++) {
    const [gifts, pickup, delivery] = trip[i];
    if (trip[i + 1] === undefined) {
      totalGifts += gifts;
      if (totalGifts > capacity) return false;
      break;
    }
    const [nextGifts, nextPickup, nextDelivery] = trip[i + 1];
    if (delivery > nextPickup) {
      totalGifts += gifts;
    }
    if (totalGifts > capacity) return false;
  }
  return true;
}
