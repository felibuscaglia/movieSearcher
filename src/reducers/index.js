const initialState = {
    movies: [],
    moviesLoaded: [],
    movieDetail: {}
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_MOVIE':
            return {
                ...state,
                moviesLoaded: action.payload.Search
            }
        case 'GET_MOVIE_DETAIL':
            return {
                ...state,
                movieDetail: action.payload
            }
        case 'ADD_MOVIE_FAVORITE':
            return {
                ...state,
                movies: state.movies.concat (action.payload)
            }
        case 'REMOVE_MOVIE_FAVORITE':
            return {
                ...state,
                movies: state.movies.filter (movies => movies.id != action.payload)
            }
        case 'MOVIE_SEARCH_ERROR':
            return {
                ...state,
                moviesLoaded: 'ERROR'
            }
        default:
            return state;
    }
    return state;
}


export default rootReducer