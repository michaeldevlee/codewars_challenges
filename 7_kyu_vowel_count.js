// topics : regex, for loops


//PROBLEM
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// MY SOLUTION

function getCount(str) {
    
    let vowelsCount = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let word = str.split('');
  
    for (let i = 0 ; i < word.length ; i++){
      let letter = word[i];
      
        if (vowels.includes(letter)){
            vowelsCount += 1;
        }
    }
  

    return vowelsCount;
    
  }


  // OTHER SELECTED SOLUTIONS

  function getCount(str) {                          // using regular expressions
    return (str.match(/[aeiou]/ig)||[]).length;
  }
