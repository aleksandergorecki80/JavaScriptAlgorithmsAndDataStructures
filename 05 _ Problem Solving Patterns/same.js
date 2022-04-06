const arr1 = [7, 2, 3];
const arr2 = [4, 1, 9];

const same = (arr1, arr2) => {
  // sprawdz czy tablice mają tą samą długość
  if (arr1.length !== arr2.length) {
    return false;
  }

  // podnieś do kwadratu elemrnty z arr 1

  let obj1 = {};

  for (let val of arr1) {
    obj1[val] = (obj1[val] || 0) +1;
  }

  const obj2 = {
    name: 'Janek',
    age: '22',
  };

  const obj3 = {
      age: 'zenek',
    kki: 'Janek',
    jjk: '22',
  };

  for (let val in obj3) {
    // console.log(obj2[val]);
    // console.log(val);


    if(val in obj2){
        console.log(`JEST   ${obj2[val]} w obj2`)
        console.log(`JEST   ${obj3[val]} w obj3`)
        console.log(val)
    }
    
    if(obj3[val] === 'Janek'){
        obj3[val] = 'Zosia'
    }

    if(val === 'jjk'){
        obj3['nowyVal'] = 'nowyWał'
    }

    
  }

  console.log(obj3);





  return true;
};

console.log(same(arr1, arr2));
