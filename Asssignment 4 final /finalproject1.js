//setting a time in the footer
function functionName(){

var todayFullDate = new Date();
var todayTime = todayFullDate.getTime();
var todayMonth = todayFullDate.getMonth() + 1;
var todayDate = todayFullDate.getDate()	;
var todayDay = todayFullDate.getDay()	;
var todayHour = todayFullDate.getHours()	;
var todayYear = todayFullDate.getYear()	;
var todayFullYear = todayFullDate.getFullYear()	;


console.log(todayFullDate);
console.log(todayTime)
console.log(todayMonth)
console.log(todayDate)
console.log(todayDay)
console.log(todayHour)
console.log(todayYear)
console.log(todayFullYear)


document.getElementById("theDate").innerHTML = String(todayDate) + "/" +  String(todayMonth) + "/" + String(todayFullYear);

}






//CONTACT US
function frmOutputs(){


  console.log(document.getElementById("email").value);

  console.log(document.getElementById("name").value);

  console.log(document.getElementById("topic").value);

  console.log(document.getElementById("orderinfo").value);

  console.log(document.getElementById("postal").value);

  console.log(document.getElementById("subject").value);

  console.log(document.getElementById("descript").value);

alert("Thank you for Submitting. \nOur associates will get in touch with you soon.");
}










//Adding to shopping cart

function buttonClick1() {
  var contentToCArt = document.getElementById("pic1");

console.log(contentToCArt.getAttribute("src"));

document.getElementById("bag1").innerHTML = "ADDED TO CART";
}

function buttonClick2() {
  var contentToCArt = document.getElementById("pic2");

console.log(contentToCArt.getAttribute("src"));

document.getElementById("bag2").innerHTML = "ADDED TO CART";
}

function buttonClick3() {
  var contentToCArt = document.getElementById("pic3");

console.log(contentToCArt.getAttribute("src"));
document.getElementById("bag3").innerHTML = "ADDED TO CART";
}

function buttonClick4() {
  var contentToCArt = document.getElementById("pic4");

console.log(contentToCArt.getAttribute("src"));
document.getElementById("bag4").innerHTML = "ADDED TO CART";
}

function buttonClick5() {
  var contentToCArt = document.getElementById("pic5");

console.log(contentToCArt.getAttribute("src"));
document.getElementById("bag5").innerHTML = "ADDED TO CART";
}

function buttonClick6() {
  var contentToCArt = document.getElementById("pic6");

console.log(contentToCArt.getAttribute("src"));
document.getElementById("bag6").innerHTML = "ADDED TO CART";
}




//shoppinng cart
function purchaseClicked(){
  alert("Thank you for your purchase");
}
