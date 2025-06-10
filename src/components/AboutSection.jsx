import React from 'react';
import { Leaf, Zap } from 'lucide-react';

const AboutSection = ({ Teks }) => {
    return (
        <section id="about" className="about-section">
            <div className="container grid-cols-2">
                <div className="about-card">
                    <Leaf className="about-card-icon" />
                    <h3 className="about-card-title">{Teks.about.card1Title}</h3>
                    <p className="about-card-desc">{Teks.about.card1Desc}</p>
                    <button className="btn-secondary">{Teks.about.card1Button}</button>
                </div>
                <div className="about-card">
                    <Zap className="about-card-icon" />
                    <h3 className="about-card-title">{Teks.about.card2Title}</h3>
                    <p className="about-card-desc">{Teks.about.card2Desc}</p>
                    <button className="btn-secondary">{Teks.about.card2Button}</button>
                </div>
            </div>
        </section>
    );
};
export default AboutSection;