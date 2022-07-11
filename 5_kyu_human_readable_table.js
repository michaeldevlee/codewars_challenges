/*
Write a function, which takes a non-negative integer 
(seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.

*/

// MY SOLUTION

function humanReadable (seconds) {
  const hh = Math.floor(seconds / 3600)
  const mm = Math.floor((seconds % 3600)/60) < 60 ? Math.floor((seconds % 3600)/60) : 0
  const ss = seconds % 60 < 60 ? seconds % 60 : 0
  
  const time_params = [hh,mm,ss]
  
  time_params.forEach((param, index)=>{
    if (param < 10){
      time_params[index] = `0${param}`
    }
  })
  
  const time = `${time_params[0]}:${time_params[1]}:${time_params[2]}`

  return time;
}

// OTHER SOLUTION

function humanReadable(seconds) { 
  var pad = function(x) { return (x < 10) ? "0"+x : x; } // very useful tool called pad!!
  return pad(parseInt(seconds / (60*60))) + ":" +
         pad(parseInt(seconds / 60 % 60)) + ":" +
         pad(seconds % 60)
}


