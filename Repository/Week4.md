<h1 align="center">Week 4 : End Of Month & Pause Day</h1>

### _Week challenges (Wednesday)_

_1. Simple Validation Of A Username exercise_

```js
function validateUsr(username) {
  return /^[a-z0-9_]{4,16}$/g.test(username); 
}
```

_2. Get Number From String exercise_

```js
function getNumberFromString(s) {
  return Number(s.replace(/\D/g, ''));
}
```

### _Week challenges (Thursday)_ 

_1. String Cleaning exercise_

```js
function stringClean(s){
  return s.replace(/\d/g, "");  
}
```

_2. Password Validation exercise_

```js
function validate(password) {
  return /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])[a-zA-Z0-9]{6,}$/.test(password);
}
```
<br>

[⬆ Back to homepage](https://github.com/21atalia/core-code-from-scratch-readme/blob/main/README.md)<br>



