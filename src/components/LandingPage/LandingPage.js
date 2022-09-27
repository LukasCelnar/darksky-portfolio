import React from 'react';
import './LandingPage.scss';
import { HashLink as Link } from 'react-router-hash-link';
import Navbar from '../Navbar/Navbar';

const LandingPage = ({ scrollWidthOffsetProp }) => {

    return (
        <div id='main' className='landingpage' style={{backgroundImage: 'url(/images/landing-page/bg.png)'}}>
            <Navbar scrollWidthOffsetProp={scrollWidthOffsetProp} />

           <div className='landingpage__main'>
                <div className='landingpage__main-header'>
                    Hey, I’m Lukas
                </div>
                <div className='landingpage__main-header-underline'></div>
                <div className='landingpage__main-text'>
                    I love coding and building software that can do amazing things.
                </div>
           </div>

            <Link to='/#skills' scroll={scrollWidthOffsetProp}><img className='landingpage__scroll' src='/images/landing-page/scroll.png' alt='scroll' /></Link>
        </div>
    );
};

export default LandingPage;