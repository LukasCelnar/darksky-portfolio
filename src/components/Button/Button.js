import React from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';

const Button = ({ text, linkTo, color, iconPath, hoverIconPath, handleClick }) => {
    const renderContent = () => {
        return (
            <>
                {iconPath && hoverIconPath ? <img className='button__icon' src={iconPath} alt='button-icon' /> : null}
                {iconPath && hoverIconPath ? <img className='button__icon button__icon-hover' src={hoverIconPath} alt='button-icon' /> : null}
                <div className='button__text'>
                    {text}
                </div>
            </>
        )
    }
    // <Link className='button__text' to={linkTo} style={{color, borderColor: color}}>{text}</Link>
    return (
        <>
            {linkTo[0] !== '/' ? <a href={linkTo} className='button' style={{color, borderColor: color}}>{renderContent()}</a> : <Link onClick={() => handleClick()} to={linkTo} className='button' style={{color, borderColor: color}}>{renderContent()}</Link>}
        </>
    );
};

export default Button;