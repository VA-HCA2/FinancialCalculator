"use strict";
//Future Value Calculator

function futureValue() {
    let num1 = document.getElementById("num1").value;
    num1 = parseFloat(num1);

    let num2 = document.getElementById("num2").value;
    num2 = parseFloat(num2);

    let num3 = document.getElementById("num3").value;
    num3 = parseFloat(num3);

    let term = num3 * 12
    let apr = num2 / 1200
    let futurev = num1 * Math.pow(1 + apr, term);
    const resultField = document.getElementById("results");
    resultField.value = futurev.toFixed(2);

    let interestEarn = futurev-num1
    const result2Field = document.getElementById("results2");
    result2Field.value = interestEarn.toFixed(2);

}

function init() {
    const btn = document.getElementById("futureBtn");
    btn.onclick = futureValue;

}

window.onload = init;