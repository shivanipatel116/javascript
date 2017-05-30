document.getElementById("button1").addEventListener("click",showData,true);

function showData(){
    var textName = document.getElementById("input1").value;
    
    document.getElementById("demo").innerHTML = "Hello " + textName;
}