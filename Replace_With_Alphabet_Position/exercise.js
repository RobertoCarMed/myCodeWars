function alphabetPosition(text) {
  let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  let textNumber = ""
  
  for( let i = 0; text.length > i; i++ ) {
    alphabet.forEach( (letter, index) => {
      
      if( text.charAt(i) == letter || text.charAt(i) == letter.toUpperCase() ) {
        
        textNumber += index+1+" "
      
      }
    })
  }
  
  textNumber = textNumber.substring(0, textNumber.length - 1)
  return textNumber;
}