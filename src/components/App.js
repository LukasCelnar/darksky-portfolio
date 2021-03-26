import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutMe from './AboutMe/AboutMe';
import Button from './Button/Button';
import Contact from './Contact/Contact';
import Header from './Header/Header';
import LandingPage from './LandingPage/LandingPage';
import Navbar from './Navbar/Navbar';
import Work from './Work/Work';
import Skills from './Skills/Skills';
import './App.scss';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact>
                    <LandingPage />
                    <Skills />
                    <Work />
                    <AboutMe />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;