/*

DESCRIPTION:
Move the first letter of each word 
to the end of it, then add "ay" to 
the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

//MY SOLUTION

function pigIt(str){
    const words = str.split(' ')
    const letter_regex = /[a-zA-Z]/
    
    const converted_sentence = words.map((word)=>{
      if (word.match(letter_regex)){
        return word.substring(1) + word[0] + 'ay';
      }
      else{
        return word;
      }
    })
  
    return converted_sentence.join(' ')
    }

// OTHERS SOLUTIONS

function pigIt(str){ // 
    return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
  }