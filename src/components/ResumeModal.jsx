import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ResumeModal = ({ isOpen, onClose }) => {
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
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(15, 23, 42, 0.85)', // Dark slate with opacity
                        backdropFilter: 'blur(8px)',
                        zIndex: 1000,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-start', // Start from top to allow scrolling
                        overflowY: 'auto',
                        padding: '40px 20px'
                    }}
                >
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()} // Prevent close on content click
                        style={{
                            position: 'relative',
                            maxWidth: '900px',
                            width: '100%',
                            // Liquid Glass Effect
                            background: 'rgba(255, 255, 255, 0.03)',
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 0 0 1px rgba(255, 255, 255, 0.05)',
                            borderRadius: '24px',
                            padding: '30px',

                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px',
                            alignItems: 'center',
                            margin: 'auto'
                        }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            style={{
                                position: 'absolute',
                                top: '20px',
                                right: '20px',
                                fontSize: '1.5rem',
                                color: 'rgba(255, 255, 255, 0.8)',
                                background: 'rgba(255, 255, 255, 0.1)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                width: '36px',
                                height: '36px',
                                borderRadius: '50%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                cursor: 'pointer',
                                zIndex: 10,
                                transition: 'all 0.2s ease'
                            }}
                            onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
                            onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
                        >
                            &times;
                        </button>

                        <h2 style={{
                            color: 'var(--text-primary)',
                            marginBottom: '10px',
                            fontFamily: 'var(--font-mono)',
                            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                        }}>
                            Resume
                        </h2>

                        {/* Resume Images */}
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '2px',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            width: '100%'
                        }}>
                            <img
                                src="/assets/resume-1.jpg"
                                alt="Resume Page 1"
                                style={{ width: '100%', height: 'auto', display: 'block' }}
                            />
                            <img
                                src="/assets/resume-2.jpg"
                                alt="Resume Page 2"
                                style={{ width: '100%', height: 'auto', display: 'block' }}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ResumeModal;
