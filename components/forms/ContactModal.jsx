'use client';

import React, { useEffect } from 'react';
import ContactForm from './ContactForm';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose, defaultSubject }) => {
    // Lock scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="wd-modal-overlay" onClick={onClose}>
            <div className="wd-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="wd-modal-close" onClick={onClose}>
                    &times;
                </button>
                <div className="wd-modal-header">
                    <h3>Solicitar <span className="gradient-word">Informação</span></h3>
                    <p>Fale-nos sobre a sua ideia e nós ajudamos a torná-la realidade.</p>
                </div>
                <ContactForm defaultSubject={defaultSubject} key={defaultSubject} />
            </div>
        </div>
    );
};

export default ContactModal;
