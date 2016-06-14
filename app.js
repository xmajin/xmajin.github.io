
function myName() {
   var name = prompt("Koks tava vardas?");
   document.getElementById("name").innerHTML = name;
   document.getElementById("tabName").innerHTML = name;
}

function headClick() {
    document.getElementById("picHead").innerHTML = "Oy don't click my head, mate!";
    document.getElementById("klikYes").innerHTML = "Yes";
}
