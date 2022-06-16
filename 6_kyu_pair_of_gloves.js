/*
Pair of gloves
Winter is coming, you must prepare your ski holidays. 
The objective of this kata is to determine the number 
of pair of gloves you can constitute from the gloves 
you have in your drawer.

Given an array describing the color of each glove, 
return the number of pairs you can constitute, assuming 
that only gloves of the same color can form pairs.

Examples:
input = ["red", "green", "red", "blue", "blue"]
result = 2 (1 red pair + 1 blue pair)

input = ["red", "red", "red", "red", "red", "red"]
result = 3 (3 red pairs)


*/

//My SOLUTION

// couldn't solve but i tried to use filter somehow


// OTHERS SELECTED SOLUTIONS

function numberOfPairs(gloves) {
    var pairs = 0,  counts = {}; // apparently the value is counts if logged but you can access pairs
    
    for (var color of gloves) {  // for.. of is like for var in array in Gdscript
    
      if (!counts.hasOwnProperty(color)) // checks to see if object has color, if not, add it
        counts[color] = 0;
  
      if (++counts[color] === 2) { // this actually adds +1 to the property count WUH
        counts[color] -= 2; // reset count to 0
        pairs++; // increase the pair count
      }
    }
      
    return pairs;
  }

  // great use of objects and utilizing the properties