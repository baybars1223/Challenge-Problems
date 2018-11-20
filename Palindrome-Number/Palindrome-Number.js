const isPalindrome = x => {
  if (x < 0) {
    return false;
  }
  const length = Math.floor(Math.log10(x));
  let newNum = x;
  let currLength = length;
  for (let i = 0; i < length; i += 1) {
    console.log(currLength);
    if (newNum % 10 === Math.floor(newNum / 10 ** currLength)) {
      if (newNum === 0) {
        return true;
      }
      console.log(newNum % 10);
      console.log(Math.floor(newNum / 10 ** currLength));
      console.log(newNum);
      newNum -= Math.floor(newNum / 10 ** currLength) * 10 ** currLength;
      newNum = Math.floor(newNum / 10);
      console.log(newNum);
      currLength -= 2;
    } else {
      console.log(newNum);
      console.log(newNum % 10);
      console.log(Math.floor(newNum / 10 ** currLength));
      return false;
    }
  }
  return true;
};

console.log(isPalindrome(215512));
