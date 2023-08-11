import Loader from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchReviewsMovie } from 'service/apiMovieDB';
import ReviewsInfo from './ReviewsInfo/ReviewsInfo';

import css from './Reviews.module.css'


const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState(null);
  const [isLoad, setIsLoad] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    setIsLoad(true);
    const getReviewsMovie = async () => {
      try {
        const data = await fetchReviewsMovie(movieId);
        setMovieReviews(data.results)
        setIsLoad(false);
      } catch (error) {

      } finally {
        setIsLoad(false);
      }
    };
    getReviewsMovie()
  }, [movieId]);

  return (
    <div>
      {isLoad && <Loader />}
      {<ul className={css.list}>
        {Array.isArray(movieReviews) && movieReviews.length > 0 && movieReviews.map(review => 
            <ReviewsInfo key={review.id} review={review} />
        )}
      </ul>}
    </div>
  )
}

export default Reviews