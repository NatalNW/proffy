import React, { useState } from 'react';
import PageHeader from '../../../components/PageHeader';
import Input from '../../../components/Input';

import warningIcon from '../../../assets/images/icons/warning.svg';
import './style.css'
import Textarea from '../../../components/TextArea';
import Select from '../../../components/Select';

function TeacherForm() {
    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' },
    ]);

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ]);
    }

    return (
        <div id="page-teacher-form">
            <PageHeader
                title="Congrats to want to give classes!"
                description="The first step is fill out this form"
            />

            <main>
                <fieldset>
                    <legend>Your data</legend>
                    <Input name="name" label="Full Name" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="Whatsapp" />
                    <Textarea name="bio" label="Biography" />
                </fieldset>
                <fieldset>
                    <legend>About the class</legend>
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
                    <Input name="cost" label="Class price per time" />
                </fieldset>

                <fieldset>
                    <legend>
                        Available Times
                        <button type="button" onClick={addNewScheduleItem}>
                            + New Time
                        </button>
                    </legend>

                    {scheduleItems.map(scheduleItem => {
                        return (
                            <div key={scheduleItem.week_day} className="schedule-item">
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
                                <Input name="from" label="From" type="time" />
                                <Input name="to" label="To" type="time" />
                            </div>
                        );
                    })}
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Warning" />
                        Pay attention! <br />
                        Fill in all the data
                    </p>
                    <button type="button">
                        Save
                    </button>
                </footer>
            </main>
        </div>
    )
}

export default TeacherForm;