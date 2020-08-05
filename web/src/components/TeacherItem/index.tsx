import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './style.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://e4e.org/sites/default/files/2014.11.12.NY_.Patrick_Sprinkle.sq_.jpg" alt="Teacher Name" />
                <div>
                    <strong>Teacher Name</strong>
                    <span>Quimica</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de quimica avançada.
                <br /><br />
                Apaixonado por explodir coisas em laboratorio epor mudar a vida das pessoas atraves de experiencias.
            </p>

            <footer>
                <p>
                    Price by time
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Call me
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem