import React from 'react'

import css from './MovieInfo.module.css'

const MovieInfo = ({ movieDetails }) => {
    const { genres, overview, poster_path, release_date, title, vote_average } = movieDetails;
    const allGenres = genres?.map(genre => genre.name).join(', ');
    const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
    const date = new Date(release_date);
    const year = date.getFullYear();
    const average = (vote_average * 10).toFixed(0);

  return (
    <div className={css.cardWrapper}>
        <img src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : defaultImg} alt={title} width='250' className={css.img} />
        <div className={css.info}>
            <h2 className={css.title}>{title}</h2>
            <p className={css.text}>Release date: <span className={css.textDetail}>{year}</span></p>
            <p className={css.text}>User Score: <span className={css.textDetail}>{average}%</span></p>
            <p className={css.text}>Genre: <span className={css.textDetail}>{allGenres}</span></p>
            {overview && <p className={css.textOver}>{`"${overview}"`}</p>}
        </div>
    </div>
  )
}

export default MovieInfo