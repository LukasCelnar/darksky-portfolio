import React from 'react';
import './Header.scss';

const Header = ({ text, color }) => {
    return (
        <div className='header'>
           <div className='header__text' style={{color}}>{text}</div>
           <div className='header__underline' style={{backgroundColor: color}}></div>
        </div>
    );
};

export default Header;