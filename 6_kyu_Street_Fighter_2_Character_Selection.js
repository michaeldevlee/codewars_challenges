/*
Complete the method/function so that it converts dash/underscore 
delimited words into camel casing. The first word within the output 
should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

*/

// MY SOLUTION 
function streetFighterSelection(fighters, position, moves){  // not the most pretty answer. Lots of redundant code. if else statements would have been better
  
  let move_path = []
  
  for (let move of moves){
    switch (move) {
      case 'up':
        if (position[1] === 1){
          position[1]--
          move_path.push(fighters[position[1]][position[0]])
          break;
        }
        else{
          move_path.push(fighters[position[1]][position[0]])
          break;
        }
      case 'down':
        if (position[1] === 0){
         position[1]++
         move_path.push(fighters[position[1]][position[0]])
         break;   
        }
        else{
          move_path.push(fighters[position[1]][position[0]])
          break;
        }
      case 'right':
        if (position[0] < 5){
          position[0]++
          move_path.push(fighters[position[1]][position[0]])
          break;
        }
        else{
          position[0] = 0
          move_path.push(fighters[position[1]][position[0]])
          break;
        }
      case 'left':
        if (position[0] > 0){
          position[0]--
          move_path.push(fighters[position[1]][position[0]])
          break;
        }
        else{
          position[0] = 5
          move_path.push(fighters[position[1]][position[0]])
          break;
        }
    }
  }

  return move_path;
}

//OTHERS SOLUTION

function streetFighterSelection(fighters, position, moves){  // much cleaner solutio with if and else
  var result = [];
  
  moves.forEach(function(move) {
    if (move === "up") {
      position[0] = 0;
    }
    else if (move === "down") {
      position[0] = 1;
    }
    else if (move === "right") {
      position[1] = (position[1] === 5) ? 0 : position[1] + 1; // good use of ternary operators
    }
    else if (move === "left") {
      position[1] = (position[1] === 0) ? 5 : position[1] - 1;
    }
    
    result.push(fighters[position[0]][position[1]]);
  });
  
  return result;
}
