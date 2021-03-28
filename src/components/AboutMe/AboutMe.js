import React, { useState } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import Contact from '../Contact/Contact'
import './AboutMe.scss';

const AboutMe = () => {
    const [showContactModal, setShowContactModal] = useState(false)

    const onResumeButtonClick = () => {
        setShowContactModal(true)
    }

    return (
        <div id='about' className='aboutme'>
           <div className='aboutme__header aboutme__first-header'>Do you want to know more about me ?</div>
           <div className='aboutme__content'>
                Hey, Im Lukas Celnar, im 18 years old cybersecurity student.
                I started coding when i was 16 with a big passion in creating stuff with code. 
                My dream is to be part of something big.
            </div>
            <div className='aboutme__header aboutme__second-header'>Interested in collaboration ?</div>
            <div className='aboutme__content'>
                If you liked my projects and you would want me to create 
                your dream projects you can contact me 
                through email or any social media with the links bellow
            </div>

            <Button handleClick={onResumeButtonClick} text='CONTACT ME' color='#fff' linkTo='/' />
            <Modal showModal={showContactModal} setShowModal={setShowContactModal}>
                <Contact />
            </Modal>

            <div className='aboutme__copyright'>© Copyright - Lukas Celnar 2021</div>
        </div>
    );
};

export default AboutMe;