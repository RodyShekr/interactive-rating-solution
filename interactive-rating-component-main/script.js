'use strict';

const SUBMITBTN = document.querySelector('.submit');
let ratingContainer = document.querySelector('.rating-container')
let thanksContainer = document.querySelector('.thanks-container')
let outputNumber = document.querySelector('.output-number');
let btns = document.getElementById('btns');

btns.addEventListener('click', (event) => {
  let isButton = event.target.innerText;
  if (!isButton) {
    return;
  }

  outputNumber.textContent = isButton
})

SUBMITBTN.addEventListener('click',() => {
    ratingContainer.style.display = 'none';
    thanksContainer.style.display = 'block';
});
