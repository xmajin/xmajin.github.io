
function myName() {
   var name = document.getElementById("nameForm").elements[1].value;
   if (name.length > 1){
        document.getElementById("name").innerHTML = name;
        document.getElementById("tabName").innerHTML = name;
        document.getElementById("button").innerHTML = "CHANGE NAME";
    }
}

var click = 0;

function clickUpdater(){
    document.getElementById("picHead").innerHTML = "Oy don't click my head, mate! "
     + click + " times clicked.";
    document.getElementById("klikYes").innerHTML = "Yes, " + "clicks: " + click;
}

function headClick() {
    click += 1;
    clickUpdater();
}

function resetClicks() {
    click = 0;
    clickUpdater();
}
