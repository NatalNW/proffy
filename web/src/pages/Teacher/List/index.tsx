import React, { useState, FormEvent } from 'react';
import PageHeader from '../../../components/PageHeader';
import TeacherItem, { Teacher } from '../../../components/TeacherItem';
import Input from '../../../components/Input';
import Select from '../../../components/Select';

import './style.css'
import api from '../../../services/api';

const TeacherList: React.FC<Teacher> = ({id}) => {
    const [teachers, setTeachers] = useState([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    async function searchTeachers(e: FormEvent){
        e.preventDefault();

        const res = await api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }            
        });

        setTeachers(res.data);
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="These are the available proffies.">
                <form action="" id="search-teachers" onSubmit={searchTeachers}>
                    <Select
                        name="subject"
                        label="Subject"
                        value={subject}
                        onChange={e => { setSubject(e.target.value) }}
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
                        value={week_day}
                        onChange={e => { setWeekDay(e.target.value) }}
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
                    <Input 
                        type="time" 
                        name="time" 
                        label="Time" 
                        value={time}
                        onChange={e => { setTime(e.target.value) }}
                    />
                    
                    <button type='submit'>
                        Search Teachers
                    </button>
                </form>
            </PageHeader>

            <main>
                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher} />
                })}
            </main>
        </div>
    );
}

export default TeacherList;