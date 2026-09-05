'use client';

import React, { useState, useEffect, useRef } from 'react';
import useScrollReveal from '@/hooks/useScrollReveal';
import './Contactos.css';

const Contactos = () => {
    useScrollReveal();

    // Form inputs state
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    // Interactive states
    const [coffeeType, setCoffeeType] = useState('normal'); // 'expresso' | 'normal' | 'duplo'

    // Submission states
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Refs for glow effects (direct DOM modification for high performance)
    const glowBlueRef = useRef(null);
    const glowRedRef = useRef(null);

    useEffect(() => {
        document.body.classList.add('contact-body');

        // Mouse Parallax Glows
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;

            if (glowBlueRef.current) {
                const x = clientX - 200;
                const y = clientY - 200;
                glowBlueRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            }

            if (glowRedRef.current) {
                const x = window.innerWidth - clientX - 225;
                const y = window.innerHeight - clientY - 225;
                glowRedRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.body.classList.remove('contact-body');
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

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
        setCoffeeType('normal');
    };

    return (
        <main>
            <section className="contact-page-immersive">
                {/* Floating Glows */}
                <div ref={glowBlueRef} className="glow-sphere glow-blue" style={{ left: '10%', top: '20%' }}></div>
                <div ref={glowRedRef} className="glow-sphere glow-red" style={{ right: '10%', bottom: '20%' }}></div>
                <div className="noise-overlay-contacts"></div>

                <div className="container">
                    <div className="contacts-wrapper">
                        {/* LEFT COLUMN: Branding & Info */}
                        <div className="contact-info-panel reveal">
                            <div className="contact-info-header">
                                <h2 className="info-title">
                                    Fale Connosco <img src="/assets/coffee.webp" alt="Café" className="emoji-icon png-emoji webp-emoji" style={{ width: '0.9em', height: '0.9em', verticalAlign: 'middle' }} />
                                </h2>
                                <p className="info-desc">
                                    Agende uma reunião presencial ou online e descubra como podemos ajudar a fazer crescer o seu negócio.
                                </p>
                            </div>

                            <div className="info-details">
                                <div className="info-card">
                                    <span className="info-card-icon">📧</span>
                                    <div className="info-card-content">
                                        <strong>Enviar email</strong>
                                        <a href="mailto:geral@enimble.pt">geral@enimble.pt</a>
                                    </div>
                                </div>

                                <div className="info-card">
                                    <span className="info-card-icon">📱</span>
                                    <div className="info-card-content">
                                        <strong>Ligar ou WhatsApp</strong>
                                        <div className="info-card-actions">
                                            <a href="tel:+351912163485" className="info-phone-link">912 163 485</a>
                                            <a
                                                href="https://wa.me/351912163485"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="whatsapp-btn"
                                                title="Enviar mensagem pelo WhatsApp"
                                                aria-label="Enviar mensagem no WhatsApp"
                                            >
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12.04 2C6.5 2 2 6.5 2 12.04c0 1.77.46 3.49 1.34 5.01L2 22.08l5.18-1.36a10.027 10.027 0 0 0 4.86 1.25h.01c5.54 0 10.04-4.5 10.04-10.04 0-2.68-1.04-5.2-2.94-7.1A9.972 9.972 0 0 0 12.04 2zm5.432 12.382c-.301-.15-1.781-.879-2.056-.98-.276-.1-.476-.15-.677.15-.2.301-.776.98-.952 1.18-.175.2-.351.226-.652.075-.3-.15-1.267-.467-2.414-1.489-.893-.796-1.496-1.78-1.672-2.08-.175-.3-.019-.462.132-.612.135-.135.3-.351.451-.527.15-.175.2-.301.3-.501.1-.2.05-.376-.025-.526-.075-.15-.677-1.63-.927-2.23-.244-.585-.493-.506-.677-.515-.176-.008-.376-.01-.577-.01-.2 0-.526.075-.802.376-.275.301-1.053 1.029-1.053 2.509 0 1.48 1.078 2.91 1.229 3.11.15.2 2.122 3.241 5.141 4.545.718.31 1.278.496 1.715.635.722.23 1.379.197 1.9.12.58-.087 1.781-.728 2.032-1.432.251-.704.251-1.307.176-1.432-.076-.125-.276-.2-.577-.35z"/>
                                                </svg>
                                                <span>WhatsApp</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Contact Form with integrated Coffee Machine */}
                        <div className="glass-panel right-contacts-card reveal delay-1">
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
                                                    className={`coffee-row-btn ${coffeeType === 'normal' ? 'active' : ''}`}
                                                    onClick={() => setCoffeeType('normal')}
                                                >
                                                    Normal ☕
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
                                                <div className="cup-inner-wrap">
                                                    <div className={`cup-liquid-flow ${coffeeType}`}>
                                                        <span className="liquid-foam"></span>
                                                    </div>
                                                </div>
                                                <span className="cup-handle"></span>
                                                <span className="cup-plate"></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group-v2">
                                        <input
                                            type="text"
                                            id="name_v2"
                                            required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder=" "
                                            autoComplete="name"
                                        />
                                        <label htmlFor="name_v2">O seu nome</label>
                                    </div>

                                    <div className="form-group-v2">
                                        <input
                                            type="email"
                                            id="email_v2"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder=" "
                                            autoComplete="email"
                                        />
                                        <label htmlFor="email_v2">O seu email</label>
                                    </div>

                                    <div className="form-group-v2">
                                        <input
                                            type="tel"
                                            id="phone_v2"
                                            required
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            placeholder=" "
                                            autoComplete="tel"
                                        />
                                        <label htmlFor="phone_v2">Telemóvel / WhatsApp</label>
                                    </div>

                                    <div className="form-group-v2">
                                        <textarea
                                            id="message_v2"
                                            required
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            placeholder=" "
                                            rows="3"
                                        ></textarea>
                                        <label htmlFor="message_v2">Fale-nos sobre o seu projeto...</label>
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
                                        Pediu um <strong>{coffeeType === 'expresso' ? 'Café Expresso Curto' : coffeeType === 'normal' ? 'Café Normal' : 'Café Duplo'}</strong>.<br />
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
        </main>
    );
};

export default Contactos;
