import React from 'react';
import css from './ReviewsInfo.module.css';

const ReviewsInfo = ({ review }) => {
    const {author, content} = review
  return (
    <li className={css.item}>
      <h4 className={css.reviewTitle}>Author: <span className={css.reviewTitleAccent}>{author}</span></h4>
      <p className={css.text}>{content}</p>
    </li>
  )
}

export default ReviewsInfo