var a =5;

function localVariable(){
    var b = 6;
    
    document.getElementById("globalvar").innerHTML = "Global Variable: " + a;
    
    document.getElementById("localvar").innerHTML = "Local Variable: " + b;
}

localVariable();