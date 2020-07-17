function validateBet() {
    var bet = document.forms["lucky-sevens"]["starting-bet"].value;
    if (bet == "" || isNaN(bet) || bet <= 1) {
        document.forms["lucky-sevens"]["starting-bet"].className = "form-control is-invalid";
        document.forms["lucky-sevens"]["starting-bet"].focus();
        return false;
    }
    document.forms["lucky-sevens"]["starting-bet"].className = "form-control";
    return true;
}

function rollTwoDie(){
    var sum = 0;
    for (var i = 0; i < 2; i++) {
        sum += Math.floor(Math.random() * 6) + 1
    }     
    return sum;
}

function placeBet() {
    if (validateBet()) {
        var startingBet = document.forms["lucky-sevens"]["starting-bet"].value;
        var balance = startingBet;
        var totalRolls = 0;
        var maxWon = balance;
        var totalRollsAtMax = 0; 
        while (balance > 0) {
            if (rollTwoDie() == 7) {
                balance += 4;
            } else {
                balance -= 1;
            }
            totalRolls += 1;
            if (balance > maxWon) {
                maxWon = balance
                totalRollsAtMax = totalRolls;
            }
        }
        document.getElementById("results").style.display = "block";
        document.getElementById("starting-bet-display").innerText = startingBet;
        document.getElementById("total-rolls-display").innerText = totalRolls;
        document.getElementById("highest-amount-won-display").innerText = maxWon;
        document.getElementById("roll-count-at-highest-display").innerText = totalRollsAtMax;
    }
    return false;
}