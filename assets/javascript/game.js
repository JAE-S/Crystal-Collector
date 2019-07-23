 /*
  ========================================
  Crystal Game
  ========================================
*/

 /*
  ========================================
  INSTRUCTIONS
  ========================================
*/
// The player will have to guess the answer with numbers. 
// Here's how the app works:
// Four crystals displayed as buttons 
// The player will be shown a random number at the start of the game.
// When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
// Your game will hide this amount until the player clicks a crystal.
// When they do click one, update the player's score counter.
// The player wins if their total score matches the random number from the beginning of the game.
// The player loses if their score goes above the random number.

// The game restarts whenever the player wins or loses.


// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.


// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.


/*
========================================
GLOBAL VARIABLES 
========================================
*/

var magicNumber = 0; //target number
var wins = 0;
var losses = 0;
var gameOver = false;
var counter = 0;

$(document).ready(function(){
/*
========================================
START GAME - FROM INTRO PAGE 
========================================
*/
  $("#activeGame").hide();

  $("#playButton").on('click', function() { // Hides instructions section when the play button is clicked 
        $("#instructions").hide();
        $('#restart').hide();
        $("#activeGame").show();
        generateRandom();
  });

  /*
  ========================================
  RESET GAME
  ========================================
  */
  $("#restart").on('click', function() { // Hides instructions section when the play button is clicked 
    $('#restart').hide();
    counter = 0;
    $('#userTotal').text(counter);
    magicNumber = 0;
    $('#number-to-guess').text(magicNumber);
    generateRandom();
  });

  /*
  ========================================
  Generates Random Number
  ========================================
  */
  function generateRandom(){

    gameOver = false;
    magicNumber = Math.floor(Math.random()* 120) + 19; // calculates random magic number 
      $('#number-to-guess').text(magicNumber); //enters magic number in html 
      console.log(magicNumber);
      
    $('#wins').text('WINS: ' + wins);
    $('#losses').text('LOSSES: ' + losses);
    var randCrystalNumber = [];
    var totalCrystals = 4;

    // Iterate however many times
    for (var i = 0; i < totalCrystals; i++) { // Iterate however many times
      do {                                   // Keep creating random numbers until the number is unique
        var numberOptions = Math.floor(Math.random() * 12) + 1;
      } while (existingNumber());
      $('#userTotal').attr("data-crystalvalue", randCrystalNumber[i]);
        randCrystalNumber.push(numberOptions);  // Add the question to the tracker
        console.log(randCrystalNumber)
    }

    function existingNumber() {    // If the current random number already exists in the tracker, return true
      for (var i = 0; i < randCrystalNumber.length; i++) {
        if (randCrystalNumber[i] === numberOptions) {
          return true;
        }
      }
        return false;
    }
    console.log(randCrystalNumber.length);
    for (var i = 0; i < randCrystalNumber.length; i++) { // Loop that creates 4 images for each random number 
      $("#crystal_1").attr("data-crystalvalue", randCrystalNumber[0]);  // Each itteration will have its own image crystal 
      $("#crystal_2").attr("data-crystalvalue", randCrystalNumber[1]);
      $("#crystal_3").attr("data-crystalvalue", randCrystalNumber[2]);
      $("#crystal_4").attr("data-crystalvalue", randCrystalNumber[3]);
    }
    
    $(".crystal").on("click", function() {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;
    $('#userTotal').html('<p>' + counter + '</p>');
  
    /*
    ========================================
    CHECK SCORES 
    ========================================
    */  
    // records losses
    if (counter === magicNumber) {
      //  alert("You win!");
      wins++;
      $('#wins').text('WINS: ' + wins);
      $('#restart').show();
      gameOver = true;
    }
    // records wins
    else if (counter >= magicNumber) {
      losses++;
      $('#losses').text('LOSSES: ' + losses);
      $('#restart').show();
      gameOver = true;
    }

  });
  }
    

  // }

  /*
    ========================================
    MEDIA
    ========================================
  */

  /*
    ========================================
    START GAME - FROM INTRO PAGE 
    ========================================
  */
  //     $("#playButton").click(function(){  // Hides instructions section when the play button is clicked 
  //         $("#instructions").hide();
  //     });



}); 