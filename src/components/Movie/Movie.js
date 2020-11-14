import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getMovieDetail(this.props.match.params.id)
    }

    render() {
        return (
            <div id="movieData">
                <h1 id="mainTitle">{this.props.movieDetail.Title}</h1>
                <div id="secondLine">
                    <h6>{this.props.movieDetail.Rated}</h6>
                    <h6>{this.props.movieDetail.Runtime}</h6>
                    <h6>{this.props.movieDetail.Genre}</h6>
                    <h6>{this.props.movieDetail.Released}</h6>
                </div>
                <div id="posterDiv">
                    <img src={`${this.props.movieDetail.Poster}`} id="posterMD"></img>
                    <p id="plot">{this.props.movieDetail.Plot}</p>
                </div>
                <div id="extraMovieData">
                    <h6 className="extraMovieDataTitles">Director:</h6>
                    {this.props.movieDetail.Director}
                    <h6 className="extraMovieDataTitles">Writer(s):</h6>
                    {this.props.movieDetail.Writer}
                    <h6 className="extraMovieDataTitles">Stars:</h6>
                    {this.props.movieDetail.Actors}
                </div>
            </div>
        );
    }
}




function mapStateToProps(state) {
    return {
        movieDetail: state.movieDetail
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getMovieDetail: id => dispatch(getMovieDetail(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);