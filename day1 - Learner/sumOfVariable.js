document.getElementById("button1").addEventListener("click",sumNumber,true);

function sumNumber(){
    var num1 = parseInt(document.getElementById("input1").value);
    var num2 = parseInt(document.getElementById("input2").value);
    var sum = num1 + num2;
        
    document.getElementById("demo").innerHTML = "Total Is: " + sum;
    
}