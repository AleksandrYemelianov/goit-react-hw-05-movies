import React, { useState, useEffect } from 'react'
import { Link, Outlet, useLocation, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

import {fetchMovieDetails} from '../../service/apiMovieDB'

import optionNotification from 'components/Notification/Notification';
import Loader from 'components/Loader/Loader';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import BackLink from 'components/BackLink/BackLink';

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
  
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  return (
    <div>
      {isLoad && <Loader />}
      {movieDetails !== null && <BackLink to={backLinkHref} />}
      {movieDetails !== null && <MovieInfo movieDetails={movieDetails} />}
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast ">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet/>
      </div>
    </div>
  )
}

export default MoviesDetails