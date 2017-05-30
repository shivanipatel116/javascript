document.getElementById("answer2").addEventListener("click",inputSum,true);

function inputSum(){
    var num1 = parseInt(document.getElementById("input1").value);
    var num2 = parseInt(document.getElementById("input2").value);
    var num3= parseInt(document.getElementById("input3").value);
    
    sum = num1 + num2 + num3;
    
    sumMult = (num1+num2) * num3;
    
    diff = sumMult - sum;
   
    document.getElementById("result1").innerHTML = "Calculation1 Answer: " + sum;
    document.getElementById("result2").innerHTML = "Calculation2 Answer: " + sumMult;
    document.getElementById("result3").innerHTML = "Difference is: " + diff;
    
}