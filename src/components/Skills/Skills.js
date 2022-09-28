import React from 'react';
import Header from '../Header/Header';
import './Skills.scss';

const imgNames = [
    'html',
    'css',
    'javascript',
    'python',
    'node',
    'react',
    'redux',
    'mysql',
    'mongo',
    'sass'
]

const Skills = () => {

    const renderImages = () => {
        return imgNames.map((imgName, i) => {
            return <img key={i} className='skills__image' src={`/images/tech-icons/${imgName}.png`} alt={imgName} />
        });
    };

    return (
        <div id='skills' className='skills'>
           <Header color='#fff' text='Here are my skills' />

            <div className='skills__images'>
                {renderImages()}
            </div>

            <Header color='#fff' text='Do you want to know more about my coding experinece?' />

            <a className='button' download href='/images/skills/resume.pdf'>Get CV / Resume</a>
        </div>
    );
};

export default Skills;