import React, { useState, useEffect } from 'react';
import { Shield, ChevronDown, ChevronUp, Check, Lock, Cookie, Settings, X, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  hasResponded: boolean;
  updatedAt?: string;
}

const STORAGE_KEY = 'dr_ekrem_cookie_consent_v2';

export const getStoredCookiePreferences = (): CookiePreferences => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch {
    // localStorage disabled or error
  }
  return {
    necessary: true,
    analytics: false,
    marketing: false,
    hasResponded: false,
  };
};

export const updateGoogleConsent = (prefs: CookiePreferences) => {
  if (typeof window !== 'undefined') {
    const gtag = (window as any).gtag;
    if (typeof gtag === 'function') {
      gtag('consent', 'update', {
        analytics_storage: prefs.analytics ? 'granted' : 'denied',
        ad_storage: prefs.marketing ? 'granted' : 'denied',
        ad_user_data: prefs.marketing ? 'granted' : 'denied',
        ad_personalization: prefs.marketing ? 'granted' : 'denied',
      });
    }
  }
};

interface CookieConsentProps {
  isOpenExternal?: boolean;
  onCloseExternal?: () => void;
  onOpenLegalDoc?: (docKey: string) => void;
}

export const CookieConsent: React.FC<CookieConsentProps> = ({
  isOpenExternal,
  onCloseExternal,
  onOpenLegalDoc,
}) => {
  const [preferences, setPreferences] = useState<CookiePreferences>(() => getStoredCookiePreferences());
  const [isOpen, setIsOpen] = useState<boolean>(() => !getStoredCookiePreferences().hasResponded);
  const [showDetails, setShowDetails] = useState(false);

  // Sync initial state and update Google consent if already responded
  useEffect(() => {
    const initialPrefs = getStoredCookiePreferences();
    setPreferences(initialPrefs);

    if (!initialPrefs.hasResponded) {
      setIsOpen(true);
    } else {
      updateGoogleConsent(initialPrefs);
    }
  }, []);

  // Sync external open request (e.g., from footer "Çerez Tercihleri" button)
  useEffect(() => {
    if (isOpenExternal !== undefined) {
      if (isOpenExternal) {
        setIsOpen(true);
        setShowDetails(true);
      } else if (getStoredCookiePreferences().hasResponded) {
        setIsOpen(false);
      }
    }
  }, [isOpenExternal]);

  // Listen for custom 'open-cookie-preferences' window event
  useEffect(() => {
    const handleOpenEvent = () => {
      setIsOpen(true);
      setShowDetails(true);
    };
    window.addEventListener('open-cookie-preferences', handleOpenEvent);
    return () => window.removeEventListener('open-cookie-preferences', handleOpenEvent);
  }, []);

  const savePreferences = (newPrefs: CookiePreferences) => {
    const finalPrefs: CookiePreferences = {
      ...newPrefs,
      necessary: true,
      hasResponded: true,
      updatedAt: new Date().toISOString(),
    };

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(finalPrefs));
    } catch {
      // storage unavailable
    }

    setPreferences(finalPrefs);
    updateGoogleConsent(finalPrefs);
    setIsOpen(false);
    setShowDetails(false);
    if (onCloseExternal) onCloseExternal();
  };

  const handleAcceptAll = () => {
    savePreferences({
      necessary: true,
      analytics: true,
      marketing: true,
      hasResponded: true,
    });
  };

  const handleNecessaryOnly = () => {
    savePreferences({
      necessary: true,
      analytics: false,
      marketing: false,
      hasResponded: true,
    });
  };

  const handleSaveCustom = () => {
    savePreferences(preferences);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed bottom-0 left-0 right-0 z-50 p-2 sm:p-4 pointer-events-none">
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 280 }}
          className="max-w-7xl mx-auto pointer-events-auto bg-[#0b0d10]/95 border border-gold/30 rounded-xl sm:rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.85)] text-white backdrop-blur-md overflow-hidden"
        >
          {/* Top Banner Row */}
          <div className="p-4 sm:p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Left Content */}
            <div className="flex items-start sm:items-center gap-3.5 flex-1 pr-2">
              <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0 mt-0.5 sm:mt-0">
                <Cookie className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-xs sm:text-sm font-bold font-serif text-white tracking-wide">
                    Çerez ve Veri Gizliliği
                  </h3>
                  <span className="text-[9px] font-sans px-2 py-0.5 rounded bg-gold/15 text-gold border border-gold/30 font-medium uppercase tracking-wider">
                    KVKK & GDPR
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-white/70 leading-relaxed max-w-4xl">
                  Sitemizde hasta deneyimini iyileştirmek, performansı analiz etmek ve güvenlik tedbirlerimizi sürdürmek amacıyla çerezler kullanılmaktadır.{' '}
                  <button
                    type="button"
                    onClick={() => {
                      if (onOpenLegalDoc) onOpenLegalDoc('gizlilik');
                    }}
                    className="text-gold hover:underline font-medium inline-block"
                  >
                    Gizlilik ve Çerez Politikamızı
                  </button>{' '}
                  inceleyebilirsiniz.
                </p>
              </div>
            </div>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap sm:flex-nowrap shrink-0 justify-end pt-1 lg:pt-0 border-t lg:border-t-0 border-white/10">
              <button
                type="button"
                onClick={handleNecessaryOnly}
                className="flex-1 sm:flex-none px-3.5 py-2 rounded-lg text-xs font-semibold text-white/75 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors whitespace-nowrap"
              >
                Yalnızca Zorunlu
              </button>

              <button
                type="button"
                onClick={() => setShowDetails(!showDetails)}
                className="flex-1 sm:flex-none px-3.5 py-2 rounded-lg text-xs font-medium text-gold/90 hover:text-gold bg-gold/10 border border-gold/25 hover:bg-gold/20 transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap"
              >
                <Settings className="w-3.5 h-3.5" />
                <span>Tercihler</span>
                {showDetails ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>

              <button
                type="button"
                onClick={handleAcceptAll}
                className="flex-1 sm:flex-none px-4 py-2 rounded-lg text-xs font-bold text-dark-stitch bg-gold hover:bg-gold/90 transition-all shadow-[0_0_15px_rgba(212,175,55,0.25)] whitespace-nowrap"
              >
                Tümünü Kabul Et
              </button>

              {preferences.hasResponded && (
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    setShowDetails(false);
                    if (onCloseExternal) onCloseExternal();
                  }}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors"
                  title="Kapat"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Accordion Details (Expanded when clicking "Tercihler") */}
          <AnimatePresence>
            {showDetails && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="border-t border-white/10 bg-black/40 p-4 sm:p-5 space-y-3 max-h-[60vh] overflow-y-auto custom-scrollbar"
              >
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-xs font-bold text-gold uppercase tracking-wider flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5" />
                    Detaylı Çerez Kategorileri
                  </h4>
                  <span className="text-[10px] text-white/40">Tercihlerinizi istediğiniz zaman değiştirebilirsiniz.</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {/* 1. Necessary */}
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex flex-col justify-between gap-2">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-1.5">
                          <Lock className="w-3.5 h-3.5 text-gold" />
                          <h5 className="text-xs font-bold text-white">Zorunlu Çerezler</h5>
                        </div>
                        <span className="text-[9px] bg-white/10 text-white/70 px-1.5 py-0.5 rounded font-mono">
                          Aktif
                        </span>
                      </div>
                      <p className="text-[10px] text-white/50 leading-relaxed">
                        Web sitemizin güvenliği, bot koruması (reCAPTCHA) ve temel işlevler için zorunludur.
                      </p>
                    </div>
                    <div className="pt-1 flex items-center gap-1.5 text-[10px] text-gold/80">
                      <Check className="w-3 h-3" />
                      <span>Devre dışı bırakılamaz</span>
                    </div>
                  </div>

                  {/* 2. Analytics */}
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex flex-col justify-between gap-2 hover:border-white/20 transition-colors">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-1.5">
                          <Info className="w-3.5 h-3.5 text-gold" />
                          <h5 className="text-xs font-bold text-white">İstatistik & Analitik</h5>
                        </div>
                        <span className="text-[9px] bg-gold/15 text-gold px-1.5 py-0.5 rounded font-mono">
                          İsteğe Bağlı
                        </span>
                      </div>
                      <p className="text-[10px] text-white/50 leading-relaxed">
                        Ziyaretçi sayılarını ve sayfa inceleme sürelerini anonim olarak analiz eder.
                      </p>
                    </div>
                    <div className="pt-1 flex items-center justify-between">
                      <span className="text-[10px] text-white/60">
                        {preferences.analytics ? 'İzin Verildi' : 'Reddedildi'}
                      </span>
                      <button
                        type="button"
                        onClick={() => setPreferences(prev => ({ ...prev, analytics: !prev.analytics }))}
                        className="focus:outline-none"
                      >
                        <div
                          className={`w-9 h-5 rounded-full transition-colors duration-200 border flex items-center px-0.5 ${
                            preferences.analytics
                              ? 'bg-gold border-gold justify-end'
                              : 'bg-white/10 border-white/20 justify-start'
                          }`}
                        >
                          <div className={`w-3.5 h-3.5 rounded-full ${preferences.analytics ? 'bg-dark-stitch' : 'bg-white/60'}`} />
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* 3. Marketing */}
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex flex-col justify-between gap-2 hover:border-white/20 transition-colors">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-1.5">
                          <Shield className="w-3.5 h-3.5 text-gold" />
                          <h5 className="text-xs font-bold text-white">Pazarlama & Tanıtım</h5>
                        </div>
                        <span className="text-[9px] bg-gold/15 text-gold px-1.5 py-0.5 rounded font-mono">
                          İsteğe Bağlı
                        </span>
                      </div>
                      <p className="text-[10px] text-white/50 leading-relaxed">
                        Sağlık bilgilendirme duyuruları ve sosyal medya içerik entegrasyonu sunar.
                      </p>
                    </div>
                    <div className="pt-1 flex items-center justify-between">
                      <span className="text-[10px] text-white/60">
                        {preferences.marketing ? 'İzin Verildi' : 'Reddedildi'}
                      </span>
                      <button
                        type="button"
                        onClick={() => setPreferences(prev => ({ ...prev, marketing: !prev.marketing }))}
                        className="focus:outline-none"
                      >
                        <div
                          className={`w-9 h-5 rounded-full transition-colors duration-200 border flex items-center px-0.5 ${
                            preferences.marketing
                              ? 'bg-gold border-gold justify-end'
                              : 'bg-white/10 border-white/20 justify-start'
                          }`}
                        >
                          <div className={`w-3.5 h-3.5 rounded-full ${preferences.marketing ? 'bg-dark-stitch' : 'bg-white/60'}`} />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={handleSaveCustom}
                    className="px-4 py-2 rounded-lg text-xs font-bold text-dark-stitch bg-gold hover:bg-gold/90 transition-all shadow-[0_0_12px_rgba(212,175,55,0.3)]"
                  >
                    Seçimleri Kaydet
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CookieConsent;
