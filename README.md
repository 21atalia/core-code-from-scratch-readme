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

Week challenges (Wednesday) 
1. Holiday VIII - Duty Free exercise
  function dutyFree(normPrice, discount, hol){
  return(Math.floor(hol / normPrice / discount * 100));
}




