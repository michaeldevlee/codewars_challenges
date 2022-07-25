
/*

The rgb function is incomplete. Complete it so that passing in RGB decimal 
values will result in a hexadecimal representation being returned. Valid decimal 
values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
*/


// MY SOLUTION

function rgb(r, g, b){
  //define hex values
  const colors_dec = [r,g,b]
  const hex = {
    10 : 'A',
    11 : 'B',
    12 : 'C',
    13 : 'D',
    14 : 'E',
    15 : 'F'
  } 
  
  //convert hex to decimal
  const convert_hex_to_dec = (decimal)=>{
    let n = decimal
    let remainder = 0
    let div_count = 0
    const hex_n = []
    
    if (n === 0 || n < 0){
      return '00'
    }
    
    if (n > 255){
      return 'FF'
    }
    
    //divide until quotient is 0
    while (n > 0){
      remainder = Math.floor(n % 16)
      n = Math.floor(n/16)
      
      if (hex[remainder]){
        hex_n.unshift(hex[remainder])
      }
      else{
        hex_n.unshift(remainder)
      }
      
      div_count++ 
    }
    //if divided only once, add in 0 infront 
    if (div_count == 1){
      hex_n.unshift('0')
    }   
    
    //reset divider count
    div_count = 0

    return hex_n.join('')
  }
  
  const colors_hex = colors_dec.map((color)=>{
    return convert_hex_to_dec(color)
  })

  return colors_hex.join('')
}


// OTHER SOLUTION

function rgb(r, g, b){
  return toHex(r)+toHex(g)+toHex(b);
}

function toHex(d) {
    if(d < 0 ) {return "00";}
    if(d > 255 ) {return "FF";}
    return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
}
