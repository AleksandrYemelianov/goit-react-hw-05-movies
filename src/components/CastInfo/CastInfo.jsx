import React from 'react'

const CastInfo = ({ cast }) => {
    const { character, original_name, profile_path } = cast;
    const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
    
  return (
    <li>
          <img src={profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : defaultImg} alt={original_name} width='100' />
          <p>{original_name}</p>
          <p>Character: {character}</p>
    </li>
  )
}

export default CastInfo