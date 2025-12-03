import React from 'react';

const Hero = () => {
    return (
        <section
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                padding: '0',
                maxWidth: '1000px',
                margin: '0 auto',
            }}
        >
            <h1 style={{
                color: 'var(--accent-cyan)',
                fontFamily: 'var(--font-mono)',
                fontSize: '16px',
                fontWeight: 'normal',
                marginBottom: '20px',
                marginLeft: '2px'
            }}>
                Hey There! My name is
            </h1>

            <h2 style={{
                fontSize: 'clamp(40px, 8vw, 80px)',
                fontWeight: '600',
                color: 'var(--text-primary)',
                lineHeight: '1.1',
                marginBottom: '10px'
            }}>
                Sam Oreskovic.
            </h2>

            <h3 style={{
                fontSize: 'clamp(40px, 8vw, 80px)',
                fontWeight: '600',
                color: 'var(--text-secondary)',
                lineHeight: '1.1',
                marginBottom: '20px'
            }}>
                And I work with computers.
            </h3>

            <p style={{
                maxWidth: '540px',
                fontSize: '18px',
                color: 'var(--text-secondary)',
                marginBottom: '50px'
            }}>
                I'm a student at Wilfred Laurier University, specializing in Computer Science. I am currently trying to expand my knowledge of web development, with a focus on backend. I am also dabbling in AI, Data Science, and Game Development.
            </p>

            <a href="#projects" className="btn" style={{ fontSize: '16px', padding: '18px 28px' }}>
                Check out some of my work!
            </a>
        </section>
    );
};

export default Hero;
