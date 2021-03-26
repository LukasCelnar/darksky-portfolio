import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
    return (
        <div className='navbar'>
           <img className='navbar__logo' src='/images/navbar/lc-logo.png' />
           <div className='navbar__items'>
                <Link to='/' className='navbar__item'>Home</Link>
                <Link to='/' className='navbar__item'>Work</Link>
                <Link to='/' className='navbar__item'>About</Link>
                <Link to='/' className='navbar__item'>Contact</Link>
           </div>
        </div>
    );
};

export default Navbar;