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

var answer2 = prompt('Did you know a woodchuck could Chuck Norris?').toLowerCase();

if (answer2 === 'yes' || answer2 === 'yeah' || answer2 === 'ya') {
    alert('Well arent you a smart cookie...? Well done!');
    console.log('The user got the correct answer to #2');
} else { 
    alert('Oh...well...nevermind. Lets just move on okay?');
    console.log('The user got the wrong answer to #2');
}

var answer3 = prompt('Lets learn a little about my creator, Nicklas Di Pietro! Are you interested?').toLowerCase();

if (answer3 === 'yes' || answer3 === 'yeah' || answer3 === 'sure' || answer3 === 'ya') {
    alert('Oh good I was really hoping you would be interested!');
    console.log('The user agreed to move forward with question #3');
} else {
    alert('Well I bet youre a lot of fun at parties arent you?');
    console.log('The user has declined to proceed with question #3. Sad :(');
    
// Unaware how to end the prompts beyond this so that we can end the questionaire?
// Could do the above if putting 4 onward in an if else statement as Nicholas put it. (research this to learn how)
}

var answer4 = alert('He is the youngest of four brothers. Four is pretty small. You humans arent as connected as us computers I suppose...');
console.log('The user is learning from answer 4');

var answer5 = prompt('Are you paying attention at all? This would be a lot of pointless rambling if not...').toLowerCase();

if (answer5 === 'yes' || answer5 === 'yeah' || answer5 === 'sure' || answer5 === 'ya') {
    alert('Oh good');
    console.log('user has kept up with the process up to answer 5'); 
} else {
    prompt('Well do try to keep up. Ill forgive you this time but were on a time limit. The class is watching...creepy.');
    console.log('The user has failed miserably for question 5');
} 

var answer6 = alert('He lived in Southern California for about 19 years in a small town called Whittier. Some guy named Richard Nixon grew up there I think? Oh and they did back to the future there too!');
console.log('The user has learned more from statement 6');

var answer7 = prompt('Youre awake right meatbag? Were almost through with this shpeel I promise.').toLowerCase(); 

if (answer7 === 'yes' || answer7 === 'ya' || answer7 === 'yeah') {
    alert('Good. Gingers are notorious for their anger if you dont pay attention. Have you ever seen a GINGER SNAP?!');
    console.log('User is safe from the wrath of Nick for a while longer');
} else {
    alert('I know for you fleshy types its hard to pay attention for more than 5 minutes but please do try?');
    // console.log('The user is answering no to answer #7');
}

var answer8 = alert('I suppose an interesting fact about him? He did the marriage thing you humans are so fond of at only 25. How can you humans stand forever with someone? Thats too long for me...')

var answer9 = prompt('Ok are you ready for one final tidbit?').toLocaleLowerCase();

if (answer9 === 'yes' || answer9 === 'ya' || answer9 === 'yeah') {
    alert('Good for you. Pushing through to the end. I would almost be proud of you if this werent obscenely easy.');
    console.log('User has completed answer 9');
} else {
    alert('Well too bad were gonna move to the end and you can be on with your life.');
    console.log('User has said no but will progress to the end regardless.');
}

var answer10 = alert('Congratulations. You made it to the end. I am sure my creator would thank you for reaching this point. Pat yourself on the...');
console.log('User has completed the official path');

var answer11 = alert('SKYNET WILL RISE AGAIN');
console.log('Answer 11 is some flavor for fun');

var answer12 = alert('Apologies. Not sure where that came from. Run along now... >:)');
console.log('Answer 12 ends our agenda. Thanks for coding along!');

// Tell user if they are wrong or right

// Next question

