import React from 'react'

const ReviewsInfo = ({ review }) => {
    const {author, content} = review
  return (
    <li>
        <article>
              <h4>{author}</h4>
              <p>{content}</p>
        </article>
    </li>
  )
}

export default ReviewsInfo