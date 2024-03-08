JavaScript
function display(value) {
    document.getElementById("result").value += value;
}

function calculate() {
    console.log();
    let p = document.getElementById("result").value;
    let q = eval(p);
    document.getElementById("result").value = q;
}

function clearScreen() {
    console.log();
    document.getElementById("result").value = "";
}