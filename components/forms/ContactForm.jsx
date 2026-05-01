'use client';

import React from 'react';

const ContactForm = () => {
    return (
        <form className="creative-form">
            <div className="form-group">
                <input type="text" id="name" required placeholder=" " />
                <label htmlFor="name">O seu nome</label>
            </div>

            <div className="form-group">
                <input type="email" id="email" required placeholder=" " />
                <label htmlFor="email">O seu email</label>
            </div>

            <div className="form-group">
                <select id="subject" required defaultValue="">
                    <option value="" disabled>Assunto</option>
                    <option value="website">Website / Loja Online</option>
                    <option value="social">Redes Sociais</option>
                    <option value="ads">Publicidade</option>
                    <option value="other">Outro</option>
                </select>
            </div>

            <div className="form-group">
                <textarea id="message" rows="4" required placeholder=" "></textarea>
                <label htmlFor="message">Fale-nos sobre o seu projeto...</label>
            </div>

            <button type="submit" className="btn btn-primary btn-submit">
                Enviar Mensagem <span className="send-icon">➤</span>
            </button>
        </form>
    );
};

export default ContactForm;
