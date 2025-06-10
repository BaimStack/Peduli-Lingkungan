import React from 'react';
import { Leaf, Menu, X, UserCircle } from 'lucide-react';

const Navbar = React.memo(({
  Teks,
  user,
  isLoggedIn,
  isMenuOpen,
  setIsMenuOpen,
  activeSection,
  scrollToSection,
  onProfileClick,
  openAuthModal,
  onAboutClick,
  onMarketplaceClick
}) => {
  
  const handleNavClick = (key) => {
    if (key === 'about') {
      onAboutClick();
    } else if (key === 'marketplace') {
      onMarketplaceClick();
    } else {
      scrollToSection(key);
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand" onClick={() => scrollToSection('home')} style={{ cursor: 'pointer' }}>
          <Leaf className="navbar-logo-icon" />
          <span className="navbar-logo-text">jagaBumi</span>
        </div>
        
        <div className="navbar-menu">
          {Object.keys(Teks.nav).map((key) => (
            <button key={key} onClick={() => handleNavClick(key)} className={`navbar-link ${activeSection === key ? 'active' : ''}`}>
              {Teks.nav[key]}
            </button>
          ))}
        </div>

        <div className="navbar-auth">
          {isLoggedIn ? (
            <div className="navbar-user">
              <button onClick={onProfileClick} className="btn-profile">
                <UserCircle size={28} />
              </button>
            </div>
          ) : (
             // ✅ Tombol login desktop telah dihapus dari sini
             null
          )}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="navbar-mobile-toggle">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? 'is-open' : ''}`}>
        {Object.keys(Teks.nav).map((key) => (
          <button key={key} onClick={() => handleNavClick(key)} className="mobile-menu-link">
            {Teks.nav[key]}
          </button>
        ))}
        <div className="mobile-menu-divider">
          {isLoggedIn ? (
            <div className="mobile-user-info">
              <div className="user-greeting" onClick={() => { onProfileClick(); setIsMenuOpen(false); }}>
                <UserCircle size={36} />
                <div>
                  <p>{Teks.auth.welcome}</p>
                  <strong>{user?.fullName}</strong>
                </div>
              </div>
            </div>
          ) : (
            <div className="mobile-auth-buttons">
              <button onClick={() => { openAuthModal('login'); setIsMenuOpen(false); }} className="btn-primary">Masuk</button>
              <button onClick={() => { openAuthModal('register'); setIsMenuOpen(false); }} className="btn-secondary">Daftar</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
});

export default Navbar;
