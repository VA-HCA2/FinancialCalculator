"use strict";
//Present Value Calculator
/* This function calculates the present value of a ordinary annuity
* @param anPayout - Desired annual Payout
* @param growthRte - Interest rate 
* @param numOfYears- Number of years to pay out
* @param futureValue- Future value of the initial payout 
*/ 

function presentValue() {

    // Get Data from screen 
    let anPayout = document.getElementById("anPayout").value;
    anPayout = parseFloat(anPayout);

    let growthRte = document.getElementById("growthRte").value;
    growthRte = parseFloat(growthRte);

    let numOfYears = document.getElementById("numOfYears").value;
    numOfYears = parseFloat(numOfYears);

    // Adjust growthRte to be a percent (ex 5 becomes .05)
    let int = growthRte / 100;

    // Calculate present value
    let presentValue = anPayout * ((1 - Math.pow(1 + int, -numOfYears)) / int)

    // Put result back in UI
    const resultField = document.getElementById("futureValue");
    resultField.value = presentValue.toFixed(2);

}

function init() {
    const btn = document.getElementById("presentBtn");
    btn.onclick = presentValue;

}

window.onload = init;