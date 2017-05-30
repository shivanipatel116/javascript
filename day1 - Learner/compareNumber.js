document.getElementById("button1").addEventListener("click",compareNumber,true);

function compareNumber(){
    var num1 = parseInt(document.getElementById("input1").value);
    var num2 = parseInt(document.getElementById("input2").value);
    if(num1 == num2){
        document.getElementById("demo").innerHTML = "Both Number Are Same";
    }
    else{
        document.getElementById("demo").innerHTML = "Both Number Are Different";
    }  
    
}