'use strict';
let numberOfFilms;
function start(){
   numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");
   while( numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
      numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");
   }
}
start();
let personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   gendes: [],
   privat: false,
};

function rememberMyfilms(){
   for( let i = 0; i < 2; i++){
   const a = prompt("Один из последних просмотренных фильмов?", "").trim(),
         b = prompt("На сколько его оцените", "");
   if( a != null && b != null && a != "" && b != "" && a.length < 50){
      personalMovieDB.movies[a] = b;
      console.log("done");
   }else{
      console.log("error");
      i--;
   }
   }
}
rememberMyfilms();

function detectPersonalLevel(){
   if(personalMovieDB.count <= 10){
      console.log("Просмотренно довольно мало фильмов");
   } else if(personalMovieDB.count < 30){
      console.log("Вы классной зритель");
   } else if(personalMovieDB.count >= 30){
      console.log("Вы киноман");
   }else{
      console.log("Произошла ошибка");
   }
}
detectPersonalLevel();
function showMyDB(hidden){
   if(!hidden){
      console.log(personalMovieDB);
   }
}
showMyDB(personalMovieDB.privat);
function writeYourGenres(){
   for(let i = 1; i <= 3; i++){
      personalMovieDB.gendes[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
   }
}
writeYourGenres();
