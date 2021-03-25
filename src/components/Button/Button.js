import React from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';

const Button = ({ text, linkTo }) => {
    return (
        <div className='button'>
           <Link className='button__text' to={linkTo}>{text}</Link>
        </div>
    );
};

export default Button;