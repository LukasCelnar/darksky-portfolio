import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Navbar.scss';

const Navbar = ({ scrollWidthOffsetProp }) => {
    const [toggleBtn, setToggleBtn] = useState(false);

    const onHamburgerMenuClick = () => {
        setToggleBtn(!toggleBtn);
    };

    return (
        <div className='navbar'>
            <img className='navbar__logo' src='/images/navbar/lc-logo.png' />
            <div className='navbar__items'>
                <Link scroll={scrollWidthOffsetProp} to='/#main' className='navbar__item'>Home</Link>
                <Link scroll={scrollWidthOffsetProp} to='/#skills' className='navbar__item'>Skills</Link>
                <Link scroll={scrollWidthOffsetProp} to='/#work' className='navbar__item'>Work</Link>
                <Link scroll={scrollWidthOffsetProp} to='/#about' className='navbar__item'>About</Link>
            </div>
            <div className='navbar__hamburger' onClick={() => onHamburgerMenuClick()}>
                <div className='navbar__hamburger-bar'></div>
                <div className='navbar__hamburger-bar'></div>
                <div className='navbar__hamburger-bar'></div>
            </div>
            <div className={`navbar__hamburger-bg ${toggleBtn ? 'navbar__hamburger-bg-show' : 'navbar__hamburger-bg-hide'}`}></div>
            <div className={`navbar__hamburger-items navbar__hamburger-items-show ${toggleBtn ? 'navbar__hamburger-items-show' : 'navbar__hamburger-items-hide'}`}>
                <div className='navbar__hamburger-item'>Home</div>
                <div className='navbar__hamburger-item'>Skills</div>
                <div className='navbar__hamburger-item'>Work</div>
                <div className='navbar__hamburger-item'>About</div>
            </div>
        </div>
    );
};

export default Navbar;