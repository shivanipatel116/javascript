/*//This is my javascript file for the AJAX exercise

var myManufacturer = document.getElementById("manufacturer");

myManufacturer.addEventListener("change", loadMyData, false);

function loadMyData(){
    
    var myRequest = new XMLHttpRequest();
    
    myRequest.open("GET", "https://raw.githubusercontent.com/shivanipatel116/javascript/master/JSONandAJAXLearner/expensiveLuxuryCars.json", true); //by default it true because true means asynchronous
    
    myRequest.onload = function(){
        if(myRequest.readyState == 4 && myRequest.status == 200)
        {
            var myData = JSON.parse(myRequest.responseText);
            
            console.log(myData);
        }
    }
    
    myRequest.send();
    
    //console.log(myRequest);
    
       
}*/



/*This is my JS for the Car Luxury Practice*/


var mySurvey = document.getElementById("survey");

mySurvey.addEventListener("change", loadMyData, false);

var myManufacturer = document.getElementById("manufacturer");

myManufacturer.addEventListener("change", loadMyData, false);



function loadMyData () {

    var manufacturerStored = myManufacturer.options[myManufacturer.selectedIndex].value;
    
    
    /*console.log(surveyStored);*/
    console.log(manufacturerStored);

    
    var myRequest = new XMLHttpRequest();
    
    myRequest.open("GET", "https://raw.githubusercontent.com/shivanipatel116/javascript/master/JSONandAJAXLearner/expensiveLuxuryCars.json", true);
    
    myRequest.onload = function() {
        
        if (myRequest.readyState == 4 && myRequest.status == 200) {
            
            var myData = JSON.parse(myRequest.responseText);
            
            if (manufacturerStored === "") {
                
                function clearAll()
                    {
                        var hideText = document.getElementsByClassName("data");
                        for(var i = 0; i < hideText.length; i++)
                        {
                            hideText[i].innerHTML = "";
                            /*console.log(hideText);*/
                        }
                    }
                
                clearAll();
                
                document.getElementById("messageAlert").innerHTML = "Please you must choose a car manufacturer to load data..."; 
                
            } else {

              document.getElementById("manufacturerC").innerHTML = myData.data[manufacturerStored].manufacturer;
                
                document.getElementById("modelC").innerHTML = myData.data[manufacturerStored].model;
                
                document.getElementById("priceC").innerHTML = "£ "  + myData.data[manufacturerStored].price;
                
                document.getElementById("descriptionC").innerHTML = '<button data-toggle="modal" data-target="#modal1">Full description click here</button>';
                
                document.getElementById("fullD").innerHTML = myData.data[manufacturerStored].description;
                
                document.getElementById("fullL").innerHTML = '<a href='+myData.data[manufacturerStored].wiki+' target="_blank">Click here to access Wikipedia for more information.</a>';
                
                document.getElementById("videoC").innerHTML = '<iframe width="auto" height="auto" src="'+myData.data[manufacturerStored].video+'" frameborder="0" allowfullscreen></iframe>';
                

                document.getElementById("overallC").innerHTML = myData.data[manufacturerStored].quality[0].rating;
                
                document.getElementById("mechanicalC").innerHTML = myData.data[manufacturerStored].quality[1].rating;
                
                document.getElementById("powertrainC").innerHTML = myData.data[manufacturerStored].quality[2].rating;
                
                document.getElementById("bodyC").innerHTML = myData.data[manufacturerStored].quality[3].rating;
                
                document.getElementById("interiorC").innerHTML = myData.data[manufacturerStored].quality[4].rating;
                
                document.getElementById("accessoriesC").innerHTML = myData.data[manufacturerStored].quality[5].rating;
                
                
                document.getElementById("imgC").innerHTML = '<img src="'+myData.data[manufacturerStored].img+'" width="auto" height="auto" alt="Car Image">';
                
 
                document.getElementById("messageAlert").innerHTML = "";
                
                
                 //var surveyStored = mySurvey.options[mySurvey.selectedIndex].value;
                 var cT = document.getElementById("survey").value;
 
             /*This is the code for the Canvas JS chart */  
                
             

                /*window.onload = function () {*/
	           var chart = new CanvasJS.Chart("chartContainer", {
		          theme: "theme1",//theme1
                   backgroundColor: "transparent",
		         /* title:{
			         text: "Customer Survey"              
		          },*/
                   dataPointMaxWidth: 20,
                   axisX:{
                    labelFontColor: "white",
                    gridColor: "white",
                    lineColor: "white"
                    },
                   axisY:{
                    labelFontColor: "white",
                    gridColor: "white",
                    gridThickness: 1,
                    lineColor: "white"
                    },
		           animationEnabled: true,   // change to true
		          data: [              
		          {
			// Change type to "bar", "area", "spline", "pie",etc.
                 indexLabelFontColor: "white",
			     type: cT,
			     dataPoints: [
				{ label: "Body", y: myData.data[manufacturerStored].quality[3].rating },
                { label: "Accessories", y: myData.data[manufacturerStored].quality[5].rating },
				{ label: "Interior", y: myData.data[manufacturerStored].quality[4].rating },
				{ label: "Powertrain", y: myData.data[manufacturerStored].quality[2].rating },
                { label: "Mechanical",  y: myData.data[manufacturerStored].quality[1].rating },
				{ label: "Overall", y: myData.data[manufacturerStored].quality[0].rating }
			     ]
		          }
		          ]
	           });
	           chart.render();
                

            document.getElementById("messageAlert").innerHTML = " ";

                
                
                
                
            }
            
        } else {
            
            document.getElementById("messageAlert").innerHTML = "We successfully connected to the server but it returned an ERROR!";
        }
            
            
            /*console.log(myData.data[0].model);*/
            
            //all the action happens here!!!!
            
        
    };
    
    myRequest.onerror = function() {
        
        document.getElementById("messageAlert").innerHTML = "You are not connected online and can't reach the server!";
    }
    
    myRequest.send();
    
  }  





















