# core-code-from-scratch-readme
Week 1

Week challenges (Tuesday)

1. Base on this reading and this video, create an explanation about Interpreted And Compiled Programming Languages in your README

Los lenguajes compilados son los que se convierten a código maquina y son ejecutados de manera mas rapida por el procesador, un compilador recoge todo el código fuente y lo combina en un archivo ejecutable para una arquitectura especifica de procesador. 

Los interpretes ejecutan el código linea por linea sin necesidad de generar un archivo unico cada vez que se realiza un cambio. Es como una maquina que siempre acepta nuevas entradas para entregar la salida en el momento.

2. Is Java compiled or interpreted, or both?, check the sources and answer the question in your README

Java primero es compilado a un lenguaje intermedio llamado bytecode, JRE se encarga de interpretar el bytecode al que son compilados los programas de Java. ByteCode luego es interpretado por la JVM convirtiéndolo en un lenguaje interpretado.

3. Pseudocode currency converter exercise

Algoritmo

inicio
Escribir «Ingresa una cantidad”
BTCprice = obtener desde(https://www.coindesk.com/price/bitcoin/)
Total = cantidad * BTCprice
imprimir Total
FinAlgoritmo

Week challenges (Wednesday) 

1. Your date of birth in the matrix?

1993 / 2 = 996 R 1
996 / 2 = 498 R 0
498 / 2 = 249 R 0
249 / 2 = 124 R 1
124 / 2 = 62 R 0
62 / 2 = 31 R 0
31 / 2 = 15 R 1
15 / 2 = 7 R 1
7 / 2 = 3 R 1
3 / 2 = 1 R 1
1 / 2 = 0 R 1

Decimal: 1993, Binario: 11111001001 

MIPS exercise
.data
        welcome: .asciiz "\n================= Welcome =================\n"
        result: .asciiz "\nThe result is: "
        number_one_msg: .asciiz "\nEnter the first number: "
        number_two_msg: .asciiz "\nEnter the second number: "
  .text
        main:
              # welcome message
              li $v0, 4
              la $a0, welcome
              syscall

              # user input
              li $v0, 4
              la $a0, number_one_msg
              syscall

              li $v0, 5
              syscall

              # saving user input
              move $t0, $v0

              # user input
              li $v0, 4
              la $a0, number_two_msg
              syscall

              li $v0, 5
              syscall

              # saving user input
              move $t1, $v0

              # adding the user numbers
              add $t2, $t0, $t1

              # showing result number
              li $v0, 4
              la $a0, result
              syscall

              # printing number
              li $v0, 1
              move $a0, $t2
              syscall
Program that display your name:

  .data
	      my_name: .asciiz "\nYosef\n"
  .text
	      main:
              li $v0, 4
              la $a0, my_name
              syscall



Week challenges (Thursday) 


1. Print special numbers exercise
  Solution using For
  for (var i = 0; i <= 100; i +=2) {
    console.log(i)
};

2. Bad Code exercise

El código estaba usando una asignación en vez de utilizar una expresión de comparación.


var cond = false;

if (cond == true) {
  console.log('The cond variable is true');
} else {
  console.log('The cond variable is false');
}

3. Bad Code 2 exercise

var n = 100;

if (n == 100) {
  console.log('This is a special number');
} else if (n < 1000 && n % 10 == 0) {
  console.log('This number is almost special');
} else {
  console.log('Just a regular number');
}


Week 2

Week challenges (Tuesday) 

1. Multiply exercise

multiply = function (a, b) {
  return a * b;
}

2. ASCII Total exercise

Week challenges (Wednesday) 

1. Holiday VIII - Duty Free exercise
  function dutyFree(normPrice, discount, hol){
  return(Math.floor(hol / normPrice / discount * 100));
}

2. Twice As Old exercise
  function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(2 * sonYearsOld - dadYearsOld);
}

3.Valid Spacing exercise
  function validSpacing(s) {
 if (s.length === 0) return true;
  if (s[0] === ' ' || s[s.length - 1] === ' ') return false;
  let aSpaces0 = s.split(' ');
  for (let i = 0, length = aSpaces0.length; i < length; i++) {
    if (aSpaces0[i] === '') return false;
  }
  return true;
 }

4. Fake Binary exercise
   function fakeBin(x) {
    return x.split('').map(y => y < 5 ? 0 : 1).join('');
}



Week 3
Week challenges (Monday)

1. Who Likes It? exercise

function likes(names) {
    var templates = [
    'no one likes this',
    '{name} likes this',
    '{name} and {name} like this',
    '{name}, {name} and {name} like this',
    '{name}, {name} and {n} others like this'
  ];
  var idx = Math.min(names.length, 4);
  
  return templates[idx].replace(/{name}|{n}/g, function (val) {
    return val === '{name}' ? names.shift() : names.length;
  });

}

2. Bit Counting exercise 

var countBits = function(n) {
   // make an array with the bit result
   const base = (n).toString(2).split('');
   
   // make a sum with the array and make the index a Number
   const result = base.reduce((sum, num) => sum + Number(num), 0);
   
   return result;
};

3. Your Order, Please exercise

function order(words){
  let arr = words.split('');
  let r = [];
  
  arr.forEach(word => {
    let x = word.split('');
    let num = x.find(el => parseInt(el));
    r.push([word, parseint(num)]);
  })
  
  r.sort((a, b) => a[1] - b[1]).map(x => x.splice(1,1));
  return r.join(' ');
         
}


Week challenges (Tuesday)

1. Simple Pig Latin exercise

function pigIt(str){
  let newArr = [];
  let strArr = str.split(" ")
  strArr.forEach(x => {
    let wordArr = x.split("")
    wordArr.push(wordArr[0], 'ay'), wordArr.shift()
    if (x === "!" || x === "?" || x === "." || x === "," || x === ";"){
      newArr.push(x)
    } else {
      newArr.push(wordArr.join(""))
    }    
  })
  return newArr.join(" ")
  
}

2. Counting Duplicates exercise

function duplicateCount(text){
  
  let count = 0
  let obj = {}
  
 for (let i of text) {
   i = i.toLowerCase ()
   if (!obj[i]){
     obj[i] = 1
   }  else {
     obj[i]++
   }
 }
 // console.log(obj)
  for (let i in obj){
    if(obj[i] >1){
      count++
    }
  }
  return count
  }
  
  Week challenges (Wednesday)
  
  1. Valid Parentheses exercise

function validParentheses(parens){
    let parenArr = [];
    let parenObj = {'(': ')'}
    for (let i = 0; i < parens.length; i++) {
        if (parens[i] === '(') {
            parenArr.push(parens[i]);
        }
        else {
            let last = parenArr.pop(); 
            if (parens[i] !== parenObj[last]) {
              return false
            };
        }
    }
    if (parenArr.length !== 0) {
      return false
    };
    return true;
}

2. Convert String To Camel Case exercise

function toCamelCase(str){
  let newStr = "";
  if(str){
    let wordArr = str.split(/[-_]/g);
    for (let i in wordArr){
      if(i > 0){
        newStr += wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1);
      }else{
        newStr += wordArr[i]
      }
    }
  }else{
    return newStr
  }
  return newStr;
}

3. Unique In Order

var uniqueInOrder=function(iterable){
  let newArr =[];
  for(let i=0;i<iterable.length;i++){
    if(iterable[i] != iterable[i+1]){
      newArr.push(iterable[i]);
    }
  }
  return newArr;
}

Week challenges (Thursday) 

1 Fold An Array exercise

function foldArray(array, runs)
{
  const r = [], c = array.slice();
  while (c.length) r.push(c.pop() + (c.shift() || 0));
  return runs - 1 ? foldArray(r, runs - 1) : r;
}

2. Encrypt This! exercise

var encryptThis = function(text) {
 if(text === '') {return '';
    }else {
        let s = text.split(' ');
        let x = s.map(element => {
            let a = element.split('');
            a[0] = element.charCodeAt(0);
            [a[1], a[a.length - 1]] = [a[a.length - 1], a[1]];
            return a.join('');});
      return x.join(' ');
    }
}

3. ✨Complete your 1st Core Challenge. This is one of the requirements for the certification, where you'll boost your dev professional-brand.

Soy Atalia, Licenciada en Informatica Administrativa. Actualmente me estoy certificando para ser una desarrolladora de Software web. 













