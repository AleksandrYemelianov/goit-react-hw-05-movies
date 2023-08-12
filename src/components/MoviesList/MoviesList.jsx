import React from 'react'
import { useLocation } from 'react-router-dom';

import MoviesItem from 'components/MoviesItem/MoviesItem';

import css from './MoviesList.module.css'

const MoviesList = ({ movies }) => {
    const location = useLocation();

    return (
        <>
            <ul className={css.list}>
                {Array.isArray(movies) && movies.length > 0 && movies.map(movie => 
                    <MoviesItem key={movie.id} card={movie} location={location} />
                )}
            </ul>
        </>
    );
}

export default MoviesList