import React from 'react';

function MovieCard(props) {

    const { movietitle, imdbmovieid, movielanguages, moviemainphotos, moviegenres } = props.movie;
    return (
        <div className="movie-card">
            <img src={moviemainphotos[0]} alt={movietitle} />
            <h2>{movietitle}</h2>
            <p><strong>IMDb ID:</strong> {imdbmovieid}</p>
            <p><strong>Languages:</strong> {movielanguages.join(', ')}</p>
            <p><strong>Genres:</strong> {moviegenres.join(', ')}</p>
        </div>
    );
}

export default MovieCard;
