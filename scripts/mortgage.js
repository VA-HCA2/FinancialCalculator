"use strict";
//Mortgage Calculator

function Mortgage()
 {
    let num1=document.getElementById("num1").value;
    num1=parseFloat(num1);

    let num2=document.getElementById("num2").value;
    num2=parseFloat(num2);

    let num3=document.getElementById("num3").value;
    num3=parseFloat(num3);

    let apr= num1/1200
    let term=num2*12
    let mrtg= num3*(apr* Math.pow((1 + apr), term))/(Math.pow((1 + apr), term)-1);
    const resultField=document.getElementById("result");
    resultField.value= mrtg.toFixed(2);

    let totalCost=mrtg*term
    const result=document.getElementById("result2");
    result.value= totalCost.toFixed(2);

 }

 function init() 
 {
     const btn= document.getElementById("mortageBtn");
     btn.onclick =Mortgage;

 }
 
 window.onload = init;
