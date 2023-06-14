Describe: rollDie()

test: it will return a random number 1-6
code: let die = new Die()
      console.log(die.rollDie())
expected result: any number 1-6      

everything starts hidden, when user clicks play, the game will initialize

Objects: h1, p describing game, form with two inputs for player names, play button, dice, roll button, hold button, object to hold value until hold is clicked, scoreboard, reset button, p victory message

Key-value pairs: 
dice: 0:1, 1:2, 2:3, 3:4, 4:5, 5:6
value holder: 0:total

functions: 
1: gameStart: play button, starts game & populates scoreboard with player names
2: rollDice: gives a random number 1-6 from the properties of the dice object
3: runTotal: when roll button is clicked, rolls dice and adds score to a running total
4: turnTotal: when hold button is clicked, adds running total to scoreboard 
5: endTurn: when hold button is clicked switches active player
6: gameEnd: when either player's score reaches 100 or more ends the game and displays a victory message
7: playAgain: when reset button is clicked, sets game back to start

information gathered from form input at start of game and displayed through scoreboad via a div with nested p tags 
information gathered during game through button clicks and displayed through scoreboard  