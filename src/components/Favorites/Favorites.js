import React, { Component } from "react";
import { connect } from "react-redux";
import { removeMovieFavorite } from "../../actions/index";
import { Link } from 'react-router-dom';
import './Favorites.css';

export class ConnectedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {this.props.movies.length > 0 && this.props.movies.map((movie, index) => (
            <div id='container'>
             <div id='movies' style={{ backgroundImage: `url(${movie.poster})` }} id='moviePoster'>
                <button id='deleteFavourite' onClick = { () => this.props.removeMovieFavorite (movie.id)}><i class="fas fa-times"></i></button>
                <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none' }}><button id="movieDetail" >Movie details <i class="fas fa-ticket-alt" id="ticket"></i></button></Link>
              </div>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}



function mapStateToProps(state) {
  return {
    movies: state.movies
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: movie => dispatch(removeMovieFavorite(movie))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);

