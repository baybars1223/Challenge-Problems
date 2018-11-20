/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = array => {
  let output = '';
  if (array.length > 0) {
    if (array.length === 1) {
      output = array[0];
    } else {
      const base = array[0];
      let allMatch = true;
      for (let i = 0; i < base.length; i += 1) {
        array.forEach((e, idx) => {
          if (base[i] !== e[i]) allMatch = false;
        });
        if (allMatch) {
          output += base[i];
        }
      }
    }
  }
  return output;
};

const test1 = ['floor', 'flower', 'flight'];
const test2 = ['dog', 'racecar', 'car'];
const test3 = [];
const test4 = ['a'];
const test5 = ['c', 'c'];
const test6 = ['aca', 'cba'];
console.log(longestCommonPrefix(test1));
console.log(longestCommonPrefix(test2));
console.log(longestCommonPrefix(test3));
console.log(longestCommonPrefix(test4));
console.log(longestCommonPrefix(test5));
console.log(longestCommonPrefix(test6));
