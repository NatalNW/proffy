import React from 'react';
import PageHeader from '../../../components/PageHeader';
import Input from '../../../components/Input';

import warningIcon from '../../../assets/images/icons/warning.svg';
import './style.css'

function TeacherForm() {
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
                </fieldset>
                <fieldset>
                    <legend>About the class</legend>
                    <Input name="subject" label="Subject" />
                    <Input name="cost" label="Class price per time" />
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