import React from 'react';
import { Leaf, User, UserPlus, X } from 'lucide-react';

const AuthModal = ({ Teks, show, close, authMode, setAuthMode, form, onFormChange, onLogin, onRegister, onSocialLogin }) => {
  if (!show) {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (authMode === 'login') {
      onLogin(e);
    } else {
      onRegister(e);
    }
  };

  return (
    <div className="modal-overlay" onClick={close}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button onClick={close} className="modal-close-btn"><X /></button>
        <div className="modal-header">
          <Leaf className="modal-icon" />
          <h2 className="modal-title">{authMode === 'login' ? Teks.modal.welcomeBack : Teks.modal.createAccount}</h2>
          <p className="modal-subtitle">{authMode === 'login' ? Teks.modal.signInToContinue : Teks.modal.joinUs}</p>
        </div>

        {/* ✅ Form email/password sekarang di atas */}
        <form onSubmit={handleSubmit} className="auth-form">
          <div>
            <label className="form-label">{Teks.modal.emailLabel}</label>
            <input type="email" name="email" value={form.email} onChange={onFormChange} className="form-input" placeholder={Teks.modal.emailPlaceholder} required />
          </div>
          <div>
            <label className="form-label">{Teks.modal.passwordLabel}</label>
            <input type="password" name="password" value={form.password} onChange={onFormChange} className="form-input" placeholder={Teks.modal.passwordPlaceholder} required />
          </div>
          {authMode === 'register' && (
            <div>
              <label className="form-label">{Teks.modal.confirmPasswordLabel}</label>
              <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={onFormChange} className="form-input" placeholder={Teks.modal.confirmPasswordPlaceholder} required />
            </div>
          )}
          <button type="submit" className="btn-submit">
            {authMode === 'login' ? <><User className="icon-sm" /><span>{Teks.modal.signIn}</span></> : <><UserPlus className="icon-sm" /><span>{Teks.modal.signUp}</span></>}
          </button>
        </form>

        {/* ✅ Pembatas "ATAU" ditambahkan */}
        <div className="divider-or">
          <span>ATAU</span>
        </div>

        {/* ✅ Tombol Google sekarang di bawah */}
        <div className="social-login">
          <button onClick={() => onSocialLogin('google')} className="btn-social-google">
            <svg className="icon-sm" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
            <span>{Teks.modal.continueWithGoogle}</span>
          </button>
        </div>
        
        <div className="switch-auth-mode">
          <p>
            {authMode === 'login' ? Teks.modal.noAccount : Teks.modal.haveAccount}
            <button onClick={() => setAuthMode(authMode === 'login' ? 'register' : 'login')} className="btn-switch-auth">
              {authMode === 'login' ? Teks.modal.signUp : Teks.modal.signIn}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
