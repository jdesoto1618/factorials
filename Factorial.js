function fact(num) {
  //Negative values
  if (num < 0) {
    return "Factorials are not defined for numbers less than 0"
  //Input is 0 or 1
  } else if (num == 0 || num == 1) {
    return 1
  //All other values
  } else {
    //Start at the number before the input, as the number itself is accounted for in line 12. Stop at 2, since multiplying by 1 changes nothing. Decrement by 1 each time.
    for (var i=num-1; i > 1; i--) {
      //Multiply the numebr by consecutively smaller integers
      num *= i
    }
  }
  return num
}
