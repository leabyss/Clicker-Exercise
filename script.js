// Definition of variables
var score = 0;
var clickerButton = document.getElementById("clicker");
var display = document.getElementById("display");
var multiplier = document.getElementById("multiply").setAttribute("multiply", 1);

/* Clicker function *
 * Increase user's score by 1. */
function increaseScore(element) {
    score = score + 1;
    document.getElementById("display").innerHTML = score;
}

/* Multiply function *
 * Increase multiplier. */
function increaseMultiplier() {
    /* When "multiply" is clicked *
     * score increases according to the multiplier *
     * example : multiplier x2 = 2 / x3 = 6 / x4 = 18 *
     * it's not what i'm supposed to do *
     * but i don't really get it, cause I suck at mathematics */
}