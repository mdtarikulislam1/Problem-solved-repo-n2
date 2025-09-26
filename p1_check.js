function check(a, x) {
  for (let i = 0; i < a.length; i++) {
    if(a[i] == x){
      return true
    }
  }
  return false
}

console.log(check(['banana','apple'],'apple'))

// Shortcat way

const result = (a,x)=> a.includes(x)

console.log(result(['apple,banana'],'d'))

// similar problem

let result2 = (a,x)=> {
    for(let i = 0; i<a.length ; i++  ){
      if(a[i].toLowerCase() === x.toLowerCase()){
        return true
      }
    }
    return false
}

console.log(result2(['Apple','banana'],['Banana']))

