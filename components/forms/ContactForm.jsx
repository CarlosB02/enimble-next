'use client';

import React from 'react';
import './ContactForm.css';

const ContactForm = ({ defaultSubject = "" }) => {
    return (
        <form className="creative-form">
            <div className="form-group">
                <input type="text" id="name" required placeholder=" " />
                <label htmlFor="name">Nome</label>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <input type="email" id="email" required placeholder=" " />
                    <label htmlFor="email">Email</label>
                </div>

                <div className="form-group">
                    <input type="tel" id="phone" required placeholder=" " />
                    <label htmlFor="phone">Telemóvel</label>
                </div>
            </div>

            <div className="form-group">
                <select id="subject" required defaultValue={defaultSubject}>
                    <option value="" disabled>Assunto</option>
                    <option value="website">Website / Loja Online</option>
                    <option value="social">Redes Sociais</option>
                    <option value="ads">Publicidade</option>
                    <option value="other">Outro</option>
                </select>
            </div>

            <div className="form-group">
                <textarea id="message" rows="1" placeholder=" "></textarea>
                <label htmlFor="message">Fale-nos sobre o seu projeto (Opcional)...</label>
            </div>

            <button type="submit" className="btn btn-primary btn-submit">
                Enviar Mensagem <span className="send-icon">➤</span>
            </button>
        </form>
    );
};

export default ContactForm;
