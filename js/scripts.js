//Business Logic
const Dice = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6
}

throwdice = function () {
    return math.floor(6 * Math.random()) + 1
}

Dice.prototype.rollDice = function (obj) {
    let keys = Object.keys(obj);
    return obj[keys[keys.length * Math.random() << 0]];
};

//User Interface Logic