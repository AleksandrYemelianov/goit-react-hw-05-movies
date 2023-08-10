import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

import { fetchSearchStringMovie } from 'service/apiMovieDB';
import { MdScreenSearchDesktop } from 'react-icons/md';
import { toast } from 'react-toastify';

import css from './Searchbar.module.css';
import optionNotification from 'components/Notification/Notification'
import 'react-toastify/dist/ReactToastify.css';

const Searchbar = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    
  return (
    <header className={css.searchbar}>
      <form onSubmit={handleSubmit} className={css.searchForm}>
        <button type="submit" className={css.searchFormBtn}>
          <span className={css.btnLabel}><MdScreenSearchDesktop className={css.iconSearch} /></span>
        </button>

        <input
            className={css.input}
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search of favorite film"
        //   value={value}
        //   onChange={handleChange}
        />
      </form>
    </header>
  );
};


export default Searchbar;