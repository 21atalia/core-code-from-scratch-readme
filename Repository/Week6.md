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
