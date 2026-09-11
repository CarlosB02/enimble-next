'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './CookieBanner.css';

export default function CookieBanner() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCustomizing, setIsCustomizing] = useState(false);
  const [showReopenBadge, setShowReopenBadge] = useState(false);

  // Granular settings
  const [analyticsConsent, setAnalyticsConsent] = useState(true);
  const [marketingConsent, setMarketingConsent] = useState(true);

  useEffect(() => {
    // Check local storage on mount
    try {
      const stored = localStorage.getItem('enimble_cookie_consent');
      if (!stored) {
        // First time visitor, show banner with small delay for smooth slide-in
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 1200);
        return () => clearTimeout(timer);
      } else {
        setShowReopenBadge(true);
        if (stored === 'accepted') {
          updateGtagConsent(true, true);
        } else if (stored === 'declined') {
          updateGtagConsent(false, false);
        } else {
          try {
            const parsed = JSON.parse(stored);
            setAnalyticsConsent(!!parsed.analytics);
            setMarketingConsent(!!parsed.marketing);
            updateGtagConsent(!!parsed.analytics, !!parsed.marketing);
          } catch (e) {
            updateGtagConsent(false, false);
          }
        }
      }
    } catch (e) {
      setIsOpen(true);
    }

    // Global listener so Footer or any page can trigger cookie settings
    const handleOpenBanner = () => {
      setIsCustomizing(true);
      setIsOpen(true);
    };

    window.addEventListener('open-cookie-banner', handleOpenBanner);
    return () => window.removeEventListener('open-cookie-banner', handleOpenBanner);
  }, []);

  const updateGtagConsent = (analytics, marketing) => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: analytics ? 'granted' : 'denied',
        ad_storage: marketing ? 'granted' : 'denied',
        ad_user_data: marketing ? 'granted' : 'denied',
        ad_personalization: marketing ? 'granted' : 'denied',
      });
      if (analytics) {
        window.gtag('event', 'cookie_consent_granted');
      }
    }
  };

  const handleAcceptAll = () => {
    try {
      localStorage.setItem('enimble_cookie_consent', 'accepted');
    } catch (e) {}
    setAnalyticsConsent(true);
    setMarketingConsent(true);
    updateGtagConsent(true, true);
    setIsOpen(false);
    setShowReopenBadge(true);
  };

  const handleDeclineAll = () => {
    try {
      localStorage.setItem('enimble_cookie_consent', 'declined');
    } catch (e) {}
    setAnalyticsConsent(false);
    setMarketingConsent(false);
    updateGtagConsent(false, false);
    setIsOpen(false);
    setShowReopenBadge(true);
  };

  const handleSaveCustom = () => {
    const preferences = {
      analytics: analyticsConsent,
      marketing: marketingConsent,
    };
    try {
      localStorage.setItem('enimble_cookie_consent', JSON.stringify(preferences));
    } catch (e) {}
    updateGtagConsent(analyticsConsent, marketingConsent);
    setIsOpen(false);
    setShowReopenBadge(true);
  };

  return (
    <>
      {/* FLOATING REOPEN BADGE (discreet cookie trigger) */}
      {showReopenBadge && !isOpen && (
        <button
          className="cookie-reopen-btn"
          onClick={() => {
            setIsCustomizing(false);
            setIsOpen(true);
          }}
          title="Definições de Cookies"
          aria-label="Configurar preferências de cookies"
        >
          <span className="cookie-icon-spin">🍪</span>
          <span className="cookie-reopen-text">Cookies</span>
        </button>
      )}

      {/* MAIN COOKIE BANNER MODAL / POPUP */}
      {isOpen && (
        <div className="cookie-overlay" role="dialog" aria-modal="true" aria-labelledby="cookie-title">
          <div className="cookie-card animate-slide-up">
            {/* CARD HEADER */}
            <div className="cookie-header">
              <div className="cookie-badge-wrapper">
                <div className="cookie-icon-glow">🍪</div>
                <div>
                  <h3 id="cookie-title" className="cookie-title">
                    Preferências de Privacidade
                  </h3>
                  <span className="cookie-sub">RGPD &bull; ENimble</span>
                </div>
              </div>
              <button
                className="cookie-close-icon"
                onClick={handleDeclineAll}
                aria-label="Fechar e usar apenas necessários"
              >
                ✕
              </button>
            </div>

            {/* CARD BODY */}
            <div className="cookie-body">
              <p>
                Utilizamos cookies próprios e de terceiros para garantir a segurança da plataforma,
                compreender como interage com o nosso website e melhorar a sua experiência digital.
              </p>

              {/* CUSTOM SETTINGS ACCORDION */}
              {isCustomizing && (
                <div className="cookie-custom-panel">
                  {/* Category 1: Essential */}
                  <div className="cookie-option-row">
                    <div className="cookie-option-info">
                      <div className="cookie-option-title">
                        <span>🛡️ Cookies Estritamente Necessários</span>
                        <span className="cookie-always-active">Sempre Ativos</span>
                      </div>
                      <p className="cookie-option-desc">
                        Essenciais para a navegação, segurança e funcionamento básico do website. Não podem ser desativados.
                      </p>
                    </div>
                  </div>

                  {/* Category 2: Analytics (Google Analytics) */}
                  <div className="cookie-option-row">
                    <div className="cookie-option-info">
                      <div className="cookie-option-title">
                        <span>📈 Cookies de Análise (Google Analytics)</span>
                        <label className="cookie-switch">
                          <input
                            type="checkbox"
                            checked={analyticsConsent}
                            onChange={(e) => setAnalyticsConsent(e.target.checked)}
                          />
                          <span className="cookie-slider"></span>
                        </label>
                      </div>
                      <p className="cookie-option-desc">
                        Permitem-nos contabilizar visitas e origens de tráfego de forma anónima para medir e melhorar o desempenho da ENimble.
                      </p>
                    </div>
                  </div>

                  {/* Category 3: Marketing */}
                  <div className="cookie-option-row">
                    <div className="cookie-option-info">
                      <div className="cookie-option-title">
                        <span>🎯 Cookies de Marketing & Conversão</span>
                        <label className="cookie-switch">
                          <input
                            type="checkbox"
                            checked={marketingConsent}
                            onChange={(e) => setMarketingConsent(e.target.checked)}
                          />
                          <span className="cookie-slider"></span>
                        </label>
                      </div>
                      <p className="cookie-option-desc">
                        Ajudam a personalizar anúncios e campanhas relevantes de acordo com os seus interesses.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="cookie-links">
                Consulte a nossa{' '}
                <Link href="/politica-de-privacidade" onClick={() => setIsOpen(false)}>
                  Política de Privacidade
                </Link>{' '}
                e os{' '}
                <Link href="/termos-e-condicoes" onClick={() => setIsOpen(false)}>
                  Termos e Condições
                </Link>
                .
              </div>
            </div>

            {/* CARD ACTIONS */}
            <div className="cookie-actions">
              {isCustomizing ? (
                <>
                  <button className="btn-cookie-save" onClick={handleSaveCustom}>
                    Guardar Preferências
                  </button>
                  <button className="btn-cookie-cancel" onClick={() => setIsCustomizing(false)}>
                    Voltar
                  </button>
                </>
              ) : (
                <>
                  <button className="btn-cookie-accept" onClick={handleAcceptAll}>
                    Aceitar Todos
                  </button>
                  <button className="btn-cookie-decline" onClick={handleDeclineAll}>
                    Apenas Necessários
                  </button>
                  <button
                    className="btn-cookie-settings"
                    onClick={() => setIsCustomizing(true)}
                  >
                    Personalizar
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
