function sum (numbers) {
  if(!numbers){
    return 0
  }
  return numbers.reduce((a,b) => a+b,0)
}

console.log(sum([20,10,5,8,5,-2.2,-5]))