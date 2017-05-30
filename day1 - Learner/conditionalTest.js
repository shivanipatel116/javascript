document.getElementById("button1").addEventListener("click",conditionCheck,true);

function conditionCheck(){
    var num = parseInt(document.getElementById("input1").value);
    
    if(num<0)
    {
        document.getElementById("demo").innerHTML = "Number Is Negative";
    }
    
    else if(num >0 && num<10)
    {
        document.getElementById("demo").innerHTML = "Number Is Less Than 10";
    }
    
    else if(num >0 && num >10)
    {
        document.getElementById("demo").innerHTML = "Number Is Greater Than 10";
    }
    
    else
    {
        document.getElementById("demo").innerHTML = "Number Is 0";  
    }
    
}