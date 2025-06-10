import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Teks, dataBankSampah, dataProdukMarketplace } from './Teks';
import { auth, provider } from './firebaseConfig';
import { signInWithPopup } from 'firebase/auth';
import './styles.css';

// Impor semua komponen
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BankSampahTeaser from './components/BankSampahTeaser';
import MarketplaceTeaser from './components/MarketplaceTeaser';
import StatsAndFactsSection from './components/StatsAndFactsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import BankSampahPage from './components/BankSampahPage';
import ProfilePage from './components/ProfilePage';
import AboutUsPage from './components/AboutUsPage';
import MarketplacePage from './components/MarketplacePage';
import ProductDetailPage from './components/ProductDetailPage';

const App = () => {
  // State
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  
  // State Halaman & Modal
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [authForm, setAuthForm] = useState({ email: '', password: '', confirmPassword: '' });
  const [showBankSampahPage, setShowBankSampahPage] = useState(false);
  const [showProfilePage, setShowProfilePage] = useState(false);
  const [showAboutPage, setShowAboutPage] = useState(false);
  const [showMarketplace, setShowMarketplace] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // useEffect untuk Cookie
  useEffect(() => {
    const savedUserCookie = Cookies.get('peduliLingkunganUser');
    if (savedUserCookie) {
      try {
        const parsedUser = JSON.parse(savedUserCookie);
        if (parsedUser && typeof parsedUser.poin === 'undefined') parsedUser.poin = 0;
        setUser(parsedUser);
        setIsLoggedIn(true);
      } catch (error) { console.error("Gagal mem-parsing data pengguna dari cookie:", error); Cookies.remove('peduliLingkunganUser'); }
    }
  }, []);

  // useEffect untuk ScrollSpy
  useEffect(() => {
    const isAnyPageOpen = showBankSampahPage || showProfilePage || showAboutPage || showMarketplace || selectedProduct;
    if (isAnyPageOpen) { return; } // Jangan jalankan jika ada halaman lain yang terbuka
    
    // ✅ Daftar section diperbarui
    const sections = ['home', 'marketplace-teaser', 'facts', 'contact']; 
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) setActiveSection(entry.target.id); });
    }, { rootMargin: '-100px 0px -40% 0px', threshold: 0.1 });
    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.unobserve(element);
    });
  }, [showBankSampahPage, showProfilePage, showAboutPage, showMarketplace, selectedProduct]);
  
  // --- HANDLER FUNCTIONS ---
  const closeAllPages = () => {
    setShowBankSampahPage(false);
    setShowProfilePage(false);
    setShowAboutPage(false);
    setShowMarketplace(false);
    setSelectedProduct(null);
    setActiveSection('home');
  };

  const scrollToSection = (sectionId) => {
    closeAllPages();
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 50);
    setIsMenuOpen(false);
  };
  
  // ✅ PERBAIKAN: Fungsi ini sekarang menerima 'key' untuk mengatur section aktif
  const handlePageOpen = (setter, activeNavKey) => {
    closeAllPages();
    setter(true);
    setActiveSection(activeNavKey); // <-- Ini akan mengaktifkan underline
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  };

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    window.scrollTo(0, 0);
  };

  const handleAuthInputChange = (e) => { setAuthForm({ ...authForm, [e.target.name]: e.target.value }); };
  const handleLogin = (e) => { e.preventDefault(); if (!authForm.email || !authForm.password) return alert(Teks.alerts.fillFields); const userData = { email: authForm.email, fullName: authForm.email.split('@')[0], poin: 0 }; setUser(userData); setIsLoggedIn(true); Cookies.set('peduliLingkunganUser', JSON.stringify(userData), { expires: 7 }); setShowAuthModal(false); setAuthForm({ email: '', password: '', confirmPassword: '' }); alert(Teks.alerts.loginSuccess); };
  const handleSocialLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
const firebaseUser = result.user;
const idToken = await firebaseUser.getIdToken(); // 🔥 ambil token dari Firebase Auth
console.log("ID Token Firebase:", idToken);


const response = await fetch('http://localhost:8000/api/auth/google', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ id_token: idToken }), // ✅ kirim id_token, bukan uid/email/name
});
  
      const data = await response.json();
  
      // Simpan user dan token
      const userData = {
        email: data.user.email,
        fullName: data.user.name,
        poin: data.user.poin ?? 0,
      };
  
      setUser(userData);
      setIsLoggedIn(true);
      Cookies.set('peduliLingkunganUser', JSON.stringify(userData), { expires: 7 });
      setShowAuthModal(false);
      alert(`${Teks.alerts.socialLoginSuccess} Google!`);
    } catch (error) {
      console.error("Login Google gagal:", error);
      alert("Login dengan Google gagal");
    }
  };
  
  
  
  const handleRegister = (e) => { e.preventDefault(); if (!authForm.email || !authForm.password || !authForm.confirmPassword) return alert(Teks.alerts.fillFields); if (authForm.password !== authForm.confirmPassword) return alert(Teks.alerts.passwordMismatch); if (authForm.password.length < 6) return alert(Teks.alerts.passwordLength); const userData = { email: authForm.email, fullName: authForm.email.split('@')[0], poin: 0 }; setUser(userData); setIsLoggedIn(true); Cookies.set('peduliLingkunganUser', JSON.stringify(userData), { expires: 7 }); setShowAuthModal(false); setAuthForm({ email: '', password: '', confirmPassword: '' }); alert(Teks.alerts.registerSuccess); };
  const handleLogout = () => { setUser(null); setIsLoggedIn(false); closeAllPages(); Cookies.remove('peduliLingkunganUser'); alert(Teks.alerts.logoutSuccess); };
  const openAuthModal = (mode) => { setAuthMode(mode); setShowAuthModal(true); };

  // --- RENDER LOGIC ---
  const renderContent = () => {
    if (selectedProduct) return <ProductDetailPage product={selectedProduct} onBack={() => {setSelectedProduct(null); setActiveSection('marketplace')}} />;
    if (showMarketplace) return <MarketplacePage data={dataProdukMarketplace} onBack={closeAllPages} onSelectProduct={handleProductSelect} />;
    if (showAboutPage) return <AboutUsPage Teks={Teks} onBack={closeAllPages} />;
    if (showProfilePage) return <ProfilePage user={user} onBack={closeAllPages} handleLogout={handleLogout} />;
    if (showBankSampahPage) return <BankSampahPage onBack={closeAllPages} data={dataBankSampah} />;
    
    // Halaman Utama
    return (
      <>
        <main>
          <HeroSection Teks={Teks} isLoggedIn={isLoggedIn} openAuthModal={openAuthModal} scrollToSection={scrollToSection} />
          <BankSampahTeaser Teks={Teks} setShowBankSampahPage={() => handlePageOpen(setShowBankSampahPage, '')} />
          <MarketplaceTeaser onMarketplaceClick={() => handlePageOpen(setShowMarketplace, 'marketplace')} />
          <StatsAndFactsSection />
          <ContactSection Teks={Teks} />
        </main>
        <Footer Teks={Teks} scrollToSection={scrollToSection} onAboutClick={() => handlePageOpen(setShowAboutPage, 'about')} onMarketplaceClick={() => handlePageOpen(setShowMarketplace, 'marketplace')} />
      </>
    );
  };

  return (
    <div className="app-container">
      <Navbar
        Teks={Teks} user={user} isLoggedIn={isLoggedIn} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection} scrollToSection={scrollToSection} onProfileClick={() => handlePageOpen(setShowProfilePage, '')}
        openAuthModal={openAuthModal} onAboutClick={() => handlePageOpen(setShowAboutPage, 'about')} onMarketplaceClick={() => handlePageOpen(setShowMarketplace, 'marketplace')}
      />
      {renderContent()}
      <AuthModal
        Teks={Teks} show={showAuthModal} close={() => setShowAuthModal(false)}
        authMode={authMode} setAuthMode={setAuthMode} form={authForm}
        onFormChange={handleAuthInputChange} onLogin={handleLogin} onRegister={handleRegister} onSocialLogin={handleSocialLogin}
      />
    </div>
  );
};

export default App;
