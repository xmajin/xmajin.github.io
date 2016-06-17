
function myName() {
   var name = document.getElementById("nameForm").elements[1].value;
   if (name.length > 1){
        document.getElementById("name").innerHTML = name;
        document.getElementById("tabName").innerHTML = name;
        document.getElementById("button").innerHTML = "CHANGE NAME";
    }
}

var click = 0;
var timesReset = 0;
var clickerPow = 1;
var clickerCost = 100;

function clickUpdater(){
    document.getElementById("picHead").innerHTML = "Oy don't click my head, mate! "
     + click + " times clicked.";
    document.getElementById("klikYes").innerHTML = "Yes, " + "clicks: " + click.toFixed();
}

function headClick() {
    click += parseFloat(clickerPow);
    clickUpdater();
}

function resetClicks() {
    click = 0;
    timesReset += 1;
    document.getElementById("timesReset").innerHTML = "Times Reset: " + timesReset;
    clickUpdater();
}

function clickerUpgrade(){
    if (click >= clickerCost){
        click -= clickerCost;
        var cost = clickerCost * 1.12;
        var pow = clickerPow * 1.2;
        clickerCost = parseFloat(cost).toFixed(1);
        clickerPow = parseFloat(pow).toFixed(1);
        document.getElementById("clickPow").innerHTML = "Clicker Power: " + clickerPow;
        document.getElementById("clickerCost").innerHTML = "Clicker Cost: " + clickerCost;
        clickUpdater();
    }
}
