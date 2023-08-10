import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

import {fetchMovieDetails} from '../../service/apiMovieDB'

import optionNotification from 'components/Notification/Notification';
import Loader from 'components/Loader/Loader';
import MovieInfo from 'components/MovieInfo/MovieInfo';

const MoviesDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null)
  const [isLoad, setIsLoad] = useState(false)

  const { movieId } = useParams();

  useEffect(() => {
    setIsLoad(true);
    const getMovieDetails = async () => {
      try {
        const data = await fetchMovieDetails(movieId);
        setMovieDetails(data)
        setIsLoad(false);
      } catch (error) {
        toast.error('An error occurred. Please try again later.', optionNotification)
      } finally {
        setIsLoad(false);
      }
    };
    getMovieDetails()
  }, [movieId]);
  
console.log(movieDetails)
  return (
    <div>
      {isLoad && <Loader />}
      {movieDetails !== null && <MovieInfo movieDetails={movieDetails} />}
    </div>
  )
}

export default MoviesDetails