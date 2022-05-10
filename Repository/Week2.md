## Week 2 : Javascript

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


