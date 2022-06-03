<h1 align="center">Week 8 : Typescript</h1>

### _Week challenges (Monday)_ 💻

<br>

_1. [Get Started With TypeScript](https://docs.microsoft.com/en-us/learn/modules/typescript-get-started/) guided exercise_

<br>

  >[ Solution📝](https://github.com/21atalia/core-code-from-scratch-readme/tree/main/examples/TypeScriptGuide/Get_Started_With_TypeScript)
  
  <br>
  
_2. [Declare Variable Types In TypeScript guided exercise](https://docs.microsoft.com/en-us/learn/modules/typescript-declare-variable-types/)_

<br>

<br>

### _Week challenges (Tuesday)_ 💻

<br>

_1. [Develop typed functions by using TypeScript guided exercise](https://docs.microsoft.com/en-us/learn/modules/typescript-develop-typed-functions/)_

<br>

```js
function addNumbers (x: number, y: number): number {
   return x + y;
}
addNumbers(1, 2);

let addNumbers = function (x: number, y: number): number { //anonymous functions
   return x + y;
}
addNumbers(1, 2);

let total = function (input: number[]): number {
    let total: number =  0;
    for(let i = 0; i < input.length; i++) {
        if(isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
}

console.log(total([1, 2, 3]));

// Anonymous function
let addNumbers1 = function (x: number, y: number): number {
   return x + y;
}

// Arrow function
let addNumbers2 = (x: number, y: number): number => x + y;

let total2 = (input: number[]): number => {
    let total: number =  0;
    for(let i = 0; i < input.length; i++) {
        if(isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
}
```

Create Functions

```js
function displayAlert(message: string | number) {
    alert('The message is ' + message);
}

console.log(displayAlert(42));

function sum(input: number[]): number {
    let total =  0;
    for(let count = 0; count < input.length; count++) {
        if(isNaN(input[count])){
            continue;
        }
        total += Number(input[count]);
    }
    return total;
}

console.log(sum([1, 2, 3]));
```

Fun with parameters

<br>

## _Week challenges (Wednesday)_ 💻

<br>

1. Define generics in TypeScript guided exercise

<br>

_2. [Make the Deadfish Swim](https://www.codewars.com/kata/51e0007c1f9378fa810002a9/train/typescript) exercise_

<br>

```js
export function parse(data: string): number[] {
  let res:number[] = [];

  data.split('').reduce((cur, s) => {
    if (s === 'i') cur++;
    if (s === 'd') cur--;
    if (s === 's') cur = Math.pow(cur, 2); //I would've done cur *= cur;
    if (s === 'o') res.push(cur);
    
    return cur;
  }, 0);
  
  return res;
}
```
<br>

## _Week challenges (Thursday)_ 💻

<br>

_1. Generics exercise_

<br>

 >[ Solution📝](https://github.com/21atalia/core-code-from-scratch-readme/tree/main/examples/exercises/week8/Generics)











