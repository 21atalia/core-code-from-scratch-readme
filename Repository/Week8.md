<h1 align="center">Week 8 : Typescript</h1>

### _Week challenges (Monday)_ 💻

<br>

_1. [Get Started With TypeScript](https://docs.microsoft.com/en-us/learn/modules/typescript-get-started/) guided exercise_

<br>

  >[ Solution📝](https://github.com/21atalia/core-code-from-scratch-readme/tree/main/examples/TypeScriptGuide/Get_Started_With_TypeScript)
  
  <br>
  
_2. [Declare Variable Types In TypeScript guided exercise](https://docs.microsoft.com/en-us/learn/modules/typescript-declare-variable-types/)_

<br>

 > Solution📝

<br>

### _Week challenges (Tuesday)_ 💻

<br>

_1. [Develop typed functions by using TypeScript](https://docs.microsoft.com/en-us/learn/modules/typescript-develop-typed-functions/) guided exercise_

<br>

>[Solution📝](https://github.com/21atalia/core-code-from-scratch-readme/tree/main/examples/TypeScriptGuide/Develop_typed_functions)

<br>

## _Week challenges (Wednesday)_ 💻

<br>

_1. Define generics in TypeScript guided exercise_

<br>

> [Solution 📝](https://github.com/21atalia/core-code-from-scratch-readme/tree/main/examples/TypeScriptGuide/Define_generics)

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

<br>

_2. TicTacToe exercise_

<br>

>[ Solution📝](https://github.com/21atalia/core-code-from-scratch-readme/tree/main/examples/exercises/week8/TicTacToe)

<br>

[⬆ Back to homepage](https://github.com/21atalia/core-code-from-scratch-readme/blob/main/README.md)<br>













