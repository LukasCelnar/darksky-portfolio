import React from 'react';
import Header from '../Header/Header';
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
           <Header color='#070707' text='Here is my work' />

           <div className='work__images'>
                {renderImages()}
           </div>

           GAP
        </div>
    );
};

export default Work;