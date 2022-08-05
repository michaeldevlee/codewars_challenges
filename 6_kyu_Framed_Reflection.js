/*
DESCRIPTION:
100th Kata
You are given a message (text) that you 
choose to read in a mirror (weirdo). 
Return what you would see, complete with the mirror frame. Example:

'Hello World'

would give:

*********
* olleH *
* dlroW *
*********

Words in your solution should be left-aligned.

*/

// MY SOLUTION

function mirror(text){

const words_arr = text.split(' ');
let maxWidth = 0;
let conv_text = [];

for (let i = 0 ; i < words_arr.length ; i++){ // found the width of the longest word in the sequence
  let curr_word = words_arr[i]
  let curr_word_length = curr_word.length
  
  maxWidth = Math.max(maxWidth, curr_word_length)
}
  
for (let i = 0 ; i < words_arr.length ; i++){ // padded stars based on the max width
  let curr_word = words_arr[i]

  conv_text.push('* ' + curr_word.split('').reverse().join('').padEnd(maxWidth,' ') +  ' *\n')
  
}
  conv_text.unshift(''.padStart(maxWidth+4, '*') + '\n') // made the top and bottom borders
  conv_text.push(''.padStart(maxWidth+4, '*'))

return conv_text.join('')
}
