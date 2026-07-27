import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { X, Lock, Mail, User, ShieldCheck, ArrowRight, KeyRound, Sparkles, CheckCircle2, ShieldAlert, Users } from 'lucide-react';

export const LoginModal: React.FC = () => {
  const { activePalette } = useTheme();
  const {
    isLoginModalOpen,
    closeLoginModal,
    isForgotPasswordOpen,
    closeForgotPassword,
    openForgotPassword,
    login
  } = useAuth();

  const [loginRole, setLoginRole] = useState<'member' | 'admin'>('member');
  const [username, setUsername] = useState('Lord Sterling Vance');
  const [password, setPassword] = useState('••••••••••••');
  const [rememberMe, setRememberMe] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetSuccess, setResetSuccess] = useState(false);

  if (!isLoginModalOpen && !isForgotPasswordOpen) return null;

  const handleRoleSwitch = (role: 'member' | 'admin') => {
    setLoginRole(role);
    if (role === 'admin') {
      setUsername('Director Alistair Vance');
    } else {
      setUsername('Lord Sterling Vance');
    }
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      login(username, loginRole);
    }, 400);
  };

  const handleResetSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setResetSuccess(true);
    }, 400);
  };

  const handleQuickMemberLogin = () => {
    login('Lord Sterling Vance', 'member');
  };

  const handleQuickAdminLogin = () => {
    login('Sanctuary Director Alistair', 'admin');
  };

  return (
    <div
      className="fixed inset-0 z-[999999] overflow-y-auto backdrop-blur-2xl bg-[var(--overlay-dark)] transition-opacity duration-300 p-4 sm:p-6 flex items-start justify-center pt-[5vh] pb-[10vh] scroll-smooth"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          closeLoginModal();
          closeForgotPassword();
        }
      }}
    >
      <div
        className="relative max-w-lg w-full rounded-3xl border shadow-[var(--shadow-lg)] overflow-hidden flex flex-col max-h-[88vh] my-auto"
        style={{
          backgroundColor: activePalette.bgCard,
          borderColor: activePalette.accentGold,
        }}
      >
        {/* Ambient Glow behind Modal */}
        <div
          className="absolute -top-24 -left-24 w-60 h-60 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ backgroundColor: activePalette.accentGold }}
        />

        {/* Modal Header */}
        <div
          className="p-5 sm:p-6 border-b flex items-center justify-between shrink-0 relative"
          style={{
            backgroundColor: activePalette.bgMain,
            borderColor: activePalette.borderMain,
          }}
        >
          <div className="flex items-center space-x-3">
            <div
              className="w-10 h-10 rounded-full border flex items-center justify-center shadow-md shrink-0"
              style={{
                borderColor: activePalette.accentGold,
                backgroundColor: `${activePalette.accentGold}15`,
              }}
            >
              <ShieldCheck size={20} style={{ color: activePalette.accentGold }} />
            </div>
            <div>
              <span
                className="text-[10px] uppercase tracking-[0.25em] font-semibold block"
                style={{ color: activePalette.accentGold }}
              >
                Sanctuary Portal
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-light tracking-tight" style={{ color: activePalette.textPrimary }}>
                Forge Fit Access
              </h3>
            </div>
          </div>

          <button
            onClick={() => {
              closeLoginModal();
              closeForgotPassword();
              setResetSuccess(false);
            }}
            className="w-9 h-9 rounded-full flex items-center justify-center border transition-transform hover:scale-110 active:scale-95 z-20 shrink-0"
            style={{
              backgroundColor: activePalette.bgCard,
              borderColor: activePalette.borderMain,
              color: activePalette.textPrimary,
            }}
            aria-label="Close Portal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Quick Navigation Scroll Jump Bar */}
        {!isForgotPasswordOpen && (
          <div
            className="px-5 py-2.5 border-b flex items-center justify-between space-x-2 shrink-0 overflow-x-auto no-scrollbar text-xs"
            style={{
              backgroundColor: activePalette.bgCard,
              borderColor: activePalette.borderMain,
            }}
          >
            <span className="text-[10px] uppercase tracking-wider font-semibold shrink-0" style={{ color: activePalette.textSecondary }}>
              Jump To:
            </span>
            <div className="flex items-center space-x-2 shrink-0">
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('login-form-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-3 py-1 rounded-full border text-[11px] font-semibold hover:border-amber-400 transition-colors flex items-center space-x-1"
                style={{
                  backgroundColor: activePalette.bgMain,
                  borderColor: activePalette.borderMain,
                  color: activePalette.accentGold,
                }}
              >
                <span>🔐 Credentials</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('login-demo-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-3 py-1 rounded-full border text-[11px] font-semibold hover:border-amber-400 transition-colors flex items-center space-x-1"
                style={{
                  backgroundColor: activePalette.bgMain,
                  borderColor: activePalette.borderMain,
                  color: activePalette.accentGold,
                }}
              >
                <span>⚡ 1-Click Portals</span>
              </button>
            </div>
          </div>
        )}

        {/* Modal Main Scrollable Content */}
        <div
          id="login-modal-scroll-body"
          className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 custom-scrollbar scroll-smooth touch-pan-y"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {isForgotPasswordOpen ? (
            /* FORGOT PASSWORD FLOW */
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div
                  className="w-10 h-10 rounded-full border flex items-center justify-center"
                  style={{
                    borderColor: activePalette.accentGold,
                    backgroundColor: `${activePalette.accentGold}15`,
                  }}
                >
                  <KeyRound size={20} style={{ color: activePalette.accentGold }} />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] font-semibold block" style={{ color: activePalette.accentGold }}>
                    Security Protocol
                  </span>
                  <h3 className="font-serif text-2xl font-light" style={{ color: activePalette.textPrimary }}>
                    Recover Access
                  </h3>
                </div>
              </div>

              {resetSuccess ? (
                <div className="p-6 rounded-2xl border text-center space-y-4" style={{ backgroundColor: activePalette.bgMain, borderColor: activePalette.accentGold }}>
                  <CheckCircle2 size={36} className="mx-auto text-amber-400" />
                  <h4 className="font-serif text-lg font-medium" style={{ color: activePalette.textPrimary }}>
                    Reset Authorization Sent
                  </h4>
                  <p className="text-xs text-neutral-300 font-light leading-relaxed">
                    Password reset authorization has been transmitted to <span className="font-bold text-amber-300">{resetEmail || 'your email'}</span>.
                  </p>
                  <button
                    onClick={() => {
                      closeForgotPassword();
                      setResetSuccess(false);
                    }}
                    style={{ backgroundColor: activePalette.accentGold, color: activePalette.bgMain }}
                    className="w-full py-3 rounded-full font-bold text-xs uppercase tracking-widest font-button mt-2"
                  >
                    Return To Login
                  </button>
                </div>
              ) : (
                <form onSubmit={handleResetSubmit} className="space-y-5">
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    Enter your executive email or member ID below. A cryptographic password reset link will be sent.
                  </p>

                  <div>
                    <label className="text-[10px] uppercase tracking-widest font-semibold block mb-1.5" style={{ color: activePalette.textSecondary }}>
                      Email or Username
                    </label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-3.5 top-3" style={{ color: activePalette.textSecondary }} />
                      <input
                        type="text"
                        required
                        placeholder="sterling.vance@aureus.club"
                        value={resetEmail}
                        onChange={(e) => setResetEmail(e.target.value)}
                        className="w-full border rounded-xl pl-10 pr-4 py-2.5 text-xs focus:outline-none"
                        style={{
                          backgroundColor: activePalette.bgMain,
                          borderColor: activePalette.borderMain,
                          color: activePalette.textPrimary,
                        }}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{ backgroundColor: activePalette.accentGold, color: activePalette.bgMain }}
                    className="w-full py-3.5 rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:opacity-90 transition-all font-button shadow-[var(--shadow-md)] flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <span>Transmitting...</span>
                    ) : (
                      <>
                        <span>Send Authorization Link</span>
                        <ArrowRight size={14} />
                      </>
                    )}
                  </button>

                  <div className="text-center">
                    <button
                      type="button"
                      onClick={closeForgotPassword}
                      className="text-xs hover:underline"
                      style={{ color: activePalette.textSecondary }}
                    >
                      Back to Login
                    </button>
                  </div>
                </form>
              )}
            </div>
          ) : (
            /* LOGIN FLOW */
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border mb-1" style={{ backgroundColor: activePalette.bgMain, borderColor: `${activePalette.accentGold}40` }}>
                  <ShieldCheck size={14} style={{ color: activePalette.accentGold }} />
                  <span className="text-[10px] uppercase tracking-[0.22em] font-semibold" style={{ color: activePalette.accentGold }}>
                    SANCTUARY PORTAL
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-light tracking-tight" style={{ color: activePalette.textPrimary }}>
                  FORGE FIT ACCESS
                </h3>
                <p className="text-xs font-light" style={{ color: activePalette.textSecondary }}>
                  Select access role or enter credentials.
                </p>
              </div>

              {/* Role Toggle Tabs */}
              <div className="grid grid-cols-2 gap-2 p-1 rounded-2xl border" style={{ backgroundColor: activePalette.bgMain, borderColor: activePalette.borderMain }}>
                <button
                  type="button"
                  onClick={() => handleRoleSwitch('member')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 transition-all ${
                    loginRole === 'member' ? 'shadow-md border' : 'opacity-60 hover:opacity-100'
                  }`}
                  style={{
                    backgroundColor: loginRole === 'member' ? activePalette.bgCard : 'transparent',
                    borderColor: loginRole === 'member' ? activePalette.accentGold : 'transparent',
                    color: loginRole === 'member' ? activePalette.accentGold : activePalette.textSecondary,
                  }}
                >
                  <Users size={14} />
                  <span>VIP Member</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleRoleSwitch('admin')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 transition-all ${
                    loginRole === 'admin' ? 'shadow-md border' : 'opacity-60 hover:opacity-100'
                  }`}
                  style={{
                    backgroundColor: loginRole === 'admin' ? activePalette.bgCard : 'transparent',
                    borderColor: loginRole === 'admin' ? activePalette.accentGold : 'transparent',
                    color: loginRole === 'admin' ? activePalette.accentGold : activePalette.textSecondary,
                  }}
                >
                  <ShieldAlert size={14} />
                  <span>Admin Director</span>
                </button>
              </div>

              <form id="login-form-section" onSubmit={handleLoginSubmit} className="space-y-4 pt-1">
                <div>
                  <label className="text-[10px] uppercase tracking-widest font-semibold block mb-1.5" style={{ color: activePalette.textSecondary }}>
                    {loginRole === 'admin' ? 'Admin ID / Executive Username' : 'Username / Member ID'}
                  </label>
                  <div className="relative">
                    <User size={16} className="absolute left-3.5 top-3" style={{ color: activePalette.textSecondary }} />
                    <input
                      type="text"
                      required
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full border rounded-xl pl-10 pr-4 py-2.5 text-xs focus:outline-none"
                      style={{
                        backgroundColor: activePalette.bgMain,
                        borderColor: activePalette.borderMain,
                        color: activePalette.textPrimary,
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-widest font-semibold block mb-1.5" style={{ color: activePalette.textSecondary }}>
                    Password
                  </label>
                  <div className="relative">
                    <Lock size={16} className="absolute left-3.5 top-3" style={{ color: activePalette.textSecondary }} />
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full border rounded-xl pl-10 pr-4 py-2.5 text-xs focus:outline-none"
                      style={{
                        backgroundColor: activePalette.bgMain,
                        borderColor: activePalette.borderMain,
                        color: activePalette.textPrimary,
                      }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs pt-1">
                  <label className="flex items-center space-x-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="accent-amber-500 rounded"
                    />
                    <span style={{ color: activePalette.textSecondary }}>Remember Session</span>
                  </label>

                  <button
                    type="button"
                    onClick={openForgotPassword}
                    className="font-medium hover:underline text-[11px]"
                    style={{ color: activePalette.accentGold }}
                  >
                    Forgot Password?
                  </button>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      backgroundColor: activePalette.accentGold,
                      color: activePalette.bgMain,
                    }}
                    className="w-full py-4 rounded-full font-bold text-xs uppercase tracking-[0.22em] hover:scale-[1.01] active:scale-[0.99] transition-all font-button shadow-[var(--shadow-lg)] flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <span>Authenticating {loginRole === 'admin' ? 'Admin' : 'Member'}...</span>
                    ) : (
                      <>
                        <span>Enter {loginRole === 'admin' ? 'Admin Dashboard' : 'Member Suite'}</span>
                        <ArrowRight size={15} />
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Quick 1-Click Demo Login Options */}
              <div id="login-demo-section" className="pt-4 border-t space-y-3 text-center" style={{ borderColor: activePalette.borderMain }}>
                <span className="text-[10px] uppercase tracking-wider block font-mono font-semibold" style={{ color: activePalette.textSecondary }}>
                  Instant 1-Click Demo Portals
                </span>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={handleQuickMemberLogin}
                    className="py-2.5 px-3 rounded-xl border text-[11px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-300 border-amber-500/30 hover:bg-amber-500/20 transition-all flex items-center justify-center space-x-1.5 shadow-sm"
                  >
                    <span>⚡ Demo VIP Member</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleQuickAdminLogin}
                    className="py-2.5 px-3 rounded-xl border text-[11px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/20 transition-all flex items-center justify-center space-x-1.5 shadow-sm"
                  >
                    <span>🛡️ Demo Admin Suite</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
