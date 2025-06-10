import React, { useState } from 'react';
import { ArrowLeft, Trash2, MapPin, Clock, ChevronDown, Info, Calendar, Package } from 'lucide-react'; 

const BankSampahPage = ({ onBack, data }) => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [hoveredLocation, setHoveredLocation] = useState(null);

  const toggleCard = (index) => {
    if (expandedCard === index) {
      setExpandedCard(null);
    } else {
      setExpandedCard(index);
    }
  };

  return (
    <section className="banksampah-page-section">
      <div className="container">
        {/* ✅ PERBAIKAN: Menggunakan className yang konsisten */}
        <button onClick={onBack} className="btn-back-page">
          <ArrowLeft className="icon-sm" />
          <span>Kembali ke Beranda</span>
        </button>
        <div className="text-center">
          <h2 className="section-title">Lokasi Bank Sampah</h2>
          <p className="section-description">Temukan bank sampah terdekat di sekitar Anda untuk memulai daur ulang.</p>
        </div>

        <div className="banksampah-layout">
          <div className="map-column">
            <div className="map-mockup">
              <div className="map-background-text">PETA LOKASI</div>
              {data.map((item) => (
                <div
                  key={item.id}
                  className={`map-pin ${hoveredLocation === item.id ? 'is-hovered' : ''}`}
                  style={{ top: item.posisi_peta.top, left: item.posisi_peta.left }}
                >
                  <MapPin />
                </div>
              ))}
            </div>
          </div>

          <div className="list-column">
            <div className="banksampah-list">
              {data.map((item, index) => (
                <div 
                  key={item.id} 
                  className="banksampah-card"
                  onMouseEnter={() => setHoveredLocation(item.id)}
                  onMouseLeave={() => setHoveredLocation(null)}
                >
                  <div className="banksampah-card-header">
                    <Trash2 className="banksampah-card-icon" />
                    <h3 className="banksampah-card-title">{item.nama}</h3>
                  </div>
                  <div className="banksampah-card-body">
                    <p><MapPin className="icon-xs" /> <strong>Alamat:</strong> {item.alamat}</p>
                    <p><Clock className="icon-xs" /> <strong>Jam Buka:</strong> {item.jam}</p>
                  </div>

                  <button onClick={() => toggleCard(index)} className="btn-details">
                    <span>Lihat Detail Partisipasi</span>
                    <ChevronDown className={`icon-sm chevron ${expandedCard === index ? 'is-open' : ''}`} />
                  </button>

                  {expandedCard === index && (
                    <div className="banksampah-card-details">
                      <h4><Info className="icon-xs" /> Cara Bergabung</h4>
                      <p>{item.cara_bergabung}</p>
                      <h4><Package className="icon-xs" /> Jenis Sampah Diterima</h4>
                      <ul>
                        {item.jenis_sampah.map((jenis, i) => <li key={i}>{jenis}</li>)}
                      </ul>
                      <h4><Calendar className="icon-xs" /> Jadwal Pengumpulan</h4>
                      <p>{item.jadwal_pengumpulan}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BankSampahPage;
