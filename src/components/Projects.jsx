import React from 'react';
import { FadeIn } from './Reveal';

const Projects = () => {
    const projects = [
        {
            title: 'Halcyon Theme',
            description: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
            tech: ['VS Code', 'Sublime Text', 'Atom', 'iTerm2', 'Hyper'],
            links: { github: '#', external: '#' }
        },
        {
            title: 'Spotify Profile',
            description: 'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information of each track. Create and save new playlists of recommended tracks based on your existing taste.',
            tech: ['React', 'Styled Components', 'Express', 'Spotify API', 'Heroku'],
            links: { github: '#', external: '#' }
        },
        {
            title: 'Build a Spotify Connected App',
            description: 'Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had. This course covers everything from the basics of OAuth to building a full-stack web app.',
            tech: ['React', 'Express', 'Spotify API', 'Styled Components'],
            links: { github: '#', external: '#' }
        }
    ];

    return (
        <section id="projects" className="section">
            <FadeIn>
                <h2 className="section-title">
                    <span style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontSize: '20px', marginRight: '10px' }}>02.</span>
                    Some Things I've Built
                </h2>
            </FadeIn>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '100px' }}>
                {projects.map((project, i) => (
                    <FadeIn key={i} delay={0.2}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(12, 1fr)',
                            alignItems: 'center',
                            gap: '10px'
                        }}>
                            {/* Project Image Placeholder */}
                            <div style={{
                                gridColumn: i % 2 === 0 ? '1 / 8' : '6 / -1',
                                gridRow: '1 / -1',
                                position: 'relative',
                                zIndex: '1',
                                height: '350px',
                                backgroundColor: '#112240',
                                borderRadius: '4px',
                                border: '1px solid #233554'
                            }}>
                                {/* Image would go here */}
                            </div>

                            {/* Project Content */}
                            <div style={{
                                gridColumn: i % 2 === 0 ? '7 / -1' : '1 / 7',
                                gridRow: '1 / -1',
                                textAlign: i % 2 === 0 ? 'right' : 'left',
                                zIndex: '2'
                            }}>
                                <p style={{
                                    fontFamily: 'var(--font-mono)',
                                    color: 'var(--accent-cyan)',
                                    fontSize: '13px',
                                    margin: '10px 0'
                                }}>Featured Project</p>

                                <h3 style={{
                                    color: 'var(--text-primary)',
                                    fontSize: '24px',
                                    fontWeight: '600',
                                    marginBottom: '20px'
                                }}>
                                    <a href={project.links.external} style={{ color: 'inherit' }}>{project.title}</a>
                                </h3>

                                <div style={{
                                    backgroundColor: '#112240',
                                    padding: '25px',
                                    borderRadius: '4px',
                                    boxShadow: '0 10px 30px -15px rgba(2, 12, 27, 0.7)',
                                    marginBottom: '20px',
                                    color: 'var(--text-secondary)',
                                    fontSize: '15px'
                                }}>
                                    <p>{project.description}</p>
                                </div>

                                <ul style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    justifyContent: i % 2 === 0 ? 'flex-end' : 'flex-start',
                                    gap: '20px',
                                    marginBottom: '20px',
                                    color: 'var(--text-secondary)',
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '13px'
                                }}>
                                    {project.tech.map((t, index) => <li key={index}>{t}</li>)}
                                </ul>

                                <div style={{
                                    display: 'flex',
                                    justifyContent: i % 2 === 0 ? 'flex-end' : 'flex-start',
                                    gap: '20px',
                                    color: 'var(--text-primary)'
                                }}>
                                    <a href={project.links.github} aria-label="GitHub Link">
                                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px' }}><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                    </a>
                                    <a href={project.links.external} aria-label="External Link">
                                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px' }}><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
};

export default Projects;
