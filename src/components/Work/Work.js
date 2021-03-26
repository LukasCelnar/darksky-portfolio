import React from 'react';
import Header from '../Header/Header';
import Button from '../Button/Button';
import './Work.scss';

const imgNames = [
    'dummy-img',
    'dummy-img',
    'dummy-img',
    'dummy-img',
    'dummy-img',
    'dummy-img'
]

const Work = () => {

    const renderImages = () => {
        return imgNames.map(imgName => {
            return <img className='work__image' src={`/images/work/${imgName}.png`} alt={imgName} />
        })
    };

    return (
        <div className='work'>
           <Header color='#fff' text='Here is my work' />

           <div className='work__images'>
                {renderImages()}
           </div>

           <Button iconPath='/images/work/github.png' linkTo='/' text='MORE' color='#fff' />
           
           &nbsp;
        </div>
    );
};

export default Work;