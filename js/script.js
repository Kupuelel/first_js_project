"use strict";
const personalMovieDB = {
    count: 0,
    movies: {}, 
    actors: {},
    genres: [],
    privat: false,
    start: function(){
        personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели ?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели ?', '');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const   a = prompt('Один из последних просмотренных фильмов?', ''),
                    b = prompt('На сколько оцените его?', '');
            
            if (a !== null && b !== null && a !== '' && b !== '' && a.length < 50 && b.length < 50)  {
                personalMovieDB.movies[a] = b;
                console.log('DONE');
            } else {
                i--;
                console.log('ERROR');
            }         
            personalMovieDB.movies[a] = b;      
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert('Просмотренн довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <=30) {
            alert('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            alert(`${personalMovieDB.count} фильмов, да вы киноман !`);
        } else {
            alert('Произошла ошибка !');
        }
    },
    writeYourGenres: function() {
        for(let i = 0; i < 3; i++) {
            const genre = prompt(`Ваш любимый жанр  под номером ${i+1}`);   
            // personalMovieDB.genres[i] = prompt(`Ваш любимый жанр  под номером ${i+1}`); // 2 вариант
            if( genre === null || genre === '') {
                i--;
            }  else {
                personalMovieDB.genres[i] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр #${i+1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function() {
        if(personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};
