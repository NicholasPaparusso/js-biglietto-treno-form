// Data layer
let nameGiven;
let kmGiven;
let age;
let offer;
let codeId;
let ticketPrice;
let place;
const kmP = 0.21;
const discountOver65 = 0.40;
const dMin = 0.20;
const sendInput  = document.querySelector('#send');
const delInput = document.querySelector('#reset');


// Presentation layer
 sendInput.addEventListener('click' , enter );

 function enter (){
  
  nameGiven = document.querySelector('.name').value;
   document.querySelector('.name-passenger').innerHTML = nameGiven;
   age = document.querySelector('.age').value
   document.querySelector('#tcol-offer').innerHTML = age;
   codeId = Math.floor(Math.random() * 9000) + 1000 ; 
   document.querySelector('#tcol-code').innerHTML = codeId;
   place = Math.floor(Math.random() * 20) + 1; 
   document.querySelector('#tcol-place').innerHTML = place;
   kmGiven = document.querySelector('.distance').value;
   if (document.querySelector('.age').value === "Sconto minori") {
    ticketPrice = (kmP * kmGiven)  *  (1 - dMin );
  }

    if (document.querySelector('.age').value === "Biglietto standard") {
     ticketPrice = (kmP * kmGiven) ;
    }
   

   if (document.querySelector('.age').value === "Sconto anziani") {
    ticketPrice = (kmP * kmGiven) * (1 - discountOver65);
   }

   ticketPrice = Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(ticketPrice);

   document.querySelector('#tcol-price').innerHTML = ticketPrice;
   document.querySelector('#tcol-price-2').innerHTML = ticketPrice;
   document.querySelector('#tcol-offer-2').innerHTML = age;
   document.querySelector('#tcol-code-2').innerHTML = codeId;
   place = Math.floor(Math.random() * 20) + 1; 
   document.querySelector('#tcol-place-2').innerHTML = place;
  };
 

 

delInput.addEventListener('click', del);
function del (){

  document.querySelector('.name').value = "";
  document.querySelector('.name-passenger').innerHTML = "";
  nameGiven;
  document.querySelector('#tcol-offer').innerHTML = "";
  document.querySelector('#tcol-code').innerHTML = "";
  document.querySelector('#tcol-place').innerHTML = "";
  document.querySelector('#tcol-price').innerHTML ="";
  kmGiven = document.querySelector('.distance').value = "0";
  document.querySelector('#tcol-price-2').innerHTML = "" ;
  document.querySelector('#tcol-offer-2').innerHTML = "";
  document.querySelector('#tcol-code-2').innerHTML = "";
  document.querySelector('#tcol-place-2').innerHTML = "";
}