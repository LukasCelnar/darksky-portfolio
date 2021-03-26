import React from 'react';
import './LandingPage.scss';
import Navbar from '../Navbar/Navbar';

const LandingPage = () => {

    return (
        <div className='landingpage' style={{backgroundImage: 'url(/images/landing-page/bg.png)'}}>
            

           <div className='landingpage__main'>
                <div className='landingpage__main-header'>
                    Hey, I’m Lukas
                </div>
                <div className='landingpage__main-header-underline'></div>
                <div className='landingpage__main-text'>
                    Im passionate about coding and building software that can do amazing things.
                    My life goal is to be part of something big.
                </div>
           </div>

            <img className='landingpage__scroll' src='/images/landing-page/scroll.png' alt='scroll' />
        </div>
    );
};

export default LandingPage;