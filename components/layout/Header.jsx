'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Header.css';

const Header = () => {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const isActive = (path) => {
        if (path === '/') {
            return pathname === '/';
        }
        return pathname.includes(path);
    };

    return (
        <header className={`header ${isScrolled ? 'header-scrolled' : ''} ${isHidden ? 'header-hidden' : 'header-visible'} ${isMobileMenuOpen ? 'nav-open' : ''}`}>
            <div className="container header-container">
                <div className="logo-container">
                    <Link href="/" className="logo-link">
                        <span className="logo-text">E-NIMBLE</span>
                    </Link>
                </div>

                <button className="mobile-nav-toggle" onClick={toggleMobileMenu} aria-label="Menu">
                    <span className="hamburger"></span>
                </button>

                <nav className="main-nav">
                    <ul>
                        <li><Link href="/" className={`home-link ${isActive('/') ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Início</Link></li>
                        <li className="dropdown">
                            <Link href="#" className={`dropdown-toggle ${pathname !== '/' && pathname !== '/contactos' && pathname !== '/portfolio' && pathname !== '/sobre' ? 'active' : ''}`}>Serviços <span className="arrow-down">▾</span></Link>
                            <ul className="dropdown-menu">
                                <li><Link href="/website-design" onClick={() => setIsMobileMenuOpen(false)}>Website Design</Link></li>
                                <li><Link href="/redes-sociais" onClick={() => setIsMobileMenuOpen(false)}>Redes Sociais</Link></li>
                                <li><Link href="/ecommerce" onClick={() => setIsMobileMenuOpen(false)}>Lojas E-commerce</Link></li>
                                <li><Link href="/ads" onClick={() => setIsMobileMenuOpen(false)}>Anúncios Pagos</Link></li>
                                <li><Link href="/formacao" onClick={() => setIsMobileMenuOpen(false)}>Formação Empresarial</Link></li>
                                <li><Link href="/branding" onClick={() => setIsMobileMenuOpen(false)}>Branding & Identidade</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/portfolio" onClick={() => setIsMobileMenuOpen(false)}>Portfólio</Link></li>
                        <li><Link href="/sobre" onClick={() => setIsMobileMenuOpen(false)}>Sobre Nós</Link></li>
                        <li><Link href="/contactos" className="btn-nav" onClick={() => setIsMobileMenuOpen(false)}>Marcar um café ☕</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
