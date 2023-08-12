import React from 'react'
import { Link } from 'react-router-dom'
import { MdSwipeLeft } from 'react-icons/md'

import css from './BackLink.module.css'


const BackLink = ({to}) => {
  return (
      <>
      <Link to={to} className={css.link}><span className={css.linkIcon}><MdSwipeLeft/></span>GO BACK</Link>
      </>
  )
}

export default BackLink