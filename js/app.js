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
function question1(){
    if (answer1 === 'yes' || answer1 === 'y' || answer1 === 'ya') {
    // right answer
    alert('You got it right!!!');
    console.log('The user got the correct answer to #1 (yes)');
    }   else {
    // wrong answer
    alert('Sorry, thats wrong though.');
    console.log('The user got the wrong answer to #1 (no)');
    }
} question1();

var answer2 = prompt('Did you know a woodchuck could Chuck Norris?').toLowerCase();
function question2(){
    if (answer2 === 'yes' || answer2 === 'yeah' || answer2 === 'ya') {
    alert('Well arent you a smart cookie...? Well done!');
    console.log('The user got the correct answer to #2');
    }   else { 
    alert('Oh...well...nevermind. Lets just move on okay?');
    console.log('The user got the wrong answer to #2');
    }
} question2();

var answer3 = prompt('Lets learn a little about my creator, Nicklas Di Pietro! Are you interested?').toLowerCase();
function question3(){
    if (answer3 === 'yes' || answer3 === 'yeah' || answer3 === 'sure' || answer3 === 'ya') {
    alert('Oh good I was really hoping you would be interested!');
    console.log('The user agreed to move forward with question #3');
    }   else {
    alert('Well I bet youre a lot of fun at parties arent you?');
    console.log('The user has declined to proceed with question #3. Sad :(');
    }
} question3();

var answer4 = prompt('Can you guess his favorite number? Its between 1 and 20')
function question4(){
    if (answer4 <= 10) {
        alert('Not quite. Try higher.');
        console.log('The user has gone too low on answer 4');
    }
     else if  (answer4 > 10 && answer4 < 16) {
        alert('Almost there, maybe just a bit up?');
        console.log('The user has guessed just a bit too low');
    }
     else if  (answer4 > 17 && answer4 <= 20) {
        alert('Well youre a little too high now. Why dont we pull it back a bit?');
        console.log('The user has gone a smidge too high.');
    }
     else if (answer4 === 17) {
        alert('Correct! It was his jersey number in highschool. Hes quite fond of it.');
        console.log('The user has correctly answered question 4');
    }
} question4();

var answer5 = prompt('Are you paying attention at all? This would be a lot of pointless rambling if not...').toLowerCase();
function question5(){
    if (answer5 === 'yes' || answer5 === 'yeah' || answer5 === 'sure' || answer5 === 'ya') {
    alert('Oh good');
    console.log('user has kept up with the process up to answer 5'); 
    }   else {
    prompt('Well do try to keep up. Ill forgive you this time but were on a time limit. The class is watching...creepy.');
    console.log('The user has failed miserably for question 5');
    } 
} question5();

// var answer6 = prompt('How many states have I lived in?');
// var stateArray = ['arizona', 'california', 'nevada', 'florida', 'oregon', 'washington']

// while 

//     for (i = 0; i < arrayLength; i++))




// var answer6;
// var counter = 0;
// var stateArray = ['arizona', 'california', 'nevada', 'florida', 'oregon', 'washington']

//     while (answer6 != stateArray && counter < 7 )
//         answer6 = prompt('Guess how many states Nicklas has visited?');
//         if (answer6 === '6')
//         alert('Great job! Thats correct!')
//         console.log('The user has successfully answered question 6'); 
//     // Go to question 7 if they answer right. If not they now enter the for loop

//         else {
//             for (i = 0; i < arrayLength; i++) { 
//                 answer6 = prompt('Try again. How many states has Nick visited?');

//     }

var answer7 = prompt('Youre awake right meatbag? Were almost through with this shpeel I promise.').toLowerCase(); 
function question7(){
    if (answer7 === 'yes' || answer7 === 'ya' || answer7 === 'yeah') {
    alert('Good. Gingers are notorious for their anger if you dont pay attention. Have you ever seen a GINGER SNAP?!');
    console.log('User is safe from the wrath of Nick for a while longer');
    }   else {
    alert('I know for you fleshy types its hard to pay attention for more than 5 minutes but please do try?');
    }
} question7();
// Tell user if they are wrong or right

// Next question
