/*
DESCRIPTION:
You are given an array (which will have a 
length of at least 3, but could be very large) 
containing integers. The array is either entirely 
comprised of odd integers or entirely comprised of 
even integers except for a single integer N. Write 
a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
*/


function findOutlier(integers){ // very brute force but i wonder if there is a more efficient method
                                // time complexity O(n)  space complexity O(1)

  let even = 0;
  let odd = 0;
  
  for (let i = 0 ; i < 3 ; i++){
    if (integers[i] % 2 == 0){
      even++;
    }
    else{
      odd++;
    }
  }
  
  if (odd > even){
    for (let i = 0 ; i < integers.length ; i++){
      if(integers[i] % 2 == 0){
        return integers[i]
      }
    }
  }
  else{
    for (let i = 0 ; i < integers.length ; i++){
      if(integers[i] % 2 != 0){
        return integers[i]
      }
    }
  }
}

// OTHER SOLUTION

function findOutlier(int){
  var even = int.filter(a=>a%2==0); // filter function!! clever
  var odd = int.filter(a=>a%2!==0);
  return even.length==1? even[0] : odd[0]; // since only 1 element will be left, [0] is okay.  I wonder if you could use the reduce function?
}
