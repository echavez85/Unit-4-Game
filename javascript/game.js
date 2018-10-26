// Make variables global to the runtime of the application and initialize the game.
$(document).ready(function() {

    var wins = 0;
    var losses = 0;
    var randomNumber = "";
    var counter = 0;
    var dorothy = "";
    var rose = "";
    var sophia = "";
    var blanche = "";

// Upon game initialization, random number between 19 and 120 should be assigned to #randomNumber div. Random number between 1 and 12 should be assigned to each of the Golden Girls images.
    function generateRandomNumbers () {
        randomNumber = Math.floor(Math.random() * 102) + 19;
        dorothy = Math.floor(Math.random() * 12) + 1;
        rose = Math.floor(Math.random() * 12) + 1;
        sophia = Math.floor(Math.random() * 12) + 1;
        blanch = Math.floor(Math.random() * 12) + 1;


    })


// Add up the amount that the Golden Girls add up to and calculate in #goldenGirlsScore div. Compare to randomNumber. If sum is equal to random numbers, increase wins and restart. If sum is greater, increase losses and restart. 