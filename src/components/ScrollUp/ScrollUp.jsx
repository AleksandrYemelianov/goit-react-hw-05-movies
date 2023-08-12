import React from 'react';
import { MdSwipeUp } from 'react-icons/md';
import css from './ScrollUp.module.css'

const ScrollUp = () => {
  return (
    <div className={css.scrollUpWrap}>
        <MdSwipeUp className={css.scrollUpIcon}/>
    </div>
  )
}

export default ScrollUp