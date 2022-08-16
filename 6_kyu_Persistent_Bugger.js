/*
Write a function, persistence, that takes 
in a positive parameter num and returns its 
multiplicative persistence, which is the number of 
times you must multiply the digits in num until you 
reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)

*/

// MY SOLUTION

function persistence(num) {
  let str = num + '';
  let product = 1;
  let count = 0;
  
  while(str.length > 1){
    
    for(let i = 0 ; i < str.length ; i++){
      let digit = parseInt(str[i]);
      product *= digit;
    }
    
    str = product+'';
    product = 1;
    count++;
  }
  
  return count;
}

// OTHER SOLUTION

function persistence(num) { // uses split and reduce function, very nice
   var times = 0;
   
   num = num.toString();
   
   while (num.length > 1) {
     times++;
     num = num.split('').map(Number).reduce((a, b) => a * b).toString();
   }
   
   return times;
}


const persistence = num => { // clever use of string literals + reduce
  return `${num}`.length > 1 
    ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b)) 
    : 0;
}
