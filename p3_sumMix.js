function sumMix(x){
const numberArray = x.map(Number)
const result = numberArray.reduce((a,b) => a+b,0)
return result
}

console.log(sumMix([12,5,8,5,'25']))

// another way 

const totalSum = x => x.map(Number).reduce((a,b)=>a+b,0)

console.log(totalSum(['55',58,55]))