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

// for (let i = 0; i < 2; i++) {
//     const   a = prompt('Один из последних просмотренных фильмов?', ''),
//             b = prompt('На сколько оцените его?', '');
    
//     if (a !== null && b !== null && a !== '' && b !== '' && a.length < 50 && b.length < 50)  {
//         personalMovieDB.movies[a] = b;
//         console.log('DONE');
//     } else {
//         i--;
//         console.log('ERROR');
//     }
    
//     personalMovieDB.movies[a] = b; 
    
// }

// if (personalMovieDB.count < 10) {
//     alert('Просмотренн довольно мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count <=30) {
//     alert('Вы классический зритель');
// } else if (personalMovieDB.count > 30) {
//     alert(`${personalMovieDB.count} фильмов, да вы киноман !`);
// } else {
//     alert('Произошла ошибка !');
// }
let i = 0;
do {
    const   a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
    
    if (a !== null && b !== null && a !== '' && b !== '' && a.length < 50 && b.length < 50)  {
        personalMovieDB.movies[a] = b;
        console.log('DONE');
        i++;
    } else {
        
        console.log('ERROR');
    }
    
    // personalMovieDB.movies[a] = b; 
    
}while (i != 2);
if (personalMovieDB.count < 10) {
    alert('Просмотренн довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <=30) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    alert(`${personalMovieDB.count} фильмов, да вы киноман !`);
} else {
    alert('Произошла ошибка !');
}
console.log(personalMovieDB);