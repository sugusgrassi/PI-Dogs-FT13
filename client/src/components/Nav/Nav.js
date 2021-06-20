import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Nav.css';
import rocketDog from "../images/rocket-dog.gif";

const Nav = () => {
    return (
        <nav>
            <Link className={"navLinks"} to='/'>
                <h1>Who let the dogs app</h1>
                <img className={"rocketDog"} src={rocketDog} alt="rocket dog"/>
            </Link>
            <NavLink className={"navLinks"} exact={true} activeClassName='is-active' to='/dogs'>Escaped Dogs</NavLink>
            {/* <Link to='/temperaments'>Find Dog by temperament</Link> */}
            <NavLink className={"navLinks"} exact={true} activeClassName='is-active' to='/add'>Add a wanted dog</NavLink>
        </nav>
    )
}

export default Nav;