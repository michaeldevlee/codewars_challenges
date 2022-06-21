/*
Pete likes to bake some cakes. He has some recipes and ingredients. 
Unfortunately he is not good in maths. Can you help him to find out, 
how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and 
the available ingredients (also an object) and returns the maximum 
number of cakes Pete can bake (integer). For simplicity there are no units 
for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). 
Ingredients that are not present in the objects, can be considered as 0.

Examples:

// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 

*/

// MY SOLUTION, a little verbose but it's more readable. 

function cakes(recipe, available) {
  // get keys of the recipe and declare container for pete's current ingredients  
  
  const req_ingredients = Object.keys(recipe)
  const available_ingredients = available
  let what_pete_has = {} 

  // loop through available ingredients and add store in pete's 
  // current ingredients container if it is part of the recipe
  
  for (let ingredient in available_ingredients){ 
    const has_req_ingred = req_ingredients.includes(ingredient)
    const ratio = Math.floor(available_ingredients[ingredient]/recipe[ingredient])

    if (has_req_ingred && ratio >= 1){ 
      what_pete_has[ingredient] = ratio
    } 
} 
  
  // if pete doesn't have all of the required ingredients in the container, he makes no cakes :(
  
  for (let ingredient in recipe){
    if (!what_pete_has.hasOwnProperty(ingredient)){
      return 0
    }
  }

  return Math.min(...Object.values(what_pete_has)) 
}

