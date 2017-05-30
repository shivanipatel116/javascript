document.getElementById("button1").addEventListener("click",numberUpAndDown,true);

function numberUpAndDown(){
    var num = parseInt(document.getElementById("input1").value);
    var num1 = num + 1;
    var num2 = num - 1;

    document.getElementById("output1").innerHTML = "Inreased Number: " + num1;
    document.getElementById("output2").innerHTML = "Decreased Number: " + num2;
    
}