import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchCastMovie } from 'service/apiMovieDB';

import Loader from 'components/Loader/Loader';
import CastInfo from 'components/CastInfo/CastInfo';

import css from './Cast.module.css'

const Cast = () => {
  const [movieCasts, setMovieCast] = useState(null);
  const [isLoad, setIsLoad] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    setIsLoad(true);
    const getCastMovie = async () => {
      try {
        const data = await fetchCastMovie(movieId);
        setMovieCast(data.cast)
        setIsLoad(false);
      } catch (error) {

      } finally {
        setIsLoad(false);
      }
    };
    getCastMovie()
  }, [movieId]);
  
  return (
    <>
      {isLoad && <Loader/>}
      {<ul className={css.list}>
        {Array.isArray(movieCasts) && movieCasts.length > 0 && movieCasts.map(cast => 
            <CastInfo key={cast.id} cast={cast} />
        )}
      {movieCasts?.length === 0 && <p className={css.notCast}>We have no information about the actors</p>}  
      </ul>}
    </>
  )
}

export default Cast