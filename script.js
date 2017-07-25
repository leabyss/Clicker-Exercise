/* * * * * * * VIRER LES TRUCS QUI SERVENT A RIEN APRES + RANGER * * * * * * */

// Declaration of variables
var score = 0;
var clickerButton = document.getElementById("clicker");
var display = document.getElementById("display");
/* var multiplier = document.getElementById("multiplier").setAttribute("multiplier", 1); */
var multiplier = 1;
var displayTwo = document.getElementById("display2");
var cost = 50;
var autoClickCost = 500;
var flowerPowerCost = 200;

/* Disable buttons function *
 * Disable buttons if score is not big enough. *
 * Doesn't work, sorry. */
function disableButtons() {
    if (score >= cost) {
        document.getElementById("multiplier").disabled = false;
    }
    else {
        document.getElementById("multiplier").disabled = true;
    }
}

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
        document.getElementById("display2").innerHTML = ': '+multiplier;
        score = score - cost;
        document.getElementById("display").innerHTML = score;
        cost = cost * 2;
        document.getElementById("cost").innerHTML = 'You need '+cost+' leaves to increase your collecting skills !';
    }
    else {
        alert("Sorry dude, you didn't score enough to own this.");
        // CHANGE ALERT METHOD LATER
    }
}

/* Auto clicker function *
 * When activated, a click occurs every second. */
function autoClick() {
    if (score >= autoClickCost) {
        score = score - autoClickCost;
        document.getElementById("display").innerHTML = score;
        window.setInterval(function() {
            increaseScore();
        }, 1000);
        document.getElementById("auto_clicker").disabled = true;
        document.getElementById("auto_clicker").innerHTML = 'Unlocked';
        document.getElementById("autoClickCost").innerHTML = 'You can now auto-collect leaves.';
    }
    else {
        alert("Sorry dude, you didn't score enough to own this.");
        // CHANGE ALERT METHOD LATER
    }
}

/* Flower Power function *
 * It's a bonus, when activated, click increase by 200% for 30 seconds */
function flowerPower() {
    var timer = 8;
    if (score >= flowerPowerCost) {
        score = score - flowerPowerCost;
        document.getElementById("display").innerHTML = score;
        var intervalBonus = setInterval(function() {
            score = score * 2;
            timer = timer-1;
            document.getElementById("flowerPower").innerHTML = timer+' sec';
            document.getElementById("flowerPower").disabled = true;
            if (timer === 0) {
                document.getElementById("flowerPower").innerHTML = 'Flower Power';
                document.getElementById("flowerPower").disabled = false;
                clearInterval(intervalBonus);
            }
        }, 1000);
    }
    else {
        alert("Sorry dude, you didn't score enough to own this.");
        // CHANGE ALERT METHOD LATER
    }
}
