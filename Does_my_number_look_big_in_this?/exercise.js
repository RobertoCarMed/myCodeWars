const narcissistic = (value) => {
  return checkNumber(value)
}

const checkNumber = (number) => {
  number = number.toString()
  let totalNumber = 0
  
  for(let i = 0; i < number.length; i++){
    totalNumber += Math.pow(number.charAt(i), number.length)
  }
  
  return totalNumber == number ? true : false
}
