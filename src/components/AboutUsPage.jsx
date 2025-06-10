import React from 'react';
import { ChevronLeft, Zap, Users, Target, Rocket } from 'lucide-react';

const AboutUsPage = ({ Teks, onBack }) => {
  return (
    <div className="about-us-page">
      <div className="container">
        <button onClick={onBack} className="btn-back-page">
          <ChevronLeft size={20} />
          <span>Kembali ke Beranda</span>
        </button>

        <header className="about-page-header">
          <h1 className="section-title">{Teks.aboutPage.title}</h1>
          <p className="section-description">{Teks.aboutPage.subtitle}</p>
        </header>

        <section className="about-page-content">
          <div className="about-vision-mission">
            <Target size={40} className="about-content-icon" />
            <h3>{Teks.aboutPage.missionTitle}</h3>
            <p>{Teks.aboutPage.missionText}</p>
          </div>

          <div className="team-section">
            <Users size={40} className="about-content-icon" />
            <h3>{Teks.aboutPage.teamTitle}</h3>
            <div className="team-grid">
              {Teks.aboutPage.team.map((member, index) => (
                <div key={index} className="team-member-card">
                  <div className="team-avatar">{member.avatar}</div>
                  <p className="team-member-name">{member.name}</p>
                  <p className="team-member-role">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default React.memo(AboutUsPage);