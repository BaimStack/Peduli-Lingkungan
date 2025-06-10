import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = ({ Teks }) => {
  return (
    <section id="contact" className="contact-section">
      <div className="container-sm">
        <div className="contact-card">
          <h2 className="section-title text-white">{Teks.contact.title}</h2>
          <div className="contact-info-grid">
            <div className="contact-item">
              <Phone className="contact-icon" />
              <h3>{Teks.contact.phone}</h3>
              <p>+62 24 123 4567</p>
            </div>
            <div className="contact-item">
              <Mail className="contact-icon" />
              <h3>{Teks.contact.email}</h3>
              <p>info@pedulilingkungan.id</p>
            </div>
            <div className="contact-item">
              <MapPin className="contact-icon" />
              <h3>{Teks.contact.location}</h3>
              <p>Semarang, Jawa Tengah</p>
            </div>
          </div>
          <div className="contact-cta">
            <button className="btn-contact">{Teks.contact.button}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;