import React, { useState } from 'react';
import { ChevronLeft, ShoppingCart, Heart, Minus, Plus } from 'lucide-react';

const ProductDetailPage = ({ product, onBack }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (amount) => {
    setQuantity(prev => Math.max(1, prev + amount));
  };

  if (!product) {
    return (
      <div className="product-detail-page">
        <div className="container">
          <p>Produk tidak ditemukan.</p>
          <button onClick={onBack} className="btn-back-page">
            <ChevronLeft size={20} />
            <span>Kembali</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="product-detail-page">
      <div className="container">
        <button onClick={onBack} className="btn-back-page">
          <ChevronLeft size={20} />
          <span>Kembali ke Marketplace</span>
        </button>
        <div className="product-detail-layout">
          <div className="product-detail-image-wrapper">
            <img src={product.gambar} alt={product.namaProduk} />
          </div>
          <div className="product-detail-info">
            <p className="product-seller">{product.penjual}</p>
            <h1 className="product-detail-title">{product.namaProduk}</h1>
            <p className="product-detail-price">{product.harga}</p>
            <p className="product-detail-description">{product.deskripsi}</p>

            <div className="product-actions">
              <div className="quantity-selector">
                <button onClick={() => handleQuantityChange(-1)} aria-label="Kurangi jumlah">
                  <Minus size={16}/>
                </button>
                <span>{quantity}</span>
                <button onClick={() => handleQuantityChange(1)} aria-label="Tambah jumlah">
                  <Plus size={16}/>
                </button>
              </div>
              <button className="btn-primary btn-buy" onClick={() => alert('Fitur "Beli Langsung" belum diimplementasikan.')}>
                <ShoppingCart size={18} /> Beli Langsung
              </button>
            </div>
            
            {product.isDonasi && (
              <button className="btn-secondary btn-donate" onClick={() => alert('Terima kasih atas donasi Anda!')}>
                <Heart size={18} /> Donasi Sebagian untuk Konservasi
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
