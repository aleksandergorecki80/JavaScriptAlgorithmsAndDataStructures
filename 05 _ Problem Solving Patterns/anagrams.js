function checkIfAnagrams(word, wordReversed) {
  if (word.length !== wordReversed.length) {
    return false;
  }

  let obj = {};
  let rewObj = {};

  let key = 0;
  for (let [val] of word) {
    obj[key] = val;
    key++;
  }

  let keyRev = wordReversed.length - 1;
  for (let [val] of wordReversed) {
    rewObj[keyRev] = val;
    keyRev--;
  }

  for (let key in obj) {
    if (obj[key] !== rewObj[key]) {
      return false;
    }
  }
  return true;
}

console.log(checkIfAnagrams("dord", "drow"));
console.log(checkIfAnagrams("kaws", "awak"));
console.log(checkIfAnagrams("plane", "enalp"));
