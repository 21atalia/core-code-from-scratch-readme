# core-code-from-scratch-readme
## Week 1

### Week challenges (Tuesday)
<br />
**1. Base on this reading and this video, create an explanation about Interpreted And Compiled Programming Languages in your README**

Los lenguajes compilados son los que se convierten a código maquina y son ejecutados de manera mas rapida por el procesador, un compilador recoge todo el código fuente y lo combina en un archivo ejecutable para una arquitectura especifica de procesador. 
<br />
Los interpretes ejecutan el código linea por linea sin necesidad de generar un archivo unico cada vez que se realiza un cambio. Es como una maquina que siempre acepta nuevas entradas para entregar la salida en el momento.

**2. Is Java compiled or interpreted, or both?, check the sources and answer the question in your README**

Java primero es compilado a un lenguaje intermedio llamado bytecode, JRE se encarga de interpretar el bytecode al que son compilados los programas de Java. ByteCode luego es interpretado por la JVM convirtiéndolo en un lenguaje interpretado.

**3. Pseudocode currency converter exercise**

Algoritmo

inicio
Escribir «Ingresa una cantidad”
BTCprice = obtener desde(https://www.coindesk.com/price/bitcoin/)
Total = cantidad * BTCprice
imprimir Total
FinAlgoritmo

### Week challenges (Wednesday) 

1. Your date of birth in the matrix?

1993 / 2 = 996 R 1
996 / 2 = 498 R 0
498 / 2 = 249 R 0
249 / 2 = 124 R 1
124 / 2 = 62 R 0
62 / 2 = 31 R 0
31 / 2 = 15 R 1
15 / 2 = 7 R 1
7 / 2 = 3 R 1
3 / 2 = 1 R 1
1 / 2 = 0 R 1

Decimal: 1993, Binario: 11111001001 

MIPS exercise

.data
        welcome: .asciiz "\n================= Welcome =================\n"
        result: .asciiz "\nThe result is: "
        number_one_msg: .asciiz "\nEnter the first number: "
        number_two_msg: .asciiz "\nEnter the second number: "
  .text
        main:
              # welcome message
              li $v0, 4
              la $a0, welcome
              syscall

              # user input
              li $v0, 4
              la $a0, number_one_msg
              syscall

              li $v0, 5
              syscall

              # saving user input
              move $t0, $v0

              # user input
              li $v0, 4
              la $a0, number_two_msg
              syscall

              li $v0, 5
              syscall

              # saving user input
              move $t1, $v0

              # adding the user numbers
              add $t2, $t0, $t1

              # showing result number
              li $v0, 4
              la $a0, result
              syscall

              # printing number
              li $v0, 1
              move $a0, $t2
              syscall
	      
Program that display your name:

  .data
	      my_name: .asciiz "\nAtalia\n"
  .text
	      main:
              li $v0, 4
              la $a0, my_name
              syscall



Week challenges (Thursday) 


1. Print special numbers exercise
  Solution using For
  for (var i = 0; i <= 100; i +=2) {
    console.log(i)
};

2. Bad Code exercise

El código estaba usando una asignación en vez de utilizar una expresión de comparación.


var cond = false;

if (cond == true) {
  console.log('The cond variable is true');
} else {
  console.log('The cond variable is false');
}

3. Bad Code 2 exercise

var n = 100;

if (n == 100) {
  console.log('This is a special number');
} else if (n < 1000 && n % 10 == 0) {
  console.log('This number is almost special');
} else {
  console.log('Just a regular number');
}


## **Week 2**

### Week challenges (Tuesday) 

1. Multiply exercise
```js
//multiply = function (a, b) {
  return a * b;
}
```



2. ASCII Total exercise

/*
You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

examples:
uniTotal("a") == 97 uniTotal("aaa") == 291
*/

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

3. Char From ASCII Value exercise

/*
Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.
*/

function getChar(c) {
  return String.fromCharCode(c)
}

4. Binary Addition exercise

/*
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))
*/

function addBinary(a,b) {
  let sum = a + b;
  return sum.toString(2)
}

5. Student's Final Grade exercise

/*
Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.
This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);
This function should return a number (final grade). There are four types of final grades:
100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
0, in other cases
*/

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


### Week challenges (Wednesday) 

1. Holiday VIII - Duty Free exercise

/*
The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.
You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.
For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.
All inputs will be integers. Please return an integer. Round down.
*/

  function dutyFree(normPrice, discount, hol){
  return(Math.floor(hol / normPrice / discount * 100));
}

2. Twice As Old exercise

/*
Your function takes two arguments:
current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
*/

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs (2 * sonYearsOld - dadYearsOld)
}
  

3.Valid Spacing exercise

/*
Your task is to write a function called valid_spacing() or validSpacing() which checks if a string has valid spacing. The function should return either true or false (or the corresponding value in each language).
For this kata, the definition of valid spacing is one space between words, and no leading or trailing spaces. Words can be any consecutive sequence of non space characters. Below are some examples of what the function should return:

* 'Hello world'   => true
* ' Hello world'  => false
* 'Hello world  ' => false
* 'Hello  world'  => false
* 'Hello'         => true
*/

function validSpacing(s) {
 if (s.length === 0) return true;
  if (s[0] === ' ' || s[s.length - 1] === ' ') return false;
  let aSpaces0 = s.split(' ');
  for (let i = 0, length = aSpaces0.length; i < length; i++) {
    if (aSpaces0[i] === '') return false;
  }
  return true;
 }
  

4. Fake Binary exercise

/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
*/

function fakeBin(x){
  return x.split('').map(y => y < 5 ? 0 : 1).join('')

}
   
### Week challenges (Thursday)

1. Remove All Exclamation Marks From The End Of Sentence exercise

/*
Remove all exclamation marks from the end of sentence.
Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
Note
Please don't post issue about difficulty or duplicate.
*/

function remove(s){
  return s.replace(/!*$/g,"");
}

2. Vowel Remover exercise

/*
Description:
Create a function called shortcut to remove all the lowercase vowels in a given string.
Examples
shortcut("codewars") // --> cdwrs
shortcut("goodbye")  // --> gdby
Don't worry about uppercase vowels.
*/

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

3. Rock Paper Scissors! exercise

/*
Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.
Examples:
rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw!
*/

const rps = (p1, p2) => {
  if(p1 == p2) {
    return 'Draw!'
  } else if((p1 == 'scissors' && p2 == 'paper') || (p1 == 'paper' && p2 == 'rock') || (p1 == 'rock' && p2 == 'scissors')) {
    return 'Player 1 won!'
  } else {
    return 'Player 2 won!'
  }
};


4. Persistent Bugger exercise

/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
*/

function persistence(num) {
    let i = 0;
   while (num.toString().length !== 1) {
     num = num.toString().split("").reduce((a,b)=>a*b);
     i++;
   }
   return i;
}


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











