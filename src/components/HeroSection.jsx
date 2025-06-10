import React from 'react';

// ✅ Terima props: Teks, isLoggedIn, openAuthModal, scrollToSection
const HeroSection = ({ Teks, isLoggedIn, openAuthModal, scrollToSection }) => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          {Teks.hero.title}
          <span className="hero-subtitle">{Teks.hero.subtitle}</span>
        </h1>
        <p className="hero-description">{Teks.hero.description}</p>
        <button
          onClick={() => !isLoggedIn ? openAuthModal('register') : scrollToSection('about')}
          className="hero-cta-btn"
        >
          {isLoggedIn ? Teks.auth.learnMore : Teks.auth.getStarted}
        </button>
      </div>
    </section>
  );
};

export default React.memo(HeroSection);