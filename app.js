'use strict';

function question1(){

  var favorite_color = prompt('is vijaya\'s favorite color red');

  var favorite_color_correct_answer = 'no';

  favorite_color = favorite_color.toLowerCase();

  if(favorite_color === favorite_color_correct_answer){
    alert('nice guess');
  } else {
    alert('nope');
  }

}
question1();


function question2(){

  var favorite_game = prompt('Answer vijaya\'s favorite game?');
  favorite_game = favorite_game.toUpperCase();
  // YES

  if ( favorite_game === 'BASEBALL' || favorite_game ==='FOOTBALL') {
    alert('you guessed Y');
  } else if(favorite_game === 'HOCKEY') {
    alert(' well, no way, not my game');
  } else {
    alert ('can we watch something else');
  }
}

question2();

function question3(){
  var favorite_food = prompt('what is your favorite food ?');
  var favorite_food_correct_answer = 'MAC & CHEESE';

  favorite_food = favorite_food.toUpperCase();

  if(favorite_food ==='MAC & CHEESE') {
    alert('you gussed it right');
  } else if( favorite_food === 'PIZZA' || favorite_food ===favorite_food_correct_answer ) {
    alert(' Try again');
  } else {
    alert ('I wouldn/t eat that food ever');
  }
}

question3();

function question4(){

  var favorite_movie = prompt('is The Terminator your favorite movie? ');
  var favorite_movie_correct_answer = 'YES';
  favorite_movie = favorite_movie.toUpperCase();

  if( favorite_movie === 'The Terminator'|| favorite_movie === favorite_movie_correct_answer ) {

    alert('you guess Y');
  } else if (favorite_movie ==='may be') {
    alert('No movie with that name, sorry');
  } else {
    alert ('Good for  you');

  }

}

question4();

function question5(){

  var favorite_touristplace = prompt('What your favorite tourist destination?');
  //var favorite_touristplace_correct_answer = 'YES';

  favorite_touristplace = favorite_touristplace.toUpperCase();
  if( favorite_touristplace === 'MEXICO' || favorite_touristplace === 'FRANCE') {
    alert('Great place to visit');
  } else if(favorite_touristplace === 'unknown') {
    alert('No idea?');
  }else {
    alert ('There is no place like that');
  }
}

question5();

///////////////////////////////////////////////////////////////////////////////////////////////////

function question6(){

  var favorite_number_correct_answer = '3';

  for (var i = 0; i < 5; i++) {
    var favorite_number = prompt('what is my favorite number?');
    if( favorite_number === favorite_number_correct_answer ) {
      alert(' you got that right');
      break;

    }
    else if (favorite_number > favorite_number_correct_answer)
    {
      alert('The number guessed is high');

    }

    else {

      alert ('The number guessed is low');
    }

  }
}

question6();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//create an array for favorite icecreams.
var ice_creams = ['rocky-road', 'chocolate-overload', 'chocolate chocolate with chocolate fudge', 'coffee', 'lemon sorbet', 'pistachio','butter scotch'];

for(var i = 0; i < ice_creams.length; i++){
  console.log(i);
  console.log(ice_creams[i]);
}
var user_response;
//n and m are indexes of user responses
var n;
var m;

for(var j = 0; j < ice_creams.length; j++){

  user_response=prompt('Enter your first icecream');

  while(user_response === '' || user_response === null ){
    // alert('give me an answer');
    user_response = prompt('i said give me an answer');
  }

  // find the index of the first ice cream if it exists in the array
  n= ice_creams.indexOf(user_response);
  if (n>=0){
    alert ('you guessed the first icecream right.');

    user_response=prompt('guess the second icecream');
    // user_response=user_response.toLowerCase;
    m=ice_creams.indexOf(user_response);

    if (m>=0)
    {alert ('Your guesses were : ' + ice_creams [n] + ' and ' + ice_creams[m]);
      console.log(ice_creams [n]) ;
      console.log (ice_creams [m]);

      break;
    }


    else { alert ('you did not guess the second icecream. Try again');}

  }

  // else {alert (' Your guesses were incorrect');}
}

// do {
//   favorite_ice_cream = prompt('what is your favorite ice cream');
// }while(favorite_ice_cream === '' || favorite_ice_cream === null);
// while(true){
//   console.log('hi');
// }






// basic syntax for an if
// if ( some condition ) {
//  some code to be executed if condition is true
//} <optional> else {
// some code to be executed if condition is not ture
//}
