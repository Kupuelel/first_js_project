"use strict";
// first task
let numberOfFilms;
// console.log(numberOfFilms);

function start () {
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели ?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели ?', '');
    }
}
start();

//second task
const personalMovieDB = {
    count: numberOfFilms,
    movies: {}, 
    actors: {},
    genres: [],
    privat: false
};

function showMyDB(hidden){
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

//third task
function rememberMyFilms () {
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
}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотренн довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <=30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        alert(`${personalMovieDB.count} фильмов, да вы киноман !`);
    } else {
        alert('Произошла ошибка !');
    }
}
function writeYourGenres() {
    for(let i = 0; i < 3; i++) {
        const genre = prompt(`Ваш любимый жанр  под номером ${i+1}`);
        personalMovieDB.genres[i] = genre;
        // personalMovieDB.genres[i] = prompt(`Ваш любимый жанр  под номером ${i+1}`);    // 2 вариант
    }
}
writeYourGenres();
detectPersonalLevel();
showMyDB(personalMovieDB.privat);