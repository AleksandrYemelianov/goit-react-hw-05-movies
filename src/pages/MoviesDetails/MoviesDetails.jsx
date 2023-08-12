import React, { useState, useEffect, useRef, Suspense } from 'react'
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

import {fetchMovieDetails} from '../../service/apiMovieDB'

import optionNotification from 'components/Notification/Notification';
import Loader from 'components/Loader/Loader';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import BackLink from 'components/BackLink/BackLink';

import css from './MoviesDetails.module.css'

const MoviesDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null)
  const [isLoad, setIsLoad] = useState(false)
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? "/");

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

  return (
    <>
      {isLoad && <Loader />}
      {movieDetails !== null && <BackLink to={backLinkHref.current} />}
      {movieDetails !== null && <MovieInfo movieDetails={movieDetails} />}
      <div className={css.wrapper}>
        <h3 className={css.moreTitle}>Additional information</h3>
        <ul className={css.moreInfo}>
          <li className={css.moreItem}>
            <NavLink to="cast" className={({isActive}) => isActive ? css.active : css.link}>Cast</NavLink>
          </li>
          <li className={css.moreItem}>
            <NavLink to="reviews" className={({isActive}) => isActive ? css.active : css.link}>Reviews</NavLink>
          </li>
          <li className={css.moreItem}>
            {movieDetails !== null && movieDetails.homepage && <a href={movieDetails.homepage} target="_blank" rel='noopener noreferrer' className={css.link}>Go to origin</a>}
          </li>
        </ul>
        <Suspense>
          <Outlet/>
        </Suspense>
      </div>
    </>
  )
}

export default MoviesDetails