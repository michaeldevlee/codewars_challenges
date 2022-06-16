/* 
DESCRIPTION:
Given an integer n and two other values, 
build an array of size n filled with these 
two values alternating.

Examples
5, true, false     -->  [true, false, true, false, true]
10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
0, "one", "two"    -->  []
Good luck



*/

function alternate(n, firstValue, secondValue){
    let index = 0;
    let array = [];
    
    while (index < n){
      if (index == 0){
        array.push(firstValue)
      }
      else if (array[index-1] == firstValue){
        array.push(secondValue)
      }
      else{
        array.push(firstValue)
      }
      index += 1
    }
    return array
  }

  // OTHERS SOLUTIONS

  function alternate(n, firstValue, secondValue){
    const array = [];
    for (let i = 0; i < n; i++) {
      array.push(i % 2 === 0 ? firstValue : secondValue)  // ternary operator
    }
    return array;
  }
  // makes use of i % 2 for alternating algorithm

  function alternate(n, firstValue, secondValue){
    let arr = []
    while(arr.length < n){
      arr.push(firstValue, secondValue) // brute force method
    }
    if(arr.length > n){ // just keep adding until the number of elements exceed n
    arr.pop() // then just remove the last element since these were added in pairs
    }
    return arr 
  }