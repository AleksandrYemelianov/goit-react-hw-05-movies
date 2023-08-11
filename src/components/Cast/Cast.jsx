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
    <div>
      {isLoad && <Loader/>}
      {<ul className={css.list}>
        {Array.isArray(movieCasts) && movieCasts.length > 0 && movieCasts.map(cast => 
            <CastInfo key={cast.id} cast={cast} />
        )}
      </ul>}
    </div>
  )
}

export default Cast