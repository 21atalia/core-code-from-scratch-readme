<h1 align="center">Week 5 : Typescript</h1>

### _Week challenges (Monday)_ 

_[1. Find The Missing Letter](https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript) exercise_

```js
function findMissingLetter(array)
{
  return String.fromCharCode(array.find((c,i)=>array[i+1].charCodeAt()-c.charCodeAt()!==1).charCodeAt()+1);
}
```

_[2. Reverse Or Rotate?](https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991/train/javascript)exercise_

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

### _Week challenges (Tuesday)_ 

_[1. TypeScript Object Type exercise](https://typescript-exercises.github.io/#exercise=1)_

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


_[2. TypeScript Unions exercise](https://typescript-exercises.github.io/#exercise=2)_

```js
interface User {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin;

export const persons: Person[] /* <- Person[] */ = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

export function logPerson(user: Person) {
    console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(logPerson);
```


### _Week challenges (Thursday)_

_[1. What's Your Poison? exercise](https://www.codewars.com/kata/58c47a95e4eb57a5b9000094/train/javascript)_

```js
function find(rats) {
  return rats.reduce((a,b)=>a+Math.pow(2,b),0)
}
```


_[2. Array.diff exercise](https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript)_

```js
function arrayDiff(a, b) {
  return a.filter(function(x){return b.indexOf(x) == -1});
}
```
