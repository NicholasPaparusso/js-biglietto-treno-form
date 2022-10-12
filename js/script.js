// Data layer
let nameGiven;
let age;
let offer;
let code;
let ticketPrice;
const kmP = 0.21;
const dAged = 0.40;
const dMin = 0.20;
const sendInput  = document.querySelector('#send');
const delInput = document.querySelector('#reset')
console.log('ciaooo', sendInput);
nameGiven = document.querySelector('.name').value;


// Business layer

// Presentation layer
 sendInput.addEventListener('click' , enter );

 function enter (){
   document.querySelector('.name-passenger').innerHTML = nameGiven;
 }

delInput.addEventListener('click', del)
function del (){
  document.querySelector('.name').value = "";
  document.querySelector('.name-passenger').innerHTML = "";
  nameGiven;
}