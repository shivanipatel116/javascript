var j = 0;

function forloop(){
    for(var i=1 ; i<=50 ; i++)
    {
        j = j + i + "<br>";
    }
    
    document.getElementById("result").innerHTML = j;
}