import React from 'react';
import Header from '../Header/Header';
import Button from '../Button/Button';
import './Skills.scss';

const imgNames = [
    'react',
    'react',
    'react',
    'react',
    'react',
    'react',
    'react',
    'react',
    'react',
    'react'
]

const Skills = () => {

    const renderImages = () => {
        return imgNames.map(imgName => {
            return <img className='skills__image' src={`/images/skills/${imgName}.png`} alt={imgName} />
        });
    };

    return (
        <div className='skills'>
           <Header color='#fff' text='Here are my skills' />

            <div className='skills__images'>
                {renderImages()}
            </div>

            <Header color='#fff' text='Do you want to know more about my coding experinece?' />
            <Button linkTo='/' text='GET RESUME / CV' />
        </div>
    );
};

export default Skills;