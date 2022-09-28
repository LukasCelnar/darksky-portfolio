import React from 'react';
import './AboutMe.scss';

const AboutMe = () => {
    return (
        <div id='about' className='aboutme'>
           <div className='aboutme__header aboutme__first-header'>Do you want to know more about me?</div>
           <div className='aboutme__content'>
                Hi, my name is Lukas Celnar, I'm 19 years old college student. Currently studying business after completing my high school diploma in cyber security. I started coding when I was 16 with a great passion for creating things. My dream is to be part of something big.
            </div>
            <div className='aboutme__header aboutme__second-header'>Get in touch</div>
            <div className='aboutme__content'>
                Best way to contact me is through gmail {'>>>'} celnar.lukas@gmail.com
            </div>

            <div className='aboutme__copyright'>© Copyright - Lukas Celnar 2021</div>
        </div>
    );
};

export default AboutMe;