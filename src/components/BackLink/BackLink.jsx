import React from 'react'
import { Link } from 'react-router-dom'

const BackLink = ({to}) => {
  return (
      <>
      <Link to={to}>ButtonBack</Link>
      </>
  )
}

export default BackLink