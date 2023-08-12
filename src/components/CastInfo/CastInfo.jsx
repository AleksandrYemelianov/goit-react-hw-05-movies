import React from 'react';
import css from './CastInfo.module.css';

const CastInfo = ({ cast }) => {
  const { character, original_name, profile_path } = cast;
  const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
    
  return (
    <li className={css.item}>
      <img src={profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : defaultImg} alt={original_name} width='200' className={css.img} />
      <p className={css.titleCost}>{original_name}</p>
      <p className={css.titleCost}><span className={css.subDescCost}>Character:</span> {character}</p>
    </li>
  )
}

export default CastInfo