//Business Logic
let player1 = "";
let player2 = "";

const Die = function (sides) {
    this.sides = sides || 6;
}

Die.prototype.rollDie = function () {
    return Math.floor((Math.random() * this.sides) + 1);
};

function Player(turn) {
    this.roll = 0;
    this.tempscore = 0;
    this.totalscore = 0;
    this.turn = turn;
    this.playerName;
}
//check for a roll of 1 
Player.prototype.rollone = function () {
    if (this.roll === 1) {
        this.tempscore = 0;
        alert("Sorry " + this.playerName + ", you rolled a 1! Your turn is over")
    } else {
        this.tempscore += this.roll;
    }
}
// hold 
Player.prototype.hold = function () {
    this.totalscore += this.tempscore;
    this.tempscore = 0;
    alert("your turn is over")
}

Player.prototype.winnerCheck = function () {
    if (this.totalscore >= 100) {
        alert(this.playerName + " You are the winner!")
    }
}

Player.prototype.newGame = function () {
    this.roll = 0;
    this.tempscore = 0;
    this.totalscore = 0;
    this.playerName = "";
}
/*
function Dice() {
    this.one = 1,
    this.two = 2,
    this.three = 3,
    this.four = 4,
    this.five = 5,
    this.six = 6
}

Dice.prototype.rollDice = function () {
    let keys = Object.keys(this);
    return this[keys[keys.length * Math.random() << 0]];
};
*/

//User Interface Logic