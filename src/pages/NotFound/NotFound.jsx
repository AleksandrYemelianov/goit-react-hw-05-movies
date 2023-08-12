import React from 'react'
import { Link } from 'react-router-dom'
import notFoundImg from '../../images/404-Pages-1536x768.jpg';
import css from './NotFound.module.css'

const NotFound = () => {
  return (
    <div className={css.wrapper} style={{ backgroundImage: `url(${notFoundImg})` }}> 
        <div className={css.link}>
              <Link to='/'>GO TO HOME</Link>  
        </div>
    </div>
  )
}

export default NotFound