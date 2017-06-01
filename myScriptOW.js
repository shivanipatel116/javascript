/*This is my javascript for open weathere exercise*/

var theButton = document.getElementById("myButton");

theButton.addEventListener("click",getWeather,false);

function getWeather(){
    
    var userCity = document.getElementById("theCity").value;
    
    var theAPICall = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + userCity +  "&units=metric&APPID=41dd626f3cfcb04c23bfb5a2d4254f0c&cnt=7";
    
    var myRequest = new XMLHttpRequest();
    
    myRequest.open("GET", theAPICall, true);
    
    myRequest.onload = function() {
        
        if (myRequest.readyState == 4 && myRequest.status == 200) {
            
            var myData = JSON.parse(myRequest.responseText);
            console.log(myData);
            
            var D0 = new Date(myData.list[0].dt*1000);
            var D1 = new Date(myData.list[1].dt*1000);
            var D2 = new Date(myData.list[2].dt*1000);
            var D3 = new Date(myData.list[3].dt*1000);
            var D4 = new Date(myData.list[4].dt*1000);
            var D5 = new Date(myData.list[5].dt*1000);
            
            var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday" , "Friday", "Saturday"];
            
            
            
            var weatherImage = "http://openweathermap.org/img/w/" + myData.list[0].weather[0].icon + ".png";
            
            document.getElementById("imageToday").src = weatherImage;
            
            document.getElementById("highToday").innerHTML = myData.list[0].temp.max + "<br><br>";
            
            document.getElementById("lowToday").innerHTML = myData.list[0].temp.min + "<br><br>";
            
            //day1
            document.getElementById("r1c1").innerHTML = days[D1.getDay()];
            
            //day2
            document.getElementById("r2c1").innerHTML = days[D2.getDay()];
            
            //day3
            document.getElementById("r3c1").innerHTML = days[D3.getDay()];
        }
    }
    
    myRequest.send();
            
}