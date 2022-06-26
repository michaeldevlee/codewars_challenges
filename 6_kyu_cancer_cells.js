/*
Your task is to write a function which cuts cancer cells from the body.

Cancer cells are divided into two types:
Advance stage,described as letter C
Initial stage,described as letter c
Rest cells are divided as follows:

Normal cell,described as lowercase letter
Important cell,described as uppercase letter
Prerequisites:
Important cell,cannot be cut out.
Advance cancer cell,should be cut out with adjacent 
cells if it can be done.
Function input is a string (representing a body), 
remove "cancer" characters (based on the described rules) 
and return the body cured of those "cancer" characters.

*/

// my solution

function cutCancerCells(organism){ // using multiple "passes" to the string

    const adv_regex = /(([a-z]){1})?(C)(([a-z]){1})?/g
    const init_regex = /c/g
    
    const first_pass = organism.replace(adv_regex, '') // maybe i could encompass the regex in one line?
    const second_pass = first_pass.replace(init_regex, '')
      
    return second_pass
  }

//other solutions

function cutCancerCells(organism){

    return organism.replace(/c|[a-z]?C[a-z]?/g,'') // used OR alternations along with optional quantifier
  
  }



function cutCancerCells(organism) {  // utilizing the very basics. no filter / map functions
    const arr = organism.split("");
    const out = [];
    arr.forEach((cell, i) => { // loop through array and check next cell + prev cell
      const nextCell = arr[i + 1];
      const prevCell = arr[i - 1];
      if (cell.match(/[A-Z]/) && !cell.match(/C/)) { // if it is a normal cell, add to array
        out.push(cell);
      }
      if (cell.match(/[a-z]/) && !nextCell?.match(/C/) && !prevCell?.match(/C/)) { // uses optional chaining "?."
        if (!cell.match(/c/)) {
          out.push(cell);
        }
      }
    });
    return out.join("");
  }