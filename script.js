const canva = document.getElementById("myCanvas");
const ctx = canva.getContext("2d");
window.onload = function(){
const img = document.getElementById("peeimg");
ctx.drawImage(img,50,10,600,500);
ran_numr = (Math.floor(Math.random() * 5 + 2)) / 1000;
ran_numo = (Math.floor(Math.random() * 5 + 2)) / 1000;
ran_numg = (Math.floor(Math.random() * 5 + 2)) / 1000;
ran_numb = (Math.floor(Math.random() * 6)) / 1000;
ranb = 0.68 + ran_numb;
ranr = 0.13 + ran_numr;
rano = 0.42 + ran_numo;
rang = 0.43 + ran_numg;
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
    document.getElementById("spr").innerHTML = ranr;
    document.getElementById("spo").innerHTML = rano;
    document.getElementById("spg").innerHTML = rang;
    document.getElementById("spb").innerHTML = ranb;
}

function normalgraph() {
    document.getElementById("graph").src = "tabs/images/modelgraph.png";
}

function zeroreading(){
    document.getElementById("Voltage").value = "0";
    document.getElementById("Voltage").style.color = "black";
    document.getElementById("phcr").innerHTML = "";
    document.getElementById("Voltage").style.fontWeight = "lighter";
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
        document.getElementById("spr").innerHTML = ranr;
    }    
}
function orangevalue(){
    readin = document.getElementById("Voltage").value;
    if (readin === "0.42") {
        document.getElementById("spo").innerHTML = rano;
    }
}
function greenvalue(){
    readin = document.getElementById("Voltage").value;
    if (readin === "0.43") {
        document.getElementById("spg").innerHTML = rang;
    }
}
function bluevalue(){
    readin = document.getElementById("Voltage").value;
    if (readin === "0.68") {
        bluesp = document.getElementById("spb").innerHTML = ranb;
    }
}

//To generate random numbers with in range
// function randomNumber() {
//     ran_num = Math.floor(Math.random() * 5 + 2);
//     ranr = 0.13 + (ran_num/1000);
// }
