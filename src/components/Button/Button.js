import React from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';

const Button = ({ text, linkTo, color }) => {
    // <Link className='button__text' to={linkTo} style={{color, borderColor: color}}>{text}</Link>
    return (
        <div className='button'>
            <div className='button__text' style={{color, borderColor: color}}>{text}</div>
        </div>
    );
};

export default Button;