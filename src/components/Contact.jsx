import React, { useState } from 'react';

const Contact = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                setStatus("SUCCESS");
            } else {
                setStatus("ERROR");
            }
        };
        xhr.send(data);
    };

    return (
        <section id="contact" className="section" style={{ textAlign: 'center', maxWidth: '800px', marginBottom: '100px' }}>
            <div className="glass-panel" style={{ padding: '60px 40px' }}>
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
                    marginBottom: '40px',
                    maxWidth: '600px',
                    margin: '0 auto 40px auto'
                }}>
                    I'm always open to any new opportunities. Whether you have a question or just want to say hi, I'll get back to you as soon as I can!
                </p>

                <form
                    onSubmit={handleSubmit}
                    action="https://formspree.io/f/xkgdbawp"
                    method="POST"
                    className="contact-form"
                >
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" name="name" id="name" required className="form-input" placeholder="John Doe" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" name="email" id="email" required className="form-input" placeholder="john@example.com" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea name="message" id="message" required className="form-textarea" placeholder="Hello! I'd like to discuss..."></textarea>
                    </div>

                    <button type="submit" className="btn" style={{ marginTop: '10px', width: '100%' }}>
                        Send Message
                    </button>

                    {status === "SUCCESS" && <p className="form-status success">Thanks! Your message has been sent.</p>}
                    {status === "ERROR" && <p className="form-status error">Oops! There was a problem submitting your form.</p>}
                </form>
            </div>
        </section>
    );
};

export default Contact;
