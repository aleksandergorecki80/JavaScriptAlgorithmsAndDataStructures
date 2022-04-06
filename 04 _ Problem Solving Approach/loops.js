const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

const obj1 = {
    name: "Jan",
    age: 56
}

for (const element in obj1) {
    console.log(`${element} - ${obj1[element]}`);
  }

  const str = "Qkki55%#"

  for (const element of str) {
    // console.log(/^[a-z1-9]{5}$/.test(str))
    console.log(/[a-z]/.test(element))
    console.log(element);
  }

const str2 = 'abcABC'

for(const char of str2){
  console.log(char.charCodeAt())
}