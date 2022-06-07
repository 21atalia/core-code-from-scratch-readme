
<h1 align="center">Week 3 : Javascript</h1>

### _Week challenges (Monday)_

_1. Who Likes It? exercise_
```js
function likes(names) {
  if (names.length===0) return 'no one likes this';
  if (names.length===1) return `${names[0]} likes this`;
  if (names.length===2) return `${names[0]} and ${names[1]} like this`;
  if (names.length===3) return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  
  return `${names[0]}, ${names[1]} and ${names.length-2} others like this`;
}
```

_2. Bit Counting exercise_

```js
var countBits = function(n) {
   // make an array with the bit result
   const base = (n).toString(2).split('');
   
   // make a sum with the array and make the index a Number
   const result = base.reduce((sum, num) => sum + Number(num), 0);
   
   return result;
};
```

_3. Your Order, Please exercise_

```js
function order(words){
  let arr = words.split('');
  let r = [];
  
  arr.forEach(word => {
    let x = word.split('');
    let num = x.find(el => parseInt(el));
    r.push([word, parseint(num)]);
  })
  
  r.sort((a, b) => a[1] - b[1]).map(x => x.splice(1,1));
  return r.join(' ');       
}
```


### _Week challenges (Tuesday)_

_1. Simple Pig Latin exercise_

```js
function pigIt(str){
  let newArr = [];
  let strArr = str.split(" ")
  strArr.forEach(x => {
    let wordArr = x.split("")
    wordArr.push(wordArr[0], 'ay'), wordArr.shift()
    if (x === "!" || x === "?" || x === "." || x === "," || x === ";"){
      newArr.push(x)
    } else {
      newArr.push(wordArr.join(""))
    }    
  })
  return newArr.join(" ")
}
```

_2. Counting Duplicates exercise_

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

```js
function duplicateCount(text){
  
  let count = 0
  let obj = {}
  
 for (let i of text) {
   i = i.toLowerCase ()
   if (!obj[i]){
     obj[i] = 1
   }  else {
     obj[i]++
   }
 }
 // console.log(obj)
  for (let i in obj){
    if(obj[i] >1){
      count++
    }
  }
  return count
  }
  ```
  
  _3. Decode The Morse Code_
  
```js
decodeMorse = function(morseCode){
  morseCode = morseCode.trim();
  let refinedData = morseCode.split('   ');
  let result = [];
  
  for (let i = 0; i < refinedData.length; i++) {
    let temp = refinedData[i].split(' ');
    for (let j = 0; j < temp.length; j++) {
      if (MORSE_CODE[temp[j]]) {
        result.push(MORSE_CODE[temp[j]]);
      }
  }
    
    if (i !== refinedData.length - 1) {
    result.push(' ');
    }
  }
   return result.join('');
  }
  ```
  
 
  ### _Week challenges (Wednesday)_
  
_1. Valid Parentheses exercise_
```js
function validParentheses(parens){
    let parenArr = [];
    let parenObj = {'(': ')'}
    for (let i = 0; i < parens.length; i++) {
        if (parens[i] === '(') {
            parenArr.push(parens[i]);
        }
        else {
            let last = parenArr.pop(); 
            if (parens[i] !== parenObj[last]) {
              return false
            };
        }
    }
    if (parenArr.length !== 0) {
      return false
    };
    return true;
}
```

_2. Convert String To Camel Case exercise_
```js
function toCamelCase(str){
  let newStr = "";
  if(str){
    let wordArr = str.split(/[-_]/g);
    for (let i in wordArr){
      if(i > 0){
        newStr += wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1);
      }else{
        newStr += wordArr[i]
      }
    }
  }else{
    return newStr
  }
  return newStr;
}
```


_3. Unique In Order_

```js
var uniqueInOrder=function(iterable){
  let newArr =[];
  for(let i=0;i<iterable.length;i++){
    if(iterable[i] != iterable[i+1]){
      newArr.push(iterable[i]);
    }
  }
  return newArr;
}
```


### _Week challenges (Thursday)_ 

_1. Fold An Array exercise_

```js
function foldArray(array, runs)
{
  const r = [], c = array.slice();
  while (c.length) r.push(c.pop() + (c.shift() || 0));
  return runs - 1 ? foldArray(r, runs - 1) : r;
}
```

_2. Encrypt This! exercise_
```js
var encryptThis = function(text) {
 if(text === '') {return '';
    }else {
        let s = text.split(' ');
        let x = s.map(element => {
            let a = element.split('');
            a[0] = element.charCodeAt(0);
            [a[1], a[a.length - 1]] = [a[a.length - 1], a[1]];
            return a.join('');});
      return x.join(' ');
    }
}
```
<br>

[⬆ Back to homepage](https://github.com/21atalia/core-code-from-scratch-readme/blob/main/README.md)<br>
