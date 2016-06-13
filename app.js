
function myName() {
   var name = prompt("Koks tava vardas?");
   document.getElementById("name").innerHTML = name;
}

document.getElementById("name").innerHTML.onload = myName();
