function fact(num) {
  //String or empty input
  if(typeof(num) == "string") {
    return "Please use numeric input only."
  } else {
    //Negative values
    if (num < 0) {
      return "Factorials are not defined for numbers less than 0"
    //Input is 0 or 1
    } else if (num == 0 || num == 1) {
        if (num == 0) {
          return "0! is 1 by definition"
        } else {
          return 1
        }
    //All other values
    } else {
      //Start at the number before the input, stop at 2, decrement by 1
      for (var i=num-1; i > 1; i--) {
        //Multiply the numebr by consecutively smaller integers
        num *= i
      }
    }
    return num
  }
}
