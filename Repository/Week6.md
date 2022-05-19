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

1. A Rule Of Divisibility By 13 exercise, using Typescript

```js
export function thirt(n: number): number {
  let remainders: number[] = [1, 10, 9, 12, 3, 4];
  let result = n.toString().split('').reverse().map( (c,i) => parseInt(c)* remainders[i%6]).reduce((p,c) => p += c);
  return n == result ? result : thirt(result)
}
```

2. Playing With Digits exercise, using Typescript

```js
export class G964 {

    public static digPow = (n: number, p: number) => {
      let arr = n.toString().split('').map(Number).reduce((pv,cv,i,arr) => pv+(Math.pow(arr[i],p+i)),0)/n
        return (''+arr).includes('.') ? -1 : arr  
    }
}
```

3. Valid Braces exercise, using Typescript

### Week challenges (Wednesday)

1. Duplicate Encoder exercise

```js
export function duplicateEncode(word: string) {
    const letterArray = word.toLowerCase().split(""); 
    let outPutString : string [] = [];
    for ( const i in letterArray) {
      outPutString.push(
        word.toLowerCase().split(letterArray[i]).length - 1 <= 1 ? "(" : ")"
      );
    }
    return outPutString.join("");
}
```

2. Find The Odd Int exercise

```js
export const findOdd = (xs: number[]): number => {
  let count = 0;
  let arr = xs.sort((a: number, b: number) => a - b);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count++;
      }
    }
    if (count % 2 !== 0) {
      return arr[i];
    } 
  }
  return 0;
};
```



