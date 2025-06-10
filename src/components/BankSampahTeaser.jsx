import React from 'react';
import { Trash2 } from 'lucide-react';

// ✅ Terima props: Teks, setShowBankSampahPage
const BankSampahTeaser = ({ Teks, setShowBankSampahPage }) => {
  return (
    <section className="monitoring-section">
      <div className="container grid-cols-2">
        <div>
          <h2 className="section-title">
            {Teks.bankSampah.title} <span className="text-highlight">{Teks.bankSampah.subtitle}</span>
          </h2>
          <p className="section-description">{Teks.bankSampah.description}</p>
          <button onClick={() => setShowBankSampahPage(true)} className="btn-primary">
            {Teks.bankSampah.explore}
          </button>
        </div>
        <div className="monitoring-card-container">
          <div className="monitoring-card">
            <div className="monitoring-card-icon-wrapper">
              <Trash2 className="monitoring-card-icon" />
            </div>
            <h3 className="monitoring-card-title">{Teks.bankSampah.cardTitle}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(BankSampahTeaser);