document.getElementById("answer2").addEventListener("click",sumValue,false);

function sumValue(){
    var num1 = parseInt(document.getElementById("input1").value);
    var num2 = parseInt(document.getElementById("input2").value);
    var num3 = parseInt(document.getElementById("input3").value);
    
    var sum = num1 + num2 + num3;
    
    document.getElementById("result").innerHTML = sum;
}