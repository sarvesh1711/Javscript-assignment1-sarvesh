function checkPrimeOrNot(number){
  if(number == 1){
      return "1 is not prime number !!"
  }
  else{
      let count = 0;
      for (let i = 1; i <= number; i++) {
          if(number%i == 0){
              count++
          }
      }
      if(count == 2){
          return true
      }
      else{
          return false
      }
  }
}


let fibonacciProgram = (upperLimit) => {
  if(upperLimit == 0){
      return []
  }
  else if(upperLimit == 1){
      return [1]
  }
  else if(upperLimit == 2){
      return [0, 1]
  }
  else{
        let sum = 1;
      let fibonacciSeries = [0, 1]
      for (let i = 2; i < upperLimit; i++) {
          let nextTerm = fibonacciSeries[i-2] + fibonacciSeries[i-1]
          sum=sum+nextTerm
          fibonacciSeries.push(nextTerm)
          
      }
      console.log("Fibonacci series is "+fibonacciSeries);
      return "sum is "+sum
      
  }
}



let countOfEvenOddAndZero = (...number) => {
  let evenCount = 0
  let oddCount = 0
  let zeroCount = 0
  for(let i of number){
      if(i==0){
          zeroCount++
      }
      else if(i%2 == 0){
          evenCount++
      }
      else{
          oddCount++
      }
  }
  return ['even : ',evenCount, 'odd : ',oddCount, 'zero : ',zeroCount]
}
  


