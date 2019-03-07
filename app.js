'use strict';

var favorite_color = prompt('is nicholas\'s favorite color red');

var favorite_color_correct_answer = 'no';

 favorite_color = favorite_color.toLowerCase();

if(favorite_color === favorite_color_correct_answer){
  alert('nice guess');
} else {
  alert('nope');
}




var favorite_game = prompt('Answer nicholas\s favorite game?');
favorite_game = favorite_game.toUpperCase();
// YES

if ( favorite_game === 'BASEBALL' || favorite_game ==='FOOTBALL') {
  alert('you guessed Y');
 } else if(favorite_game === 'HOCKEY') {
  alert(' well, no way, not my game');
  } else { 
   alert ('can we watch something else');
  }

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

  var favorite_touristplace = prompt('is Mexico your favorite tourist destination?');
  var favorite_touristplace_correct_answer = 'YES';

  favorite_touristplace = favorite_touristplace.toUpperCase();
  if( favorite_touristplace === 'Mexico'  || favorite_touristplace === 'France') {
    alert('Great place to visit');
  } else if(favorite_touristplace === 'unknown') {
    alert('No idea?');
  }else {
    alert ('There is no place like that');
  }

///////////////////////////////////////////////////////////////////////////////////////////////////


var favorite_number_correct_answer = '3';

for (var i = 0; i < 5; i++) {
  var favorite_number = prompt('what is my favorite number?');
  if( favorite_number === '3') {
    alert(' you got that right');
    break;
  }
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  



// basic syntax for an if
// if ( some condition ) {
//  some code to be executed if condition is true
//} <optional> else {
// some code to be executed if condition is not ture
//}