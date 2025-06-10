import React from 'react';
import { ArrowLeft } from 'lucide-react'; 
import ProductCard from './ProductCard'; // Impor kartu produk

const MarketplacePage = ({ onBack, data, onSelectProduct }) => {
  return (
    <section className="marketplace-page-section">
      <div className="container">
        <button onClick={onBack} className="btn-back-page">
          <ArrowLeft className="icon-sm" />
          <span>Kembali ke Beranda</span>
        </button>
        <div className="text-center">
          <h2 className="section-title">Marketplace Ramah Lingkungan</h2>
          <p className="section-description">Dukung pengrajin lokal dan pilih produk berkelanjutan. Setiap pembelian Anda adalah langkah kecil menuju bumi yang lebih baik.</p>
        </div>
        <div className="product-grid">
          {data.map((product) => (
            <ProductCard key={product.id} product={product} onSelect={onSelectProduct} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketplacePage;
