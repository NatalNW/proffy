import React, { useState, FormEvent } from 'react';
import PageHeader from '../../../components/PageHeader';
import Input from '../../../components/Input';
import Textarea from '../../../components/TextArea';
import Select from '../../../components/Select';

import warningIcon from '../../../assets/images/icons/warning.svg';
import './style.css'
import api from '../../../services/api';

function TeacherForm() {
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');
    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' },
    ]);

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ]);
    }

    function setScheduleItemValue(position: number, field: string, value: string){
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) =>{
            if (index === position){
                return { ...scheduleItem, [field]: value }
            }

            return scheduleItem;
        });

        setScheduleItems(updatedScheduleItems);
    }

    function handleCreateClass(fe: FormEvent) {
        fe.preventDefault();

        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(() => {
            alert('Saved successfully!');
        }).catch(() => {
            alert(' Occurred an error!');
        })
    }

    return (
        <div id="page-teacher-form">
            <PageHeader
                title="Congrats to want to give classes!"
                description="The first step is fill out this form"
            />

            <main>
                <form onSubmit={handleCreateClass}> 
                    <fieldset>
                        <legend>Your data</legend>
                        <Input name="name" label="Full Name" value={name} onChange={(event) => { setName(event.target.value) }} />
                        <Input name="avatar" label="Avatar" value={avatar} onChange={(event) => { setAvatar(event.target.value) }} />
                        <Input name="whatsapp" label="Whatsapp" value={whatsapp} onChange={(event) => { setWhatsapp(event.target.value) }} />
                        <Textarea name="bio" label="Biography" value={bio} onChange={(event) => { setBio(event.target.value) }} />
                    </fieldset>
                    <fieldset>
                        <legend>About the class</legend>
                        <Select
                            name="subject"
                            label="Subject"
                            value={subject}
                            onChange={(event) => { setSubject(event.target.value) }}
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
                        <Input name="cost" label="Class price per time" value={cost} onChange={(event) => { setCost(event.target.value) }} />
                    </fieldset>

                    <fieldset>
                        <legend>
                            Available Times
                        <button type="button" onClick={addNewScheduleItem}>
                                + New Time
                        </button>
                        </legend>

                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                                <div key={scheduleItem.week_day} className="schedule-item">
                                    <Select
                                        name="week_day"
                                        label="Week Day"
                                        value={scheduleItem.week_day}
                                        onChange={(event) => setScheduleItemValue(index, 'week_day', event.target.value)}
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
                                    <Input name="from" label="From" type="time" value={scheduleItem.from} onChange={(event) => setScheduleItemValue(index, 'from', event.target.value)} />
                                    <Input name="to" label="To" type="time" value={scheduleItem.to} onChange={(event) => setScheduleItemValue(index, 'to', event.target.value)} />
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
                        <button type="submit">
                            Save
                    </button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm;