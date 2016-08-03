// COOKIES // USERNAME SAVE/CHANGE/DELETE
function setCookie(cname, cvalue){
    document.cookie = cname + "=" + cvalue;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var username = getCookie("username");
    if (username != "") {
        document.getElementById("tabName").innerHTML = "Welcome to the infinity, " + username + " !";
        document.getElementById("name").innerHTML = "I am " + username + " !!!";
    }
    else {
        username = prompt("Welcome to the infinity. What is your name, traveller? ", "");
        if (username != "" && username != null) {
            setCookie("username", username);
        }
    }
}


// FUNCTIONS MISC
function myName() {
   var name = document.getElementById("nameForm").elements[1].value;
   if (name.length > 1){
        setCookie("username", name);
        checkCookie();
    }
}

var click = 0;
var chronium = 0;
var seconds = 0;
var singularity = 0;

function clickUpdater(){
    if (click <= 100){
        document.getElementById("picHead").innerHTML = "Oy don't click my head, mate! "
         + click.toFixed() + " times clicked.";
     }
     if (click > 100 && click < 300){
         document.getElementById("picHead").innerHTML = "Enuff of this, bruh!"
          + click.toFixed() + " times clicked.";
     }
     if (click >= 300){
         document.getElementById("picHead").innerHTML = "Okay, " + name + "I kill you now! "
          + click.toFixed() + " times clicked.";
     }
}

function headClick(){
    click += 1;
    clickUpdater();
}

function headHover(mark){
    if (click == 0){
        if (mark == "on"){
            document.getElementById("picHead").innerHTML = "Don't touch me, boy!";
        }
        if (mark == "off"){
            document.getElementById("picHead").innerHTML = "Phew.. close call.";
        }
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
