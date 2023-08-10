import React from 'react'
import MoviesItem from 'components/MoviesItem/MoviesItem';

import css from './MoviesList.module.css'

const MoviesList = ({ trendingMovies }) => {
    return (
        <div>
            <ul className={css.list}>
                {trendingMovies.map(movie => 
                    <MoviesItem key={movie.id} card={movie} />
                )}
            </ul>
        </div>
    );
}

export default MoviesList