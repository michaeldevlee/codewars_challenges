/*
DESCRIPTION:
This program tests the life of an 
evaporator containing a gas.

We know the content of the evaporator 
(content in ml), the percentage of foam 
or gas lost every day (evap_per_day) 
and the threshold (threshold) in percentage 
beyond which the evaporator is no longer useful. 
All numbers are strictly positive.

The program reports the nth day (as an integer) 
on which the evaporator will be out of use.

Example:
evaporator(10, 10, 5) -> 29
Note:
Content is in fact not necessary in the 
body of the function "evaporator", 
you can use it or not use it, as you wish. 
Some people might prefer to reason with content, 
some other with percentages only. It's up to you 
but you must keep it as a parameter because the tests have it as an argument.

*/

//I DID NOT FINISH - tried to use recursion but failed lol. it was simpler
// than I had planned for

//OTHERS SOLUTIONS

function evaporator(content, evap_per_day, threshold){  // simple while statement
    var days = 0;
    var gas = 100;
      while(gas >= threshold){
        gas -= gas * evap_per_day / 100;
        days++;
    }
      return days;
    }

    function evaporator(content, evap_per_day, threshold) { // what i was trying to do lol
        function recurse(pctLeft = 100, counter = 0) {
          if(pctLeft <= threshold) { return counter; }
          else { return recurse(pctLeft * (1 - evap_per_day / 100), ++counter); }
        };
        
        return recurse();
      } // declared a recursive function within the function