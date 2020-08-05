import React from 'react';
import { Link } from 'react-router-dom';

import './style.css'

import logoImg from '../../../assets/images/logo.svg';
import backIcon from '../../../assets/images/icons/back.svg';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <header className="page-header">
                <div className="top-bar-container">
                    <Link to="/">
                        <img src={backIcon} alt="Back"/>
                    </Link>
                    <img src={logoImg} alt="Proffy"/>
                </div>

                <div className="header-content">
                    <strong>These are the available proffies.</strong>
                </div>
            </header>
        </div>
    );
}

export default TeacherList;