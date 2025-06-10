import React from 'react';
import { Recycle, Trees, Leaf, BarChart3 } from 'lucide-react';

// ✅ Hapus { Teks } dari sini, karena tidak digunakan
const StatsAndFactsSection = () => { 
  const statsData = [
    {
      icon: Recycle,
      value: "7.68 Ton",
      description: "Sampah plastik dihasilkan di Indonesia setiap tahunnya, sebagian besar belum terkelola.",
    },
    {
      icon: Trees,
      value: "106.400 Ha",
      description: "Luas hutan di Indonesia yang mengalami deforestasi sepanjang tahun 2021-2022.",
    },
    {
      icon: Leaf,
      value: "17%",
      description: "Keanekaragaman hayati dunia berada di Indonesia, menjadikannya salah satu yang terkaya di planet ini.",
    },
    {
      icon: BarChart3,
      value: "< ",
      description: "Tingkat daur ulang sampah secara nasional, menunjukkan peluang besar untuk perbaikan.",
    },
  ];

  return (
    <section id="facts" className="stats-section">
      <div className="container text-center">
        <h2 className="section-title">Fakta & Statistik Lingkungan</h2>
        <p className="section-description">
          Kondisi lingkungan di Indonesia memerlukan perhatian kita bersama. Berikut adalah beberapa data yang perlu kita ketahui.
        </p>
        <div className="grid-cols-4">
          {statsData.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon-wrapper">
                <stat.icon className="stat-icon" />
              </div>
              <h3 className="stat-value">{stat.value}</h3>
              <p className="stat-description">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(StatsAndFactsSection);