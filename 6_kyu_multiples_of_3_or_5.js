
/*
If we list all the natural numbers below 10 
that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
The sum of these multiples is 23.

Finish the solution so that it returns the sum of all 
the multiples of 3 or 5 below the number passed in. 
Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.

*/

// my solution

function solution(number){
  let sum_array = []

for (let i = 1 ; i < number ; i++){
  if (i % 3 === 0 || i % 5 === 0){
     if (!sum_array.includes(i)){
       sum_array.push(i)
      }
     }
    }
  
  return sum_array.length > 0 ? sum_array.reduce((prevEl, currEl) => prevEl + currEl) : 0
}

// other solutions

function solution(number){ // no array so this is simpler! Doesn't check if number is negative though
  var sum = 0;
  
  for(var i = 1;i< number; i++){
    if(i % 3 == 0 || i % 5 == 0){
      sum += i
    }
  }
  return sum;
}
