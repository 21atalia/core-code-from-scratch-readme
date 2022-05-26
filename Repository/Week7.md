### Week challenges (Monday) 💻

[Readme - OOP🧿](resources/OOP_glossary.md)

### Week challenges (Tuesday) 💻

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
