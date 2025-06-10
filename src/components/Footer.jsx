import React from 'react';
import { Leaf, Twitter, Instagram, Facebook, Linkedin } from 'lucide-react';

// Terima fungsi navigasi sebagai props
const Footer = ({ Teks, scrollToSection, onAboutClick }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand-section">
            <div className="footer-brand">
              <Leaf className="footer-logo-icon" />
              <span className="footer-logo-text">Peduli Lingkungan</span>
            </div>
            <p className="footer-description">{Teks.footer.description}</p>
            <div className="footer-social-links">
              <a href="#" aria-label="Twitter"><Twitter /></a>
              <a href="#" aria-label="Facebook"><Facebook /></a>
              <a href="#" aria-label="Instagram"><Instagram /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin /></a>
            </div>
          </div>
          
          <div className="footer-links-section">
            <h4 className="footer-title">{Teks.footer.quickLinks}</h4>
            <ul className="footer-links">
              {/* ✅ Gunakan fungsi navigasi yang sesuai */}
              <li><button onClick={onAboutClick}>{Teks.nav.about}</button></li>
              <li><button onClick={() => scrollToSection('services')}>{Teks.nav.services}</button></li>
              <li><button onClick={() => scrollToSection('facts')}>{Teks.nav.facts}</button></li>
              <li><button onClick={() => scrollToSection('contact')}>{Teks.nav.contact}</button></li>
            </ul>
          </div>

          <div className="footer-contact-section">
            <h4 className="footer-title">{Teks.footer.contactUs}</h4>
            <ul className="footer-contact-info">
              <li>info@pedulilingkungan.id</li>
              <li>+62 24 123 4567</li>
              <li>Semarang, Jawa Tengah</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">{Teks.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);