### Project realted to DOM

## project link
[Click here] (https://stackblitz.com/edit/dom-project-chaiaurcode-fyektyw4?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Findex.html)


 Solution Code:

```javascript
# chaiaurcode.js

const buttons = document.querySelectorAll('.button');

const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```

## Project 2:

``` javascript 
const form = document.querySelector('form');
// this usecase will give you empty i.e, when page reloads values goes empty in before 'Click' event....since we want the data to be entered after the 'Click' event.
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please give a valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please give a valid weight';
  } else {
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi >= 0 && bmi < 18.6) {
      results.innerHTML = `BMI:${bmi} </br> 
      <span>Under weight Detected!!</span>`;
    } else if (bmi >= 18.6 && bmi < 24.9) {
      results.innerHTML = `BMI:${bmi} </br> <span>Normal Weight Detected!!</span>`;
    } else {
      results.innerHTML = `BMI:${bmi} </br> <span></span>`
    }
  }
});


```
