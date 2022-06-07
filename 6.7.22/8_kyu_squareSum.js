/*Complete the square sum function so that it squares each number 
passed into it and then sums the results together.
For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

*/

//MY SOLUTION
function squareSum(numbers){
    return numbers.reduce((acc, num)=> acc + num*num,0)
  }

//OTHERS SELECTED SOLUTIONS

function squareSum(numbers){            // same as mine but a little cleaner
    return numbers.reduce(function(sum, n){
      return (n*n) + sum;
    }, 0)
  }