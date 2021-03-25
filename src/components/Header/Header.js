import React from 'react';
import './Header.scss';

const Header = ({ text }) => {
    return (
        <div className='header'>
           <div className='header__text'>{text}</div>
           <div className='header__underline'></div>
        </div>
    );
};

export default Header;