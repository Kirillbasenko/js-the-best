'use strict';

let personalMovieDB = {
   count: 0,
   movies: {},
   actors: {},
   gendes: [],
   privat: false,
   start: function(){
         personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели", "");
      while( personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
         personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели", "");
      }
   },
   rememberMyfilms: function(){
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
   },
   detectPersonalLevel: function(){
      if(personalMovieDB.count <= 10){
         console.log("Просмотренно довольно мало фильмов");
      } else if(personalMovieDB.count < 30){
         console.log("Вы классной зритель");
      } else if(personalMovieDB.count >= 30){
         console.log("Вы киноман");
      }else{
         console.log("Произошла ошибка");
      }
   },
   showMyDB: function(hidden){
      if(!hidden){
         console.log(personalMovieDB);
      }
   },
   toggleVisibleMyDB: function(){
      if(personalMovieDB.privat){
         personalMovieDB.privat = false;
      }else{
      personalMovieDB.privat = true;
   }
   },
   writeYourGender: function(){
      for(let i = 1; i < 2; i++){
         /*let genre = prompt(`Ваш любимый жанр под номером ${i}`);
         if(genre == "" || genre == null){
            console.log("Введены некоректные данные");
            i--;
         } else{
            personalMovieDB.gendes[i - 1] = genre;
         }
      }*/
      let genre = prompt(`Введите ваши любимые жанры через запятую`);
      if(genre == "" || genre == null){
            console.log("Введены некоректные данные");
            i--;
         } else{
            personalMovieDB.gendes = genre.split(", ");
         }
      }
      personalMovieDB.gendes.forEach((item, index) => {
         console.log(`Любимый жанр ${index + 1} - это ${item}`);
      });
   }
};
