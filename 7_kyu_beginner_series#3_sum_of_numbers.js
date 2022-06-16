// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

// my solution could not get an answer because i am not able to add consecutively???
function getSum( a,b )
{
   // find difference of the range 
   let travel_length = Math.abs(a - b);

   // if the difference is higher than 1, there is at least 1 number in between
   if (travel_length > 1){

    //save the lower number
       let sum = a < b ? a : b;

    // add 1 consecutively and cumulatively starting the lower range
    for (let i = 0; i < travel_length-1 ; i++){
        sum++;
    }
   }
   // if both arguments are equal, just both of them together
   else if (a === b){
       sum = a + b;
   }

   return sum;
}

//OTHER's SELECTED SOLUTIONS

// Carl Gauss's formula, (n / 2)(first number + last number) = sum
// we use this formula to add number's consecutively

const GetSum = (a, b) => {              
    let min = Math.min(a, b),               // get first number
        max = Math.max(a, b);               // get last number
    return (max - min + 1) * (min + max) / 2;   // apply formula
  }