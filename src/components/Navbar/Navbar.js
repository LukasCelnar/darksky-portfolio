import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
    const [toggleBtn, setToggleBtn] = useState(false);

    const onHamburgerMenuClick = () => {
        setToggleBtn(!toggleBtn);
    };

    return (
        <div className='navbar'>
            <img className='navbar__logo' src='/images/navbar/lc-logo.png' />
            <div className='navbar__items'>
                <Link to='/' className='navbar__item'>Home</Link>
                <Link to='/' className='navbar__item'>Work</Link>
                <Link to='/' className='navbar__item'>About</Link>
                <Link to='/' className='navbar__item'>Contact</Link>
            </div>
            <div className='navbar__hamburger' onClick={() => onHamburgerMenuClick()}>
                <div className='navbar__hamburger-bar'></div>
                <div className='navbar__hamburger-bar'></div>
                <div className='navbar__hamburger-bar'></div>
            </div>
            <div className={`navbar__hamburger-bg ${toggleBtn ? 'navbar__hamburger-bg-show' : 'navbar__hamburger-bg-hide'}`}></div>
            <div className={`navbar__hamburger-items navbar__hamburger-items-show ${toggleBtn ? 'navbar__hamburger-items-show' : 'navbar__hamburger-items-hide'}`}>
                <div className='navbar__hamburger-item'>Home</div>
                <div className='navbar__hamburger-item'>Work</div>
                <div className='navbar__hamburger-item'>About</div>
                <div className='navbar__hamburger-item'>Contact</div>
            </div>
        </div>
    );
};

export default Navbar;