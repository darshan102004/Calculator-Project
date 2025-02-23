function compute(val) {
    var s = document.getElementById("result");
    s.value += val;
}

function calculateResult() {
    try {
        var expression = document.getElementById("result").value;
        var finalResult = eval(expression);
        document.getElementById("result").value = finalResult;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}

function clearDisplay() {
    document.getElementById("result").value = "";
}

function backspace() {
    var v = document.getElementById("result");
    v.value = v.value.slice(0, -1);
}
