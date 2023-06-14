//Business Logic
const Die = function(sides) {
    this.sides = sides || 6;
}

Die.prototype.rollDie = function() {
    return Math.floor((Math.random()*this.sides)+1);
};


const init = function() {
    score = [0,0]
    currentScore = 0 
    activePlayer = 0
    playing = true 

    score0El.textContent = 0
    score1El.textContent = 0 
    current0El.textContent = 0 
    current1El.textConent = 0 

    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner')
    player1El.classList.remove('player--winner')
    player0El.classList.add('player--active')
    player1El.classList.remove('player--active')
};
init();
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