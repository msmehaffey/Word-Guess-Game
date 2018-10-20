var randomWords = ["squibbs", "squibbles", "brad", "bradley", "leroy", "elroy", "muffin", "cutieguy", "scooter", "winslow", "pumpkin"];
var blankWord = [];


 document.body.onkeypress = function findRandom() {

    document.getElementById("headliner").innerHTML = "Start Guessing!"


     var i = Math.floor(Math.random() * randomWords.length);
     var wordSelect = randomWords[i];
     var randArr = wordSelect.split("");
     var remainingLetters = wordSelect.length;
     var guessRemaining = 10;

     for (var d = 0; d < wordSelect.length; d++){
     blankWord.push("_");
     document.getElementById("challenge").innerHTML = blankWord.join(" ");

        document.body.onkeypress = function(event) {
            var guess = String.fromCharCode(event.keyCode)
            document.getElementById("theGuess").innerHTML += guess;
            guessRemaining--;
            document.getElementById("guessLeft").innerHTML = guessRemaining;
            if (guessRemaining === 0) {
                document.location.reload(false);
                alert("You ran out of guesses! The name was: " + wordSelect);
            }

            for (var j = 0; j < wordSelect.length; j++) {
                if (randArr[j] === guess) {
                blankWord[j] = guess;
                remainingLetters--;
                }
                if (remainingLetters === 0) {
                    document.location.reload(false);
                    alert("You won! The name was: " + wordSelect + "!");
                }
            }
                document.getElementById("challenge").innerHTML = blankWord.join(" ");
                }
        } 
  
    }

