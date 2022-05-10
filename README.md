# core-code-from-scratch-readme

## _Index_

- [Week 1 : Introduction to programming & Javascript](Repository/Week1.md)
- [Week 2 : Javascript](Repository/Week2.md)

## Week 3

### Week challenges (Monday)

1. Who Likes It? exercise

/*
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples.
*/

function likes(names) {
  if (names.length===0) return 'no one likes this';
  if (names.length===1) return `${names[0]} likes this`;
  if (names.length===2) return `${names[0]} and ${names[1]} like this`;
  if (names.length===3) return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  
  return `${names[0]}, ${names[1]} and ${names.length-2} others like this`;
}


2. Bit Counting exercise

/*
Description:
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

var countBits = function(n) {
   // make an array with the bit result
   const base = (n).toString(2).split('');
   
   // make a sum with the array and make the index a Number
   const result = base.reduce((sum, num) => sum + Number(num), 0);
   
   return result;
};

3. Your Order, Please exercise

/*
Your task is to sort a given string. Each word in the String will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input String is empty, return an empty String. The words in the input String will only contain valid consecutive numbers.

For an input: "is2 Thi1s T4est 3a" the function should return "Thi1s is2 3a T4est"

your_order("is2 Thi1s T4est 3a")
[1] "Thi1s is2 3a T4est"
*/

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


Week challenges (Tuesday)

1. Simple Pig Latin exercise

/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

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

2. Counting Duplicates exercise

/*
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
*/

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
  
  3. Decode The Morse Code

/*
In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superseded by voice and digital data communication channels, it still has its use in some applications around the world.
*/

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
  
 
  Week challenges (Wednesday)
  
  1. Valid Parentheses exercise

/*
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
*/

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

2. Convert String To Camel Case exercise

/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/

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


3. Unique In Order

/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

var uniqueInOrder=function(iterable){
  let newArr =[];
  for(let i=0;i<iterable.length;i++){
    if(iterable[i] != iterable[i+1]){
      newArr.push(iterable[i]);
    }
  }
  return newArr;
}


Week challenges (Thursday) 

1. Fold An Array exercise

/*
In this kata you have to write a method that folds a given array of integers by the middle x-times.
*/


function foldArray(array, runs)
{
  const r = [], c = array.slice();
  while (c.length) r.push(c.pop() + (c.shift() || 0));
  return runs - 1 ? foldArray(r, runs - 1) : r;
}

2. Encrypt This! exercise

/*
You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:
Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter needs to be converted to its ASCII code.
The second letter needs to be switched with the last letter
Keepin' it simple: There are no special characters in input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/


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

3. ✨Complete your 1st Core Challenge. This is one of the requirements for the certification, where you'll boost your dev professional-brand.

I am Atalia, I have a degree in Administrative Informatics. I am currently certifying to be a web software developer in JavaScript, React & Node.js. My desire is to grow professionally, to insert myself in the working world and design software according to the request of customers and company. I am a proactive, honest, responsible, dedicated, and self-taught person. I am convinced that with my talent and commitment I will contribute to obtain changes in the world of the computer industry.











