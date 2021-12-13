function wrapGifts(gifts) {
  const wrapper = gifts.map((e) => `*${e}*`);
  const topAndBottomWrapper = "*".repeat(wrapper[0].length);
  wrapper.splice(0, 0, topAndBottomWrapper);
  const lastPosition = wrapper.length;
  wrapper.splice(lastPosition, 0, topAndBottomWrapper);
  return wrapper;
}
