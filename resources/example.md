Create a guide showing an example on how to use OOP in typescript

## Class definition

To define a class, the word class is used, followed by the class name. The body of the class is enclosed in braces. Thus:
```js
export class Dog{
    // Magic here
}
```

## Class properties

Properties (like functions or methods) of a class in TypeScript can be protected, private or public. They are defined with their type. 

Let's see an example:

```js
export class Dog{
    age: number;
    breed: string;
}
```

## Constructor

```js
constructor(age: number, breed: string)
    {
        this.age = age;
        this.breed = breed;
    }
 ```
 
 To create an object we call the class with the new keyword, which triggers the constructor and returns an instance-object just like in regular JavaScript.
 
 Spot is an instance-object of Dog
 
 ```js
 let Spot = new Dog(2, 'Labrador');
 ```





