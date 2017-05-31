function dispalyDayTime(){
    
    var date = new Date();
    var day = date.getDay();
    var month = date.getMonth() + 1;
    var date1 = date.getDate() + "/" + month + "/" + date.getFullYear();
    var time = date.getHours() + ":" + date.getMinutes();
        
    switch(day){
            
        case 0:
            day = "Sunday";
            break;
        
        case 1:
            day = "Monday";
            break;
        
        case 2:
            day = "Tuesday";
            break;
            
        case 3:
            day = "Wednesday";
            break;
            
        case 4:
            day = "Thursday";
            break;
            
        case 5:
            day = "Friday";
            break;
            
        case 6:
            day = "Saturday";
            break;
            
        default:
            day = "unknown day"
            break;
    }
    
    document.getElementById("demo").innerHTML = "Today Is " + day + "<br>" + "Today's Date Is " + date1 +  "<br>" + " Current Time Is " + time;
    
}

dispalyDayTime();