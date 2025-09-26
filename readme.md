
````markdown
# JavaScript Problem Solutions

This repository contains simple and professional solutions to some common JavaScript problems.  
Each problem is solved in multiple ways for better understanding.

---

## 1. Check if Array Contains a Value

### Long Way (Using Loop)
```js
function check(a, x) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] == x) {
      return true;
    }
  }
  return false;
}

console.log(check(['banana','apple'], 'apple')); // true
````

### Shortcut Way (Using `includes`)

```js
const result = (a, x) => a.includes(x);

console.log(result(['apple','banana'], 'd')); // false
```

### Case-Insensitive Search

```js
let result2 = (a, x) => {
  for (let i = 0; i < a.length; i++) {
    if (a[i].toLowerCase() === x.toLowerCase()) {
      return true;
    }
  }
  return false;
}

console.log(result2(['Apple','banana'], 'Banana')); // true
```

---

## 2. Remove Exclamation Marks from a String

### Using `split` and `join`

```js
function removeExclamationMarks(s) {
  return s.split('!').join('');
}

console.log(removeExclamationMarks('!djkm!kd')); // djkmkd
```

### Using `replace` with Regex

```js
let result = (s) => s.replace(/!/ig, '');

console.log(result('!dhgd!')); // dhgd
```

### Using `replaceAll`

```js
let result1 = (s) => s.replaceAll('!', '');

console.log(result1('!jhshs!nj')); // jhshsnj
```

---

## 3. Sum of Mixed Array (Numbers and Strings)

### Long Way (Using `map` + `reduce`)

```js
function sumMix(x) {
  const numberArray = x.map(Number);
  const result = numberArray.reduce((a, b) => a + b, 0);
  return result;
}

console.log(sumMix([12, 5, 8, 5, '25'])); // 55
```

### Shortcut Way

```js
const totalSum = x => x.map(Number).reduce((a, b) => a + b, 0);

console.log(totalSum(['55', 58, 55])); // 168
```

---

## 4. Check if String Ends With Another String

### Manual Way

```js
function solution(str, ending) {
  const one = str.split("");
  const two = ending.split("").length;
  const lasstr = one.slice(-two);
  const add = lasstr.join("");
  
  if (add === ending || ending === '') {
    return true;
  }
  return false;
}

console.log(solution("amitumi", "tumi")); // true
```

### Professional Way (Using `endsWith`)

```js
function solution2(str, ending) {
  return str.endsWith(ending);
}

console.log(solution2("amitumi", "tumi")); // true
```

---

## 📝 Summary

* ✅ Used `for` loops for detailed explanations.
* ✅ Showed clean one-liners using built-in JavaScript methods.
* ✅ Covered multiple approaches for better understanding.

This collection will help beginners understand both **manual logic** and **shortcuts** in JavaScript.

```
