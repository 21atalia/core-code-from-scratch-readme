//Required parameters
let addThreeNumbers = (x: number, y: number, z: number): number => x + y + z;

console.log(addThreeNumbers(10,20,30,40));

//Optional parameters
//let addThreeNumbers2 = (x: number, y: number, z?: number): number => x + y + z;

let addThreeNumbers2 = (x: number, y: number, z?: number): number => {
    if((z === undefined)) {
        return x + y;
    } else {
        return x + y + z;
    }
};

console.log(addThreeNumbers2(10,20));

//Default parameters
let subtractThreeNumbers = (x: number, y: number, z: 100): number => x - y - z;

console.log(subtractThreeNumbers(10, 20));       // returns -110 because 'z' has been assigned the value 100
console.log(subtractThreeNumbers(10, 20, 15));   // returns -25