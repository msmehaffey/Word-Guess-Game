var randomWords = ["squibbs", "squibbles", "brad", "bradley", "leroy", "elroy", "muffin", "cutieguy", "scooter", "winslow", "pumpkin", "biscuit", "bradford"];
var blankWord = [];


 function findRandom() {
    document.getElementById("headliner").innerHTML = "Start Guessing!"
     var i = Math.floor(Math.random() * randomWords.length);
     var wordSelect = randomWords[i];
     var randArr = wordSelect.split("");
     var guessRemaining = 15;

        for (var d = 0; d < wordSelect.length; d++){
        blankWord.push("_");
        document.getElementById("challenge").innerHTML = blankWord.join(" ");

            document.body.onkeypress = function(event) {
                var guess = String.fromCharCode(event.keyCode)
                document.getElementById("theGuess").innerHTML += guess;
                guessRemaining--;
                document.getElementById("guessLeft").innerHTML = guessRemaining;
                    for (var j = 0; j < wordSelect.length; j++) {

                        if (randArr[j] === guess) {
                            blankWord[j] = guess;
                            console.log(blankWord.indexOf("_"));
                        }
                    }
                    if (guessRemaining === 0) {
                        document.location.reload(false);
                        alert("You ran out of guesses! The name was: " + wordSelect);
                    }
                    if (blankWord.indexOf("_") === -1) {
                            document.location.reload(false);
                            alert("You won! The name was: " + wordSelect + "!");
                    }
                document.getElementById("challenge").innerHTML = blankWord.join(" ");
            }

        } 
  
    }

