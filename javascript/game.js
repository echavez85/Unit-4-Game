
// Global variables

// Game Counters
var winNumber = 0;
var lossNumber = 0;

// Computer selected number
var randomNumber = "";

// Calculation of Girls chosen
var cumulativeGirls = 0;

// Variable for the images
var images = ["./assets/images/blanche.jpeg", "./assets/images/dorothy.jpeg", "./assets/images/rose.jpeg", "./assets/images/SVGPathSegLinetoHorizontalAbs.jpeg"]


funtion randomTargetNumber () {
    randomNumber = Math.floor(Math.random() * 102) +19;
}

function resetGirls () {
    for(var i = 0; i < images.length; i++) {
        var girl = $("<img>");
        girl.addClass("girl");
        girl.attr("src", images[i]);
        girl.attr("value", (Math.floor(Math.random() *12) + 1));
        girl.attr("height", "100");
        $("#goldenGirlsImages").append(girl);
    }
}

function resetHTML () {
    $("#randomNumber").html(randomNumber);
    $("#gameScore").html("<p>Wins: " + winNumber + "</p>" + "<p>Losses: " + lossNumber + "</p>");
    $("goldenGirlsScore").html(cumulativeGirls);
    $("#goldenGirlsImages").empty();
}

function totalReset () {
    randomTargetNumber ();
    cumulativeGirls = 0;
    resetHTML ();
    resetGirls ();
}

randomNumber ();
resetHTML ();
resetGirls ();

function girlClick () {
    cumulativeGirls += parseInt($(this).attr("value"));
    $("#goldenGirlsScore").html(cumulativeGirls);
    if (cumulativeGirls == randomNumber) {
        winNumber++;
        totalReset();
    }
    else if (cumulativeGirls > randomNumber) {
        lossNumber++;
        totalReset();
    };
};