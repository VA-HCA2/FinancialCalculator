"use strict";
//Mortgage Calculator
/* This function calculates the Mortgage 
* @param intRate - The interest rate for the Loan
* @param loanLength - For how many years is the loan requested for 
* @param princpl - The total amount of the Mortgage
* @param monthlyPayment - MOnthly Payment for the loan 
* @param totalCst- Total Cost of the Mortgage 
*/ 

function Mortgage()
 {
     // Get Data from screen 

    let intRate=document.getElementById("intRate").value;
    intRate=parseFloat(intRate);

    let loanLength=document.getElementById("loanLength").value;
    loanLength=parseFloat(loanLength);

    let princpl=document.getElementById("princpl").value;
    princpl=parseFloat(princpl);

    // Convert from monthly percentage to annual percentage and decimal form
    let apr= intRate/1200  
    let term=loanLength*12

     // Calculate mortgage

    let mrtg= princpl*(apr* Math.pow((1 + apr), term))/(Math.pow((1 + apr), term)-1);
    const monthlyPaymentField=document.getElementById("monthlyPayment");
    monthlyPaymentField.value= mrtg.toFixed(2);

    // Put result back in UI

    let totalCost=mrtg*term
    const totalCst=document.getElementById("totalCst");
    totalCst.value= totalCost.toFixed(2);

 }

 function init() 
 {
     const btn= document.getElementById("mortageBtn");
     btn.onclick =Mortgage;

 }
 
 window.onload = init;
