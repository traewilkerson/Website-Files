// Declare the array of information first. It is global because it will be used in multiple functions.
const sportTypes = ['basketball', 'soccer', 'baseball', 'lacrosse', 'badminton', 'tennis', 'boxing']


// First function establishes the start conditions.
function playGame() {
    let guess = '';
    let correct = false;
    let numTries = 0;
    const targetIndex = Math.floor(Math.random() * sportTypes.length);
    const answer = sportTypes [targetIndex];
    console.log('The sport is ' + answer)

do {
    guess = prompt('Choose one of the following sports: \n\n' + sportTypes + '\n\nWhich sport is it?');
    if (guess === null) {
        return (alert('To be the best, you must beat the best. See you next time!'));
    }
    numTries += 1;
    correct = checkGuess(guess, answer);
} while (!correct)

alert('You have won the first round! Round 2 is coming soon.\n\nIt only took you ' + numTries + '.');
}


function checkGuess(guess, answer) {
    let correct = false;

    if (!sportTypes.includes(guess)) {
        alert('You did not guess what was on the list, so let us try reading next time.');
    } else if (guess > answer) {
        alert('You were so close, but a little too high.')
    } else if (guess < answer) {
        alert('You were so close, but a little too low.')
    } else {
        correct = true;
    }
    return correct;
}