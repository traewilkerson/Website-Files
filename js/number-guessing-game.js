// #1 Function Information
// Create a function named rungame to do what?
function runGame() {
    

    // Establishing the beginning state for the user
    let guessString = '';
    let guessNumber = 0;
    let correct = false;
    let numTries = 0;


    // Establishing a Range and choosing a number out of this range
    // (1st) - Random number between 0 - 0.9 x 100 = 0 - 99.99
    // (2nd) - Drop off the decimal 0 - 99 Whole numbers only
    // (3rd) - (0 - 99 + 1) = (1 - 100)
    const randomNumber = Math.random() * 100;
    const randomInteger = Math.floor(randomNumber);
    const target = randomInteger + 1;
    console.log(target)


    // Do means do this first and at least once. The users guess is what they enter into the prompt.
    // If the guess is not a valid value then they must start over
    // We want they guessnumber to by the guess string (which is their guess)
    // When they put in their guess their number of tries goes up by one.
    // It will be correct if the guess number and the target go through the checkguess function and return true
    // While it is not correct then do it all again.
    // If you are correct then the alert will pop up.
    do {
        guessString = prompt('I am thinking of a number in the range 1 to 100.\n\nWhat is the number?');
        if (guessString === null) {
            return;
        }
        guessNumber = +guessString; 
        numTries += 1;
        // Jumps down to the check guess function to verify if it = correct or not. If it does not = correct then you
        // go to the while not correct and start back over. But if it is correct then it will jump to the alert.
        correct = checkGuess(guessNumber, target);
    } while (!correct);

    alert('You got it! The number was ' + target + '.\n\nIt took you ' + numTries + ' tries to guess correctly');
}


// #2 Function Information
// Create a function named checkguess to do what?
// The function will check the guess by using the guess and the target number.
// They're incorrect at this point or else they would've received the alert above.
function checkGuess(guessNumber, target) {
    let correct = false;

    if (isNaN(guessNumber)) {
        alert('You have not entered a number.\n\nPlease enter a number in the 1-100 range');
    } else if ((guessNumber < 1) || (guessNumber > 100)) {
        alert('Please enter an integer in the 1-100 range.');
    } else if (guessNumber > target) {
        alert('Your number is too large!');
    } else if (guessNumber < target) {
        alert('Your number is too small');
    } else {
        correct = true;
    }
    return correct;
}
// Step One: It is your title.
// Step Two: Create the start condition (starting state or original state)
// Step Three: Setting up the computers terms.
// Step Four: Game Play


// Who did it? Code007