/*
Write an algorithm that takes an array and 
moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

*/


function moveZeros(arr) { // very convoluted answer.. but solved it nonetheless

  let zeroes = []

  // iterate and filter all true zeroes
  const new_arr = arr.filter((el, index)=>{
    // check if it is a non null, nonzero, or non falsy
    if (el !== 0 && typeof el !== 'object' && typeof el !== 'boolean'){ // el !==0 was sufficient to exclude all non zeroes
      return el
    }
    //check if it is a boolean element
    else if (typeof el === "boolean"){
      return new Boolean(el) 
    }
    //check if it is element is an object
    else if (typeof el === "object"){
      
      // if it is an iterable object, return it
      if ( el !== null && typeof el[Symbol.iterator] === 'function'){
        return el
      }
      // if it's a null object, return it
      else{
        return {}   // filter not really used this way! just check if el === null and that's it! it will return the element that passes the test
      }
    }
    // if its truly a zero, return it
    else{
      zeroes.push(el)  // el === 0 was sufficient
    }
  })
  
  //  concat at the zero array to the end of the filtered array
  return new_arr.concat(zeroes)
} 


// OTHER SOLUTION

var moveZeros = function (arr) { // LOL seriously.. true 0 is x === 0 and other null, false etc can be x !==0
  return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}
