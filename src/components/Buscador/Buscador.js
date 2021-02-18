import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import rootReducer from "../../reducers/index";
import './Buscador.css';
import { getMovies, addMovieFavorite } from '../../actions/index';
import state from '../../reducers/index';
import { Link } from 'react-router-dom';

export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
  }
  
  render() {
    const { title } = this.state;
    return (
      <div id="searchContainer">
        <h2 id="mainTitle">Movie Searcher</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              placeholder="Search by movie title..."
              type="text"
              id="searchInput"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)
              }
            />
            <button type="submit" id="searchButton"><i class="fas fa-film"></i></button>
          </div>
        </form>
        { this.props.movies.length > 0 && this.props.movies.map((movie, index) => (
          <div id="results">
            <div style={{ backgroundImage: `url(${movie.Poster})` }} id="poster">
              <button id="favButton" onClick={() => this.props.addMovieFavorite ({title: movie.Title, id: movie.imdbID, poster: movie.Poster})}>Add to favourite <i id="heart" class="fas fa-heart"></i></button>
              <Link to={`/movie/${movie.imdbID}`} style={{ textDecoration: 'none' }}><button id="movieDetail" >Movie details <i class="fas fa-ticket-alt" id="ticket"></i></button></Link>
            </div>
          </div>
        ))}

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded,
    favMovies: state.movies
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);
