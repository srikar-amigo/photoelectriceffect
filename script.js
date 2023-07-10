const canva = document.getElementById("myCanvas");
const ctx = canva.getContext("2d");
window.onload = function(){
const img = document.getElementById("peeimg");
ctx.drawImage(img,50,10,600,500);
}

function voltage(){
    document.getElementById("Voltage").select();
}


function change(){
    reading = document.getElementById("Voltage").value;
    read = document.getElementById("select").value;
    if (read === "Red"){
        if (reading === "0.13") {
            document.getElementById("Voltage").style.color = "#008000";
            document.getElementById("Voltage").style.fontWeight= "bolder";
            document.getElementById("phcr").innerHTML = "Photocurrent is 0";
        }
        else { document.getElementById("Voltage").style.color = "black"; }
    }else if (read === "Green"){
        if (reading === "0.43") {
            document.getElementById("Voltage").style.color = "#008000";
            document.getElementById("Voltage").style.fontWeight = "bolder";
            document.getElementById("phcr").innerHTML = "Photocurrent is 0";
        }
        else { document.getElementById("Voltage").style.color = "black"; }
    }else if (read === "Orange"){
        if (reading === "0.42") {
            document.getElementById("Voltage").style.color = "#008000";
            document.getElementById("Voltage").style.fontWeight = "bolder";
            document.getElementById("phcr").innerHTML = "Photocurrent is 0";
        }
        else { document.getElementById("Voltage").style.color = "black"; }
    }else if (read === "Blue"){
        if (reading === "0.68") {
            document.getElementById("Voltage").style.color = "#008000";
            document.getElementById("Voltage").style.fontWeight = "bolder";
            document.getElementById("phcr").innerHTML = "Photocurrent is 0";
        }
        else { document.getElementById("Voltage").style.color = "black"; }
    }
}

function white() {
    const white = document.getElementById("white");
    ctx.drawImage(white,470,365,50,50);
}

function clear() {
    ctx.clearRect(0, 0, canva.width, canva.height);
}

function lighton() {
    if (output === "Red"){
    let redimg = document.getElementById("redimg");
    ctx.drawImage(redimg, 50, 10, 600, 500);
    } else if (output === "Blue"){
        let blueimg = document.getElementById("blueimg");
        ctx.drawImage(blueimg, 50, 10, 600, 500);
    } else if (output === "Green"){
        let greenimg = document.getElementById("greenimg");
        ctx.drawImage(greenimg, 50, 10, 600, 500);
    } else if (output === "Orange"){
        let orangeimg = document.getElementById("orangeimg");
        ctx.drawImage(orangeimg, 50, 10, 600, 500);
    }else if ( output === "None"){
        const img = document.getElementById("peeimg");
        ctx.drawImage(img, 50, 10, 600, 500);
    }
}

function getOption() {
    selectElement = document.querySelector('#select');
    output = selectElement.value;
    lighton();
}
function lightoff(){
    clear();
    const img = document.getElementById("peeimg");
    ctx.drawImage(img, 50, 10, 600, 500);
}

function voltage(){
let volt = document.getElementById("spanvolt").value;
document.getElementById("voltvalue").innerHTML = volt/10;
let current = document.getElementById("voltvalue").innerHTML * 4;
document.getElementById("curr2").value = current+"mA";
}

function graph() {
    let colour = document.querySelector("#select").value;
    if (colour === "Red"){
        document.getElementById("graph").src = "tabs/images/graph_red.png";
    }else if (colour === "Green") {
        document.getElementById("graph").src = "tabs/images/graph_green.png";
    }else if (colour==="Blue") {
        document.getElementById("graph").src = "tabs/images/graph_blue.png";;
    }else if (colour==="Orange") {
        document.getElementById("graph").src = "tabs/images/graph_orange.png";
    }else if (colour === "None") {
        document.getElementById("graph").src = "tabs/images/modelgraph.png";
    }
}

function allcolourgraph(){
    document.getElementById("graph").src = "tabs/images/graph2.png";
    document.getElementById("workfun").innerHTML = "0.93";
    document.getElementById("spr").innerHTML = "0.134";
    document.getElementById("spo").innerHTML = "0.424";
    document.getElementById("spg").innerHTML = "0.438";
    document.getElementById("spb").innerHTML = "0.680";
}

function normalgraph() {
    document.getElementById("graph").src = "tabs/images/modelgraph.png";
}

function zeroreading(){
    document.getElementById("Voltage").value = "0";
    document.getElementById("Voltage").style.color = "black";
    document.getElementById("phcr").innerHTML = "";
}
function callingvalues(){
    x = document.querySelector("#select").value;
    if (x === "Red") {
        redvalue();
    }else if (x === "Green"){
        greenvalue();
    }else if (x === "Orange"){
        orangevalue();
    }else if (x === "Blue"){
        bluevalue();
    }
}

function testing(){
    read = document.getElementById("Voltage").value;
    console.log(read);
    x = document.querySelector("#spr").value;
    console.log(x);
}

function redvalue() {
    readin = document.getElementById("Voltage").value;
    if (readin === "0.13"){
        document.getElementById("spr").innerHTML = "0.134";
    }    
}
function orangevalue(){
    readin = document.getElementById("Voltage").value;
    if (readin === "0.42") {
        document.getElementById("spo").innerHTML = "0.424";
    }
}
function greenvalue(){
    readin = document.getElementById("Voltage").value;
    if (readin === "0.43") {
        document.getElementById("spg").innerHTML = "0.438";
    }
}
function bluevalue(){
    readin = document.getElementById("Voltage").value;
    if (readin === "0.68") {
        bluesp = document.getElementById("spb").innerHTML = "0.680";
    }
}