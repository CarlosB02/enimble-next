'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Header.css';

const Header = () => {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleBtnRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const headerThreshold = 100;

            if (currentScrollY > headerThreshold) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
            setIsHidden(false);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    // Close mobile menu and dropdown when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setIsDropdownOpen(false);
    }, [pathname]);

    // Lock both document.documentElement and document.body scroll + prevent touchmove overscroll on mobile when menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.documentElement.style.overflow = 'hidden';
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overscrollBehavior = 'none';
            document.body.style.overscrollBehavior = 'none';
            document.documentElement.classList.add('mobile-menu-open-lock');
            document.body.classList.add('mobile-menu-open-lock');

            const preventTouchMove = (e) => {
                // Prevent touch scroll chaining to background document on iOS/Webkit
                e.preventDefault();
            };

            document.addEventListener('touchmove', preventTouchMove, { passive: false });

            return () => {
                document.removeEventListener('touchmove', preventTouchMove);
                document.documentElement.style.overflow = '';
                document.body.style.overflow = '';
                document.documentElement.style.overscrollBehavior = '';
                document.body.style.overscrollBehavior = '';
                document.documentElement.classList.remove('mobile-menu-open-lock');
                document.body.classList.remove('mobile-menu-open-lock');
            };
        } else {
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
            document.documentElement.style.overscrollBehavior = '';
            document.body.style.overscrollBehavior = '';
            document.documentElement.classList.remove('mobile-menu-open-lock');
            document.body.classList.remove('mobile-menu-open-lock');
        }
        return () => {
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
            document.documentElement.style.overscrollBehavior = '';
            document.body.style.overscrollBehavior = '';
            document.documentElement.classList.remove('mobile-menu-open-lock');
            document.body.classList.remove('mobile-menu-open-lock');
        };
    }, [isMobileMenuOpen]);

    const lastToggleRef = useRef(0);

    const toggleMobileMenu = useCallback(() => {
        const now = Date.now();
        if (now - lastToggleRef.current < 350) {
            return;
        }
        lastToggleRef.current = now;

        setIsMobileMenuOpen(prev => {
            if (prev) {
                setIsDropdownOpen(false);
            }
            return !prev;
        });
    }, []);

    const toggleDropdown = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDropdownOpen(prev => !prev);
    };

    const isActive = (path) => {
        if (path === '/') {
            return pathname === '/';
        }
        return pathname.includes(path);
    };

    const lightPages = ['/redes-sociais', '/portfolio', '/ecommerce', '/automacao', '/formacao', '/branding'];
    const isLightHeroPage = lightPages.includes(pathname);

    return (
        <>
            {/* Sibling Checkbox placed at top level so ~ CSS sibling selector works cleanly */}
            <input
                type="checkbox"
                id="menu-toggle"
                checked={isMobileMenuOpen}
                onChange={toggleMobileMenu}
                style={{ position: 'absolute', opacity: 0, pointerEvents: 'none', zIndex: -1 }}
            />

            <header className={`header ${isScrolled ? 'header-scrolled' : ''} ${isLightHeroPage ? 'header-light-hero' : ''} ${isHidden ? 'header-hidden' : 'header-visible'} ${isMobileMenuOpen ? 'nav-open' : ''}`}>
                <div className="container header-container">
                    <div className="logo-container">
                        <Link href="/" className="logo-link">
                            <span className="logo-text">E-NIMBLE</span>
                        </Link>
                    </div>

                    {/* Label connected to checkbox with empty onClick for iOS Safari tap target recognition */}
                    <label
                        htmlFor="menu-toggle"
                        ref={toggleBtnRef}
                        className="mobile-nav-toggle"
                        onClick={() => { }}
                        role="button"
                        aria-label="Menu"
                        aria-expanded={isMobileMenuOpen}
                    >
                        <span className="hamburger"></span>
                    </label>

                    {/* Desktop Navigation (visible on desktop > 900px) */}
                    <nav className="main-nav desktop-nav">
                        <ul>
                            <li><Link href="/" className={`home-link ${isActive('/') ? 'active' : ''}`}>Início</Link></li>
                            <li className={`dropdown ${isDropdownOpen ? 'dropdown-open' : ''}`}>
                                <Link href="#" onClick={toggleDropdown} className={`dropdown-toggle ${pathname !== '/' && pathname !== '/contactos' && pathname !== '/portfolio' && pathname !== '/sobre' ? 'active' : ''}`}>Serviços <span className="arrow-down">▾</span></Link>
                                <ul className="dropdown-menu">
                                    <li><Link href="/website-design">Website Design</Link></li>
                                    <li><Link href="/redes-sociais">Redes Sociais</Link></li>
                                    <li><Link href="/ecommerce">Lojas E-commerce</Link></li>
                                    <li><Link href="/ads">Anúncios Pagos</Link></li>
                                    <li><Link href="/automacao">AI & Automação</Link></li>
                                    <li><Link href="/formacao">Formação Empresarial</Link></li>
                                    <li><Link href="/branding">Branding & Brindes</Link></li>
                                </ul>
                            </li>
                            <li><Link href="/portfolio">Portfólio</Link></li>
                            <li><Link href="/sobre">Sobre Nós</Link></li>
                            <li><Link href="/contactos" className="btn-nav">Marcar um café ☕</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Mobile Drawer OUTSIDE of <header> so transition: transform on header NEVER traps position: fixed on iOS Safari */}
            <div className={`mobile-nav-drawer ${isMobileMenuOpen ? 'drawer-open' : ''}`}>
                <div className="mobile-nav-content">
                    <ul className="mobile-menu-links">
                        <li className="menu-item-animate"><Link href="/" className={`home-link ${isActive('/') ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Início</Link></li>
                        <li className={`dropdown menu-item-animate ${isDropdownOpen ? 'dropdown-open' : ''}`}>
                            <button
                                type="button"
                                onClick={toggleDropdown}
                                className={`dropdown-toggle ${pathname !== '/' && pathname !== '/contactos' && pathname !== '/portfolio' && pathname !== '/sobre' ? 'active' : ''}`}
                            >
                                Serviços <span className="arrow-down">▾</span>
                            </button>
                            <ul className="dropdown-menu">
                                <li><Link href="/website-design" onClick={() => setIsMobileMenuOpen(false)}><span className="bullet">✦</span> Website Design</Link></li>
                                <li><Link href="/redes-sociais" onClick={() => setIsMobileMenuOpen(false)}><span className="bullet">✦</span> Redes Sociais</Link></li>
                                <li><Link href="/ecommerce" onClick={() => setIsMobileMenuOpen(false)}><span className="bullet">✦</span> Lojas E-commerce</Link></li>
                                <li><Link href="/ads" onClick={() => setIsMobileMenuOpen(false)}><span className="bullet">✦</span> Anúncios Pagos</Link></li>
                                <li><Link href="/automacao" onClick={() => setIsMobileMenuOpen(false)}><span className="bullet">✦</span> AI & Automação</Link></li>
                                <li><Link href="/formacao" onClick={() => setIsMobileMenuOpen(false)}><span className="bullet">✦</span> Formação Empresarial</Link></li>
                                <li><Link href="/branding" onClick={() => setIsMobileMenuOpen(false)}><span className="bullet">✦</span> Branding & Brindes</Link></li>
                            </ul>
                        </li>
                        <li className="menu-item-animate"><Link href="/portfolio" onClick={() => setIsMobileMenuOpen(false)}>Portfólio</Link></li>
                        <li className="menu-item-animate"><Link href="/sobre" onClick={() => setIsMobileMenuOpen(false)}>Sobre Nós</Link></li>
                        <li className="menu-item-animate action-btn-li">
                            <Link href="/contactos" className="btn-nav btn-nav-gradient" onClick={() => setIsMobileMenuOpen(false)}>
                                Marcar um café ☕
                            </Link>
                        </li>
                    </ul>

                    <div className="mobile-nav-footer">
                        <div className="footer-divider"></div>
                        <p className="mobile-nav-tagline">Elevamos a sua presença digital.</p>
                        <div className="mobile-nav-contacts">
                            <a href="mailto:geral@e-nimble.pt" className="nav-contact-item">geral@e-nimble.pt</a>
                            <a href="tel:+351912345678" className="nav-contact-item">+351 912 345 678</a>
                        </div>
                        <div className="mobile-nav-socials">
                            <a href="https://instagram.com/e.nimble" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
                            <a href="https://linkedin.com/company/e-nimble" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
