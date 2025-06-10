import React from 'react';
import { ShoppingCart } from 'lucide-react';

const ProductCard = ({ product, onSelect }) => {
  return (
    // Menambahkan event handler onClick untuk memilih produk
    <div className="product-card-item" onClick={() => onSelect(product)}>
      <div className="product-image-container">
        <img src={product.gambar} alt={product.namaProduk} loading="lazy" />
      </div>
      <div className="product-card-content">
        <p className="product-seller">{product.penjual}</p>
        <h4 className="product-name">{product.namaProduk}</h4>
        <div className="product-card-footer">
          <p className="product-price">{product.harga}</p>
          {/* Mengganti tombol dengan div agar tidak ada aksi ganda */}
          <div className="btn-details-icon">
            <ShoppingCart size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProductCard);
