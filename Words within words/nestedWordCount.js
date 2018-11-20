function nestedWordCount(wordList) {
  const sorted = wordList.sort((a, b) => a.length < b.length);
  console.log(sorted);
  const memos = {};
  sorted.forEach(e => {
    memos[e] = [];
    for (let j = 0; j < sorted.length; j += 1) {
      if (sorted[j].length > 1 && e.includes(sorted[j])) {
        console.log(sorted[j]);
        memos[e].push(sorted[j]);
      }
    }
  });
  console.log(memos);
  let count = 0;
  let output;
  Object.keys(memos).forEach(e => {
    if (memos[e].length > count) {
      count = memos[e].length;
      output = e;
    }
  });
  return output;
}

const testArray = ['gray', 'grays', 'ray', 'rays', 'strays', 'r'];
console.log(nestedWordCount(testArray));
// "grays"

// Given an array of unique words, find the word that contains
// the greatest number of other words. A word must be at least two letters long.
