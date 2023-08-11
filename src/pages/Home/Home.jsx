import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

import {fetchTrendingMovies} from '../../service/apiMovieDB'

import MoviesList from 'components/MoviesList/MoviesList'
import Loader from 'components/Loader/Loader';
import optionNotification from 'components/Notification/Notification';

import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    setIsLoad(true)
    const getTrendingMovies = async () => {
      try {
        const data = await fetchTrendingMovies();
        setTrendingMovies(data.results);
        setIsLoad(false)
      } catch (error) {
        toast.error('An error occurred. Please try again later.', optionNotification)
      } finally {
        setIsLoad(false)
      }
    };
    getTrendingMovies()
  }, []);

  return (
    <>
      {isLoad && <Loader />}
      <MoviesList movies={trendingMovies} state/>
    </>
  )
}

export default Home