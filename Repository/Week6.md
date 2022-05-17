## Week 5 : Typescript

### Week challenges (Monday) 

2. Square(n) Sum exercise, using Typescript

```js
export function squareSum(numbers: number[]): number {
  return numbers.reduce(function(sum : number, n : number){
      return (n*n) + sum;
  }, 0)
}
```

4. Mumbling exercise, using Typescript

```js
export function accum(s: string): string {
  return s.split('').map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i)).join('-');
}
```
