
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
var chronium = 0;
var seconds = 0;
var singularity = 0;

function clickUpdater(){
    document.getElementById("picHead").innerHTML = "Oy don't click my head, mate! "
     + click.toFixed() + " times clicked.";
    document.getElementById("klikYes").innerHTML = "Yes, " + "clicks: " + click.toFixed();
}

function headClick(){
    click += parseFloat(clickerPow);
    clickUpdater();
}

function resetClicks(){
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

function chronosGrade(){
    if (chronium >= 100){
        if (chronium >= 100){
            document.getElementById("chronMap").src = "chronos2.png";
        }
    }
    else {
        document.getElementById("chronMap").src = "chronos.png";
    }
}

function chronos(){
    chronium += 1;
    document.getElementById("chronum").innerHTML = "Chronos: " + chronium;
    chronosGrade()
}

function singular(){
    if (seconds >= 60){
        seconds -= 60;
        singularity += 1;
        document.getElementById("seconds").innerHTML = "Seconds: " + seconds;
        document.getElementById("singular").innerHTML = "Singularities: " + singularity;
    }
}

function sellChronos(){
    if (chronium > 0){
        chronium -= 1;
        seconds += 3;
        document.getElementById("chronum").innerHTML = "Chronos: " + chronium;
        document.getElementById("seconds").innerHTML = "Seconds: " + seconds;
        chronosGrade()
    }
}
