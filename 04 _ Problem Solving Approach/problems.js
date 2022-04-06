const word = 'problem';

const countString = (word) => {
  return word && typeof word === 'string'
    ? word.split('').length
    : 'Invalid input';
};

const countChar = (word) => {
  if (!word || typeof word !== 'string') {
    return 'Invalid input';
  } else {
    const arr = word.split('');
    const counted = arr.map((element, index) => {
      return element !== ' ' && `${element} - ${index}`;
    });
    return counted;
  }
};

console.log(countString());
console.log(countString(''));
console.log(countString(' '));
console.log(countString('kki'));
console.log(countString(5));
console.log(countString([1, 2, 3]));

console.log(countChar('kki'));
console.log(countChar(''));
console.log(countChar(4));
console.log(countChar('Mam i ja'));
