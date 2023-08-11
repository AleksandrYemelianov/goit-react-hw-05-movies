import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { fetchSearchStringMovie } from '../../service/apiMovieDB'
import { toast } from 'react-toastify';

import Loader from 'components/Loader/Loader';
import optionNotification from 'components/Notification/Notification';
import Searchbar from 'components/Searchbar/Searchbar'
import MoviesList from 'components/MoviesList/MoviesList';

import 'react-toastify/dist/ReactToastify.css';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchMovie, setSearchMovie] = useState([])
  const [isLoad, setIsLoad] = useState(false);
  const value = searchParams.get('query')

  useEffect(() => {
    if (!value) return;

    setIsLoad(true)
    const getSearchStringMovie = async () => {
      try {
        const data = await fetchSearchStringMovie(value);
        setSearchMovie(data.results);
        if (data.results.length === 0) {
          toast.info('Please enter the correct request.', optionNotification);
          return
        }
        setIsLoad(false)
      } catch (error) {
        toast.error('An error occurred. Please try again later.', optionNotification)
      } finally {
        setIsLoad(false)
      }
    };
    getSearchStringMovie()
  }, [value]);

  const handleSubmit = e => {
    e.preventDefault();
    const query = e.currentTarget.elements.search.value;
    if (query === '') {
      setSearchMovie([]);
      toast.warn('Please enter for example, "batman", "Spider", etc.', optionNotification);
      return
    };

    setSearchParams({ query });
  }

  return (
    <>
      {isLoad && <Loader />}
      <Searchbar onSubmit={handleSubmit} value={value} />
      <MoviesList movies={searchMovie} />
    </>
  );
}

export default Movies