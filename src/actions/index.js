
export function getMovies (movieTitle) {
    return function (dispatch) {
        return fetch (`http://www.omdbapi.com/?apikey=20dac387&s=${movieTitle}`)
        .then (r => r.json ())
        .then (json => dispatch ({ type: 'GET_MOVIE', payload: json }))
    }
}

export function getMovieDetail (id) {
    return function (dispatch) {
        return fetch (`http://www.omdbapi.com/?apikey=20dac387&i=${id}`)
        .then (r => r.json ())
        .then (json => dispatch ({ type: 'GET_MOVIE_DETAIL', payload: json }) )
    }
}

export function addMovieFavorite (payload) {
    return { type: 'ADD_MOVIE_FAVORITE', payload }
}

export function removeMovieFavorite (payload) {
    return { type: 'REMOVE_MOVIE_FAVORITE', payload }
}