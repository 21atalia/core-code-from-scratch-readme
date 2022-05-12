
## Week 3 : Javascript

### Week challenges (Monday)

1. Who Likes It? exercise
```js
function likes(names) {
  if (names.length===0) return 'no one likes this';
  if (names.length===1) return `${names[0]} likes this`;
  if (names.length===2) return `${names[0]} and ${names[1]} like this`;
  if (names.length===3) return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  
  return `${names[0]}, ${names[1]} and ${names.length-2} others like this`;
}
```

2. Bit Counting exercise

```js
var countBits = function(n) {
   // make an array with the bit result
   const base = (n).toString(2).split('');
   
   // make a sum with the array and make the index a Number
   const result = base.reduce((sum, num) => sum + Number(num), 0);
   
   return result;
};
```

3. Your Order, Please exercise

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


### Week challenges (Tuesday)

1. Simple Pig Latin exercise

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

2. Counting Duplicates exercise

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
  
  3. Decode The Morse Code
  
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
  
 
  ### Week challenges (Wednesday)
  
  1. Valid Parentheses exercise
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

2. Convert String To Camel Case exercise
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


3. Unique In Order

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


### Week challenges (Thursday) 

1. Fold An Array exercise

```js
function foldArray(array, runs)
{
  const r = [], c = array.slice();
  while (c.length) r.push(c.pop() + (c.shift() || 0));
  return runs - 1 ? foldArray(r, runs - 1) : r;
}
```

2. Encrypt This! exercise
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

3. ✨Complete your 1st Core Challenge. This is one of the requirements for the certification, where you'll boost your dev professional-brand.

I am Atalia, I have a degree in Administrative Informatics. I am currently certifying to be a web software developer in JavaScript, React & Node.js. My desire is to grow professionally, to insert myself in the working world and design software according to the request of customers and company. I am a proactive, honest, responsible, dedicated, and self-taught person. I am convinced that with my talent and commitment I will contribute to obtain changes in the world of the computer industry.
