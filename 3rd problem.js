function isValid(letter) {
  const noValid =
    /\(\)|\(.+[\{\}\[\]]+.+\)|\([\{\}\[\]]+.\)|\(.+[\{\}\[\]]+\)/g.test(letter);
  const evenParenthesis = letter.match(/[\(\)]/g).length % 2 === 0;
  return !noValid && evenParenthesis;
}

const fastType = () => {

}

const weHaveToBeFastInTyping = () => {
    
}