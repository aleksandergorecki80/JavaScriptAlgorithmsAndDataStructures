// The recursive function which accepts a string and returns a new string in reverse

function reverse(string){
    let reversed = '';
    let index = string.length - 1;

    function helper(string){
        if(index < 0) return;
        reversed = reversed.concat(string[index]);
        index--;
        helper(string);
    }
    helper(string);
    return reversed
  }
  
  console.log(reverse('awesome')) // 'emosewa'
  console.log(reverse('rithmschool')) // 'loohcsmhtir'