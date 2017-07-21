/* * * * * * * VIRER LES TRUCS QUI SERVENT A RIEN APRES + RANGER * * * * * * */

// Definition of variables
var score = 0;
var clickerButton = document.getElementById("clicker");
var display = document.getElementById("display");
/* var multiplier = document.getElementById("multiplier").setAttribute("multiplier", 1); */
var multiplier = 1;
var displayTwo = document.getElementById("display2");
var cost = 50;

/* Clicker function *
 * Increase user's score by clicking. */
function increaseScore() {
    score = score + multiplier;
    document.getElementById("display").innerHTML = score;
}

/* Multiply function *
 * Increase multiplier if score is big enough. */
function increaseMultiplier() {
    if (score >= cost) {
        multiplier = multiplier + 1;
        document.getElementById("display2").innerHTML = 'x '+multiplier;
        score = score - cost;
        document.getElementById("display").innerHTML = score;
        cost = cost * 2;
        document.getElementById("cost").innerHTML = 'Need '+cost+' to increase click.';
    }
    else {
        alert("Sorry dude, you didn't score enough to own this.");
        // CHANGE ALERT METHOD LATER
    }
}