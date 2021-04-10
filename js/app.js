'use strict';
let score = 0;
alert('this is a simple test before you can get to this page');

function q1(){
  let answer1 = prompt('do you think im smoker?','yes , no'); //Q1
  switch(answer1.toLowerCase()){
  case 'yes':
  case 'y':
    console.log('your answer is wrong, focus.');
    alert('your answer is wrong, focus.');
    break;
  case 'no':
  case'n':
    console.log('your answer is right.');
    alert('your answer is right.');
    score+=1;
    break;
  default:
    alert('please choose only yes or no');
  }
}
q1();

function q2(){
  let answer2 = prompt('do you think im a short person?','yes , no'); //Q2
  switch(answer2.toLowerCase()){
  case 'yes':
  case 'y':
    console.log('your answer is wrong, focus.');
    alert('your answer is wrong, focus.');
    break;
  case 'no':
  case'n':
    console.log('your answer is right.');
    alert('your answer is right.');
    score+=1;
    break;
  default:
    alert('please choose only yes or no');
  }
}
q2();

function q3(){
  let answer3 = prompt('do you think im bad at programming?','yes , no'); // Q3
  switch(answer3.toLowerCase()){
  case 'yes':
  case 'y':
    console.log('your answer is wrong, focus.');
    alert('what a shame, your answer is wrong');
    break;
  case 'no':
  case'n':
    console.log('your answer is right.');
    alert('awsome, your answer is right.');
    score+=1;
    break;
  default:
    alert('please choose only yes or no');
  }
}
q3();

function q4(){
  let answer4 = prompt('do you think i can get angry easily?','yes , no'); //Q4
  switch(answer4.toLowerCase()){
  case 'yes':
  case 'y':
    console.log('your answer is wrong, focus.');
    alert('your answer is wrong, focus.');
    break;
  case 'no':
  case'n':
    console.log('your answer is right.');
    alert('your answer is right.');
    score+=1;
    break;
  default:
    alert('please choose only yes or no');
  }
}
q4();

function q5 (){
  let answer5 = prompt('do you know me personally?','yes , no'); // Q5
  switch(answer5.toLowerCase()){
  case 'yes':
  case 'y':
    console.log('your answer is wrong, focus.');
    alert('your answer is wrong, focus.');
    break;
  case 'no':
  case'n':
    console.log('your answer is right.');
    alert('your answer is right.');
    score+=1;
    break;
  default:
    alert('please choose only yes or no');
  }
}
q5();

function q6 (){
  let answer6=prompt('guess how tall i am in centimeters?');
  for(let i=0;i<4;i++){
    if(parseInt(answer6)<190){
      alert('no im taller than that, try again');
    }else if(parseInt(answer6)>190){
      alert('no im shorter than that, try again');
    }else if(parseInt(answer6)=== 190){
      alert('wow, well done');
      score+=1;
      break;
    }else{alert('please use numbers..');}
    if(i===3){
      alert('too bad, im 190 centimeters');
      break;
    }
    answer6=prompt('guess how tall i am in centimeters?');
  }
}
q6();

function q7 (){
  let perfumes = ['one million','blue channel','dior sauvage','versaci eros','spicebomb','creed aventus','cool water','creed','invictus'];
  let answer7 = prompt('i have alot of favourite perfumes, guess one of them?');

  for(let i=0;i<6;i++){
    for(let j=0;j<perfumes.length;j++){
      if (answer7.toLowerCase() === perfumes[j]){
        alert('wow you got a really high taste of perfumes');
        score+=1;
        i=j;
        break;
      }
    }
    if(answer7.toLowerCase() === perfumes[i]){
      break;
    }
    if(i===5){
      alert('oh you couldnt guess my perfume all of these were right answers: '+perfumes);
      break;
    }
    answer7 = prompt('wrong answer, please try another guess?');
  }
}

q7();
alert('okey, your score is '+score+' out of 7');
