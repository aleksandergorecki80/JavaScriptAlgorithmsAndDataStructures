let person = {
    name: 'John',
    age: 22,
    isMaried: false,
    favoriteNumbers: [1,2,3,4]
}

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
console.log(person.hasOwnProperty('isMaried'));