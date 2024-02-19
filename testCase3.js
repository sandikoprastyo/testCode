function isCircularPalindrome(word) {
  let temp = '';

  for (let i = word.length - 1; i >= 0; i--) {
    temp = temp + word[i];
  }
  return temp.toLowerCase() === word.toLowerCase();
}
export default isCircularPalindrome;
