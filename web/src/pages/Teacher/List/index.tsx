import React from 'react';
import PageHeader from '../../../components/PageHeader';
import TeacherItem from '../../../components/TeacherItem';
import Input from '../../../components/Input';
import Select from '../../../components/Select';

import './style.css'

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="These are the available proffies.">
                <form action="" id="search-teachers">
                    <Select
                        name="subject"
                        label="Subject"
                        options={[
                            { value: 'Philosophy', label: 'Philosophy' },
                            { value: 'Biology', label: 'Biology' },
                            { value: 'Arts', label: 'Arts' },
                            { value: 'Algorithms', label: 'Algorithms' },
                            { value: 'Math', label: 'Math' },
                            { value: 'History', label: 'History' },
                            { value: 'Geography', label: 'Geography' },
                            { value: 'Physics', label: 'Physics' },
                        ]}
                    />
                    <Select
                        name="week_day"
                        label="Week Day"
                        options={[
                            { value: '0', label: 'Monday' },
                            { value: '1', label: 'Tuesday' },
                            { value: '2', label: 'Wednesday' },
                            { value: '3', label: 'Thursday' },
                            { value: '4', label: 'Friday' },
                            { value: '5', label: 'Saturday' },
                            { value: '6', label: 'Sunday' },
                        ]}
                    />
                    <Input type="time" name="time" label="Time" />
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
            </main>
        </div>
    );
}

export default TeacherList;