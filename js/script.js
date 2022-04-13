"use strict";

// first task
const numberOfFilms = +prompt('Сколько фильмов вы посмотрели ?', '');
// console.log(numberOfFilms);

//second task
const personalMovieDB = {
    count: numberOfFilms,
    movies: {}, 
    actors: {},
    genres: [],
    privat: false
};

//third task

for (let i = 0; i < 2; i++) {
    const   a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
    
    if (a !== null && b !== null && a !== '' && b !== '' && a.length < 50 && b.length < 50)  {
        personalMovieDB.movies[a] = b;
        console.log('DONE');
    } else {
        console.log('ERROR');
        i--;
    } 
}

