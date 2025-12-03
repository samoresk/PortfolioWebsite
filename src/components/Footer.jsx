import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            padding: '20px',
            textAlign: 'center',
            color: 'var(--text-secondary)',
            fontFamily: 'var(--font-mono)',
            fontSize: '12px'
        }}>
            <div style={{ marginBottom: '10px' }}>
                {/* Social Icons could go here */}
            </div>
            <a
                href="https://github.com/bchiang7/v4"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'inherit' }}
            >
                <div>Designed & Built by Sam Oreskovic </div>
            </a>
        </footer>
    );
};

export default Footer;
