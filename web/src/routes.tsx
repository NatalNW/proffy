import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import TeacherForm from './pages/Teacher/Form';
import TeacherList from './pages/Teacher/List';

function Routes() {
    return (
        <BrowserRouter>
            <Route path='/' exact component={Landing} />
            <Route path='/study' component={TeacherList} />
            <Route path='/teach' component={TeacherForm} />
        </BrowserRouter>
    );
}

export default Routes;