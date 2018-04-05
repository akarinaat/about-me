'use strict';

var userName = prompt('What is your Name?');

alert('Hello ' + userName + '!' +' You are about to answer some questions about your experience in CodeFellows so far. Please answer with yes or no.');

//Question 1

var havingFun = prompt('Are you having fun in code 201?').toLowerCase();

if(havingFun === 'yes'){
  alert('Awesome! Let\'s keep going');
} else if (havingFun === 'no') {
  alert('Don\'t worry about it, it will get better');
} else {
  alert('Please answer yes or no.');
}

console.log('Is ' + userName + ' having fun in code 201?. the answer is ' + havingFun);

//Question 2

var fridayLunch = prompt('Are you bringing your own lunch on friday?').toLowerCase();

if(fridayLunch === 'yes'){
  alert('Good! We\'re having guests on Friday and you don\'t want to miss it.');
} else {
  alert('You should :), remember we\'ll have guests and whatever you can learn from them would be good content for your Journal.');
}
console.log(userName + ' answered ' + fridayLunch + ' the right answer was yes');

//Question 3

var weekEnd = prompt('Are you excited for the weekend?').toLowerCase();


if(weekEnd === 'yes'){
  alert('Great! I\'m sure you will do your homework and have fun too, that is important.');
} else if (weekEnd === 'no') {
  alert('Well... it\'ll come anyway, try to have fun.');
} else {
  alert('Please answer yes or no.');
}


console.log('Will ' + userName + ' have fun this weekend?. The answer is ' + weekEnd);

//Question 4

var howFun = prompt('Do you think I\'m funny?').toLowerCase();

if (howFun === 'yes'){
  alert('Good! We can be friends!');
} else if (howFun === 'no'){
  alert('Reconsider :)');
} else {
  alert('Please answer yes or no.');
}
console.log(userName + ' answered ' + howFun + ' and the real answer is yes');

//Question 5

var homeWork = prompt('Have you been doing your Journal?').toLowerCase();

if (homeWork === 'yes') {
  alert('Great! Keep doing it.');
} else {
  alert('Don\'t forget to do it, it can save you at the end');
}
console.log(userName + ' answered ' + homeWork + ' and the real answer is yes');

// //Question 6

var guessNumber = 0;
var myNumber = 13;
var count = 1;

while(guessNumber !== myNumber && count < 4){
  guessNumber = prompt('You have 4 chances to guess a number from 1 to 15');
  if (guessNumber < myNumber){
    alert('Too low, keep trying');
  } else if(guessNumber > myNumber){
    alert('too high, keep trying');
  } else {
    alert('You got it! yeiii');
  }
  count ++;
  if(count >= 4){
    alert('Nice try! But\'s it over buddy :).');
  }
}
console.log(userName + ' tried to guess the number I was thinking up to 4 times.');


//Question 7
var rightAnswer = false;
var numberOfChances = 6;
while(numberOfChances > 0 && rightAnswer === false) {
  var userGuess = prompt('Guess one of my favorite animals. You have 6 chances.').toLowerCase();
  var favoriteAnimals = ['dog','elephant','horse'];
  numberOfChances --;
  console.log('The user guessed the animal ' + userGuess);
  for (var i = 0; i < favoriteAnimals.length; i++){ 
    if (userGuess === favoriteAnimals[i]){
      alert('Great! you got it!');
      rightAnswer = true;
      break;
    }
    else {
      console.log(userGuess + ' was not item ' + i + ' in the array');
    }
  }
  if (rightAnswer === false) {
    alert('try again');
  } 

  // if (rightAnswer === true){
  //   alert('Keep trying.');
  //   rightAnswer = false;
  //   break;
  // }

}