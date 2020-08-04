import React from 'react';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css'

function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Your e-learning platform.</h2>
                </div>

                <img src={landingImg} alt="E-learning platform" className="hero-image"/>

                <div className="buttons-container">
                    <a href="" className="study">
                        <img src={studyIcon} alt="Study"/>
                        Study
                    </a>

                    <a href="" className="give-classes">
                        <img src={giveClassesIcon} alt="Teach"/>
                        Teach
                    </a>
                </div>

                <span className="total-connections">
                    Total of 200 connections already made <img src={purpleHeartIcon} alt="Purple heart"/>
                </span>
            </div>
        </div>
    )
}

export default Landing;