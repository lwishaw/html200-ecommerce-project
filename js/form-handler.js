function capture() {
  event.preventDefault();
  console.log("form submitted")

  
  var theName = document.custInfo.theName.value;


  console.log("Thanks for signing up for our mailing list," + theName)
}

//Add a +/- button to each product listing in the HTML (maybe use Font Awesome to make it look good?)
//Define a global variable in JS, array “cart”.
//Write onclick handler in JS that accepts a product name as argument, pushes name into “cart” array if it is not yet there, removes it if it is, console logs the size of the cart.
//Each +/- button should trigger the handler, passing in the appropriate product name.
var cart = []
    
function addCart(rplaid){
  event.preventDefault();
  var i = cart.indexOf(rplaid)
  console.log (i)
  if (i == -1){
    cart.push(rplaid);
    console.log(cart.length+" "+ rplaid)
  } else {
    cart.splice(i,1)
    console.log(cart.length)
  }
}  

function addCart(fplaid){
  event.preventDefault();
  var i = cart.indexOf(fplaid)
  console.log (i)
  if (i == -1){
    cart.push(fplaid);
    console.log(cart.length+" " + fplaid)
  } else {
    cart.splice(i,1)
    console.log(cart.length)
  }
} 

function addCart(multi){
  event.preventDefault();
  var i = cart.indexOf(multi)
  console.log (i)
  if (i == -1){
    cart.push(multi);
    console.log(cart.length+" " + multi)
  } else {
    cart.splice(i,1)
    console.log(cart.length)
  }
} 

function addCart(multi){
  event.preventDefault();
  var i = cart.indexOf(multi)
  console.log (i)
  if (i == -1){
    cart.push(multi);
    console.log(cart.length+" " + multi)
  } else {
    cart.splice(i,1)
    console.log(cart.length)
  }
} 

function addCart(northern){
  event.preventDefault();
  var i = cart.indexOf(northern)
  console.log (i)
  if (i == -1){
    cart.push(northern);
    console.log(cart.length+" "+ northern)
  } else {
    cart.splice(i,1)
    console.log(cart.length)
  }
} 

function addCart(ombre){
  event.preventDefault();
  var i = cart.indexOf(ombre)
  console.log (i)
  if (i == -1){
    cart.push(ombre);
    console.log(cart.length+" "+ ombre)
  } else {
    cart.splice(i,1)
    console.log(cart.length)
  }
} 

function addCart(twill){
  event.preventDefault();
  var i = cart.indexOf(twill)
  console.log (i)
  if (i == -1){
    cart.push(twill);
    console.log(cart.length+" "+ twill)
  } else {
    cart.splice(i,1)
    console.log(cart.length)
  }
} 

function addCart(wool){
  event.preventDefault();
  var i = cart.indexOf(wool)
  console.log (i)
  if (i == -1){
    cart.push(wool);
    console.log(cart.length+" "+ wool)
  } else {
    cart.splice(i,1)
    console.log(cart.length)
  }
} 

function addCart(etro){
  event.preventDefault();
  var i = cart.indexOf(etro)
  console.log (i)
  if (i == -1){
    cart.push(etro);
    console.log(cart.length+" "+ etro)
  } else {
    cart.splice(i,1)
    console.log(cart.length)
  }
} 