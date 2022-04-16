// give two positive intigers and chek if they have the same frequensy (the same digits and the same amount)

function sameFrequency(first, second){
    const firstStr = first.toString();
    const secondStr = second.toString();
    if(firstStr.length !== secondStr.length){
        return false;
    }
    const lookup = {};
    for(let i = 0; i<firstStr.length; i++){
        let digit = firstStr[i];
        lookup[digit] ? lookup[digit] +=1 : lookup[digit] = 1;
    }

    for(let i=0; i<secondStr.length; i++){
        let digit = secondStr[i];
        if(!lookup[digit]){
            return false;
        } else {
            lookup[digit] -= 1
        }
    }
    return true;
  }

console.log(sameFrequency(1823,2821))