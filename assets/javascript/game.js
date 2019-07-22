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
$(document).ready(function(){
 /*
  ========================================
  GLOBAL VARIABLES 
  ========================================
*/
var magicNumber = 0; //target number
var wins = 0;
var losses = 0;

var counter = 0;
 
magicNumber = Math.floor(Math.random()* 120) + 19; // calculates random magic number 
$('#number-to-guess').text(magicNumber); //enters magic number in html 
console.log(magicNumber);


  var randCrystalNumber = [];
  var totalCrystals = 4;

// Iterate however many times
for (var i = 0; i < totalCrystals; i++) {
  // Keep creating random numbers until the number is unique
  do {
    var numberOptions = Math.floor(Math.random() * 12) + 1;
  } while (existingNumber());

  $('#userTotal').attr("data-crystalvalue", randCrystalNumber[i]);
  // Add the question to the tracker
  randCrystalNumber.push(numberOptions);
  console.log(randCrystalNumber)
}

// If the current random number already exists in the tracker, return true
function existingNumber() {
  for (var i = 0; i < randCrystalNumber.length; i++) {
    if (randCrystalNumber[i] === numberOptions) {
      return true;
    }
  }
  return false;
}
console.log(randCrystalNumber);



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


 /*
  ========================================
  RESET GAME
  ========================================
*/
 
 /*
  ========================================
  CHECK SCORES 
  ========================================
*/ 
// function checkScore() { 
//     if (score < magicNumber){
//     for 

//     } else if (score === magicNumber) {
//           gameOver = True; 
//           wins++
//           //inner html
//       } else {
//       gameOver = True; 
//       losses++
//        //inner html
//       }
//     }
}); 