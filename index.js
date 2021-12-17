let operator;

const outputScreen = document.getElementById("res");

function appendExp(e) {
    outputScreen.innerHTML += e.target.innerHTML;
}

function identifyOperator(e) {
    appendExp(e);
    operator = e.target.innerHTML;
}

function calculateOuputAndDisplay() {
    let arr = [],
        output;

    const expression = outputScreen.innerHTML;

    arr = expression.split(operator);

    const operator1 = parseInt(arr[0], 2);
    const operator2 = parseInt(arr[1], 2);

    switch (operator) {
        case "+":
            output = operator1 + operator2;
            break;
        case "-":
            output = operator1 - operator2;
            break;
        case "*":
            output = operator1 * operator2;
            break;
        case "/":
            output = Math.floor(operator1 / operator2);
            break;
        default:
            outputScreen.innerHTML = "Invalid operation";
            return;
    }

    outputScreen.innerHTML = output.toString(2);
}

document.getElementById("btnClr").addEventListener("click", () => {
    outputScreen.innerHTML = "";
});

document.getElementById("btn0").addEventListener("click", appendExp);
document.getElementById("btn1").addEventListener("click", appendExp);
document.getElementById("btnSum").addEventListener("click", identifyOperator);
document.getElementById("btnSub").addEventListener("click", identifyOperator);
document.getElementById("btnMul").addEventListener("click", identifyOperator);
document.getElementById("btnDiv").addEventListener("click", identifyOperator);
document
    .getElementById("btnEql")
    .addEventListener("click", calculateOuputAndDisplay);
