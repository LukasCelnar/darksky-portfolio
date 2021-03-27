import React from 'react';
import Header from '../Header/Header';
import Button from '../Button/Button';
import './Work.scss';

const works = [
    { imgName: 'dummy-img', techImgName: 'react', heading: 'Apartment Presenation', content: 'Website for Czech company named ms-invest', github: 'https://github.com/LukasCelnar/ApartmentPresentationV2', live: 'http://www.palac-trnita.cz/'},
    { imgName: 'dummy-img', techImgName: 'react', heading: 'Apartment Presenation', content: 'Website for Czech company named ms-invest', github: 'https://github.com/LukasCelnar/ApartmentPresentationV2', live: 'http://www.palac-trnita.cz/'},
    { imgName: 'dummy-img', techImgName: 'react', heading: 'Apartment Presenation', content: 'Website for Czech company named ms-invest', github: 'https://github.com/LukasCelnar/ApartmentPresentationV2', live: 'http://www.palac-trnita.cz/'},
    { imgName: 'dummy-img', techImgName: 'react', heading: 'Apartment Presenation', content: 'Website for Czech company named ms-invest', github: 'https://github.com/LukasCelnar/ApartmentPresentationV2', live: 'http://www.palac-trnita.cz/'},
    { imgName: 'dummy-img', techImgName: 'react', heading: 'Apartment Presenation', content: 'Website for Czech company named ms-invest', github: 'https://github.com/LukasCelnar/ApartmentPresentationV2', live: 'http://www.palac-trnita.cz/'},
    { imgName: 'dummy-img', techImgName: 'react', heading: 'Apartment Presenation', content: 'Website for Czech company named ms-invest', github: 'https://github.com/LukasCelnar/ApartmentPresentationV2', live: 'http://www.palac-trnita.cz/'}
]

const Work = () => {

    const renderImages = () => {
        return works.map(work => {
            return (
                <div className='work__image-container'>
                    <img className='work__image' src={`/images/work/${work.imgName}.png`} alt={work.imgName} />
                    <div className='work__image-hover'>
                        <img className='work__image-hover-tech' src={`/images/tech-icons/${work.techImgName}.png`} alt={work.techImgName} />
                        <div className='work__image-hover-header'>{work.heading}</div>
                        <div className='work__image-hover-content'>{work.content}</div>
                        <div className='work__image-hover-links'>
                            <a href="https://google.com"><img className='work__image-hover-link' src='/images/work/github-white.png' /></a>
                            <a href="https://google.com"><img className='work__image-hover-link' src='/images/work/live-white.png'/></a>
                        </div>
                    </div>
                </div>
            )
            
        })
    };

    return (
        <div className='work'>
           <Header color='#fff' text='Here is my work' />

           <div className='work__images'>
                {renderImages()}
           </div>

           <Button iconPath='/images/work/github-white.png' linkTo='/' text='MORE' color='#fff' hoverIconPath='/images/work/github-black.png' />

           &nbsp;
        </div>
    );
};

export default Work;