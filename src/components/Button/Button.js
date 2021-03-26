import React from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';

const Button = ({ text, linkTo, color, iconPath }) => {
    // <Link className='button__text' to={linkTo} style={{color, borderColor: color}}>{text}</Link>
    return (
        <div className='button' style={{color, borderColor: color}}>
            {iconPath ? <img className='button__icon' src={iconPath} alt='button-icon' /> : null}
            <div className='button__text'>
                {text}
            </div>
        </div>
    );
};

export default Button;