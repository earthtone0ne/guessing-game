$(document).ready(function() {

   var winningNumber = generateWinningNumber();
   var guessHistory = [];
   var playersGuess; 
   
   function generateWinningNumber() {
    	return Math.floor(Math.random() * 100) + 1;
  	};

  

    // Fetch the Players Guess

  function playersGuessSubmission() {
    playersGuess = $("#guessInput").val();
  
    $("#yourGuess").text("Your guess was " + playersGuess + ".");
    
  	$("#guessInput").val("").focus();
    if (checkGuess()==false){
        $("#compare").text(lowerOrHigher());
        if (guessHistory.indexOf(playersGuess)!== -1){
  		$("#yourGuess").append(" You've tried that before!"); 		  
  		}
  	}
  	guessHistory.push(playersGuess);
  	
};

  // Determine if the next guess should be a lower or higher number.

  function lowerOrHigher() {	
    if(winningNumber > playersGuess) {
    	return "Feels a bit chilly, no?";
    } else if (playersGuess > 100) {
    	return "BURNING WITH THE HEAT OF A THOUSAND SUNS!!  Try a number between 1 and 100.";
	} else if (winningNumber < playersGuess) {
      	return "It's hot in here..";
    }
    	else {return "Between 1 and 100, please."}
  }

  // Check if the Player's Guess is the winning number 

  function checkGuess() {
    if (winningNumber==playersGuess){
      	$("#compare").text("WINNER!");
      	$("#compare").animate({opacity: '0.7'},900);
      	$("#compare").animate({opacity: '1'},800);
        $("#compare").addClass("winner");
        return true;
		}  else {return false;}
	}

  // Create a provide hint button that provides additional clues to the "Player"

  function provideHint() {
    var diff = Math.abs(playersGuess - winningNumber);
    if (diff > 50) {
      return (" Like whoa. Maybe try a different end of the spectrum.")
    } else if (diff > 25) {
      return ("  You're a fair ways off.")
    } else if (diff > 9) {
      return ("  Getting there!")
    } else {
      return (" So close!")
    }
  }


  // Allow the "Player" to Play Again

  function playAgain() {
    $("#results p").text("");
    winningNumber=generateWinningNumber();
    $("#guessInput").val('');
    $(".winner").removeClass();
    guessHistory=[];
  }

  /* **** Event Listeners/Handlers ****  */
  $("#guess-btn").click(function() {
  	playersGuessSubmission()
  });

  $("#guessInput").on('keyup',function(event){
  	if (event.keyCode == 13) {
  		playersGuessSubmission();
  	}
   });
    

  $("#hint-btn").click(function() {
    $("#compare").append(provideHint());
  });
  
  $("#new-game-btn").click(function(){playAgain(); });

});

