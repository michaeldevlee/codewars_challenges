/*

DESCRIPTION:
You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

*/

//My solution

function isValidWalk(walk) {
  //store each direction in object
  let your_coordinates = {x:0, y:0}
  const home_coordinates = {x:0, y:0}
  
  //set conditionals and check if it was a long enough walk and comparing coordinates
  const is_long_enough  = walk.length === 10
  const equals = (a,b) => (JSON.stringify(a) === JSON.stringify(b))
  
  //iterate thru your path and update your coordinates
  for (let direction of walk){
    switch (direction){
      case "n": your_coordinates['y'] +=1
        break;
      case "s": your_coordinates['y'] -=1
        break;
      case "w": your_coordinates['x'] -=1
        break;
      case "e": your_coordinates['x'] +=1
        break;
        }
    }
  
    //check if you returned home and your walk was just 10 minutes
  return equals(your_coordinates, home_coordinates) && is_long_enough
}
