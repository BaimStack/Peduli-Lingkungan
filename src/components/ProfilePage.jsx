import React from 'react';
import { ChevronLeft, UserCircle, Mail, Star, LogOut } from 'lucide-react';

const ProfilePage = ({ user, onBack, handleLogout }) => {
  if (!user) {
    return (
      <div className="profile-page">
        <p>Data pengguna tidak ditemukan.</p>
        <button onClick={onBack} className="btn-back-page">
          <ChevronLeft size={20} /> Kembali ke Beranda
        </button>
      </div>
    );
  }

  return (
    // ✅ Wrapper utama diubah untuk mengatur layout halaman
    <div className="profile-page">
      {/* Tombol Kembali sekarang ada di level halaman, bukan di dalam kartu */}
      <button onClick={onBack} className="btn-back-page">
        <ChevronLeft size={20} />
        <span>Kembali ke Beranda</span>
      </button>

      {/* Kartu profil sekarang menjadi elemen yang terpisah dan bersih */}
      <div className="profile-card">
        <div className="profile-header">
          <UserCircle size={80} strokeWidth={1} className="profile-avatar" />
          <h2 className="profile-name">{user.fullName}</h2>
          <p className="profile-email">{user.email}</p>
        </div>

        <div className="profile-details">
          <div className="detail-item">
            <div className="detail-icon-wrapper">
              <Mail size={24} />
            </div>
            <div className="detail-text">
              <h4>Email</h4>
              <p>{user.email}</p>
            </div>
          </div>
          <div className="detail-item">
            <div className="detail-icon-wrapper">
              <Star size={24} />
            </div>
            <div className="detail-text">
              <h4>Poin Saya</h4>
              <p className="poin-text">{user.poin} Poin</p>
            </div>
          </div>
        </div>

        <div className="profile-footer">
          <button className="btn-edit-profile">Ubah Profil</button>
          <button onClick={handleLogout} className="btn-logout-profile">
            <LogOut size={16} />
            <span>Keluar</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProfilePage);
