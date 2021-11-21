

function buttonClick1(){

  var firstInput = Number(document.getElementById("textInput").value);
  console.log(firstInput);

  var secondInput = Number(document.getElementById("textInput2").value);
  console.log(secondInput);

  var add = firstInput + secondInput;
  console.log(add);
  document.getElementById("ans").innerHTML = add;

}


function buttonClick2(){

  var firstInput2 = Number(document.getElementById("textInput").value);
  console.log(firstInput2);

  var secondInput2 = Number(document.getElementById("textInput2").value);
  console.log(secondInput2);

  var add = firstInput2 - secondInput2;
  console.log(add);
  document.getElementById("ans").innerHTML = add;

}




function buttonClick3(){

  var firstInput3 = Number(document.getElementById("textInput").value);
  console.log(firstInput3);

  var secondInput3 = Number(document.getElementById("textInput2").value);
  console.log(secondInput3);

  var add = firstInput3 * secondInput3;
  console.log(add);
  document.getElementById("ans").innerHTML = add;

}




function buttonClick4(){

  var firstInput4 = Number(document.getElementById("textInput").value);
  console.log(firstInput4);

  var secondInput4 = Number(document.getElementById("textInput2").value);
  console.log(secondInput4);

  var add = firstInput4 / secondInput4;
  console.log(add);
  document.getElementById("ans").innerHTML = add;

}
