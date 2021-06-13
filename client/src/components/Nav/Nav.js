import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <Link to='/dogs'>Henry Dogs</Link>
            <Link to='/temperaments'>Find Dog by temperament</Link>
            <Link to='/add'>Add Dog</Link>
        </nav>
    )
}

export default Nav;