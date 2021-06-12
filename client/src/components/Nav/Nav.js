import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <Link to='/dogs'>Henry Dogs</Link>
            <Link to='/find'>Find Dog</Link>
            <Link to='/add'>Add Dog</Link>
        </nav>
    )
}

export default Nav;