import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="section" style={{ textAlign: 'center', maxWidth: '600px', marginBottom: '100px' }}>
            <p style={{
                fontFamily: 'var(--font-mono)',
                color: 'var(--accent-cyan)',
                fontSize: '16px',
                marginBottom: '20px'
            }}>03. What's Next?</p>

            <h2 style={{
                fontSize: 'clamp(40px, 5vw, 60px)',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '20px'
            }}>Get In Touch</h2>

            <p style={{
                color: 'var(--text-secondary)',
                fontSize: '18px',
                marginBottom: '50px'
            }}>
                I'm always open to any new opportunities. Likewise, my inbox is always open. Whether you have a question or just want to say hi, I'll get back to you as soon as I can!
            </p>

            <a href="mailto:hello@example.com" className="btn" style={{ padding: '20px 30px', fontSize: '14px' }}>
                Say Hello
            </a>
        </section>
    );
};

export default Contact;
