const binaryArrayToNumber = arr => {
  arr.reverse()
  let value = 1
  let count = 0
  arr.forEach((number) => {
    if(number == 1){
      count += value
    }
    value = value * 2
  })
  
  return count
};