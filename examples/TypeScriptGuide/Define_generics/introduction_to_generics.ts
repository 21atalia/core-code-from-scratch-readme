/*function getArray(items : any[]) : any[] {
    return new Array().concat(items);
}

let numberArray = getArray([5, 10, 15, 20]);
let stringArray = getArray(['Cats', 'Dogs', 'Birds']);
numberArray.push(25);                       // OK
stringArray.push('Rabbits');                // OK
numberArray.push('This is not a number');   // OK
stringArray.push(30);                       // OK
console.log(numberArray);                   // [5, 10, 15, 20, 25, "This is not a number"]
console.log(stringArray);                   // ["Cats", "Dogs", "Birds", "Rabbits", 30]
*/

function getArray<T>(items : T[]) : T[] {
    return new Array<T>().concat(items);
}


let numberArray = getArray<number>([5, 10, 15, 20]);
numberArray.push(25);                      // OK
numberArray.push('This is not a number');  // Generates a compile time type check error

let stringArray = getArray<string>(['Cats', 'Dogs', 'Birds']);
stringArray.push('Rabbits');               // OK
stringArray.push(30);                      // Generates a compile time type check error

//Using multiple type variables

function identity<T, U> (value: T, message: U) : T {
    console.log(message);
    return value
}

let returnNumber = identity<number, string>(100, 'Hello!');
let returnString = identity<string, string>('100', 'Hola!');
let returnBoolean = identity<boolean, string>(true, 'Bonjour!');

returnNumber = returnNumber * 100;   // OK
returnString = returnString * 100;   // Error: Type 'number' not assignable to type 'string'
returnBoolean = returnBoolean * 100; // Error: Type 'number' not assignable to type 'boolean'
