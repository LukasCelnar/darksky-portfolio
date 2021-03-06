import React, { useState } from 'react';
import Header from '../Header/Header';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
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
    const [showResumeModal, setShowResumeModal] = useState(false)

    const onResumeButtonClick = () => {
        setShowResumeModal(true)
    }

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

            <Button handleClick={onResumeButtonClick} linkTo='/' text='GET RESUME / CV' color='#fff' />
            <Modal showModal={showResumeModal} setShowModal={setShowResumeModal}>
                <object data={`/images/skills/dummy-pdf.pdf#view=Fit`} type='application/pdf' width='100%' height='100%'>
                    <a download='/images/skills/dummy-pdf.pdf' href='/images/skills/dummy-pdf.pdf'>
                        <img className='skills__pdf-error' src='/images/skills/pdf-download-white.png' alt='pdf-error'/>
                    </a>
                </object>
            </Modal>
            
        </div>
    );
};

export default Skills;