<h1 align="center"> Week 2 : Javascript</h1>

### _Week challenges (Tuesday)_ 

_1. Multiply exercise_
```js
//multiply = function (a, b) {
  return a * b;
}
```



_2. ASCII Total exercise_

```js
function uniTotal(s) {
  let newS = [];
  let finalS;
  for (let i = 0; i < s.length; i++) {
    newS.push(s.charCodeAt(i));
    //console.log("newS:", newS);
  }
  if (s === "") return 0;
  if (s.length === 1) return s.charCodeAt(0);
  if (newS.length > 1) {
    finalS = newS.reduce((a, b) => a + b);
  }
  return finalS;
}
```

_3. Char From ASCII Value exercise_

```js
function getChar(c) {
  return String.fromCharCode(c)
}
```

_4. Binary Addition exercise_

```js
function addBinary(a,b) {
  let sum = a + b;
  return sum.toString(2)
}
```

_5. Student's Final Grade exercise_

```js
function finalGrade (exam, projects) {
  if (exam > 90 || projects > 10){
     return 100;
 }
  else if (exam > 75 && projects >= 5){
     return 90;   
 }
  else if (exam > 50 && projects >= 2){
     return 75;
 }
  return 0;
}
```


### _Week challenges (Wednesday)_ 

_1. Holiday VIII - Duty Free exercise_

```js
  function dutyFree(normPrice, discount, hol){
  return(Math.floor(hol / normPrice / discount * 100));
}
```

_2. Twice As Old exercise_

```js
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs (2 * sonYearsOld - dadYearsOld)
}
```
  

_3.Valid Spacing exercise_

```js
function validSpacing(s) {
 if (s.length === 0) return true;
  if (s[0] === ' ' || s[s.length - 1] === ' ') return false;
  let aSpaces0 = s.split(' ');
  for (let i = 0, length = aSpaces0.length; i < length; i++) {
    if (aSpaces0[i] === '') return false;
  }
  return true;
 }
 ```

_4. Fake Binary exercise_

```js
function fakeBin(x){
  return x.split('').map(y => y < 5 ? 0 : 1).join('')
}
```
   
### _Week challenges (Thursday)_

_1. Remove All Exclamation Marks From The End Of Sentence exercise_

```js
function remove(s){
  return s.replace(/!*$/g,"");
}
```

_2. Vowel Remover exercise_

```js
function shortcut (str) {
   let strArr = str.split('');
  for (var i = 0; i < str.length; i++) {
    let char = str[i];
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
      strArr[i] = '';
    }
  }
  return strArr.join('');
}
```

_3. Rock Paper Scissors! exercise_

```js
const rps = (p1, p2) => {
  if(p1 == p2) {
    return 'Draw!'
  } else if((p1 == 'scissors' && p2 == 'paper') || (p1 == 'paper' && p2 == 'rock') || (p1 == 'rock' && p2 == 'scissors')) {
    return 'Player 1 won!'
  } else {
    return 'Player 2 won!'
  }
}
```


_4. Persistent Bugger exercise_

Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

```js
function persistence(num) {
    let i = 0;
   while (num.toString().length !== 1) {
     num = num.toString().split("").reduce((a,b)=>a*b);
     i++;
   }
   return i;
}
```


