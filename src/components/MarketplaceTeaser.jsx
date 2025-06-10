import React from 'react';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { dataProdukMarketplace } from '../Teks'; // Kita ambil data produk untuk ditampilkan

const MarketplaceTeaser = ({ Teks, onMarketplaceClick }) => {
  // Ambil 4 produk pertama untuk ditampilkan sebagai pratinjau
  const previewProducts = dataProdukMarketplace.slice(0, 4);

  return (
    // Gunakan id "marketplace-teaser" atau nama lain jika perlu untuk navigasi
    <section id="marketplace-teaser" className="marketplace-teaser-section">
      <div className="container text-center">
        <h2 className="section-title">Marketplace Ramah Lingkungan</h2>
        <p className="section-description">
          Dukung pengrajin lokal dan pilih produk berkelanjutan. Setiap pembelian Anda adalah langkah kecil menuju bumi yang lebih baik.
        </p>
        
        <div className="product-preview-grid">
          {previewProducts.map((product) => (
            <div key={product.id} className="product-preview-card">
              <img src={product.gambar} alt={product.namaProduk} className="product-preview-image" loading="lazy" />
              <div className="product-preview-overlay">
                <h4 className="product-preview-title">{product.namaProduk}</h4>
                <p className="product-preview-seller">{product.penjual}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="marketplace-cta">
          <button onClick={onMarketplaceClick} className="btn-primary">
            <span>Jelajahi Semua Produk</span>
            <ArrowRight className="icon-sm" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default React.memo(MarketplaceTeaser);
