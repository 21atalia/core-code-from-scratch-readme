## Week 4 : End Of Month & Pause Day

### Week challenges (Wednesday)

1. Simple Validation Of A Username exercise

```js
function validateUsr(username) {
  return /^[a-z0-9_]{4,16}$/g.test(username); 
}
```

2. Get Number From String exercise

```js
function getNumberFromString(s) {
  return Number(s.replace(/\D/g, ''));
}
```

### Week challenges (Thursday) 

1. String Cleaning exercise

```js
function stringClean(s){
  return s.replace(/\d/g, "");  
}
```

2. Password Validation exercise

```js
function validate(password) {
  return /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])[a-zA-Z0-9]{6,}$/.test(password);
}
```

✨Complete your 2nd Core Challenge. This is one of the requirements for the certification, where you'll boost your dev professional-brand.



