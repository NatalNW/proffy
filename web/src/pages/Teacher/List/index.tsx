import React from 'react';
import PageHeader from '../../../components/PageHeader';

import './style.css'

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="These are the available proffies.">
                <form action="" id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="week_day">Week Day</label>
                        <input type="text" id="week_day"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="time">Time</label>
                        <input type="text" id="time"/>
                    </div>
                </form>
            </PageHeader>
        </div>
    );
}

export default TeacherList;