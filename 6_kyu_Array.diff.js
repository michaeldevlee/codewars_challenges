/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

// MY SOLUTION
function arrayDiff(a, b) {
  return a.filter((element)=>{
    if (!b.includes(element) ){
      console.log(element)
      return true}}
  )}

// OTHER SOLUTION
function array_diff(a, b) {
  return a.filter(e => !b.includes(e));
}
