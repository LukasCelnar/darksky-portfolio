import React from 'react';
import Header from '../Header/Header';
import Button from '../Button/Button';
import './Work.scss';

const works = [
    { imgName: 'dummy-img', techImgName: 'react', heading: 'MS-invest', content: 'Website for Czech company named ms-invest', github: 'https://github.com/LukasCelnar/ApartmentPresentationV2', live: 'http://www.palac-trnita.cz/'},
    { imgName: 'traplifetattoo', techImgName: 'react', heading: 'Traplifetattoo', content: 'Website for Czech tattoo shop ', github: 'https://github.com/LukasCelnar/traplifetattoo', live: 'https://traplifetattoo.netlify.app/'},
    { imgName: 'linux-terminal', techImgName: 'react', heading: 'Linux Terminal', content: 'Website that simulates most used reallife linux terminal commands', github: 'https://github.com/LukasCelnar/LinuxTerminal', live: 'https://linux-terminal.netlify.app/'},
    { imgName: 'malaria-detection', techImgName: 'python', heading: 'Malaria Detection', content: 'AI that predicts if human cell is parasitised by malaria or not', github:'https://github.com/LukasCelnar/MalariaDetection' ,live: ''},
    { imgName: 'wbc', techImgName: 'python', heading: 'WBC Detection', content: 'AI that detects type of white blood cell with 95% accuracy', github: 'https://github.com/LukasCelnar/wbc-detection', live: ''},
    { imgName: 'greenify', techImgName: 'javascript', heading: 'Greenify', content: 'Google maps extension that calculates emissions of your route', github: '', live: 'https://chrome.google.com/webstore/detail/greenify/abkdcchpgcnpeliambllmncflldaghop'},
]

const Work = () => {

    const renderImages = () => {
        return works.map((work, i) => {
            return (
                <div key={i} className='work__image-container'>
                    <img className='work__image' src={`/images/work/${work.imgName}.png`} alt={work.imgName} />
                    <div className='work__image-hover'>
                        <img className='work__image-hover-tech' src={`/images/tech-icons/${work.techImgName}.png`} alt={work.techImgName} />
                        <div className='work__image-hover-header'>{work.heading}</div>
                        <div className='work__image-hover-content'>{work.content}</div>
                        <div className='work__image-hover-links'>
                            {work.github ? <a href={work.github}><img className='work__image-hover-link' src='/images/work/github-white.png' alt='github-logo' /></a> : null}
                            <a href={work.live} style={work.live ? {} : {display: 'none'}}><img className='work__image-hover-link' src='/images/work/live-white.png' alt='live-logo'/></a>
                        </div>
                    </div>
                </div>
            )
            
        })
    };

    return (
        <div id='work' className='work'>
           <Header color='#fff' text='Here is my work' />

           <div className='work__images'>
                {renderImages()}
           </div>

           <Button iconPath='/images/work/github-white.png' linkTo='https://github.com/LukasCelnar' text='MORE' color='#fff' hoverIconPath='/images/work/github-black.png' />

           &nbsp;
        </div>
    );
};

export default Work;