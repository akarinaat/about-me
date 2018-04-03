'use strict';

var userName = prompt('What is your Name?');

var havingFun = prompt('Are you having fun in code 201?').toLowerCase();

if(havingFun === 'yes'){
  alert('Awesome! Let\'s keep going');
} else {
  alert('Don\'t worry about it, it will get better');
}
console.log('Is ' + userName + ' having fun in code 201?. the answer is ' + havingFun);

var fridayLunch = prompt('Are you bringing your own lunch on friday?').toLowerCase();

if(fridayLunch === 'yes'){
  alert('Good! We\'re having guests on Friday and you don\'t want to miss it.');
} else {
  alert('You should :), remember we\'ll have guests and whatever you can learn from them would be good content for your Journal.');
}
console.log(userName + ' answered ' + fridayLunch + ' the right answer was yes');
var weekEnd = prompt('Are you excited for the weekend?').toLowerCase();

if(weekEnd === 'yes'){
  alert('Great! I\'m sure you will do your homework and have fun too, that is important.');
} else {
  alert('Well... it\'ll come anyway, try to have fun.');
}
console.log('Will ' + userName + ' have fun this weekend?. The answer is ' + weekEnd);

var howFun = prompt('Do you think I\'m funny?').toLowerCase();

if (howFun === 'yes'){
  alert('Good! We can be friends!');
} else if (howFun === 'no'){
  alert('Reconsider :)');
} else {
  alert('Answer yes or no');
}
console.log(userName + ' answered ' + howFun + ' and the real answer is yes');

var homeWork = prompt('Does it look like I did my homework?').toLowerCase();

if (homeWork === 'yes') {
  alert('I agree!!');
} else {
  alert('Reconsider :)');
}
console.log(userName + ' answered ' + homeWork + ' and the real answer is yes');





