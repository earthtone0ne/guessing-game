$(document).ready(function() {

   var winningNumber = generateWinningNumber();
   var playersGuess; 
   
   function generateWinningNumber() {
    	return Math.floor(Math.random() * 100) + 1;
  	};

  

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
  // Fetch the Players Guess

  function playersGuessSubmission() {
    playersGuess = $("#guessInput").val();
    
    $("#yourGuess").text("Your guess was " + playersGuess + ".");
    if (winningNumber==playersGuess){
      $("#compare").text("WINNER!");
      $("#compare").addClass("winner");
    }
    
    else 
      {$("#compare").text(lowerOrHigher());}
};

  // Determine if the next guess should be a lower or higher number

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
    // add code here
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
  }

  /* **** Event Listeners/Handlers ****  */
});