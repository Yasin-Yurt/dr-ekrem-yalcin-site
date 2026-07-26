import React, { useState, useEffect, useCallback } from 'react';
import { 
  Brain, 
  Award, 
  Play, 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  ChevronRight, 
  ChevronDown,
  Menu, 
  X,
  Stethoscope,
  ShieldCheck,
  MessageCircle,
  Youtube,
  ArrowRight,
  ChevronLeft,
  Calendar,
  Search,
  Lock
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import type { LegalDocument } from './components/LegalModal';
import { sanitizeInput, sanitizeForMessage } from './utils/security';
import CookieConsent from './components/CookieConsent';

const ContentPage = React.lazy(() => import('./components/ContentPage').then(module => ({ default: module.ContentPage })));
const LegalModal = React.lazy(() => import('./components/LegalModal'));

// --- Types ---
interface Video {
  id: string;
  title: string;
  kucukResim: string;
  youtubeUrl: string;
}

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  image: string;
}

interface NavLink {
  name: string;
  href: string;
  dropdown?: {
    title?: string;
    items: { name: string; slug: string }[];
  }[];
}

const legalDocuments: Record<string, LegalDocument> = {
  kvkk: {
    id: 'kvkk',
    title: 'KVKK Aydınlatma Metni',
    subtitle: '6698 Sayılı Kişisel Verilerin Korunması Kanunu Uyarınca Hasta ve Ziyaretçi Bilgilendirmesi',
    badge: 'Yasal Mevzuat - KVKK Madde 10',
    updatedAt: '24 Temmuz 2026',
    sections: [
      {
        heading: '1. Veri Sorumlusunun Kimliği',
        text: [
          '6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, Op. Dr. Ekrem Yalçın Muayenehanesi/Kliniği ("Veri Sorumlusu") olarak, hastalarımızın, danışanlarımızın ve web sitemizi (drekremyalcin.com.tr) ziyaret eden kullanıcılarımızın kişisel verilerinin güvenliğine ve gizliliğine azami hassasiyet göstermekteyiz.'
        ]
      },
      {
        heading: '2. İşlenen Kişisel Veriler ve Toplama Yöntemleri',
        text: [
          'Web sitemizdeki iletişim formları, online randevu talep alanları ve WhatsApp direkt iletişim kanalları üzerinden tarafımıza ilettiğiniz;',
          '• Kimlik Bilgileri: Ad, soyad, T.C. kimlik numarası (randevu ve tıbbi kayıt durumunda).',
          '• İletişim Bilgileri: Telefon numarası, e-posta adresi.',
          '• Tıbbi ve Sağlık Bilgileri: Randevu notu veya şikayet alanında bizzat ilettiğiniz sağlık geçmişi, semptomlar ve tıbbi süreç bilgileri.',
          '• İşlem Güvenliği Bilgileri: IP adresi, site erişim logları ve çerez kayıtları.'
        ]
      },
      {
        heading: '3. Kişisel Verilerin İşlenme Amaçları',
        text: [
          'Kişisel verileriniz KVKK Madde 5 ve 6 prensiplerine uygun olarak şu amaçlarla işlenmektedir:',
          '• Tıbbi teşhis, muayene, tedavi ve bakım hizmetlerinin yürütülmesi,',
          '• Online randevu süreçlerinin planlanması ve hasta iletişimi,',
          '• 3359 sayılı Sağlık Hizmetleri Temel Kanunu ve ilgili Sağlık Bakanlığı mevzuatı uyarınca yasal tıbbi kayıt tutma yükümlülüklerinin yerine getirilmesi,',
          '• Yetkili kamu kurum ve kuruluşlarına yasal bilgi verme yükümlülüklerinin ifası.'
        ]
      },
      {
        heading: '4. Verilerin Aktarımı ve Güvenliği',
        text: [
          'Kişisel verileriniz, KVKK\'nın 8. ve 9. maddelerine uygun olarak, reklam, pazarlama veya ticari amaçlarla KESİNLİKLE 3. şahıslara veya özel kurumlara aktarılmaz ve satılmaz. Yalnızca yasal zorunluluk hallerinde T.C. Sağlık Bakanlığı, Yargı Mercileri ve yetkili kamu kurumları ile paylaşılabilir.',
          'Verileriniz endüstri standardı SSL/TLS 1.3 şifreleme ve güvenli sunucu altyapıları ile korunmaktadır.'
        ]
      },
      {
        heading: '5. İlgili Kişinin Hakları (KVKK Madde 11)',
        text: [
          'Veri sahibi olarak info@drekremyalcin.com.tr e-posta adresi üzerinden kliniğimize başvurarak;',
          '• Kişisel verilerinizin işlenip işlenmediğini öğrenme,',
          '• İşlenmişse buna ilişkin bilgi talep etme,',
          '• Amacına uygun kullanılıp kullanılmadığını öğrenme,',
          '• Eksik veya yanlış işlenmişse düzeltilmesini ve silinmesini talep etme haklarına sahipsiniz.'
        ]
      }
    ]
  },
  gizlilik: {
    id: 'gizlilik',
    title: 'Gizlilik ve Çerez Politikası',
    subtitle: 'drekremyalcin.com.tr Web Sitesi Çerez (Cookie) Kullanımı ve Veri Güvenliği Esasları',
    badge: 'Gizlilik ve Çerez Yönetimi',
    updatedAt: '24 Temmuz 2026',
    sections: [
      {
        heading: '1. Gizlilik Prensiplerimiz',
        text: [
          'Op. Dr. Ekrem Yalçın web sitesi, ziyaretçilerimizin gizlilik haklarını korumayı ve şeffaflığı temel ilke edinmiştir. Bu politika, sitemizi ziyaret ettiğinizde toplanan verilerin ve kullanılan çerezlerin amacını açıklar.'
        ]
      },
      {
        heading: '2. Çerez (Cookie) Nedir ve Neden Kullanılır?',
        text: [
          'Çerezler, ziyaret ettiğiniz web siteleri tarafından tarayıcınıza veya cihazınıza kaydedilen küçük metin dosyalarıdır. Çerezler sitemizin güvenli, hızlı ve verimli çalışmasını sağlar.'
        ]
      },
      {
        heading: '3. Sitemizde Kullanılan Çerez Türleri',
        text: [
          '• Zorunlu Çerezler: Web sitesinin güvenli bir şekilde çalışması ve sayfa gezinme fonksiyonlarının yürütülmesi için şarttır.',
          '• Performans ve Analitik Çerezleri: Google Analytics gibi araçlarla site trafiğini, ziyaretçi sayılarını ve en çok incelenen sayfaları anonim olarak analiz ederek site deneyimini geliştirmemize yardımcı olur.',
          '• İşlevsel Çerezler: Dil tercihi ve form dolum ayarları gibi kullanıcı tercihlerini hatırlamak amacıyla kullanılır.'
        ]
      },
      {
        heading: '4. Çerez Tercihlerinin Yönetimi',
        text: [
          'Ziyaretçilerimiz diledikleri zaman tarayıcı ayarlarını (Chrome, Safari, Firefox, Edge vb.) değiştirerek çerezleri engelleyebilir, kısıtlayabilir veya silebilirler. Ancak zorunlu çerezlerin kapatılması durumunda sitenin bazı fonksiyonları kısıtlanabilir.'
        ]
      }
    ]
  },
  yasal: {
    id: 'yasal',
    title: 'Yasal Uyarı & Tıbbi Sorumluluk Reddi',
    subtitle: 'T.C. Sağlık Bakanlığı Mevzuatı Uyarınca Zorunlu Bilgilendirme ve Tıbbi Disclaimer',
    badge: 'T.C. Sağlık Bakanlığı Mevzuatı Uyarınca',
    updatedAt: '24 Temmuz 2026',
    sections: [
      {
        heading: '1. Bilgilendirme Amacı (Tıbbi Teşhis ve Tedavi Yerine Geçmez)',
        text: [
          'Bu internet sitesinde (drekremyalcin.com.tr) yer alan tüm makaleler, videolar, görseller, teknik açıklamalar ve vaka bilgilendirmeleri YALNIZCA kamuoyunu ve hastaları genel olarak bilgilendirmek amacıyla hazırlanmıştır.',
          'Sitede sunulan hiçbir bilgi, tanı, reçete, kişisel tedavi tavsiyesi veya tıbbi teşhis yerine geçmez. Sitedeki bilgilere dayanarak doğrudan bir tedaviye başlanmamalı veya mevcut bir tedavi asla sonlandırılmamalıdır.'
        ]
      },
      {
        heading: '2. Birebir Hekim Muayenesi Zorunluluğu',
        text: [
          'Tıp biliminde her hastanın klinik tablosu, anatomisi, şikayetleri ve tedavi yanıtı kendine özgüdür ve bireysel olarak değerlendirilmelidir.',
          'Kesin tanı ve tedavi ancak Beyin, Omurilik ve Sinir Cerrahisi Uzmanı Op. Dr. Ekrem Yalçın veya yetkili bir hekim tarafından klinik ortamda gerçekleştirilecek bizzat muayene, nörolojik tetkikler (MR, Tomografi, EMG vb.) ve değerlendirmeler sonucunda konulabilir.'
        ]
      },
      {
        heading: '3. Reklam ve Yönlendirme Yasağı Uyarınca',
        text: [
          'Bu web sitesi, 1219 sayılı Tababet ve Şuabatı San\'atlarının Tarzı İcrasına Dair Kanun ve T.C. Sağlık Bakanlığı Sağlık Hizmetlerinde Tanıtım ve Bilgilendirme Faaliyetleri Hakkında Yönetmelik hükümlerine tam uyumlu olarak kurgulanmıştır. Sitede yer alan ifadeler reklam, haksız rekabet veya hastaları ticari yönlendirme amacı taşımaz.'
        ]
      },
      {
        heading: '4. Telif Hakları ve Kullanım Şartları',
        text: [
          'Sitedeki tüm yazılı içerik, özgün videolar, cerrahi şemalar ve görseller Op. Dr. Ekrem Yalçın\'a aittir. Yazılı izin alınmaksızın kopyalanamaz, çoğaltılamaz veya ticari amaçla dağıtılamaz.'
        ]
      }
    ]
  },
  hasta: {
    id: 'hasta',
    title: 'Hasta Hakları ve İletişim Aydınlatması',
    subtitle: 'Hasta Hakları Yönetmeliği Uyarınca Hasta Bilgilendirmesi ve İletişim Süreçleri',
    badge: 'Hasta Hakları Yönetmeliği',
    updatedAt: '24 Temmuz 2026',
    sections: [
      {
        heading: '1. Hasta Hakları Genel İlkeleri',
        text: [
          'Op. Dr. Ekrem Yalçın Muayenehanesi/Kliniği bünyesinde, T.C. Sağlık Bakanlığı Hasta Hakları Yönetmeliği hükümleri ve evrensel tıp etiği kuralları çerçevesinde her hastamızın en yüksek kalitede, insani değerlere saygılı sağlık hizmeti alma hakkı garanti altındadır.'
        ]
      },
      {
        heading: '2. Temel Haklarınız',
        text: [
          '• Hizmetten Adalet ve Hakkaniyete Uygun Faydalanma: Irk, dil, din, cinsiyet ayrımı gözetilmeksizen eşit ve nitelikli tıbbi bakım alma hakkı.',
          '• Bilgilendirilme ve Rıza (Aydınlatılmış Onam) Hakkı: Sağlık durumunuz, tanı, önerilen cerrahi/medikal tedavi seçenekleri, olası riskler ve alternatifler hakkında anlaşılır dille bilgilendirilme ve özgür iradenizle karar verme hakkı.',
          '• Mahremiyet ve Gizlilik Hakkı: Tıbbi muayene, teşhis ve tedavi süreçlerinin mahremiyet içerisinde yürütülmesi, kişisel sağlık verilerinizin gizli tutulması hakkı.',
          '• Dini Vecibeleri Yerine Getirebilme ve Saygınlık Görme: İnsani değerlere uygun, saygılı, güler yüzlü ve nazik bir ortamda tedavi görme hakkı.'
        ]
      },
      {
        heading: '3. İletişim ve Geri Bildirim Süreçleri',
        text: [
          'Kliniğimizle web sitemiz, telefon numaralarımız veya WhatsApp hatlarımız üzerinden iletişime geçtiğinizde, soru ve randevu talepleriniz Hasta Hakları ilkeleri göz önünde bulundurularak en kısa sürede yanıtlanır.',
          'Hasta hakları konusundaki görüş, öneri ve taleplerinizi info@drekremyalcin.com.tr adresi üzerinden kliniğimize iletebilirsiniz.'
        ]
      }
    ]
  }
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBioModalOpen, setIsBioModalOpen] = useState(false);
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [isCertGalleryModalOpen, setIsCertGalleryModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [selectedLegalDoc, setSelectedLegalDoc] = useState<LegalDocument | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);
  const [formCooldown, setFormCooldown] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeCertIndex, setActiveCertIndex] = useState(0);
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [activeContentKey, setActiveContentKey] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [videoSearchQuery, setVideoSearchQuery] = useState('');
  const [isMapInView, setIsMapInView] = useState(false);
  const mapContainerRef = React.useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const cardHover = isMobile ? {} : { y: -8, scale: 1.01 };
  const cardHoverHigh = isMobile ? {} : { y: -10, scale: 1.02 };
  const videoCardHover = isMobile ? {} : { y: -10 };
  const navHoverRight = isMobile ? {} : { x: 10 };

  const animAboutImage = {
    initial: isMobile ? { opacity: 0 } : { opacity: 0, scale: 0.95 },
    whileInView: isMobile ? { opacity: 1 } : { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const animAboutText = {
    initial: isMobile ? { opacity: 0 } : { opacity: 0, x: 30 },
    whileInView: isMobile ? { opacity: 1 } : { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const animSpecialtyCard = {
    initial: isMobile ? { opacity: 0 } : { opacity: 0, y: 20 },
    whileInView: isMobile ? { opacity: 1 } : { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { type: "tween", ease: "easeOut", duration: 0.3 }
  };

  // Google Analytics Event Tracking Helper
  const trackGAEvent = (category: string, action: string, label: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', action, {
        event_category: category,
        event_label: label,
      });
    }
  };

  // Reset search query when the gallery modal closes
  useEffect(() => {
    if (!isGalleryModalOpen) {
      setVideoSearchQuery('');
    }
  }, [isGalleryModalOpen]);

  // Throttled scroll handler for performance
  useEffect(() => {
    // Force a resize event on mount to fix potential rendering lag
    const triggerResize = () => {
      window.dispatchEvent(new Event('resize'));
    };
    
    triggerResize();
    // Also trigger after a short delay to ensure all components are rendered
    const timer = setTimeout(triggerResize, 500);

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Auto-slide for carousels
    const interval = setInterval(() => {
      // Certificates
      if (certScrollRef.current && !selectedCert) {
        const { scrollLeft, scrollWidth, clientWidth } = certScrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 20) {
          certScrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollCerts('right');
        }
      }
    }, 4000); // Increased interval for better performance

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [selectedCert]);

  // Trigger resize when modals open/close to force layout recalculation
  useEffect(() => {
    window.dispatchEvent(new Event('resize'));
  }, [
    isBioModalOpen, 
    isGalleryModalOpen, 
    isCertGalleryModalOpen, 
    selectedVideo, 
    isMobileMenuOpen, 
    isAppointmentModalOpen, 
    selectedCert, 
    activeContentKey,
    selectedLegalDoc
  ]);

  // Lock body scroll when full-screen modals are open to prevent double scrollbars
  useEffect(() => {
    if (isGalleryModalOpen || isCertGalleryModalOpen || !!selectedVideo || !!selectedLegalDoc) {
      document.body.style.setProperty('overflow', 'hidden', 'important');
      document.documentElement.style.setProperty('overflow', 'hidden', 'important');
    } else {
      document.body.style.removeProperty('overflow');
      document.documentElement.style.removeProperty('overflow');
    }
    return () => {
      document.body.style.removeProperty('overflow');
      document.documentElement.style.removeProperty('overflow');
    };
  }, [isGalleryModalOpen, isCertGalleryModalOpen, selectedVideo, selectedLegalDoc]);

  // Lazy load Google Maps when container is near viewport
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsMapInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsMapInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px' } // Load 300px before reaching the viewport
    );
    if (mapContainerRef.current) {
      observer.observe(mapContainerRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  const navLinks: NavLink[] = [
    { name: 'Anasayfa', href: '#home' },
    { name: 'Hakkında', href: '#about' },
    { 
      name: 'Tedaviler', 
      href: '#',
      dropdown: [
        {
          title: 'Cerrahi İşlemler',
          items: [
            { name: 'Boyun Servikal Fıtığı ve Kanal Daralması Ameliyatları', slug: 'boyun-servikal-fitigi-ve-kanal-daralmasi-ameliyatlari' },
            { name: 'Boyun Servikal Omurga Ameliyatları', slug: 'boyun-servikal-omurga-ameliyatlari' },
            { name: 'Boyun Servikal Omurga Kırıkları Ameliyatları', slug: 'boyun-servikal-omurga-kiriklari-ameliyatlari' },
            { name: 'Bel Fıtığı ve Kanal Daralması Ameliyatları', slug: 'bel-fitigi-ve-kanal-daralmasi-ameliyatlari' },
            { name: 'Omurilik Tümörleri Ameliyatları', slug: 'omurilik-tumorleri-ameliyatlari' },
            { name: 'Beyin Tümörleri Ameliyatları', slug: 'beyin-tumorleri-ameliyatlari' },
            { name: 'Beyin Kanamaları Ameliyatları', slug: 'beyin-kanamalari-ameliyatlari' },
            { name: 'Chiari Malformasyonu (Beyincik Sarkması) ve Omurilik Kisti (Syringomyeli) Ameliyatları', slug: 'chiari-malformasyonu-ve-omurilik-kisti-ameliyatlari' }
          ]
        }
      ]
    },
    { 
      name: 'Hastalıklar', 
      href: '#',
      dropdown: [
        {
          title: 'Hastalıklar ve Sağlık Rehberi',
          items: [
            { name: 'Beyin Tümörleri Nedir? Belirtileri ve Tanısı', slug: 'beyin-tumorleri-nedir-belirtileri-ve-tanisi' },
            { name: 'Beyincik Sarkması (Chiari Malformasyonu) Nedir?', slug: 'beyincik-sarkmasi-chiari-malformasyonu-nedir' },
            { name: 'Omurilik Tümörleri ve Yaşamsal Riskleri', slug: 'omurilik-tumorleri-ve-yasamsal-riskleri' },
            { name: 'Boyun Sağlığı, Boyun Fıtığı ve Kanal Daralması Rehberi', slug: 'boyun-sagligi-boyun-fitigi-ve-kanal-daralmasi-rehberi' },
            { name: 'Bel Sağlığı, Bel Fıtığı ve Kanal Daralması Rehberi', slug: 'bel-sagligi-bel-fitigi-ve-kanal-daralmasi-rehberi' },
            { name: 'Omurga Kayması (Spondilolistezis) ve Tedavi Yolları', slug: 'omurga-kaymasi-spondilolistezis-ve-tedavi-yollari' },
            { name: 'Beyin Kanamaları Nedenleri ve Acil Müdahale', slug: 'beyin-kanamalari-nedenleri-ve-acil-mudahale' },
            { name: 'Omurga Kırıkları ve Omurilik Yaralanmaları', slug: 'omurga-kiriklari-ve-omurilik-yaralanmalari' },
            { name: 'Omurga Tümörleri', slug: 'omurga-tumorleri' },
            { name: 'Yaşlanan Omurga Sorunları ve Dejeneratif Hastalıklar', slug: 'yaslanan-omurga-sorunlari-ve-dejeneratif-hastaliklar' },
            { name: 'Omurga ve Omurilik Sağlığı, Hastalıkları ve Cerrahisi', slug: 'omurga-ve-omurilik-sagligi-hastaliklari-ve-cerrahisi' }
          ]
        }
      ]
    },
    { 
      name: 'Fonksiyonel Tıp & Longevity', 
      href: '#',
      dropdown: [
        {
          title: 'Hizmetler & Protokoller',
          items: [
            { name: 'Kronik Hastalık Yönetimi', slug: 'kronik-hastalik-yonetimi' },
            { name: 'Hücresel Sağlık ve Yaşlanma Karşıtı Protokoller', slug: 'hucresel-saglik-ve-yaslanma-karsiti-protokoller' },
            { name: 'Kişiselleştirilmiş Beslenme ve Detoks Programları', slug: 'kisisellestirilmis-beslenme-ve-detoks-programlari' },
            { name: 'Hormonal Denge Analizi', slug: 'hormonal-denge-analizi' }
          ]
        }
      ]
    },
    { 
      name: 'Medikal Estetik', 
      href: '#',
      dropdown: [
        {
          title: 'Uygulamalar & Tedaviler',
          items: [
            { name: 'Ameliyatsız Cilt Gençleştirme Uygulamaları', slug: 'ameliyatsiz-cilt-genclestirme-uygulamalari' },
            { name: 'Mezoterapi ve PRP Tedavileri', slug: 'mezoterapi-ve-prp-tedavileri' },
            { name: 'Leke ve Akne Skarları Yönetimi', slug: 'leke-ve-akne-skarlari-yonetimi' },
            { name: 'Bölgesel İnceltme ve Sıkılaşma', slug: 'bolgesel-inceltme-ve-sikilasma' }
          ]
        }
      ]
    },
    { 
      name: 'GETAT', 
      href: '#',
      dropdown: [
        {
          title: 'Tamamlayıcı Tıp Yöntemleri',
          items: [
            { name: 'Akupunktur Tedavisi', slug: 'akupunktur-tedavisi' },
            { name: 'Ozon Terapi Uygulamaları', slug: 'ozon-terapi-uygulamalari' },
            { name: 'Kupa Terapisi (Hacamat)', slug: 'kupa-terapisi-hacamat' },
            { name: 'Fitoterapi (Bitkisel Tedavi) Danışmanlığı', slug: 'fitoterapi-bitkisel-tedavi-danismanligi' }
          ]
        }
      ]
    },
    { name: 'İletişim', href: '#contact' },
  ];

  const locations = [
    {
      id: 1,
      name: "Özel Ortadoğu Hastanesi",
      address: "Gayret, İvedik Cd. No:41, 06170 Yenimahalle/Ankara (Özel Ortadoğu Hastanesi)",
      phone: "0312 315 55 45",
      lat: 39.9678,
      lng: 32.8143,
      googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=39.9678,32.8143"
    }
  ];

  const videos: Video[] = [
    { id: 'v1', title: 'Karpal Tünel Sendromu El Bileğinde Sinir Sıkışması', youtubeUrl: 'https://www.youtube.com/embed/Jfm_wNCIgds', kucukResim: 'https://images.unsplash.com/photo-1597764690523-15bea4c581c9?auto=format&fit=crop&q=80&w=600' },

    { id: 'v2', title: 'Trigeminal Nevralji Ani Yüz Ağrısı', youtubeUrl: 'https://www.youtube.com/embed/wtyRcopYDNk', kucukResim: 'https://i.ytimg.com/vi/wtyRcopYDNk/hqdefault.jpg' },

    { id: 'v3', title: 'Kuyruk Sokumu Ağrında Tedavi', youtubeUrl: 'https://www.youtube.com/embed/n47cTAs9q04', kucukResim: 'https://i.ytimg.com/vi/n47cTAs9q04/hqdefault.jpg' },

    { id: 'v4', title: 'Kuyruk Sokumu Ağrısında Risk Faktörleri Nelerdir?', youtubeUrl: 'https://www.youtube.com/embed/0ZDPahUbu8o', kucukResim: 'https://i.ytimg.com/vi/0ZDPahUbu8o/hqdefault.jpg' },

    { id: 'v5', title: 'Kuyruk Sokumu Ağrısı', youtubeUrl: 'https://www.youtube.com/embed/NFjWh4fATLQ', kucukResim: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600' },

    { id: 'v6', title: 'Bel Kaymasında Cerrahi Müdahale', youtubeUrl: 'https://www.youtube.com/embed/VuRzRd81GOE', kucukResim: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=600' },

    { id: 'v7', title: 'Bel Kaymasında Tedavi Yöntemleri', youtubeUrl: 'https://www.youtube.com/embed/b8H-PZtbK7g', kucukResim: 'https://i.ytimg.com/vi/b8H-PZtbK7g/hqdefault.jpg' },

    { id: 'v8', title: 'Bel Kayması Bulguları Nelerdir?', youtubeUrl: 'https://www.youtube.com/embed/0kgQbj3HOXU', kucukResim: 'https://i.ytimg.com/vi/0kgQbj3HOXU/hqdefault.jpg' },

    { id: 'v9', title: 'Bel Kayması Nedir?', youtubeUrl: 'https://www.youtube.com/embed/FkXhsQbNz1Q', kucukResim: 'https://i.ytimg.com/vi/FkXhsQbNz1Q/hqdefault.jpg' },

    { id: 'v10', title: 'Siyatik Ağrısı Teşhisi Nasıl Konur?', youtubeUrl: 'https://www.youtube.com/embed/qRqZDxcwIy4', kucukResim: 'https://i.ytimg.com/vi/qRqZDxcwIy4/hqdefault.jpg' },

    { id: 'v11', title: 'Siyatik Ağrısının Sebepleri Nelerdir?', youtubeUrl: 'https://www.youtube.com/embed/LEHVzvOLtw4', kucukResim: 'https://i.ytimg.com/vi/LEHVzvOLtw4/hqdefault.jpg' },

    { id: 'v12', title: 'Siyatik Ağrısı Nedir?', youtubeUrl: 'https://www.youtube.com/embed/PiOVeqffZE0', kucukResim: 'https://i.ytimg.com/vi/PiOVeqffZE0/hqdefault.jpg' },

    { id: 'v13', title: 'Boyunda Dar Kanal Hastalığı Cerrahi Müdahale', youtubeUrl: 'https://www.youtube.com/embed/4dl6f0X8lIk', kucukResim: 'https://i.ytimg.com/vi/4dl6f0X8lIk/hqdefault.jpg' },

    { id: 'v14', title: 'Boyunda Dar Kanal Hastalığında Tedavi Yöntemleri', youtubeUrl: 'https://www.youtube.com/embed/GSzvAUHoi0I', kucukResim: 'https://i.ytimg.com/vi/GSzvAUHoi0I/hqdefault.jpg' },

    { id: 'v15', title: 'Boyunda Dar Kanal Hastalığı Belirtileri Nelerdir?', youtubeUrl: 'https://www.youtube.com/embed/00N7vJ2tapQ', kucukResim: 'https://i.ytimg.com/vi/00N7vJ2tapQ/hqdefault.jpg' },

    { id: 'v16', title: 'Boyunda Dar Kanal Hastalığı Nedir?', youtubeUrl: 'https://www.youtube.com/embed/chdNoMpyMj4', kucukResim: 'https://i.ytimg.com/vi/chdNoMpyMj4/hqdefault.jpg' },

    { id: 'v17', title: 'Belde Dar Kanal Hastalığında Cerrahi Müdahale', youtubeUrl: 'https://www.youtube.com/embed/CXEE46zt6qk', kucukResim: 'https://i.ytimg.com/vi/CXEE46zt6qk/hqdefault.jpg' },

    { id: 'v18', title: 'Belde Dar Kanal Hastalığı Tedavisi Nasıldır?', youtubeUrl: 'https://www.youtube.com/embed/9JHwrg9Gm4U', kucukResim: 'https://i.ytimg.com/vi/9JHwrg9Gm4U/hqdefault.jpg' },

    { id: 'v19', title: 'Belde Dar Kanal Hastalığı Teşhisi Nasıl Konur?', youtubeUrl: 'https://www.youtube.com/embed/Fk3FIEKQ9p8', kucukResim: 'https://i.ytimg.com/vi/Fk3FIEKQ9p8/hqdefault.jpg' },

    { id: 'v20', title: 'Belde Dar Kanal Hastalığı Bulguları Nelerdir?', youtubeUrl: 'https://www.youtube.com/embed/8Cq76jZvagg', kucukResim: 'https://i.ytimg.com/vi/8Cq76jZvagg/hqdefault.jpg' },

    { id: 'v21', title: 'Belde Dar Kanal Hastalığı Nedir?', youtubeUrl: 'https://www.youtube.com/embed/S0h1G7TGZDQ', kucukResim: 'https://i.ytimg.com/vi/S0h1G7TGZDQ/hqdefault.jpg' },

    { id: 'v22', title: 'Boyun Fıtığı Belirtileri Nelerdir?', youtubeUrl: 'https://www.youtube.com/embed/ZOH0zo0w9eE', kucukResim: 'https://i.ytimg.com/vi/ZOH0zo0w9eE/hqdefault.jpg' },

    { id: 'v23', title: 'Boyun Fıtığı Nasıl Teşhis Edilir?', youtubeUrl: 'https://www.youtube.com/embed/xp8NxIwVTbw', kucukResim: 'https://i.ytimg.com/vi/xp8NxIwVTbw/hqdefault.jpg' },

    { id: 'v24', title: 'Boynun Fonksiyonları Nelerdir?', youtubeUrl: 'https://www.youtube.com/embed/u88eEfG-89c', kucukResim: 'https://i.ytimg.com/vi/u88eEfG-89c/hqdefault.jpg' },

    { id: 'v25', title: 'Bel Fıtığında Ne Zaman Doktora Başvurulmalıdır?', youtubeUrl: 'https://www.youtube.com/embed/Y9MVhFMmP94', kucukResim: 'https://i.ytimg.com/vi/Y9MVhFMmP94/hqdefault.jpg' },

    { id: 'v26', title: 'Bel Fıtığı Nedir?', youtubeUrl: 'https://www.youtube.com/embed/eXLfXJFb_jc', kucukResim: 'https://i.ytimg.com/vi/eXLfXJFb_jc/hqdefault.jpg' },

    { id: 'v27', title: 'Boyun Fıtığında Cerrahi Tedavi', youtubeUrl: 'https://www.youtube.com/embed/RHRXhi5i-gM', kucukResim: 'https://i.ytimg.com/vi/RHRXhi5i-gM/hqdefault.jpg' },

    { id: 'v28', title: 'Boyun Fıtığı Nasıl Tedavi Edilir?', youtubeUrl: 'https://www.youtube.com/embed/sIQXTXavATY', kucukResim: 'https://i.ytimg.com/vi/sIQXTXavATY/hqdefault.jpg' },

    { id: 'v29', title: 'Boyun Fıtığı Nedir?', youtubeUrl: 'https://www.youtube.com/embed/z1DPWOKMuyM', kucukResim: 'https://i.ytimg.com/vi/z1DPWOKMuyM/hqdefault.jpg' },

    { id: 'v30', title: 'Bel Fıtığında Cerrahi Tedavi', youtubeUrl: 'https://www.youtube.com/embed/-zVG6Ym9YSk', kucukResim: 'https://i.ytimg.com/vi/-zVG6Ym9YSk/hqdefault.jpg' },

    { id: 'v31', title: 'Bel Fıtığı Nasıl Tedavi Edilir?', youtubeUrl: 'https://www.youtube.com/embed/2Ktw20SKDP8', kucukResim: 'https://i.ytimg.com/vi/2Ktw20SKDP8/hqdefault.jpg' },

    { id: 'v32', title: 'Bel Fıtığı Nasıl Teşhis Edilir?', youtubeUrl: 'https://www.youtube.com/embed/e0hBTZkQHmU', kucukResim: 'https://i.ytimg.com/vi/e0hBTZkQHmU/hqdefault.jpg' }
  ];

  const medicalStockThumbnails = [
    'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80', // Beyin MRI / Tomografi
    'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80', // Ameliyathane & Mikrocerrahi
    'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80', // Medikal Teşhis & Radyoloji
    'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80', // Omurga & Tıp Teknolojisi
    'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80', // Cerrahi Operasyon
    'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80', // Nöroloji & Sağlık Rehberi
  ];

  const certificates: Certificate[] = [
    { id: 'c1', title: 'Sertifika 1', issuer: 'T.C. Sağlık Bakanlığı', year: '2024', image: 'https://i.ibb.co/BVpfDm13/Whats-App-mage-2026-04-06-at-10-06-29-1.jpg' },
    { id: 'c2', title: 'Sertifika 2', issuer: 'T.C. Sağlık Bakanlığı', year: '2024', image: 'https://i.ibb.co/RpBbyBXV/Whats-App-mage-2026-04-06-at-10-06-29-2.jpg' },
    { id: 'c3', title: 'Sertifika 3', issuer: 'T.C. Sağlık Bakanlığı', year: '2024', image: 'https://i.ibb.co/GvP5vNmL/Whats-App-mage-2026-04-06-at-10-06-29.jpg' },
    { id: 'c4', title: 'Sertifika 4', issuer: 'T.C. Sağlık Bakanlığı', year: '2024', image: 'https://i.ibb.co/r2vdRBLt/Whats-App-mage-2026-04-06-at-10-06-30-1.jpg' },
    { id: 'c5', title: 'Sertifika 5', issuer: 'T.C. Sağlık Bakanlığı', year: '2024', image: 'https://i.ibb.co/HfLDZvNn/Whats-App-mage-2026-04-06-at-10-06-30-2.jpg' },
    { id: 'c6', title: 'Sertifika 6', issuer: 'T.C. Sağlık Bakanlığı', year: '2024', image: 'https://i.ibb.co/xtPnn64P/Whats-App-mage-2026-04-06-at-10-06-30-3.jpg' },
    { id: 'c7', title: 'Sertifika 7', issuer: 'T.C. Sağlık Bakanlığı', year: '2024', image: 'https://i.ibb.co/JRKmMgV8/Whats-App-mage-2026-04-06-at-10-06-30-4.jpg' },
    { id: 'c8', title: 'Sertifika 8', issuer: 'T.C. Sağlık Bakanlığı', year: '2024', image: 'https://i.ibb.co/cKm1msVS/Whats-App-mage-2026-04-06-at-10-06-30.jpg' },
    { id: 'c9', title: 'Sertifika 9', issuer: 'T.C. Sağlık Bakanlığı', year: '2024', image: 'https://i.ibb.co/ZzjpCrGY/Whats-App-mage-2026-04-06-at-10-06-31.jpg' },
    { id: 'c10', title: 'Sertifika 10', issuer: 'T.C. Sağlık Bakanlığı', year: '2024', image: 'https://i.ibb.co/hRyjCgBg/Whats-App-mage-2026-04-06-at-10-06-32-1.jpg' },
    { id: 'c11', title: 'Sertifika 11', issuer: 'T.C. Sağlık Bakanlığı', year: '2024', image: 'https://i.ibb.co/FbFYxs9v/Whats-App-mage-2026-04-06-at-10-06-32-2.jpg' },
    { id: 'c12', title: 'Sertifika 12', issuer: 'T.C. Sağlık Bakanlığı', year: '2024', image: 'https://i.ibb.co/mFrJSjC2/Whats-App-mage-2026-04-06-at-10-06-32-3.jpg' },
    { id: 'c13', title: 'Sertifika 13', issuer: 'T.C. Sağlık Bakanlığı', year: '2024', image: 'https://i.ibb.co/HDLZx4s4/Whats-App-mage-2026-04-06-at-10-06-32-4.jpg' },
    { id: 'c14', title: 'Sertifika 14', issuer: 'T.C. Sağlık Bakanlığı', year: '2024', image: 'https://i.ibb.co/ZzsXW2fH/Whats-App-mage-2026-04-06-at-10-06-32.jpg' },
    { id: 'c15', title: 'Sertifika 15', issuer: 'T.C. Sağlık Bakanlığı', year: '2024', image: 'https://i.ibb.co/dst2VLCz/Whats-App-mage-2026-04-06-at-10-06-33-1.jpg' },
    { id: 'c16', title: 'Sertifika 16', issuer: 'T.C. Sağlık Bakanlığı', year: '2024', image: 'https://i.ibb.co/nMZnNtp4/Whats-App-mage-2026-04-06-at-10-06-33-2.jpg' },
    { id: 'c17', title: 'Sertifika 17', issuer: 'T.C. Sağlık Bakanlığı', year: '2024', image: 'https://i.ibb.co/s9yVxP1H/Whats-App-mage-2026-04-06-at-10-06-33-3.jpg' },
    { id: 'c18', title: 'Sertifika 18', issuer: 'T.C. Sağlık Bakanlığı', year: '2024', image: 'https://i.ibb.co/KC2q18V/Whats-App-mage-2026-04-06-at-10-06-33.jpg' },
    { id: 'c19', title: 'Sertifika 19', issuer: 'T.C. Sağlık Bakanlığı', year: '2024', image: 'https://i.ibb.co/XfSRVX3G/Whats-App-mage-2026-04-06-at-10-06-34-1.jpg' },
    { id: 'c20', title: 'Sertifika 20', issuer: 'T.C. Sağlık Bakanlığı', year: '2024', image: 'https://i.ibb.co/V0Jz09Zr/Whats-App-mage-2026-04-06-at-10-06-34-2.jpg' },
    { id: 'c21', title: 'Sertifika 21', issuer: 'T.C. Sağlık Bakanlığı', year: '2024', image: 'https://i.ibb.co/YJvcLQr/Whats-App-mage-2026-04-06-at-10-06-34-3.jpg' },
    { id: 'c22', title: 'Sertifika 22', issuer: 'T.C. Sağlık Bakanlığı', year: '2024', image: 'https://i.ibb.co/CsYBJwV1/Whats-App-mage-2026-04-06-at-10-06-34.jpg' },
    { id: 'c23', title: 'Sertifika 23', issuer: 'T.C. Sağlık Bakanlığı', year: '2024', image: 'https://i.ibb.co/bjV7knFN/Whats-App-mage-2026-04-06-at-10-06-35.jpg' },
  ];

  const certScrollRef = React.useRef<HTMLDivElement>(null);

  const scrollCerts = (direction: 'left' | 'right') => {
    if (certScrollRef.current) {
      const scrollAmount = 280; // Item width (240px) + gap (40px)
      certScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const nextCert = () => {
    if (selectedCert) {
      const currentIndex = certificates.findIndex(c => c.id === selectedCert.id);
      const nextIndex = (currentIndex + 1) % certificates.length;
      setSelectedCert(certificates[nextIndex]);
    }
  };

  const prevCert = () => {
    if (selectedCert) {
      const currentIndex = certificates.findIndex(c => c.id === selectedCert.id);
      const prevIndex = (currentIndex - 1 + certificates.length) % certificates.length;
      setSelectedCert(certificates[prevIndex]);
    }
  };

  const filteredVideos = videos.filter((video) => {
    const query = videoSearchQuery.toLowerCase().trim();
    if (!query) return true;
    const titleMatch = video.title.toLowerCase().includes(query);
    const descMatch = 'description' in video && typeof (video as any).description === 'string'
      ? (video as any).description.toLowerCase().includes(query)
      : false;
    return titleMatch || descMatch;
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedCert) {
        if (e.key === 'ArrowRight') nextCert();
        if (e.key === 'ArrowLeft') prevCert();
        if (e.key === 'Escape') setSelectedCert(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCert]);

  const handleCertScroll = useCallback(() => {
    if (certScrollRef.current) {
      window.requestAnimationFrame(() => {
        if (certScrollRef.current) {
          const { scrollLeft } = certScrollRef.current;
          const index = Math.round(scrollLeft / 280);
          setActiveCertIndex(index);
        }
      });
    }
  }, []);

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden flex flex-col selection:bg-gold selection:text-dark-stitch text-white">
      {/* Main Background Glows - Optimized for Mobile Performance */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-navy-stitch/10 rounded-full blur-[80px] sm:blur-[120px]" />
        <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] bg-gold/5 rounded-full blur-[70px] sm:blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] sm:w-[60%] h-[50%] sm:h-[60%] bg-gold/10 rounded-full blur-[120px] sm:blur-[180px] opacity-30 sm:opacity-40" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[60%] sm:w-[70%] h-[60%] sm:h-[70%] bg-gold/10 rounded-full blur-[150px] sm:blur-[200px] opacity-30 sm:opacity-40" />
      </div>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/40 backdrop-blur-xl py-2 sm:py-3 border-b border-gold/20' : 'bg-transparent py-3 sm:py-6'}`}>
        <div className="w-full max-w-7xl mx-auto px-6 h-16 sm:h-20 lg:h-24 flex items-center justify-between gap-3 lg:gap-4">
          {/* Logo (Left) */}
          <div className="flex items-center gap-2 sm:gap-3 cursor-pointer shrink-0 flex-shrink-0" onClick={() => {
            setActiveContentKey(null);
            window.scrollTo(0, 0);
          }}>
            <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gold rounded-full flex items-center justify-center aspect-square shrink-0 overflow-hidden p-1 sm:p-1.5">
              <Brain className="text-dark-stitch w-full h-full object-contain animate-logo-dual" />
            </div>
            <div className="flex flex-col shrink-0 flex-shrink-0">
              <span className="text-xs sm:text-base md:text-lg font-serif font-bold tracking-tight text-white leading-none whitespace-nowrap">EKREM YALÇIN</span>
              <span className="text-[7px] sm:text-[8px] md:text-[9px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-gold font-medium whitespace-nowrap">Dr. Öğretim Üyesi</span>
            </div>
          </div>

          {/* Navigation Links (Center - Desktop) */}
          <div className="hidden lg:flex items-center justify-center gap-3 lg:gap-4">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative py-4"
                onMouseEnter={() => link.dropdown && setOpenDropdown(link.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a 
                  href={link.href} 
                  onClick={(e) => {
                    if (!link.dropdown) {
                      setActiveContentKey(null);
                      window.scrollTo(0, 0);
                    } else {
                      e.preventDefault();
                      setOpenDropdown(openDropdown === link.name ? null : link.name);
                    }
                  }}
                  className={`text-xs lg:text-[12.5px] font-bold tracking-wider uppercase transition-colors inline-flex items-center gap-1 whitespace-nowrap shrink-0 ${openDropdown === link.name ? 'text-gold' : 'text-white/60 hover:text-gold'}`}
                >
                  <span>{link.name}</span>
                  {link.dropdown && <ChevronDown className="w-2.5 h-2.5 opacity-60 shrink-0" />}
                </a>
                
                {link.dropdown && (
                  <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-300 z-50 ${openDropdown === link.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
                    <div className="bg-dark-stitch/95 backdrop-blur-xl border border-gold/20 rounded-sm p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] min-w-[320px]">
                      <div className="flex flex-col gap-6">
                        {link.dropdown.map((group, gIdx) => (
                          <div key={gIdx} className="space-y-3">
                            {group.title && (
                              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold/80 border-b border-gold/10 pb-1">
                                {group.title}
                              </div>
                            )}
                            <div className="flex flex-col gap-2">
                              {group.items.map((item, iIdx) => (
                                <a 
                                  key={iIdx} 
                                  href="#" 
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setActiveContentKey(item.slug);
                                    setOpenDropdown(null);
                                  }}
                                  className="text-xs text-white/60 hover:text-gold transition-colors block py-0.5"
                                >
                                  {item.name}
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <a 
              href="https://www.instagram.com/dr_ekremyalcin06/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="instagram-button !p-2 sm:!p-2.5 shrink-0 flex-shrink-0"
              title="Instagram"
            >
              <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
            <button 
              onClick={() => {
                trackGAEvent('Appointment', 'Click', 'Header Randevu Al');
                setIsAppointmentModalOpen(true);
              }} 
              className="premium-button !px-3 !py-1.5 !text-xs shrink-0 flex-shrink-0 whitespace-nowrap"
            >
              Randevu Al
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden text-white p-1.5 sm:p-2 flex items-center justify-center shrink-0 flex-shrink-0 min-h-[36px] min-w-[36px]" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menü"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-gold" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-0 z-[9999] lg:hidden bg-[#0a192f] flex flex-col overflow-y-auto"
            >
              <div className="flex justify-between items-center px-8 h-24 border-b border-gold/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                    <Brain className="text-dark-stitch w-5 h-5" />
                  </div>
                  <span className="text-lg font-serif font-bold tracking-tight text-white">EKREM YALÇIN</span>
                </div>
                <button 
                  className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center text-gold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-8 py-12 flex flex-col gap-8">
                {navLinks.map((link, idx) => (
                  <div key={link.name} className="flex flex-col">
                    <motion.a 
                      href={link.href} 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      onClick={() => {
                        if (!link.dropdown) {
                          setIsMobileMenuOpen(false);
                          setActiveContentKey(null);
                          window.scrollTo(0, 0);
                        }
                      }}
                      className="text-2xl sm:text-3xl font-serif font-bold text-white/80 hover:text-gold inline-flex items-center gap-2.5 w-auto group min-h-[44px]"
                    >
                      <span>{link.name}</span>
                      {link.dropdown ? (
                        <ChevronDown className="w-5 h-5 text-gold/60 shrink-0" />
                      ) : (
                        <ArrowRight className="w-5 h-5 text-gold/0 group-hover:text-gold transition-all shrink-0" />
                      )}
                    </motion.a>
                    
                    {link.dropdown && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="pl-4 mt-4 space-y-6 border-l border-gold/10"
                      >
                        {link.dropdown.map((group, gIdx) => (
                          <div key={gIdx} className="space-y-3">
                            {group.title && (
                              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold/60">
                                {group.title}
                              </div>
                            )}
                            <div className="flex flex-col gap-3">
                              {group.items.map((item, iIdx) => (
                                <a 
                                  key={iIdx} 
                                  href="#" 
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setActiveContentKey(item.slug);
                                    setIsMobileMenuOpen(false);
                                  }}
                                  className="text-lg font-serif text-white/40 hover:text-gold"
                                >
                                  {item.name}
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
                
                <div className="mt-auto pt-12 space-y-6">
                  <motion.a 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    href="https://www.instagram.com/dr_ekremyalcin06/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="instagram-button w-fit mx-auto p-3"
                  >
                    <Instagram className="w-6 h-6" />
                  </motion.a>
                  <motion.button 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    onClick={() => {
                      trackGAEvent('Appointment', 'Click', 'Header Mobile Randevu Al');
                      setIsMobileMenuOpen(false);
                      setIsAppointmentModalOpen(true);
                    }} 
                    className="premium-button w-full justify-center min-h-[50px]"
                  >
                    Randevu Al
                  </motion.button>
                </div>
              </div>

              {/* Decorative Gold Detail */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {activeContentKey ? (
        <React.Suspense fallback={
          <div className="min-h-screen flex items-center justify-center bg-dark-stitch text-gold font-serif">
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 border-2 border-gold border-t-transparent rounded-full animate-spin" />
              <span className="text-xs uppercase tracking-widest text-gold/80">İçerik Yükleniyor...</span>
            </div>
          </div>
        }>
          <ContentPage 
            contentKey={activeContentKey} 
            onBack={() => {
              setActiveContentKey(null);
              window.scrollTo(0, 0);
            }} 
          />
        </React.Suspense>
      ) : (
        <main className="w-full max-w-full overflow-x-hidden">
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center pt-24 sm:pt-32 lg:pt-36 pb-12 overflow-hidden w-full max-w-full" style={{ willChange: "transform", transform: "translate3d(0,0,0)" }}>
          {/* Transparent Background to allow global gradient to show */}
          <div className="absolute inset-0 z-0 bg-transparent" />
          
          {/* Neural Network SVG Overlay - Subtle */}
          <div className="absolute inset-0 z-0 opacity-[0.07] pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="neural-net" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="1" fill="#D4AF37" />
                  <circle cx="180" cy="180" r="1" fill="#D4AF37" />
                  <circle cx="100" cy="100" r="1.5" fill="#D4AF37" />
                  <line x1="20" y1="20" x2="100" y2="100" stroke="#D4AF37" strokeWidth="0.5" />
                  <line x1="180" y1="180" x2="100" y2="100" stroke="#D4AF37" strokeWidth="0.5" />
                  <line x1="20" y1="20" x2="180" y2="180" stroke="#D4AF37" strokeWidth="0.2" />
                </pattern>
                <pattern id="robotic-arm" x="0" y="0" width="400" height="400" patternUnits="userSpaceOnUse">
                  <path d="M50 350 L150 250 L250 250 L350 150" stroke="#D4AF37" strokeWidth="0.5" fill="none" opacity="0.3" />
                  <circle cx="50" cy="350" r="3" fill="#D4AF37" opacity="0.5" />
                  <circle cx="150" cy="250" r="3" fill="#D4AF37" opacity="0.5" />
                  <circle cx="350" cy="150" r="5" fill="#D4AF37" opacity="0.8" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#neural-net)" />
              <rect width="100%" height="100%" fill="url(#robotic-arm)" />
            </svg>
          </div>

          {/* Decorative Light Beams */}
          <div className="light-beam top-0 left-1/4 opacity-30 pointer-events-none" />
          <div className="light-beam top-0 left-3/4 opacity-20 pointer-events-none" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gold/5 to-transparent pointer-events-none" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full py-6 sm:py-10">
            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
              <motion.div 
                initial={isMobile ? { opacity: 0 } : { opacity: 0, x: -50 }}
                animate={isMobile ? { opacity: 1 } : { opacity: 1, x: 0 }}
                transition={{ duration: isMobile ? 0.5 : 1, delay: isMobile ? 0.1 : 0.2 }}
                className="lg:col-span-6 w-full max-w-md lg:max-w-xl mx-auto lg:mx-0 flex flex-col items-center lg:items-start text-center lg:text-left"
              >
                <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-4 sm:mb-8 w-full">
                  <div className="h-px w-6 sm:w-12 bg-gold/50 shrink-0" />
                  <span className="text-gold text-[10px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase">
                    Beyin, Omurilik ve Sinir Cerrahisi
                  </span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.15] mb-4 sm:mb-6 premium-text-gradient tracking-tight break-words w-full">
                  Gelişmiş <br className="hidden sm:block" />
                  <span className="italic text-gold">Beyin Cerrahi</span> <br className="hidden sm:block" />
                  Çözümleri
                </h1>
                
                <p className="text-sm sm:text-base md:text-lg text-white/60 mb-6 sm:mb-8 leading-relaxed max-w-md font-light antialiased break-words">
                  Dr. Öğretim Üyesi Ekrem Yalçın liderliğinde, modern mikrocerrahi teknikleri ve teknolojik hassasiyetle sağlığınıza odaklanıyoruz.
                </p>
                
                <div className="flex items-center justify-center lg:justify-start w-full">
                  <button 
                    onClick={() => {
                      trackGAEvent('Appointment', 'Click', 'Hero Randevu Al');
                      setIsAppointmentModalOpen(true);
                    }} 
                    className="premium-button group"
                  >
                    Randevu Al
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={isMobile ? { opacity: 0 } : { opacity: 0, x: 50, scale: 0.9 }}
                animate={isMobile ? { opacity: 1 } : { opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: isMobile ? 0.5 : 1, delay: isMobile ? 0.2 : 0.4 }}
                className="lg:col-span-6 relative flex justify-center lg:justify-end w-full max-w-full"
              >
                <div className="relative group w-full max-w-xs sm:max-w-md lg:max-w-lg mx-auto lg:ml-auto lg:mr-0 soft-glow-bg scale-100 sm:scale-105 lg:scale-115 origin-center lg:origin-right transition-transform duration-500">
                  {/* Tech HUD Elements - Enhanced for "Robotic" feel */}
                  <div className="absolute -inset-10 border border-gold/10 rounded-full -z-10 animate-[spin_25s_linear_infinite] opacity-0 sm:opacity-20 pointer-events-none hidden sm:block" />
                  <div className="absolute -inset-6 border border-gold/20 rounded-sm -z-10 animate-pulse hidden sm:block pointer-events-none" />
                  <div className="absolute inset-0 sm:-inset-1 border border-gold/40 rounded-xl -z-10 pointer-events-none" />
                  
                  {/* Corner Accents */}
                  <div className="hidden sm:block absolute -top-2 -left-2 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-gold z-20 pointer-events-none" />
                  <div className="hidden sm:block absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-gold z-20 pointer-events-none" />
                  <div className="hidden sm:block absolute -bottom-2 -left-2 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-gold z-20 pointer-events-none" />
                  <div className="hidden sm:block absolute -bottom-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-gold z-20 pointer-events-none" />

                  <div className="relative z-10 rounded-xl overflow-hidden border border-gold/30 shadow-[0_0_130px_rgba(212,175,55,0.3)] aspect-video w-full">
                    <img 
                      src="https://i.ibb.co/LD6xLykj/ekrem-yalcin-kimdir-3.jpg" 
                      alt="Dr. Ekrem Yalçın" 
                      className="w-full h-full object-cover rounded-xl brightness-110 contrast-105 transition-all duration-1000 scale-105 hover:scale-100"
                      referrerPolicy="no-referrer"
                      loading="eager"
                      fetchPriority="high"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-stitch via-transparent to-transparent opacity-70" />
                    <div className="absolute bottom-0 left-0 w-full p-3 sm:p-5 lg:p-6 bg-gradient-to-t from-dark-stitch via-dark-stitch/90 to-transparent">
                      <div className="text-base sm:text-2xl lg:text-3xl font-serif font-bold text-white mb-0.5 sm:mb-1 tracking-tight drop-shadow-lg break-words">Dr. Ekrem Yalçın</div>
                      <div className="text-[9px] sm:text-xs font-bold tracking-[0.15em] sm:tracking-[0.3em] uppercase text-gold drop-shadow-md break-words">Beyin ve Sinir Cerrahisi Uzmanı</div>
                    </div>
                  </div>

                  {/* Tech Link Elements - Hidden on small mobile to prevent overflow */}
                  <div className="hidden sm:block">
                    <div className="absolute top-1/4 -left-12 w-24 h-px bg-gradient-to-l from-gold/80 to-transparent" />
                    <div className="absolute top-1/4 -left-12 w-3 h-3 rounded-full bg-gold shadow-[0_0_15px_#D4AF37] animate-ping" />
                    <div className="absolute top-1/4 -left-12 w-3 h-3 rounded-full bg-gold shadow-[0_0_10px_#D4AF37]" />
                    
                    <div className="absolute bottom-1/4 -right-12 w-24 h-px bg-gradient-to-r from-gold/80 to-transparent" />
                    <div className="absolute bottom-1/4 -right-12 w-3 h-3 rounded-full bg-gold shadow-[0_0_15px_#D4AF37] animate-ping" />
                    <div className="absolute bottom-1/4 -right-12 w-3 h-3 rounded-full bg-gold shadow-[0_0_10px_#D4AF37]" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Infinite Marquee Video Ticker Section */}
        <section className="w-full py-10 md:py-14 relative z-20 overflow-hidden content-visibility-auto">
          {/* Side Gradient Fade Masks for Seamless Edge Transitions */}
          <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-28 bg-gradient-to-r from-[#0a192f] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-28 bg-gradient-to-l from-[#0a192f] to-transparent z-10 pointer-events-none" />

          {/* Header Label & Action Bar */}
          <div className="max-w-7xl mx-auto px-6 mb-6 md:mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-gold shadow-[0_0_10px_#D4AF37] animate-pulse shrink-0" />
              <div>
                <h3 className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-gold/90">
                  Öne Çıkan Video Bilgilendirmeleri
                </h3>
                <p className="text-[11px] sm:text-xs text-white/40 font-light tracking-wider mt-0.5">
                  Videoları izlemek için kartların üzerine tıklayabilirsiniz
                </p>
              </div>
            </div>

            {/* Tüm Videoları İncele Button */}
            <button 
              onClick={() => setIsGalleryModalOpen(true)}
              className="group relative px-5 py-2.5 rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:scale-[1.03] active:scale-[0.98] border border-gold/40 bg-gold/10 backdrop-blur-sm self-start sm:self-auto shrink-0"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gold/20 via-[#F5E6AD]/30 to-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 text-gold font-bold tracking-[0.15em] uppercase text-[11px] sm:text-xs flex items-center gap-2">
                Tüm Videoları İncele ({videos.length} Video)
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Marquee Infinite Loop Track */}
          <div className="flex overflow-hidden select-none">
            <div className="animate-marquee flex gap-5 px-2 hover:[animation-play-state:paused] active:[animation-play-state:paused]" style={{ willChange: "transform", transform: "translateZ(0)" }}>
              {[...videos, ...videos].map((video, idx) => {
                const isEven = idx % 2 === 0;
                const stockImageIndex = Math.floor(idx / 2) % medicalStockThumbnails.length;
                const thumbnailSrc = isEven ? medicalStockThumbnails[stockImageIndex] : video.kucukResim;

                return (
                  <div
                    key={`marquee-${video.id}-${idx}`}
                    onClick={() => setSelectedVideo(video)}
                    className="w-64 sm:w-80 shrink-0 group cursor-pointer glass-card p-3 rounded-2xl border border-gold/20 hover:border-gold/60 transition-all duration-300 bg-[#0a192f]/80 backdrop-blur-sm flex flex-col gap-2.5 shadow-sm hover:shadow-[0_0_25px_rgba(212,175,55,0.25)] relative overflow-hidden"
                  >
                    {/* Thumbnail Container */}
                    <div className="aspect-video rounded-xl overflow-hidden relative border border-gold/15 bg-black/40">
                      <img
                        src={thumbnailSrc}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        fetchPriority="low"
                        decoding="async"
                      />
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 bg-black/35 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gold/90 text-dark-stitch flex items-center justify-center group-hover:scale-110 group-hover:bg-gold transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.6)]">
                          <Play className="w-4 h-4 fill-current ml-0.5" />
                        </div>
                      </div>
                    </div>

                    {/* Video Title */}
                    <div className="px-1 pb-1">
                      <h4 className="text-xs sm:text-sm font-serif font-medium text-white/90 group-hover:text-gold transition-colors line-clamp-2 leading-snug">
                        {video.title}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 relative tech-pattern w-full max-w-full overflow-hidden" style={{ willChange: "transform", transform: "translate3d(0,0,0)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">
            <motion.div 
              {...animAboutImage}
              className="relative group w-full max-w-xs sm:max-w-md lg:max-w-none mx-auto flex justify-center"
            >
              <div className="relative z-10 aspect-[4/5] rounded-xl overflow-hidden border border-gold/30 shadow-[0_0_50px_rgba(0,0,0,0.5)] w-full">
                <img 
                  src="https://i.ibb.co/Jw5v18ZQ/Whats-App-mage-2026-04-10-at-09-13-14.jpg" 
                  alt="Dr. Ekrem Yalçın" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gold/5 pointer-events-none" />
              </div>
              <div className="hidden sm:block absolute -top-6 -left-6 w-full h-full border border-gold/20 -z-0 pointer-events-none" />
              <div className="hidden sm:block absolute -bottom-6 -right-6 w-32 h-32 border-r border-b border-gold/40 pointer-events-none" />
              {/* Decorative Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold/5 blur-[100px] rounded-full -z-10 pointer-events-none" />
            </motion.div>

            <motion.div
              {...animAboutText}
              className="w-full flex flex-col items-start text-left"
            >
              <span className="text-gold font-bold tracking-[0.3em] sm:tracking-[0.4em] uppercase text-xs mb-3 block">Dr. Ekrem Yalçın Kimdir?</span>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif mb-4 leading-tight break-words w-full">Akademik Birikim ve <span className="text-gold">Cerrahi Hassasiyet</span></h2>
              <div className="space-y-4 text-white/50 text-base sm:text-lg leading-relaxed mb-6 font-light break-words w-full text-left sm:text-justify">
                <p>
                  Op. Dr. Ekrem YALÇIN, 1967 yılında Konya’nın Kulu ilçesinde doğmuştur. 1991 yılında Selçuk Üniversitesi Tıp Fakültesi’nden mezun olmuş, 2001 yılında İzmir SSK Eğitim ve Araştırma Hastanesi’nde uzmanlık eğitimini tamamlayarak Beyin ve Sinir Cerrahisi Uzmanı unvanını almıştır.
                </p>
                <p>
                  Rize, Trabzon, Ankara ve Van illerinde çeşitli hastanelerde Beyin, Omurilik ve Sinir Cerrahisi Uzmanı ve Başhekim olarak görev yapmıştır. Halen Ankara Medipol Üniversitesi Tıp Fakültesi Beyin, Omurilik ve Sinir Cerrahisi Anabilim Dalı’nda Doktor Öğretim Üyesi olarak görevine devam etmektedir.
                </p>
              </div>
              <div className="flex flex-row items-center justify-start gap-8 sm:gap-12 mb-6 w-full">
                <div className="flex flex-col">
                  <div className="text-3xl sm:text-4xl font-serif text-gold mb-1">20+</div>
                  <div className="text-xs tracking-widest uppercase text-white/30 break-words">Yıllık Deneyim</div>
                </div>
                <div className="flex flex-col">
                  <div className="text-3xl sm:text-4xl font-serif text-gold mb-1">10000+</div>
                  <div className="text-xs tracking-widest uppercase text-white/30 break-words">Başarılı Operasyon</div>
                </div>
              </div>
              <button 
                onClick={() => setIsBioModalOpen(true)}
                className="text-gold font-bold text-sm tracking-widest uppercase border-b-2 border-gold/20 pb-2 hover:border-gold transition-all"
              >
                Devamını Oku
              </button>
            </motion.div>
          </div>
        </section>

        {/* Specialties Section - Simplified to 2 Large Category Cards */}
        <section id="specialties" className="py-10 relative overflow-hidden" style={{ willChange: "transform", transform: "translate3d(0,0,0)" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="flex flex-col items-center text-center mb-6">
              <span className="text-gold font-bold tracking-[0.4em] uppercase text-[10px] mb-4">Hizmetlerimiz</span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif premium-text-gradient pulsing-headline break-words">Uzmanlık Alanları</h2>
              <div className="h-px w-16 bg-gold/30 mt-6" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1: TEDAVİLER */}
              <motion.div 
                whileHover={cardHover}
                style={{ willChange: "transform" }}
                {...animSpecialtyCard}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setTimeout(() => setOpenDropdown('Tedaviler'), 500);
                }}
                className="glass-card p-6 sm:p-8 rounded-sm text-center flex flex-col items-center gap-6 group border-gold/20 hover:border-gold/60 transition-all duration-500 cursor-pointer relative overflow-hidden rotating-border-glow"
              >
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center text-gold/60 group-hover:text-gold transition-colors duration-500 drop-shadow-[0_0_15px_rgba(212,175,55,0.2)] border border-gold/20">
                  <Stethoscope className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-serif font-bold tracking-tight text-white group-hover:text-gold transition-colors uppercase">TEDAVİLER</h3>
                  <p className="text-white/40 text-[10px] font-light tracking-widest uppercase">Beyin, Omurilik ve Sinir Cerrahisi Ameliyatları</p>
                </div>
                <div className="w-8 h-px bg-gold/20 group-hover:w-16 group-hover:bg-gold transition-all duration-500" />
                
                <div className="flex items-center gap-2 text-gold text-[9px] font-bold uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-500">
                  İncele <ArrowRight className="w-3 h-3" />
                </div>
              </motion.div>

              {/* Card 2: HASTALIKLAR */}
              <motion.div 
                whileHover={cardHover}
                style={{ willChange: "transform" }}
                {...animSpecialtyCard}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setTimeout(() => setOpenDropdown('Hastalıklar'), 500);
                }}
                className="glass-card p-6 sm:p-8 rounded-sm text-center flex flex-col items-center gap-6 group border-gold/20 hover:border-gold/60 transition-all duration-500 cursor-pointer relative overflow-hidden rotating-border-glow"
              >
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center text-gold/60 group-hover:text-gold transition-colors duration-500 drop-shadow-[0_0_15px_rgba(212,175,55,0.2)] border border-gold/20">
                  <Brain className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-serif font-bold tracking-tight text-white group-hover:text-gold transition-colors uppercase">HASTALIKLAR</h3>
                  <p className="text-white/40 text-[10px] font-light tracking-widest uppercase">Omurga, Boyun, Bel Sağlığı ve Tanı Kılavuzları</p>
                </div>
                <div className="w-8 h-px bg-gold/20 group-hover:w-16 group-hover:bg-gold transition-all duration-500" />
                
                <div className="flex items-center gap-2 text-gold text-[9px] font-bold uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-500">
                  İncele <ArrowRight className="w-3 h-3" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="py-10 overflow-hidden relative w-full max-w-full" style={{ willChange: "transform", transform: "translate3d(0,0,0)" }}>
          {/* Subtle Glow for Certificates Section */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] pointer-events-none opacity-30" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10 w-full">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-6 md:gap-8 w-full">
              <div className="max-w-2xl w-full">
                <span className="text-gold font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Başarılarımız</span>
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif premium-text-gradient leading-tight break-words">Uluslararası Başarılar ve <span className="italic text-gold/80">Sertifikalar</span></h2>
                <p className="mt-4 text-white/40 text-sm sm:text-lg font-light leading-relaxed antialiased break-words">
                  Tıbbi mükemmeliyet yolculuğumuzda kazandığımız uluslararası geçerliliğe sahip yetki belgeleri ve uzmanlık sertifikaları.
                </p>
              </div>
              <div className="flex gap-4 shrink-0">
                <button 
                  onClick={() => scrollCerts('left')}
                  className="p-3 sm:p-5 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-dark-stitch hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-500 group bg-white/5 backdrop-blur-sm"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => scrollCerts('right')}
                  className="p-3 sm:p-5 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-dark-stitch hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-500 group bg-white/5 backdrop-blur-sm"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            
            <div 
              ref={certScrollRef}
              onScroll={handleCertScroll}
              className="flex gap-6 sm:gap-10 overflow-x-auto pb-12 sm:pb-16 no-scrollbar snap-x snap-mandatory w-full"
              style={{ willChange: "transform, scroll-position", transform: "translate3d(0,0,0)", WebkitOverflowScrolling: "touch" }}
            >
              {certificates.map((cert) => (
                <motion.div 
                  key={cert.id} 
                  whileHover={videoCardHover}
                  transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
                  style={{ willChange: "transform" }}
                  onClick={() => setSelectedCert(cert)}
                  className="w-[200px] sm:w-[220px] md:w-[250px] max-w-xs snap-start group cursor-pointer shrink-0"
                >
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-gold/30 shadow-[0_20px_40px_rgba(0,0,0,0.5)] bg-white mb-3 sm:mb-4 group-hover:border-gold transition-all duration-500">
                    <img 
                      src={cert.image} 
                      alt={cert.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-[filter,transform] duration-500 ease-out sharp-image"
                      style={{ willChange: "transform, filter" }}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      fetchPriority="low"
                      decoding="async"
                    />
                    
                    {/* Glass Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-stitch via-transparent to-transparent opacity-80" />
                    
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-dark-stitch/40 backdrop-blur-[3px]">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gold flex items-center justify-center shadow-[0_0_25px_rgba(212,175,55,0.5)] mb-3 group-hover:scale-110 transition-transform duration-500">
                        <Award className="text-dark-stitch w-6 h-6 sm:w-8 sm:h-8" />
                      </div>
                      <span className="text-white font-bold tracking-widest uppercase text-[10px] sm:text-xs">Sertifikayı İncele</span>
                    </div>

                    {/* Certificate Frame Effect */}
                    <div className="absolute inset-4 sm:inset-6 border border-white/10 pointer-events-none" />
                    <div className="absolute inset-6 sm:inset-8 border border-white/5 pointer-events-none" />
                  </div>
                  
                  <div className="px-1 sm:px-3">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-px w-6 sm:w-8 bg-gold" />
                      <span className="text-gold text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]">{cert.year}</span>
                    </div>
                    <h4 className="text-base sm:text-lg font-serif font-bold mb-1.5 group-hover:text-gold transition-colors tracking-tight break-words">{cert.title}</h4>
                    <p className="text-white/40 text-xs uppercase tracking-widest font-semibold break-words">{cert.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-6 flex flex-col items-center gap-6 w-full">
              <div className="flex gap-2 sm:gap-3">
                {certificates.map((_, i) => (
                  <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${i === activeCertIndex ? 'w-8 sm:w-12 bg-gold shadow-[0_0_10px_rgba(212,175,55,0.5)]' : 'w-2 bg-white/10'}`} />
                ))}
              </div>

              <button 
                onClick={() => setIsCertGalleryModalOpen(true)}
                className="group relative px-6 sm:px-10 py-3.5 sm:py-5 rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_rgba(212,175,55,0.6)] hover:scale-[1.03] max-w-full"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gold via-[#F5E6AD] to-gold animate-gradient-x" />
                <div className="absolute inset-[2px] bg-dark-stitch rounded-full group-hover:bg-transparent transition-colors duration-500" />
                <span className="relative z-10 text-gold group-hover:text-dark-stitch font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-[10px] sm:text-xs flex items-center gap-2 sm:gap-3 whitespace-nowrap">
                  Tüm Sertifikaları Görüntüle ({certificates.length} Sertifika)
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform shrink-0" />
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="pt-12 sm:pt-16 pb-6 relative overflow-hidden w-full max-w-full" style={{ willChange: "transform", transform: "translate3d(0,0,0)" }}>
          {/* Premium Subtle Gold Glows - Light, not color */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[1000px] h-[600px] sm:h-[1000px] bg-gold/5 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none opacity-50" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10 w-full">
            <div className="flex flex-col items-center text-center mb-8 sm:mb-10 w-full">
              <span className="text-gold font-bold tracking-[0.4em] uppercase text-xs mb-4 sm:mb-6 block">İletişim</span>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif mb-6 sm:mb-8 premium-text-gradient break-words w-full">Sağlığınız İçin <br />Bizimle <span className="text-gold">İletişime Geçin</span></h2>
              <div className="h-px w-20 sm:w-24 bg-gold/30 mt-2 sm:mt-4 mx-auto" />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10 max-w-6xl mx-auto w-full">
              {/* Address Card */}
              <motion.div 
                whileHover={cardHoverHigh}
                className="glass-card p-6 sm:p-8 md:p-12 rounded-xl border-gold/10 hover:border-gold/40 transition-all duration-500 flex flex-col items-center text-center group relative overflow-hidden w-full"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6 sm:mb-8 border border-gold/20 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(212,175,55,0.2)] shrink-0">
                  <MapPin className="text-gold w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <h5 className="text-gold font-bold uppercase tracking-widest text-[10px] mb-4 sm:mb-6">Adres</h5>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-light break-words">
                  Medipol Üniversitesi Rektörlüğü Ankara/Altındağ,<br />
                  Özel Ortadoğu Hastanesi Gayret, İvedik Cd. No:41,<br />
                  06170 Yenimahalle/Ankara
                </p>
              </motion.div>

              {/* Phone Card */}
              <motion.div 
                whileHover={cardHoverHigh}
                className="glass-card p-6 sm:p-8 md:p-12 rounded-xl border-gold/10 hover:border-gold/40 transition-all duration-500 flex flex-col items-center text-center group relative overflow-hidden w-full"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6 sm:mb-8 border border-gold/20 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(212,175,55,0.2)] shrink-0">
                  <Phone className="text-gold w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <h5 className="text-gold font-bold uppercase tracking-widest text-[10px] mb-4 sm:mb-6">Telefon</h5>
                <div className="flex flex-col gap-3">
                  <a 
                    href="tel:+905072339497" 
                    onClick={() => trackGAEvent('Contact', 'Phone Call', '+90 507 233 94 97')}
                    className="text-white/70 hover:text-gold transition-colors text-xs sm:text-sm font-medium tracking-wide"
                  >
                    +90 507 233 94 97
                  </a>
                  <a 
                    href="tel:+905534448895" 
                    onClick={() => trackGAEvent('Contact', 'Phone Call', '+90 553 444 88 95')}
                    className="text-white/70 hover:text-gold transition-colors text-xs sm:text-sm font-medium tracking-wide"
                  >
                    +90 553 444 88 95
                  </a>
                </div>
              </motion.div>

              {/* Email Card */}
              <motion.div 
                whileHover={cardHoverHigh}
                className="glass-card p-6 sm:p-8 md:p-12 rounded-xl border-gold/10 hover:border-gold/40 transition-all duration-500 flex flex-col items-center text-center group relative overflow-hidden sm:col-span-2 md:col-span-1 w-full"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6 sm:mb-8 border border-gold/20 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(212,175,55,0.2)] shrink-0">
                  <Mail className="text-gold w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <h5 className="text-gold font-bold uppercase tracking-widest text-[10px] mb-4 sm:mb-6">E-posta</h5>
                <a 
                  href="mailto:info@drekremyalcin.com.tr" 
                  onClick={() => trackGAEvent('Contact', 'Email Click', 'info@drekremyalcin.com.tr')}
                  className="text-white/70 hover:text-gold transition-colors text-xs sm:text-sm font-medium tracking-wide break-all"
                >
                  info@drekremyalcin.com.tr
                </a>
              </motion.div>
            </div>

            <div className="flex justify-center">
              <button 
                onClick={() => {
                  trackGAEvent('Appointment', 'Click', 'Contact Section Randevu Al');
                  setIsAppointmentModalOpen(true);
                }}
                className="premium-button group flex items-center gap-3"
              >
                <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Online Randevu Talebi Oluştur</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section id="locations" className="pt-2 pb-10 relative overflow-hidden border-t border-white/5 w-full max-w-full" style={{ willChange: "transform", transform: "translate3d(0,0,0)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10 w-full">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 gap-4 sm:gap-8 w-full">
              <div>
                <span className="text-gold font-bold tracking-[0.4em] uppercase text-xs mb-2 block">Ulaşım</span>
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif premium-text-gradient break-words">Lokasyonumuz</h2>
                <p className="mt-2 text-white/40 text-sm sm:text-lg font-light max-w-xl break-words">
                  Ankara'nın merkezi noktasında, en ileri teknolojik donanımlara sahip hastanemizde hizmetinizdeyiz.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-stretch w-full">
              {/* Address Cards */}
              <div className="lg:col-span-4 min-h-[260px] lg:h-[450px] flex flex-col w-full">
                {locations.map((loc) => (
                  <motion.div 
                    key={loc.id}
                    whileHover={navHoverRight}
                    className="glass-card p-6 sm:p-8 rounded-xl border-gold/20 hover:border-gold/60 transition-all duration-500 group relative overflow-hidden h-full flex flex-col w-full"
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-gold/0 group-hover:bg-gold transition-all duration-500" />
                    <div className="flex items-start gap-4 h-full">
                      <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:text-dark-stitch transition-all">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col justify-between h-full flex-1 min-w-0">
                        <div>
                          <h4 className="text-gold font-serif text-lg sm:text-xl font-bold mb-3 break-words">{loc.name}</h4>
                          <p className="text-white/50 text-xs sm:text-sm leading-relaxed mb-6 break-words">{loc.address}</p>
                        </div>
                        <div className="flex flex-col gap-4 mt-auto">
                          <div className="flex items-center gap-3 text-white/40 text-xs sm:text-sm">
                            <Phone className="w-4 h-4 text-gold/60 shrink-0" />
                            <span>{loc.phone}</span>
                          </div>
                          <a 
                            href={loc.googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-gold text-[10px] font-bold uppercase tracking-widest border-b border-gold/40 pb-1 hover:border-gold hover:gap-3 transition-all w-fit"
                          >
                            Yol Tarifi Al
                            <ArrowRight className="w-3 h-3 text-gold" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map Container */}
              <div ref={mapContainerRef} className="lg:col-span-8 h-[280px] sm:h-[380px] lg:h-[450px] rounded-xl overflow-hidden border-2 border-gold shadow-[0_0_40px_rgba(212,175,55,0.25)] relative w-full">
                {isMapInView ? (
                  <iframe
                    src="https://maps.google.com/maps?q=Özel+Ortadoğu+Hastanesi+Yenimahalle+Ankara&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Özel Ortadoğu Hastanesi Haritası"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-dark-stitch text-white/50 text-sm gap-2">
                    <span className="text-gold/80 animate-pulse font-serif uppercase tracking-widest text-xs">Harita Yükleniyor...</span>
                  </div>
                )}
                
                {/* Map Overlay for Premium Look */}
                <div className="absolute inset-0 pointer-events-none border-[10px] sm:border-[20px] border-dark-stitch/5" />
              </div>
            </div>
          </div>
        </section>
      </main>
      )}

      {/* Footer */}
      <footer className="pt-12 sm:pt-16 pb-8 border-t border-white/5 relative overflow-hidden w-full max-w-full">
        {/* Footer Glow - Subtle and soft */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full bg-gold/5 blur-[150px] pointer-events-none opacity-40" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 w-full">
            <div className="lg:col-span-1">
              <div className="text-2xl font-serif font-bold tracking-tighter gold-text-gradient mb-4">
                DR.EKREM YALÇIN <span className="text-white/30 font-light">| MEDICINE</span>
              </div>
              <p className="text-white/30 text-sm leading-relaxed font-light">
                Beyin ve sinir cerrahisinde mükemmellik ve inovasyonun buluştuğu nokta. En ileri teknolojilerle hastalarımıza dünya standartlarında hizmet sunuyoruz.
              </p>
            </div>
            
            <div>
              <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-gold mb-5">İletişim</h4>
              <div className="space-y-4 text-white/40 text-sm">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gold/60 mt-0.5" />
                  <div>
                    <div className="text-white/60 mb-0.5">Telefon</div>
                    <div className="font-medium">+90 507 233 94 97</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gold/60 mt-0.5" />
                  <div>
                    <div className="text-white/60 mb-0.5">E-posta</div>
                    <div className="font-medium">info@drekremyalcin.com.tr</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-gold mb-5">Kurumsal & Yasal</h4>
              <ul className="space-y-3 text-white/50 text-xs sm:text-sm">
                <li>
                  <button 
                    onClick={() => setSelectedLegalDoc(legalDocuments.kvkk)}
                    className="hover:text-gold transition-colors text-left flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover:bg-gold transition-colors shrink-0" />
                    KVKK Aydınlatma Metni
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setSelectedLegalDoc(legalDocuments.gizlilik)}
                    className="hover:text-gold transition-colors text-left flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover:bg-gold transition-colors shrink-0" />
                    Gizlilik ve Çerez Politikası
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setSelectedLegalDoc(legalDocuments.yasal)}
                    className="hover:text-gold transition-colors text-left flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover:bg-gold transition-colors shrink-0" />
                    Yasal Uyarı & Tıbbi Sorumluluk Reddi
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setSelectedLegalDoc(legalDocuments.hasta)}
                    className="hover:text-gold transition-colors text-left flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover:bg-gold transition-colors shrink-0" />
                    Hasta Hakları ve İletişim Aydınlatması
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => window.dispatchEvent(new Event('open-cookie-preferences'))}
                    className="hover:text-gold transition-colors text-left flex items-center gap-2 group font-medium text-gold/80"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold group-hover:scale-125 transition-all shrink-0" />
                    Çerez Tercihleri (Cookie Preferences)
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-gold mb-5">Sosyal Medya</h4>
              <div className="flex gap-3">
                <a 
                  href="https://www.instagram.com/dr_ekremyalcin06/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => trackGAEvent('Social', 'Click', 'Footer Instagram')}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#E4405F] hover:shadow-[0_0_15px_rgba(228,64,95,0.4)] hover:border-[#E4405F]/50 transition-all"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href="https://wa.me/905072339497?text=Merhaba%20Dr.%20Ekrem%20Bey%2C%20web%20siteniz%20uzerinden%20randevu%20talebi%20olusturmak%20istiyorum." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => trackGAEvent('Contact', 'WhatsApp Click', 'Footer Social WhatsApp')}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#25D366] hover:shadow-[0_0_15px_rgba(37,211,102,0.4)] hover:border-[#25D366]/50 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
                <div 
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#1877F2]"
                >
                  <Facebook className="w-4 h-4" />
                </div>
                <a 
                  href="https://www.youtube.com/@marcaworld01" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => trackGAEvent('Social', 'Click', 'Footer Youtube')}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#FF0000] hover:shadow-[0_0_15px_rgba(255,0,0,0.4)] hover:border-[#FF0000]/50 transition-all"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-white/20 text-xs font-light tracking-widest uppercase text-center md:text-left">
              © 2026 DR. ÖĞR. ÜYESİ EKREM YALÇIN. TÜM HAKLARI SAKLIDIR. <span className="text-white/10">|</span> <span className="text-gold/40 hover:text-gold transition-colors font-medium cursor-default">Geliştirici: Yasin Yurt</span>
            </div>
            <div className="flex gap-8">
              <a href="#" onClick={(e) => e.preventDefault()} className="text-white/20 text-[10px] uppercase tracking-[0.2em] hover:text-gold transition-colors">KVKK</a>
              <a href="#" onClick={(e) => e.preventDefault()} className="text-white/20 text-[10px] uppercase tracking-[0.2em] hover:text-gold transition-colors">Çerez Politikası</a>
              <a href="#" onClick={(e) => e.preventDefault()} className="text-white/20 text-[10px] uppercase tracking-[0.2em] hover:text-gold transition-colors">Yasal Uyarı</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <AnimatePresence mode="wait">
        {isBioModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsBioModalOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[90vh] bg-white/5 backdrop-blur-md rounded-sm overflow-y-auto shadow-[0_0_100px_rgba(212,175,55,0.3)] border border-gold/20 p-12"
            >
              <button 
                onClick={() => setIsBioModalOpen(false)}
                className="absolute top-6 right-6 z-50 w-12 h-12 bg-gold/10 text-gold rounded-full flex items-center justify-center hover:bg-gold hover:text-dark-stitch hover:scale-110 transition-all shadow-lg"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="space-y-12">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-px w-12 bg-gold" />
                    <h3 className="text-gold text-sm font-bold uppercase tracking-[0.3em]">Özgeçmiş</h3>
                  </div>
                  <p className="text-white/80 text-xl leading-relaxed font-light font-serif">
                    Op. Dr. Ekrem YALÇIN, 1967 Konya doğumludur. Aslen Gümüşhane Kelkitlidir. 1991 Selçuk Üniversitesi Tıp Fakültesi mezunudur. 2001 yılında İzmir SSK Eğitim ve Araştırma Hastanesi’nde Beyin ve Sinir Cerrahisi Uzmanı unvanını almıştır.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="h-px w-12 bg-gold" />
                    <h3 className="text-gold text-sm font-bold uppercase tracking-[0.3em]">Deneyimler</h3>
                  </div>
                  <div className="grid gap-6">
                    {[
                      { year: '1991', desc: 'Malatya Sıtma Pınarı Sağlık Ocağı Tabibi' },
                      { year: '1995', desc: 'İzmir SSK Hastanesi Beyin Ve Sinir Cerrahisi Arş. Görevlisi' },
                      { year: '2000', desc: 'Rize SSK Hastanesi Başhekim Yardımcılığı ve Uzmanı' },
                      { year: '2006', desc: 'Trabzon İmperyal Hastanesi Beyin Cerrahi Uzmanı' },
                      { year: '2007', desc: 'Ankara Nallıhan Devlet Hastanesi Başhekimi' },
                      { year: '2009', desc: 'Ankara Yenimahalle Devlet Hastanesi Uzmanı' },
                      { year: '2010', desc: 'Lokman Hekim Hastaneleri Van Başhekim Yardımcısı' },
                      { year: '2021', desc: 'Ankara Medipol Üniversitesi Dr. Öğretim Üyesi' }
                    ].map((exp, i) => (
                      <div key={i} className="flex gap-8 group">
                        <div className="text-gold font-bold font-serif text-xl w-20 shrink-0">{exp.year}</div>
                        <div className="h-px w-8 bg-white/10 mt-4 group-hover:w-12 group-hover:bg-gold transition-all" />
                        <div className="text-white/60 text-lg font-light">{exp.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Certificate Detail Modal (Lightbox) */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-[600] flex items-center justify-center p-4 md:p-10 bg-black/90 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[90vh] bg-dark-stitch rounded-sm overflow-hidden shadow-[0_0_100px_rgba(212,175,55,0.3)] border border-gold/20"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-6 right-6 z-50 w-12 h-12 bg-dark-stitch/80 text-gold rounded-full flex items-center justify-center hover:bg-gold hover:text-dark-stitch hover:scale-110 transition-all shadow-xl border border-gold/20"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Arrows */}
              <button 
                onClick={(e) => { e.stopPropagation(); prevCert(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-dark-stitch/80 text-gold rounded-full flex items-center justify-center hover:bg-gold hover:text-dark-stitch hover:scale-110 transition-all shadow-xl border border-gold/20"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); nextCert(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-dark-stitch/80 text-gold rounded-full flex items-center justify-center hover:bg-gold hover:text-dark-stitch hover:scale-110 transition-all shadow-xl border border-gold/20"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              
              <div className="flex flex-col md:flex-row h-full overflow-y-auto md:overflow-hidden">
                <div className="md:w-2/3 bg-white p-4 flex items-center justify-center min-h-[300px]">
                  <motion.img 
                    key={selectedCert.image}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    src={selectedCert.image} 
                    alt={selectedCert.title} 
                    className="max-w-full max-h-[70vh] object-contain sharp-image"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="md:w-1/3 p-10 bg-dark-stitch flex flex-col justify-center border-l border-gold/10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-px w-10 bg-gold" />
                    <span className="text-gold text-xs font-bold uppercase tracking-[0.2em]">{selectedCert.year}</span>
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-white mb-4 leading-tight">{selectedCert.title}</h3>
                  <p className="text-white/40 text-sm uppercase tracking-widest font-semibold mb-8">{selectedCert.issuer}</p>
                  <div className="h-px w-full bg-white/5 mb-8" />
                  <p className="text-white/60 text-sm leading-relaxed font-light italic">
                    Bu sertifika, Dr. Ekrem Yalçın'ın Beyin, Omurilik ve Sinir Cerrahisi alanındaki uluslararası standartlardaki yetkinliğini ve akademik başarısını temsil etmektedir.
                  </p>
                  
                  <div className="mt-10 flex justify-between items-center text-[10px] text-gold/40 font-bold uppercase tracking-widest">
                    <span>Sertifika {certificates.findIndex(c => c.id === selectedCert.id) + 1} / {certificates.length}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Certificate Gallery Modal */}
      <AnimatePresence>
        {isCertGalleryModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 h-screen w-screen z-[500] bg-dark-stitch/98 backdrop-blur-2xl overflow-y-auto"
          >
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
              <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-navy-stitch/10 rounded-full blur-[120px]" />
              <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-gold/5 rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 min-h-screen p-8 md:p-20">
              <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-20">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-px w-12 bg-gold" />
                      <span className="text-gold font-bold uppercase tracking-[0.4em] text-xs">Başarı Arşivi</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-serif premium-text-gradient">Tüm Sertifikalar <span className="italic text-gold/80">({certificates.length})</span></h2>
                  </div>
                  <button 
                    onClick={() => setIsCertGalleryModalOpen(false)}
                    className="w-16 h-16 rounded-full border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-dark-stitch hover:scale-110 transition-all duration-500 group shadow-lg"
                  >
                    <X className="w-8 h-8 group-hover:rotate-90 transition-transform duration-500" />
                  </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {certificates.map((cert, idx) => (
                    <motion.div
                      key={cert.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (idx % 8) * 0.05 }}
                      onClick={() => setSelectedCert(cert)}
                      className="group cursor-pointer"
                    >
                      <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-gold/20 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                        <img 
                          src={cert.image} 
                          alt={cert.title}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                          referrerPolicy="no-referrer"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="absolute inset-0 bg-dark-stitch/20 group-hover:bg-transparent transition-colors duration-500" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-dark-stitch/40 backdrop-blur-[2px]">
                          <Award className="text-gold w-10 h-10" />
                        </div>
                      </div>
                      <div className="mt-6 text-center">
                        <h4 className="text-sm font-serif text-gold/80 font-bold tracking-tight group-hover:text-gold transition-colors">
                          {cert.title}
                        </h4>
                        <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1">{cert.issuer}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Gallery Archive Modal */}
      <AnimatePresence>
        {isGalleryModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 h-screen w-screen z-[500] bg-black/95 backdrop-blur-3xl overflow-y-auto"
          >
            {/* Bokeh Particles Background */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ 
                    x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
                    y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                    opacity: 0 
                  }}
                  animate={{ 
                    y: [null, Math.random() * -300],
                    opacity: [0, 0.2, 0],
                    scale: [0.5, 1.2, 0.5]
                  }}
                  transition={{ 
                    duration: Math.random() * 15 + 15, 
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute w-32 h-32 bg-gold/5 rounded-full blur-[80px]"
                />
              ))}
            </div>

            <div className="relative z-10 min-h-screen p-8 md:p-20">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12 border-b border-gold/10 pb-10">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-px w-12 bg-gold" />
                      <span className="text-gold font-bold uppercase tracking-[0.4em] text-xs">Video Arşivi</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-serif premium-text-gradient">Tüm Videolar <span className="italic text-gold/80">({videos.length})</span></h2>
                    {videoSearchQuery && (
                      <span className="text-sm text-gold/60 block mt-2 font-sans tracking-wide">
                        Bulunan sonuç: {filteredVideos.length} video
                      </span>
                    )}
                  </div>
                  <button 
                    onClick={() => setIsGalleryModalOpen(false)}
                    className="w-16 h-16 rounded-full border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-dark-stitch hover:scale-110 transition-all duration-500 group shadow-lg shrink-0 self-start md:self-auto"
                  >
                    <X className="w-8 h-8 group-hover:rotate-90 transition-transform duration-500" />
                  </button>
                </div>

                {/* Dynamic Search Bar */}
                <div className="flex justify-center mb-16">
                  <div className="relative w-full max-w-xl">
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gold/60" />
                    <input 
                      type="text" 
                      value={videoSearchQuery}
                      onChange={(e) => setVideoSearchQuery(e.target.value)}
                      className="w-full bg-white/5 border border-gold/20 focus:border-gold/80 focus:bg-white/10 rounded-full pl-12 pr-12 py-4 text-white placeholder-white/30 outline-none transition-all text-sm tracking-wide shadow-[0_4px_30px_rgba(0,0,0,0.2)]" 
                      placeholder="Video ara (örn: Fıtık, Karpal Tünel...)" 
                    />
                    {videoSearchQuery && (
                      <button 
                        onClick={() => setVideoSearchQuery('')}
                        className="absolute right-5 top-1/2 -translate-y-1/2 text-gold hover:text-white text-xs font-bold uppercase tracking-wider transition-colors bg-gold/10 px-3 py-1.5 rounded-full"
                      >
                        Temizle
                      </button>
                    )}
                  </div>
                </div>

                {filteredVideos.length === 0 ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center justify-center py-20 text-center"
                  >
                    <div className="w-16 h-16 rounded-full border border-gold/20 flex items-center justify-center mb-6 text-gold/40">
                      <Search className="w-8 h-8" />
                    </div>
                    <p className="text-white/60 text-lg mb-2">Aradığınız kriterlere uygun video bulunamadı.</p>
                    <p className="text-gold/60 text-sm">Lütfen farklı anahtar kelimeler ile tekrar deneyiniz.</p>
                  </motion.div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {filteredVideos.map((video, idx) => (
                      <motion.div
                        key={video.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (idx % 6) * 0.1 }}
                        onClick={() => setSelectedVideo(video)}
                        className="group cursor-pointer"
                      >
                        <div className="relative aspect-video rounded-sm overflow-hidden border border-gold/20 bg-[#1d3557] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                          <img 
                            src={video.kucukResim} 
                            alt={video.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                            referrerPolicy="no-referrer"
                            loading="lazy"
                            decoding="async"
                          />
                          <div className="play-icon-overlay">
                            <div className="play-icon-circle scale-75 group-hover:scale-100 transition-transform duration-500">
                              <Play className="w-8 h-8 fill-gold" />
                            </div>
                          </div>
                        </div>
                        <div className="mt-6">
                          <h4 className="text-lg font-serif text-gold/80 font-bold tracking-tight group-hover:text-gold transition-colors">
                            {video.title}
                          </h4>
                          <div className="h-px w-8 bg-gold/20 mt-4 group-hover:w-full transition-all duration-700" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Player Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-10 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl aspect-video bg-transparent rounded-sm overflow-hidden shadow-[0_0_100px_rgba(212,175,55,0.2)] border border-gold/20"
            >
              <button 
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-50 w-12 h-12 bg-gold/10 text-gold rounded-full flex items-center justify-center hover:bg-gold hover:text-dark-stitch hover:scale-110 transition-all shadow-lg"
              >
                <X className="w-6 h-6" />
              </button>
              <iframe
                src={selectedVideo.youtubeUrl}
                title={selectedVideo.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Appointment Modal */}
      <AnimatePresence>
        {isAppointmentModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[500] flex items-center justify-center p-4"
            onClick={() => {
              setIsAppointmentModalOpen(false);
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl bg-white/5 backdrop-blur-md border border-gold/30 rounded-sm p-8 md:p-12 shadow-[0_0_100px_rgba(212,175,55,0.2)]"
            >
              <button 
                onClick={() => {
                  setIsAppointmentModalOpen(false);
                }}
                className="absolute top-6 right-6 text-white/40 hover:text-gold transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-gold" />
                  <span className="text-gold text-[10px] font-bold uppercase tracking-[0.3em]">Hızlı Erişim</span>
                </div>
                <h3 className="text-3xl font-serif premium-text-gradient">Online Randevu Talebi</h3>
              </div>

              <form 
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (isSubmittingForm || isSubmitted) return;

                  setIsSubmittingForm(true);
                  const form = e.target as HTMLFormElement;
                  const rawName = (form.elements.namedItem('name') as HTMLInputElement).value;
                  const rawDate = (form.elements.namedItem('date') as HTMLInputElement).value;
                  const rawNote = (form.elements.namedItem('note') as HTMLTextAreaElement).value;

                  // Input Sanitization
                  const name = sanitizeForMessage(rawName);
                  const date = sanitizeInput(rawDate);
                  const note = sanitizeForMessage(rawNote);

                  // Direct WhatsApp Redirect
                  const doctorNumber = "905072339497";
                  const message = `Merhaba Dr. Ekrem Bey, web siteniz üzerinden randevu talebi oluşturmak istiyorum.%0A%0A*Ad Soyad:* ${encodeURIComponent(name)}%0A*Tercih Edilen Tarih:* ${encodeURIComponent(date)}%0A*Şikayet / Not:* ${encodeURIComponent(note)}`;
                  const whatsappUrl = `https://wa.me/${doctorNumber}?text=${message}`;
                  
                  trackGAEvent('Appointment', 'Submit WhatsApp', name);
                  window.open(whatsappUrl, '_blank');

                  // Immediate submission status feedback
                  setTimeout(() => {
                    setIsSubmittingForm(false);
                    setIsSubmitted(true);

                    setTimeout(() => {
                      setIsSubmitted(false);
                      setIsAppointmentModalOpen(false);
                    }, 2000);
                  }, 400);
                }}
              >
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Ad Soyad</label>
                  <input 
                    required 
                    name="name" 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:border-gold outline-none transition-all" 
                    placeholder="Adınız ve Soyadınız" 
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Tercih Edilen Tarih</label>
                  <input 
                    required 
                    name="date" 
                    type="date" 
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:border-gold outline-none transition-all" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Şikayetiniz / Notunuz</label>
                  <textarea 
                    required 
                    name="note" 
                    rows={4} 
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:border-gold outline-none transition-all resize-none" 
                    placeholder="Lütfen şikayetinizi kısaca belirtiniz..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmittingForm || isSubmitted}
                  className="premium-button w-full mt-4 flex items-center justify-center gap-3 disabled:opacity-80 disabled:cursor-not-allowed transition-all"
                >
                  {isSubmittingForm ? (
                    <>
                      <div className="w-5 h-5 border-2 border-dark-stitch border-t-transparent rounded-full animate-spin shrink-0" />
                      <span>Gönderiliyor...</span>
                    </>
                  ) : isSubmitted ? (
                    <>
                      <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                      <span className="text-emerald-400 font-bold">Randevu Talebiniz Başarıyla Alındı!</span>
                    </>
                  ) : (
                    <>
                      <MessageCircle className="w-5 h-5 shrink-0" />
                      <span>Randevu Talebini WhatsApp ile Gönder</span>
                    </>
                  )}
                </button>

                {/* Privacy Notice */}
                <div className="pt-2 text-center text-[10px] text-white/40 flex items-center justify-center gap-1.5 leading-relaxed">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold/80 shrink-0" />
                  <span>
                    Kişisel verileriniz KVKK ilkelerine uygun şekilde korunmaktadır.
                    <button 
                      type="button"
                      onClick={() => setSelectedLegalDoc(legalDocuments.gizlilik)} 
                      className="text-gold/80 hover:underline ml-1"
                    >
                      Gizlilik Politikası
                    </button>
                  </span>
                </div>
              </form>
            </motion.div>
          </motion.div>
          )}
        </AnimatePresence>

      {/* Cookie Consent Modal */}
      <CookieConsent 
        onOpenLegalDoc={(docKey) => setSelectedLegalDoc(legalDocuments[docKey])} 
      />

      {/* Legal Document Modal (Lazy Loaded) */}
      <React.Suspense fallback={null}>
        <LegalModal 
          selectedLegalDoc={selectedLegalDoc} 
          onClose={() => setSelectedLegalDoc(null)} 
        />
      </React.Suspense>
    </div>
  );
}
