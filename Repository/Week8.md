## Week 5 : Typescript

### Week challenges (Monday) 💻

1. Get Started With TypeScript guided exercise
2. Declare Variable Types In TypeScript guided exercise

### Week challenges (Tuesday) 💻

1. [Develop typed functions by using TypeScript guided exercise](https://docs.microsoft.com/en-us/learn/modules/typescript-develop-typed-functions/)
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

