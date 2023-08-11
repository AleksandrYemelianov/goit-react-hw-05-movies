import React from 'react'
import { MdScreenSearchDesktop } from 'react-icons/md';
import css from './Searchbar.module.css';

const Searchbar = ({ onSubmit, value }) => {

    return (
        <header className={css.searchbar}>
        <form  onSubmit={onSubmit} className={css.searchForm}>
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
                defaultValue={value}
            />
        </form>
        </header>
    );
};


export default Searchbar;