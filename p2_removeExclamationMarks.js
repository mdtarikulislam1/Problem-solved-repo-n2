
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  let result = s.split('!').join('')
  return result
}

// console.log(removeExclamationMarks('!djkm!kd'))


// other way 

let result = (s)=> s.replace(/!/ig,'')
// console.log(result('!dhgd!'))

// other way 

let result1 = (s)=> s.replaceAll('!','')

console.log(result1('!jhshs!nj'))