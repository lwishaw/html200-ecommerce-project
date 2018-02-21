function capture() {
  event.preventDefault();
  console.log("form submitted")

  
  var theName = document.custInfo.theName.value;


  console.log("Thanks for signing up for our mailing list," + theName)
}
