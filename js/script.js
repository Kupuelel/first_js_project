"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы посмотрели ?', '');
// console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {}, 
    actors: {},
    genres: [],
    privat: false
};