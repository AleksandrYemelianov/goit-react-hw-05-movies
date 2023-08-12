import React from 'react'
import { Link } from 'react-router-dom';
import css from './MoviesItem.module.css'

const MoviesItem = ({ card, location }) => {
  const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  const { poster_path, title, vote_average, id, release_date } = card;
  const date = new Date(release_date);
  const year = date.getFullYear();
  
  return (
  
    <li className={css.item}>
      <Link to={`/movies/${id}`} state={{ from: location}} className={css.link}>
        <div>
          <img src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : defaultImg} alt={title} width='250' className={css.img} />
        </div>
        <div className={css.infoItem}>
          <p className={css.title}>{title}</p>
          <span className={css.title}>{year}</span>
        </div>
        <p className={css.vote}>{vote_average > 0 && vote_average.toFixed(1)}</p>
        </Link>
    </li>
    
  );
}

export default MoviesItem