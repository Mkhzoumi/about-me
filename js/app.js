'use strict';

let userName = prompt('what is your name sir?');
alert('this is a simple 5 questions (yes or no) test before you can get to this page');
let answer1 = prompt('Can a circle have corners?','yes , no'); //Q1

switch(answer1.toLowerCase()){
case 'yes':
case 'y':
  //console.log('your answer is wrong, focus.');
  alert('your answer is wrong, focus.');
  break;
case 'no':
case'n':
  //console.log('your answer is right.');
  alert('your answer is right.');
  break;
default:
  alert('please choose only yes or no');
}


let answer2 = prompt('in maths can we devide by zero?','yes , no'); //Q2

switch(answer2.toLowerCase()){
case 'yes':
case 'y':
  //console.log('your answer is wrong, focus.');
  alert('your answer is wrong, focus.');
  break;
case 'no':
case'n':
  //console.log('your answer is right.');
  alert('your answer is right.');
  break;
default:
  alert('please choose only yes or no');
}


let answer3 = prompt('can a triangle have more than 3 angles?','yes , no'); // Q3

switch(answer3.toLowerCase()){
case 'yes':
case 'y':
  //console.log('your answer is wrong, focus.');
  alert('your answer is wrong, focus.');
  break;
case 'no':
case'n':
  //console.log('your answer is right.');
  alert('your answer is right.');
  break;
default:
  alert('please choose only yes or no');
}


let answer4 = prompt('can we calculate the volume of 2D shapes?','yes , no'); //Q4

switch(answer4.toLowerCase()){
case 'yes':
case 'y':
  //console.log('your answer is wrong, focus.');
  alert('your answer is wrong, focus.');
  break;
case 'no':
case'n':
  //console.log('your answer is right.');
  alert('your answer is right.');
  break;
default:
  alert('please choose only yes or no');
}


let answer5 = prompt('can anything that have a mass travel in speed of light?','yes , no'); // Q5

switch(answer5.toLowerCase()){
case 'yes':
case 'y':
  //console.log('your answer is wrong, focus.');
  alert('your answer is wrong, focus.');
  break;
case 'no':
case'n':
  //console.log('your answer is right.');
  alert('your answer is right.');
  break;
default:
  alert('please choose only yes or no');
}

document.write('<h1>welcome you '+userName+':');
