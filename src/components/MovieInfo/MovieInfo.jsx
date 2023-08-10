import React from 'react'

const MovieInfo = ({ movieDetails }) => {
    const { genres, homepage, overview, poster_path, release_date, title, vote_average } = movieDetails;
    const allGenres = genres?.map(genre => genre.name).join(', ');
    const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
    const date = new Date(release_date);
    const year = date.getFullYear();
    const average = (vote_average * 10).toFixed(0);

  return (
    <div>
        <img src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : defaultImg} alt={title} width='250' />
        <div>
            <h2>{title}</h2>
            <p>Release date: <span>{year}</span></p>
            <p>User Score: {average}%</p>
            <p>Genre: {allGenres}</p>
            {overview && <p>{`"${overview}"`}</p>}
            {homepage && <a href={homepage} target="_blank" rel='noopener noreferrer'>Go to origin</a>}
        </div>
    </div>
  )
}

export default MovieInfo