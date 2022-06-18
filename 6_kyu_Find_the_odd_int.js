// MY SOLUTION

function findOdd(A) {
  // create object to store numbers as properties
  let freq_container = {}
  
  // iterate through the given array of integers,add prop if doesn't exist,store in prop
  for (let num of A){
    if (freq_container[num] == null){
      freq_container[num] = 0
      }
    freq_container[num]++
    }
  
  // iterate through container to check for the value that is odd and return
  for (let prop in freq_container){
    if (freq_container[prop] % 2 !== 0) return parseInt(prop)
  }

}

// OTHER SOLUTIONS

const findOdd = (xs) => xs.reduce((a, b) => a ^ b); // will have to look at this later!



function findOdd(A) { // short hand version of what i did
  var obj = {};
  A.forEach(function(el){
    obj[el] ? obj[el]++ : obj[el] = 1; // shorthand for lines 8 - 13  I like it!
  });
  
  for(prop in obj) {  // i guess i dont have to put let?
    if(obj[prop] % 2 !== 0) return Number(prop);   //I could also use Number(prop) instead of parseInt(prop) too
  }
}
