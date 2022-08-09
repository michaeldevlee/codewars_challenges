/*
Implement the function unique_in_order which takes 
as argument a sequence and returns a list of items 
without any elements with the same value next to each 
other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

*/


// MY SOLUTION

var uniqueInOrder=function(iterable){
  let result = [];
  
  for (let i = 0 ; i < iterable.length ; i++){
    let curr_el = iterable[i];
    let prev_el = iterable[i-1] ? iterable[i-1] : null
    
    if(prev_el && curr_el === prev_el){
      continue;
    }
    else if (prev_el && curr_el !== prev_el){
      result.push(curr_el)
    }
    else{
      result.push(curr_el)
    }
  }
  return result;
}

// OTHER SOLUTIONS

function uniqueInOrder(it) { // truncated version of what i did
  var result = []
  var last
  
  for (var i = 0; i < it.length; i++) {
    if (it[i] !== last) {
      result.push(last = it[i]) // declare and pass in as parameter
    }
  }
  
  return result
}

var uniqueInOrder=function(iterable){ // super truncated version of what i did
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}
