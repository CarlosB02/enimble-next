'use client';

import React, { useEffect } from 'react';
import useScrollReveal from '@/hooks/useScrollReveal';
import './Contactos.css';

const Contactos = () => {
    useScrollReveal();
    
    useEffect(() => {
        document.body.classList.add('contact-body');
        return () => {
            document.body.classList.remove('contact-body');
        };
    }, []);

    return (
        <main>
            {/* Reusing the Contact Section Styles but as main content */}
            <section className="contact-section contact-page-bg">
                <div className="container">
                    <div className="section-header text-center mb-5">
                        <h2 className="section-title">Estamos à sua espera</h2>
                        <h3 className="section-subtitle">Vamos conversar?</h3>
                    </div>

                    <div className="contact-wrapper">
                        {/* Left: Info */}
                        <div className="contact-info reveal">
                            <h3>Marque um café connosco <span className="emoji-icon">☕</span></h3>
                            <p>Gostamos de conhecer os nossos parceiros pessoalmente. Venha visitar-nos ou agende uma
                                videochamada.
                            </p>

                            <div className="info-item">
                                <div className="icon-box">
                                    <img src="/servicos/contactos/e-nimble-agency-email-contact.png" alt="Email de contacto da agência e-nimble" className="contact-icon" />
                                </div>
                                <div>
                                    <span>Email</span>
                                    <a href="mailto:geral@enimble.pt">geral@enimble.pt</a>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="icon-box">
                                    <img src="/servicos/contactos/e-nimble-agency-phone-contact.png" alt="Telefone de contacto da agência e-nimble" className="contact-icon" />
                                </div>
                                <div>
                                    <span>Telefone</span>
                                    <a href="tel:+351912163485">912 163 485</a>
                                </div>
                            </div>


                        </div>

                        {/* Right: Form */}
                        <div className="contact-form-container reveal delay-1">
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
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contactos;
