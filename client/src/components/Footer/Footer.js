import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div />
            <div >
                <span className="">Made with ♡ by <a href="https://sugusgrassi.github.io/cv_soyhenry/" target="blank" className="">@sugusgrassi</a></span>
                <Link to="/about">
                <span className="">About</span>
                </Link>
            </div>
        </div>
    )
}

export default Footer