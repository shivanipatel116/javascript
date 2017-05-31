var guessCount = 1;
var randomNum = getRandomNum();

document.getElementById("guess").addEventListener("click",guessNumber,false);

function guessNumber(){
    
    var num = parseInt(document.getElementById("number").value);
    
    if(num !== randomNum)
    {
        guessCount += 1;
        
        if(num < randomNum)
        {
            document.getElementById("result").innerHTML = "guess is too small";
            
        }

        else if(num > randomNum)
        {
            document.getElementById("result").innerHTML = "guess is too large";
            
        }
    }

    else 
    {
        document.getElementById("result").innerHTML = "Well done – correct guess!";
        document.getElementById("result1").innerHTML = "correct number is: " + randomNum;
        document.getElementById("result2").innerHTML = "Number of guesses: " + guessCount;
    }

    
}

function getRandomNum(){
    
    var rand = Math.floor(Math.random() * 10);
    return rand;
}