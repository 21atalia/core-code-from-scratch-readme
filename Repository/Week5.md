## Week 5 : Typescript

### Week challenges (Monday) 

[1. Find The Missing Letter exercise](https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript)

```js
function findMissingLetter(array)
{
  return String.fromCharCode(array.find((c,i)=>array[i+1].charCodeAt()-c.charCodeAt()!==1).charCodeAt()+1);
}
```

[2. Reverse Or Rotate? exercise](https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991/train/javascript)

```js
function revrot(str, sz) {
  if (sz < 1 || sz > str.length) 
    return '';

  let reverse = s => s.split('').reverse().join('');
  let rotate  = s => s.slice(1) + s.slice(0, 1);
  let sum_cubes = c => c.split('').reduce((a, b) => a + +b * 3, 0); 

  return str
    .match(new RegExp('.{' + sz + '}', 'g'))
    .map(c => sum_cubes(c) % 2 ? rotate(c) : reverse(c))
    .join('');  
}
```

### Week challenges (Tuesday) 

1. TypeScript Object Type exercise

```js
export interface User {
    name: string;
    age: number;
    occupation: string;
}

export const users: User[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

export function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(logPerson);
```







2. TypeScript Unions exercise


### Week challenges (Thursday)

1. What's Your Poison? exercise

```js
function find(rats) {
  return rats.reduce((a,b)=>a+Math.pow(2,b),0)
}
```


2. Array.diff exercise

```js
function arrayDiff(a, b) {
  return a.filter(function(x){return b.indexOf(x) == -1});
}
```
