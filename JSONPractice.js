//this is my practice file for JSON

 var car = {
        "model" : "Audi",
        "price" : 25000,
        "engine" : "Petrol" /*Should not have a comma as last element*/

    }

    console.log(car.model);    
    
    var f1drivers = ["lewis","kimi","alonso"];
    
    console.log(f1drivers[1]);
    
    var F1 = {
        "data": [
            {
                "car": "Mercedes",
                "driver": "Lewis",
                "wins": 2
            },
            {
                "circuit": "Monaco",
                "pointsystem": [
                    {
                        "first": 25,
                        "secondplace": 18,
                        "thirdplace": 15
                    }
                ],
                "teams": 11
            }
        ]
    }
    
    console.log(F1.data[1].pointsystem[0].thirdplace); 
    
    console.log(F1.data[1].teams);
    console.log(F1.data[1].teams);