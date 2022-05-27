### Week challenges (Monday) 💻

[Readme - OOP🧿](resources/OOP_glossary.md)

### Week challenges (Tuesday) 💻

1. Menu exercise

2. Movies exercise

### Week challenges (Wednesday) 💻

[2. Build Tower exercise](https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/typescript)

```js
export const towerBuilder = (nFloors: number): string[] => {
  let result = [];
    for ( let i = 1; i <= nFloors; i++ ) {
      result.push(' '.repeat(nFloors-i) + '*'.repeat(i*2-1) + ' '.repeat(nFloors-i))
    }
    return result
}
```

[2. Meeting exercise](https://www.codewars.com/kata/59df2f8f08c6cec835000012/train/typescript)

```js
export function meeting(s: string): string {
  return s.replace(/;/gi,' ').split(' ').map(v=>v.split(':').reverse().join(', ').toUpperCase()).sort()
   .map(v=>'('+v+')').join('')
}
```
