const countPermutations = string => {
  let startingString = string;
  let stringToArray = string.split('');
  let sortedArray = stringToArray.sort();
  const count = new Set();
  const subroutine = (base, letters) => {
    console.log(base);
    console.log(letters);
    for (let j = 0; j < stringToArray.length; j += 1) {
      const tempLetters = letters.slice();
      const nextBase = base + tempLetters.splice(j, 1);
      subroutine(nextBase, tempLetters);
    }
    //   console.log(letters);
    //   const tempLetters = letters.slice();
      
    //   console.log(nextBase);
    //   subroutine(tempLetters.splice(i, 1), tempLetters)
    
  };
  // stringToArray.forEach((element, index) => {

  // })
  console.log(sortedArray);
  for (let i = 0; i < stringToArray.length; i += 1) {
    const startLetters = sortedArray.slice();
    const startBase = startLetters.splice(i, 1);
    subroutine(startBase, startLetters);
  }
  return count.size;
};

console.log(countPermutations('abbccc'));
