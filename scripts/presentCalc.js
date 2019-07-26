"use strict";
//Present Value Calculator

function presentValue() {
    let num1 = document.getElementById("num1").value;
    num1 = parseFloat(num1);

    let num2 = document.getElementById("num2").value;
    num2 = parseFloat(num2);

    let num3 = document.getElementById("num3").value;
    num3 = parseFloat(num3);
    
    let int=num2/100;

    let presentValue = num1*((1-Math.pow(1+int,-num3))/int)
    const resultField = document.getElementById("results");
    resultField.value = presentValue.toFixed(2);

}

function init() {
    const btn = document.getElementById("futureBtn");
    btn.onclick = presentValue;

}

window.onload = init;