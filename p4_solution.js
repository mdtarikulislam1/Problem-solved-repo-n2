function solution(str, ending) {
  const one = str.split("");
  const two = ending.split("").length;
  const lasstr = one.slice(-two);
  const add = lasstr.join("");
  if (add === ending || ending === '') {
    return true;
  }
  return false
}

console.log(solution("amitumi", "tumi"));


// another way

function solution2(str, ending) {
return str.endsWith(ending)
}

 console.log(solution2("amitumi", "tumi"));