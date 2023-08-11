import React from 'react'
import { Link } from 'react-router-dom';

const MoviesItem = ({ card, location }) => {
  const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  const { poster_path, title, vote_average, id } = card;
  
  return (
  
    <li>
      <Link to={`/movies/${id}`} state={{ from: location}}>
        <div>
          <img src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : defaultImg} alt={title} width='250' />
        </div>
        <div>
          <p>{title}</p>
          <p>{vote_average > 0 && vote_average.toFixed(1)}</p>
        </div> 
        </Link>
    </li>
    
  );
}

export default MoviesItem