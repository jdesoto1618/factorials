function fact(num) {
  //handle negative values
  if (num < 0) {
    return "Factorials are not defined for numbers less than 0"
  //when input is 0 or 1
  } else if (num == 0 || num == 1) {
    return 1
  //all other values
  } else {
    //start at the number before the input, as the number itself is accounted for in line 12. Stop at 2, since multiplying by 1 changes nothing. Decrement by 1 each time.
    for (var i=num-1; i > 1; i--) {
      //take the number, multiply it by consecutive smaller integers
      num *= i
    }
  }
  return num
}
