## Week 6 : Typescript

### Week challenges (Monday) 

2. Square(n) Sum exercise, using Typescript

```js
export function squareSum(numbers: number[]): number {
  return numbers.reduce(function(sum : number, n : number){
      return (n*n) + sum;
  }, 0)
}
```

3. Growth Of A Population exercise, using Typescript

4. Mumbling exercise, using Typescript

```js
export function accum(s: string): string {
  return s.split('').map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i)).join('-');
}
```

5. A Wolf In Sheep's Clothing exercise, using Typescript

```js
export function warnTheSheep(queue: string[]): string {
  const index=queue.indexOf("wolf");
  return index===queue.length-1 ? "Pls go away and stop eating my sheep":
  `Oi! Sheep number ${queue.length-1-index}! You are about to be eaten by a wolf!`;
}
```

### Week challenges (Tuesday) 

2. Playing With Digits exercise, using Typescript

```js
export class G964 {

    public static digPow = (n: number, p: number) => {
      let arr = n.toString().split('').map(Number).reduce((pv,cv,i,arr) => pv+(Math.pow(arr[i],p+i)),0)/n
        return (''+arr).includes('.') ? -1 : arr  
    }
}
```
