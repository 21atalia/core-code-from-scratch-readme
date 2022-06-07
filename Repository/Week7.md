<h1 align="center">Week 8 : Typescript</h1>

<br>

### _Week challenges (Monday)_ 💻

<br>

_1. [Readme - OOP](https://github.com/21atalia/core-code-from-scratch-readme/blob/main/resources/OOP_glossary.md)_

<br>

_2. [Example OOP🔎](https://github.com/21atalia/core-code-from-scratch-readme/blob/main/resources/example.md)_ 

<br>

### _Week challenges (Tuesday)_ 💻

<br>

_1. Menu exercise_

<br>

>[Solution 🔧](https://github.com/21atalia/core-code-from-scratch-readme/tree/main/examples/exercises/week7/Menu)

<br>

_2. Movies exercise_

<br>

>[Solution 🔧](https://github.com/21atalia/core-code-from-scratch-readme/tree/main/examples/exercises/week7/Movies)

<br>

### _Week challenges (Wednesday)_ 💻

<br>

_[2. Build Tower exercise](https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/typescript)_

<br>

```js
export const towerBuilder = (nFloors: number): string[] => {
  let result = [];
    for ( let i = 1; i <= nFloors; i++ ) {
      result.push(' '.repeat(nFloors-i) + '*'.repeat(i*2-1) + ' '.repeat(nFloors-i))
    }
    return result
}
```

_[2. Meeting exercise](https://www.codewars.com/kata/59df2f8f08c6cec835000012/train/typescript)_

```js
export function meeting(s: string): string {
  return s.replace(/;/gi,' ').split(' ').map(v=>v.split(':').reverse().join(', ').toUpperCase()).sort()
   .map(v=>'('+v+')').join('')
}
```

<br>


[⬆ Back to homepage](https://github.com/21atalia/core-code-from-scratch-readme/blob/main/README.md)<br>
