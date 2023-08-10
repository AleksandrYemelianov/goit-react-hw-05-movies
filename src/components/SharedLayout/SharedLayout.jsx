import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const SharedLayout = () => {
    return (
        <div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/movies'>Movies</Link>
            </nav>
            <Outlet/>
        </div>
    );
};

export default SharedLayout