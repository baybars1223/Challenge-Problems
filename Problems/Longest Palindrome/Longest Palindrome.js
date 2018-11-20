function longestPalindrome(string) {
  let longest = '';
  const timestamp = Date.now();
  function isPalindrome(checkString) {
    let output = true;
    console.log(
      checkString.slice(0, Math.ceil(checkString.length / 2)),
      checkString
        .slice(Math.floor(checkString.length / 2))
        .split('')
        .reverse()
        .join('')
    );
    if (
      checkString.slice(0, Math.ceil(checkString.length / 2)) ===
      checkString
        .slice(Math.floor(checkString.length / 2))
        .split('')
        .reverse()
        .join('')
    ) {
      return true;
    }

    return false;
    
    for (let i = 0; i < Math.ceil(checkString.length / 2); i += 1) {
      if (checkString[i] !== checkString[checkString.length - i - 1]) {
        output = false;
        break;
      }
    }
    return output;
  }

  function subroutine(subStr) {
    if (isPalindrome(subStr)) {
      return subStr;
    }
    if (subStr.slice(0, subStr.length - 1).length > longest.length) {
      return subroutine(subStr.slice(0, subStr.length - 1));
    }
    return '';
  }

  for (let i = 0; i < string.length; i += 1) {
    let newest = '';
    if (string.slice(i).length > longest.length) {
      newest = subroutine(string.slice(i));
    }
    if (newest.length > longest.length) {
      longest = newest;
    }
  }
  console.log(
    `Longest palindrome in ${string} is ${longest}. Computed in ${Date.now() - timestamp} ms`
  );
  return longest;
}

// longestPalindrome(
//   'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque elit sit amet velit dictum dictum. Duis in feugiat purus. Duis maximus dignissim justo, nec convallis nulla tristique ut. Etiam pharetra quam viverra, accumsan sem eu, pellentesque sapien. Duis dapibus diam ut erat porta ultrices. Aliquam id ex a diam tincidunt dapibus vel non nisi. Nullam quam sem, rhoncus eu sagittis et, dapibus id lacus. Pellentesque quis pretium risus, sed lacinia lectus. Vestibulum sed nulla volutpat tortor hendrerit fringilla a et erat. Mauris at dui nibh. Vestibulum faucibus non dolor at placerat. Quisque sollicitudin arcu ac fringilla scelerisque. Vestibulum quis.'
// );
console.log(longestPalindrome('tacocat'));
console.log(longestPalindrome('dadtacocat'));
// console.log(longestPalindrome('lol'));
// console.log(longestPalindrome('tacoscat'));
// console.log(longestPalindrome('rac e car'));
