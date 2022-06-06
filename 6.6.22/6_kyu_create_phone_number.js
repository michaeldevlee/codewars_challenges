// Write a function that accepts an array of 10 integers 
// (between 0 and 9), that returns a string of those numbers 
// in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!


// MY SOLUTION
function createPhoneNumber(numbers){
    const [a,b,c,d,e,f,g,h,i,j] = 
          ['' + numbers[0],
          '' + numbers[1],
          '' + numbers[2],
          '' + numbers[3],
          '' + numbers[4],
          '' + numbers[5],
          '' + numbers[6],
          '' + numbers[7],
          '' + numbers[8],
          '' + numbers[9],]
    
    const phone_number = `(${a+b+c}) ${d+e+f}-${g+h+i+j}`
    
    return phone_number
    
  }

  // OTHER SELECTED SOLUTIONS
  function createPhoneNumber(numbers){          // very elegant
                                                // this is utilizing regex
    var format = "(xxx) xxx-xxxx";
    
    for(var i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }
    
    return format;
  }

  function createPhoneNumber(numbers){              // this is utilizing regex
    return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/,'($1) $2-$3');
  }