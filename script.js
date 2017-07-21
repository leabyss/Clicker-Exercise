/* * * * * * * VIRER LES TRUCS QUI SERVENT A RIEN APRES + RANGER * * * * * * */

// Definition of variables
var score = 0;
var clickerButton = document.getElementById("clicker");
var display = document.getElementById("display");
/* var multiplier = document.getElementById("multiplier").setAttribute("multiplier", 1); */
var multiplier = 1;
var displayTwo = document.getElementById("display2");

/* Clicker function *
 * Increase user's score by 1. */
function increaseScore() {
    score = score + 1;
    document.getElementById("display").innerHTML = score;
}

/* Multiply function *
 * Increase multiplier. */
function increaseMultiplier() {
    multiplier = multiplier + 1;
    document.getElementById("display2").innerHTML = multiplier;
    score = multiplier;
    /* When "multiply" is clicked *
     * score increases according to the multiplier *
     * example : x2 = 2 / x12 = 12 etc... */
}