'use strict';

// Ask for the user name
var userName = prompt('Hi, whats your name?');
// Greet the user by name in an alert
alert('Hi, ' + userName + ' thanks for stopping by!');
// Log that interaction to the console
console.log('The user said their name is ' + userName);
// Ask the first guessing game question
var answer1 = prompt('Do you think I have any siblings?').toLowerCase();

// User guesses "yes/no" or "Y/N" 
// if (condition is true ) {
//     do this stuff
// } else {
//     do this stuff
// }

if (answer1 === 'yes' || answer1 === 'y' || answer1 === 'ya') {
    // right answer
    alert('You got it right!!!');
    console.log('The user got the correct answer to #1 (yes)');
} else {
    // wrong answer
    alert('Sorry, thats wrong though.');
    console.log('The user got the wrong answer to #1 (no)');
}





// Tell user if they are wrong or right

// Next question

