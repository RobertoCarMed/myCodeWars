function persistence(num) {

  let number = num.toString()
  let count = 0
  
  do{
    let numbers = []
    let newNumber = 0
    
    for (let i = 0;  i < number.length; i++) {
      numbers.push(number.charAt(i));
    }

    numbers.forEach( (numb, index) => {
      if (index == 0){
        newNumber = numb
      }else{
      newNumber = newNumber * numb
      }
    })

    number = newNumber.toString();
    
    if (number < 9 && count == 0 && number != 0){
      break
    }else{
      count++  
    }
    
  }while(number.length > 1)
  
  return count
}