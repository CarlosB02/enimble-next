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
    const [coffeeType, setCoffeeType] = useState('pingado'); // 'expresso' | 'pingado' | 'duplo'

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
        setCoffeeType('pingado');
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
                            <h2 className="info-title">
                                Fale Connosco <span className="emoji-icon">☕</span>
                            </h2>
                            <p className="info-desc">
                                Gostamos de conhecer os nossos parceiros pessoalmente. Venha visitar-nos no nosso espaço ou agende uma reunião/videochamada rápida connosco.
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

                                <div className="info-card">
                                    <span className="info-card-icon">📍</span>
                                    <div>
                                        <strong>Localização</strong>
                                        <p>Viseu, Portugal</p>
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
        </main>
    );
};

export default Contactos;
