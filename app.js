var name = prompt("Koks tava vardas?");

function myName() {
   document.getElementById("name").innerHTML = name;
}

document.getElementById("name").innerHTML.onload = myName();
