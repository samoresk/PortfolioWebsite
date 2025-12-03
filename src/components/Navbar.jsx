import React, { useState, useEffect } from 'react';

import ResumeModal from './ResumeModal';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isResumeOpen, setIsResumeOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    const navLinks = [
        { name: 'About', url: '#about' },
        { name: 'Work', url: '#projects' },
        { name: 'Contact', url: '#contact' },
    ];

    return (
        <>
            <nav
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: 'var(--nav-height)',
                    backgroundColor: scrolled ? 'rgba(10, 25, 47, 0.85)' : 'transparent',
                    backdropFilter: scrolled ? 'blur(10px)' : 'none',
                    zIndex: 100,
                    transition: 'all 0.3s ease-in-out',
                    boxShadow: scrolled ? '0 10px 30px -10px rgba(2, 12, 27, 0.7)' : 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0 50px',
                }}
            >
                <a href="/" className="logo" style={{ color: 'var(--accent-cyan)', fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'var(--font-mono)', textDecoration: 'none' }}>
                    &lt;Portfolio /&gt;
                </a>

                <ul style={{ display: 'flex', gap: '20px' }}>
                    {navLinks.map((link, index) => (
                        <li key={index} style={{ fontFamily: 'var(--font-mono)', fontSize: '13px' }}>
                            <a href={link.url} className="glass-btn" style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--text-primary)' }}>
                                <span style={{ color: 'var(--accent-cyan)' }}>0{index + 1}.</span>
                                {link.name}
                            </a>
                        </li>
                    ))}
                    <li>
                        <button
                            onClick={() => setIsResumeOpen(true)}
                            className="glass-btn"
                            style={{ fontSize: '13px', color: 'var(--accent-cyan)', cursor: 'pointer', fontFamily: 'var(--font-mono)' }}
                        >
                            Resume
                        </button>
                    </li>
                </ul>
            </nav>
            <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
        </>
    );
};

export default Navbar;
