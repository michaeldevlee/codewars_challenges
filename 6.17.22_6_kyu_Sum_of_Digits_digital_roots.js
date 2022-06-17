/*
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. 
If that value has more than one digit, continue 
reducing in this way until a single-digit number is produced. 
The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2



*/

//MY SOLUTION
function digital_root(n) {
  const num = n + ''
  const str_array = num.split('')
  const is_more_than_one_digit = str_array.length > 1 ? true : false

  if (is_more_than_one_digit){
    let new_sum = 0
   
    for (let digit of str_array){
      new_sum += parseInt(digit)
    }
    return digital_root(new_sum)
  }
  else{
    return n
  } 
  }

// OTHER SOLUTIONS

function digital_root(n) {  //one liner =D 
  return (n - 1) % 9 + 1;   // this is the formula for digital root!
}




function digital_root(n) {
  if (n < 10) return n;
  
  return digital_root(
    n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
}
