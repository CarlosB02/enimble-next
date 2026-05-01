'use client';

import React from 'react';
import ContactForm from '@/components/forms/ContactForm';

const ContactSection = () => {
    return (
        <section id="contactos" className="contact-section">
            <div className="container">
                <div className="section-header text-center mb-5">
                    <h2 className="section-title">Estamos à sua espera</h2>
                    <h3 className="section-subtitle">Vamos conversar?</h3>
                </div>

                <div className="contact-wrapper">
                    <div className="contact-info reveal">
                        <h3>Marque um café connosco <span className="emoji-icon">☕</span></h3>
                        <p>
                            Gostamos de conhecer os nossos parceiros pessoalmente. Venha visitar-nos ou agende uma videochamada.
                        </p>

                        <div className="info-item">
                            <div className="icon-box">📧</div>
                            <div>
                                <span>Email</span>
                                <a href="mailto:geral@enimble.pt">geral@enimble.pt</a>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-box">📱</div>
                            <div>
                                <span>Telefone</span>
                                <a href="tel:+351912163485">912 163 485</a>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-container reveal delay-1">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
