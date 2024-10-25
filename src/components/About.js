import React, { useEffect } from 'react';
import '../styles/About.css';

function About() {
    useEffect(() => {
        const introElement = document.querySelector('.about-intro');
        setTimeout(() => {
            introElement.style.borderRight = 'none';
        }, 2000); // Match the duration of the typing animation
    }, []);

    return (
        <section id="about">
            <div className="about-intro">Hi, I'm</div>
            <div className="about-name">Jeffrey Guo</div>
            <div className="about-description">I'm a Master's of Computer Science student at USC, looking for new experiences and inspirations.</div>
        </section>
    );
}

export default About;