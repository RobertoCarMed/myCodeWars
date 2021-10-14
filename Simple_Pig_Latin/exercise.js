const pigIt = str =>{
  let response = ''
  str.split(' ').forEach((word, i, array) => {
    let newWord = ''
    let lastLetter = ''
    
    word.split('').forEach((letter, index) => {
      index > 0 ? newWord += letter : lastLetter = letter
    })
    
    if(newWord == ''){
      lastLetter.replace(/[a-z]/gi, '').length > 0 ? response += lastLetter : i == array.length-1 ? response += lastLetter += "ay" : response += lastLetter += "ay " 
    }else{
      i == array.length-1 ? response +=newWord + lastLetter + "ay" : response += newWord + lastLetter + "ay "
    }
    
  })
  return response
}