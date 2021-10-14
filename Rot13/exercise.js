const rot13 = message => {
  let response = ''
  for(let i = 0; i < message.length; i++){
    response += newLetter(message.charAt(i))
  }
  return response
}

const newLetter = letter => {
  let alphabetUpperCase = [ 'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z' ]
  let oneLetter = letter
  
  alphabetUpperCase.forEach((alphabetLetter, index) =>{
    
    if(alphabetLetter === letter){
      oneLetter = getNewLetter(alphabetUpperCase, index)
    }else if(alphabetLetter.toLowerCase() === letter){
      oneLetter = getNewLetter(alphabetUpperCase, index).toLowerCase()
      
    }
  })
  return oneLetter
}

const getNewLetter = (alphabet,index) => {
  
  if(index+13 > 25){
    
    return alphabet[index+13-26]
  }else{
    return alphabet[index+13]
  }
}