"use strict";
//Future Value Calculator
//Mortgage Calculator
/* This function calculates the Mortgage 
* @param depositAmnt - Initial amount 
* @param antInRate- Ineterest rate per year 
* @param numOfYears- Number of years to calculate future value 
* @param monthlyPayment - MOnthly Payment for the loan 
* @param totalCst- Total Cost of the Mortgage 
*/ 

function futureValue() {
     // Get Data from screen 
    let depositAmnt = document.getElementById("depositAmnt").value;
    depositAmnt = parseFloat(depositAmnt);

    let anIntRate = document.getElementById("anIntRate").value;
    anIntRate = parseFloat(anIntRate);

    let numOfYears = document.getElementById("numOfYears").value;
    numOfYears = parseFloat(numOfYears);

     // Convert from monthly percentage to annual percentage and decimal form
    let term = numOfYears * 12
    let apr = anIntRate / 1200

    // Calculate future value
    let futurev = depositAmnt * Math.pow(1 + apr, term);
    const resultField = document.getElementById("results");
    resultField.value = futurev.toFixed(2);

    // Put result back in UI
    let interestEarn = futurev - depositAmnt
    const result2Field = document.getElementById("results2");
    result2Field.value = interestEarn.toFixed(2);

}

function init() {
    const btn = document.getElementById("futureBtn");
    btn.onclick = futureValue;

}

window.onload = init;