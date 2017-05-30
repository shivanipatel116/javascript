document.getElementById("button1").addEventListener("click",conditionCheck,true);

function conditionCheck(){
    var num1 = parseInt(document.getElementById("input1").value);
    var num2 = parseInt(document.getElementById("input2").value);
    
    if(num1>10)
    {
        if(num2 > 10)
        {
            document.getElementById("demo").innerHTML = "Both Numbers Are Greater Than 10";
        }
        else
        {
            document.getElementById("demo").innerHTML = num1 + " Is Greater Than 10";
        }
    }
    
    else if(num2>10)
    {
        document.getElementById("demo").innerHTML = num2 + " Is Greater Than 10";
    }
    
    else
    {
        document.getElementById("demo").innerHTML = "Both Numbers Are Less Than 10";
    }
   
    
}