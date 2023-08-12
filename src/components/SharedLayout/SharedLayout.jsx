import React, { Suspense } from 'react'
import { NavLink, Outlet } from 'react-router-dom';

import mainBackground from '../../images/rows-red-seats-theater.jpg';
import css from './SharedLayout.module.css'

const SharedLayout = () => {
    return (
        <div className={css.container}>
            <nav className={css.header}>
                <NavLink to='/' className={({isActive}) => isActive ? css.active : css.link}>Home</NavLink>
                <NavLink to='/movies' className={({isActive}) => isActive ? css.active : css.link}>Movies</NavLink>
            </nav>
            <div className={css.background} style={{ backgroundImage: `url(${mainBackground})` }}></div>
            <div className={css.content}>
                <Suspense>
                    <Outlet/>
                </Suspense>
            </div>
        </div>
    );
};

export default SharedLayout