// Set variables to 0 at document loading
$(document).ready(function() {

    var wins = 0;
    var losses = 0;
    var targetNumber = "";
    var counter = 0;
    var dorothyNumber = "";
    var roseNumber = "";
    var blancheNumber = "";
    var sophiaNumber = "";
    

// Upon game initialization, random number between 19 and 120 should be assigned to #randomNumber div.
   function generateTargetNumber () {
        return Math.floor(Math.random() * 102) + 19;
   }
   
   var beginGame = function() {
       counter = 0;
       targetNumber = generateTargetNumber();
       dorothyNumber = generateGirlsNumbers();
       roseNumber = generateGirlsNumbers();
       blancheNumber = generateGirlsNumbers();
       sophiaNumber = generateGirlsNumbers();

       $("#randomNumber").text("Your Target Number is: " + targetNumber);
       $("#goldenGirlsScore").text(counter);

   };


//  Random number between 1 and 12 should be assigned to each of the Golden Girls images.  
   function generateGirlsNumbers () {
        return Math.floor(Math.random() * 11) + 1;
   }


//Functions for each of the Golden Girls to get a number assigned when clicked on using function above. Click event should also check to see if Golden Girls Score is equal to or greater than Target Number.
   $("#dorothy").on("click", function() {
       counter += dorothyNumber;
       $("#goldenGirlsScore").text(counter);
       console.log(counter);
       checkWin();

   });

   $("#rose").on("click", function() {
       counter += roseNumber;
       $("#goldenGirlsScore").text(counter);
       console.log(counter);
       checkWin();
   });

   $("#blanche").on("click", function() {
       counter += blancheNumber;
       $("#goldenGirlsScore").text(counter);
       console.log(counter);
       checkWin();
   });

   $("#sophia").on("click", function() {
       counter += sophiaNumber;
       $("#goldenGirlsScore").text(counter);
       console.log(counter);
       checkWin();
   });

    beginGame();
    
// Function called above where win/loss will be checked.

   function checkWin() {
       if (counter > targetNumber) {
           losses++;
        
        $("#losses").text("Losses: " + losses);
        beginGame();
       }

       else if (counter === targetNumber) {
           wins++;

        $("#wins").text("Wins: " + wins);
        beginGame();

        document.getElementById("goldenGirlsTheme").play();
        alert("Thank you for being a WINNER!");
       }
   }

});