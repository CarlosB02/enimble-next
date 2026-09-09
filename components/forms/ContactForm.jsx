'use client';

import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = ({ defaultSubject = "" }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState(defaultSubject);
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, phone, subject, message }),
            });

            const data = await res.json();

            if (res.ok && data.success) {
                setIsSubmitted(true);
                setName('');
                setEmail('');
                setPhone('');
                setMessage('');
            } else {
                alert(data.error || 'Erro ao enviar mensagem. Por favor tente novamente.');
            }
        } catch (err) {
            console.error('Erro de submissão:', err);
            alert('Ocorreu um erro ao enviar a mensagem. Por favor tente novamente.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <span style={{ fontSize: '3rem' }}>✅</span>
                <h3 style={{ margin: '1rem 0 0.5rem', color: '#10b981' }}>Mensagem Enviada!</h3>
                <p style={{ color: '#64748b' }}>Obrigado pelo seu contacto. Responderemos o mais brevemente possível.</p>
                <button
                    type="button"
                    className="btn btn-primary"
                    style={{ marginTop: '1.5rem' }}
                    onClick={() => setIsSubmitted(false)}
                >
                    Enviar outra mensagem
                </button>
            </div>
        );
    }

    return (
        <form className="creative-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <input
                    type="text"
                    id="name"
                    required
                    placeholder=" "
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="name">Nome</label>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <input
                        type="email"
                        id="email"
                        required
                        placeholder=" "
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="email">Email</label>
                </div>

                <div className="form-group">
                    <input
                        type="tel"
                        id="phone"
                        required
                        placeholder=" "
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <label htmlFor="phone">Telemóvel</label>
                </div>
            </div>

            <div className="form-group">
                <select
                    id="subject"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                >
                    <option value="" disabled>Assunto</option>
                    <option value="website">Website / Loja Online</option>
                    <option value="social">Redes Sociais</option>
                    <option value="ads">Publicidade</option>
                    <option value="other">Outro</option>
                </select>
            </div>

            <div className="form-group">
                <textarea
                    id="message"
                    rows="2"
                    placeholder=" "
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <label htmlFor="message">Fale-nos sobre o seu projeto (Opcional)...</label>
            </div>

            <button
                type="submit"
                className="btn btn-primary btn-submit"
                disabled={isSubmitting}
                style={{ opacity: isSubmitting ? 0.7 : 1 }}
            >
                {isSubmitting ? 'A enviar...' : <>Enviar Mensagem <span className="send-icon">➤</span></>}
            </button>
        </form>
    );
};

export default ContactForm;
