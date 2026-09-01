'use client';

import React, { useState } from 'react';
import '@/app/Contactos.css';

const ContactSection = () => {
    // Form inputs state
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    // Interactive states
    const [coffeeType, setCoffeeType] = useState('pingado'); // 'expresso' | 'pingado' | 'duplo'

    // Submission states
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Form submission handler
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);

            // Clean inputs
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
        }, 1800);
    };

    const handleReset = () => {
        setIsSubmitted(false);
        setCoffeeType('pingado');
    };

    return (
        <section id="contactos" className="contact-section">
            <div className="container">
                <div className="contacts-wrapper light-theme-contacts">
                    {/* LEFT COLUMN: Branding & Info */}
                    <div className="contact-info-panel reveal">
                        <h2 className="info-title" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
                            Vamos <span className="gradient-text">Conversar?</span> <img src="/assets/coffee.webp" alt="Café" className="emoji-icon png-emoji" style={{ width: '0.9em', height: '0.9em' }} />
                        </h2>
                        <p className="info-desc">
                            Agende uma reunião presencial ou online e descubra como podemos ajudar a fazer crescer o seu negócio.
                        </p>

                        <div className="info-details">
                            <div className="info-card">
                                <span className="info-card-icon">📧</span>
                                <div>
                                    <strong>Enviar email</strong>
                                    <a href="mailto:geral@enimble.pt">geral@enimble.pt</a>
                                </div>
                            </div>

                            <div className="info-card">
                                <span className="info-card-icon">📱</span>
                                <div>
                                    <strong>Ligar ou WhatsApp</strong>
                                    <a href="tel:+351912163485">912 163 485</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Contact Form with integrated Coffee Machine */}
                    <div className="glass-panel light-contacts-card reveal delay-1">
                        {!isSubmitted ? (
                            <form onSubmit={handleSubmit} className="creative-form-v2">

                                {/* Integrated Coffee selector at form header */}
                                <div className="coffee-form-header">
                                    <div>
                                        <h4 className="form-heading">Como toma o seu café?</h4>
                                        <div className="coffee-row-selector">
                                            <button
                                                type="button"
                                                className={`coffee-row-btn ${coffeeType === 'expresso' ? 'active' : ''}`}
                                                onClick={() => setCoffeeType('expresso')}
                                            >
                                                Curto ☕
                                            </button>
                                            <button
                                                type="button"
                                                className={`coffee-row-btn ${coffeeType === 'pingado' ? 'active' : ''}`}
                                                onClick={() => setCoffeeType('pingado')}
                                            >
                                                Pingado 🥛
                                            </button>
                                            <button
                                                type="button"
                                                className={`coffee-row-btn ${coffeeType === 'duplo' ? 'active' : ''}`}
                                                onClick={() => setCoffeeType('duplo')}
                                            >
                                                Duplo ☕☕
                                            </button>
                                        </div>
                                    </div>

                                    {/* Coffee Cup Visual */}
                                    <div className="coffee-cup-container-v2">
                                        <div className="coffee-cup-widget">
                                            <div className="cup-smoke-group">
                                                <span className="smoke-line"></span>
                                                <span className="smoke-line"></span>
                                                <span className="smoke-line"></span>
                                            </div>
                                            <div className={`cup-liquid-flow ${coffeeType}`}>
                                                <span className="liquid-foam"></span>
                                            </div>
                                            <span className="cup-handle"></span>
                                            <span className="cup-plate"></span>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group-v2">
                                    <input
                                        type="text"
                                        id="main_name_v2"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder=" "
                                        autoComplete="name"
                                    />
                                    <label htmlFor="main_name_v2">O seu nome</label>
                                </div>

                                <div className="form-group-v2">
                                    <input
                                        type="email"
                                        id="main_email_v2"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder=" "
                                        autoComplete="email"
                                    />
                                    <label htmlFor="main_email_v2">O seu email</label>
                                </div>

                                <div className="form-group-v2">
                                    <input
                                        type="tel"
                                        id="main_phone_v2"
                                        required
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        placeholder=" "
                                        autoComplete="tel"
                                    />
                                    <label htmlFor="main_phone_v2">Telemóvel / WhatsApp</label>
                                </div>

                                <div className="form-group-v2">
                                    <textarea
                                        id="main_message_v2"
                                        required
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder=" "
                                        rows="3"
                                    ></textarea>
                                    <label htmlFor="main_message_v2">Fale-nos sobre o seu projeto...</label>
                                </div>

                                <button
                                    type="submit"
                                    className="btn-submit-v2"
                                    disabled={isSubmitting}
                                    style={{
                                        opacity: isSubmitting ? 0.75 : 1,
                                        cursor: isSubmitting ? 'not-allowed' : 'pointer'
                                    }}
                                >
                                    {isSubmitting ? (
                                        <>A moer o café... ☕</>
                                    ) : (
                                        <>
                                            Enviar Mensagem <span>➤</span>
                                        </>
                                    )}
                                </button>
                            </form>
                        ) : (
                            <div className="success-card">
                                <div className="success-icon-wrapper">
                                    <div className="success-pulse"></div>
                                    <span className="success-emoji">☕</span>
                                </div>
                                <h3>Café a ferver!</h3>
                                <p>
                                    A sua mensagem foi enviada com sucesso.<br />
                                    Pediu um <strong>{coffeeType === 'expresso' ? 'Café Expresso Curto' : coffeeType === 'pingado' ? 'Café Pingado' : 'Café Duplo'}</strong>.<br />
                                    Entraremos em contacto muito em breve para agendarmos a nossa conversa.
                                </p>
                                <button onClick={handleReset} className="btn-reset">
                                    Enviar Outra Mensagem
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
