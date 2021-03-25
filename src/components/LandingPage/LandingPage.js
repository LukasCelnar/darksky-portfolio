import React from 'react';
import './LandingPage.scss';
import Navbar from '../Navbar/Navbar';

const LandingPage = () => {

    return (
        <div className='landingpage'>
            <Navbar />

           <div className='landingpage__main'>
                <div className='landingpage__main-header'>

                </div>
                <div className='landingpage__main-text'>

                </div>
           </div>

            <img className='landingpage__scroll' src='/images/skills/scroll.png' alt='scroll' />
        </div>
    );
};

export default LandingPage;