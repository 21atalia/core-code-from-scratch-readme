<h1 align="center">Week 6 : Typescript</hi>

<br>

### _Week challenges (Monday)_ 

<br>

_[2. Square(n) Sum exercise](https://www.codewars.com/kata/515e271a311df0350d00000f/train/typescript)_

<br>

```js
export function squareSum(numbers: number[]): number {
  return numbers.reduce(function(sum : number, n : number){
      return (n*n) + sum;
  }, 0)
}
```

<br>

_[3. Growth Of A Population exercise](https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/typescript)_

<br>

```js
export class G964 {
    public static nbYear = (p0, percent, aug, p) => {
      for (var y = 0; p0 < p; y++) p0 = parseInt(p0 * (1 + percent / 100) + aug);
       return y;
    }
}
```

<br>

_[4. Mumbling exercise](https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/typescript)_

<br>

```js
export function accum(s: string): string {
  return s.split('').map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i)).join('-');
}
```

<br>

_[5. A Wolf In Sheep's Clothing exercise](https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/typescript)_

<br>

```js
export function warnTheSheep(queue: string[]): string {
  const index=queue.indexOf("wolf");
  return index===queue.length-1 ? "Pls go away and stop eating my sheep":
  `Oi! Sheep number ${queue.length-1-index}! You are about to be eaten by a wolf!`;
}
```

<br>

### _Week challenges (Tuesday)_ 

<br>

_[1. A Rule Of Divisibility By 13 exercise](https://www.codewars.com/kata/564057bc348c7200bd0000ff/train/typescript)_

<br>

```js
export function thirt(n: number): number {
  let remainders: number[] = [1, 10, 9, 12, 3, 4];
  let result = n.toString().split('').reverse().map( (c,i) => parseInt(c)* remainders[i%6]).reduce((p,c) => p += c);
  return n == result ? result : thirt(result)
}
```

<br>

_[2. Playing With Digits exercise](https://www.codewars.com/kata/5552101f47fc5178b1000050/train/typescript)_

<br>

```js
export class G964 {
    public static digPow = (n: number, p: number) => {
      let arr = n.toString().split('').map(Number).reduce((pv,cv,i,arr) => pv+(Math.pow(arr[i],p+i)),0)/n
        return (''+arr).includes('.') ? -1 : arr  
    }
}
```

<br>

_[3. Valid Braces exercise](https://www.codewars.com/kata/5277c8a221e209d3f6000b56/train/typescript)_

<br>

```js
export function validBraces(braces: string): boolean {
   while(/\(\)|\[\]|\{\}/g.test(braces)){
        braces = braces.replace(/\(\)|\[\]|\{\}/g,"")
    }
    return !braces.length;
}

```

<br>

### _Week challenges (Wednesday)_

<br>

_[1. Duplicate Encoder exercise](https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/typescript)_

<br>

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

<br>

_[2. Find The Odd Int exercise](https://www.codewars.com/kata/54da5a58ea159efa38000836/train/typescript)_

<br>

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
<br>

_[3. Which Are In? exercise](https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/typescript)_

<br>

```js
export class G964 {
  public static inArray(a1: string[], a2: string[]): string[] {
    return a1.filter(a => a2.some(b => b.includes(a))).sort();
  }
}
```

<br>

_[4. Sums Of Parts exercise](https://www.codewars.com/kata/5ce399e0047a45001c853c2b/train/typescript)_

<br>

```js
export function partsSums(ls: number[]): number[] {
  let result = [0]
  for(const n in ls.reverse()){
    result.push(ls[n]+result[n]);
  }
  return result.reverse()
}
```

<br>

_[5. Consecutive Strings exercise](https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/typescript)_

<br>

```js
export function longestConsec(strarr: string[], k: number): string {
  let longest = "";
  for(let i=0;k>0 && i<=strarr.length-k;i++){
    let tempStr = strarr.slice(i,i+k).join("");
    if(tempStr.length > longest.length){
      longest = tempStr;
    }
  }
  return longest;
}
```

<br>

### _Week challenges (Thursday)_

<br>

_[1. Tile exercise](https://github.com/corecodeio/devguide-from-scratch-2022-02/tree/main/src/technologies/2022/week06/exercises/e14/desc)_

<br>

```js
export default class Tile {
  letter: string;
  value: number;
  
  constructor(letter: string, value: number){
    this.letter = letter;
    this.value = value;
  }

  printTile(){
    console.log(`
    ===========================
      Letter: ${this.letter}
      Value: ${this.value}
    ===========================
   `)
  }
}
```

<br>

_[2. Time exercise](https://github.com/corecodeio/devguide-from-scratch-2022-02/tree/main/src/technologies/2022/week06/exercises/e15/desc)_

<br>

```js
export default class Time{
    hour: number;
    minute: number;
    second: number;

    constructor(hour: number, minute: number, second: number){
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    }

    printTime(){
        console.log(`
        ===========================
          Hours: ${this.hour}
          Minutes: ${this.minute}
          Seconds: ${this.second}
        ===========================
       `);
    }

   
    getInseconds():number{
        const minutes = this.hour * 60 + this.minute;
        return minutes * 60 + this.second;
    }
}
```
<br>

_[3. Rational exercise](https://github.com/corecodeio/devguide-from-scratch-2022-02/tree/main/src/technologies/2022/week06/exercises/e14/desc)_

<br>

```js
export class rational{
    numerator : number;
    denominator: number;

    constructor(numerator: number, denominator: number){
        this.numerator = numerator;
        this.denominator = denominator;
    }

    printRational(){
        console.log(`${this.numerator} / ${this.denominator}`);
    }

    invert(){
        [this.numerator, this.denominator] = [this.denominator, this.numerator];
    }

    toFloat(){
        return this.numerator / this.denominator;
    }

    gcd(n: number, p: number): number{
        if (p == 0) return n;
        return this.gcd(p, n % p);
    }

    reduce(){
        const gcd = this.gcd(this.numerator, this.denominator);
        this.numerator = this.numerator / gcd;
        this.denominator = this.denominator / gcd;
    }
}

```
<br>

[⬆ Back to homepage](https://github.com/21atalia/core-code-from-scratch-readme/blob/main/README.md)<br>














