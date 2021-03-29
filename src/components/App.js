import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutMe from './AboutMe/AboutMe';
import LandingPage from './LandingPage/LandingPage';
import Work from './Work/Work';
import Skills from './Skills/Skills';
import history from '../history';
import './App.scss';

const App = () => {
    const scrollWidthOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: yCoordinate, behavior: 'smooth' }); 
    }

    return (
        <Router history={history}>
            <Switch>
                <Route path='/' exact>
                    <LandingPage scrollWidthOffsetProp={scrollWidthOffset} />
                    <Skills />
                    <Work />
                    <AboutMe />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;