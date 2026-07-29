import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Brain, Activity, ShieldCheck, Stethoscope, Microscope, AlertCircle, HeartPulse, UserCheck, Sparkles, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { contentData } from '../content';

interface ContentPageProps {
  contentKey: string;
  onBack: () => void;
}

const FAQAccordion: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-gold/10 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-medium text-white/90 group-hover:text-gold transition-colors">{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-gold" /> : <ChevronDown className="w-5 h-5 text-gold/40" />}
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-slate-300 leading-relaxed font-normal">{answer}</p>
      </motion.div>
    </div>
  );
};

export const ContentPage: React.FC<ContentPageProps> = ({ contentKey, onBack }) => {
  const content = contentData[contentKey];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [contentKey]);

  if (!content) {
    return (
      <div className="min-h-screen bg-dark-stitch flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">İçerik Bulunamadı</h1>
          <button onClick={onBack} className="text-gold hover:underline">Geri Dön</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent text-white pt-32 pb-20 px-4 md:px-8 relative overflow-hidden">
      {/* Subtle Neural Network Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="content-neural-net" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse">
              <circle cx="15" cy="15" r="0.8" fill="#D4AF37" />
              <circle cx="135" cy="135" r="0.8" fill="#D4AF37" />
              <circle cx="75" cy="75" r="1.2" fill="#D4AF37" />
              <line x1="15" y1="15" x2="75" y2="75" stroke="#D4AF37" strokeWidth="0.3" />
              <line x1="135" y1="135" x2="75" y2="75" stroke="#D4AF37" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#content-neural-net)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => {
            onBack();
            window.scrollTo(0, 0);
          }}
          className="flex items-center gap-2 text-gold/60 hover:text-gold transition-colors mb-12 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold tracking-widest uppercase">Geri Dön</span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gold font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Bilgilendirme</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-12 leading-tight premium-text-gradient">
            {content.title}
          </h1>

          <div className="space-y-24">
            {/* Definition Section */}
            <section className="relative">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-amber-500/15 flex items-center justify-center flex-shrink-0 border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.2)] text-amber-400">
                  <Brain className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif text-gold mb-6">Tanım</h2>
                  <div 
                    className="text-slate-200 text-lg leading-relaxed font-normal space-y-6"
                    dangerouslySetInnerHTML={{ __html: content.definition }}
                  />
                </div>
              </div>
            </section>

            {/* Mechanism Section */}
            <section className="relative">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-amber-500/15 flex items-center justify-center flex-shrink-0 border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.2)] text-amber-400">
                  <Microscope className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif text-gold mb-6">Bilimsel Mekanizma ve Nedenler</h2>
                  <div 
                    className="text-slate-200 text-lg leading-relaxed font-normal space-y-6"
                    dangerouslySetInnerHTML={{ __html: content.mechanism }}
                  />
                </div>
              </div>
            </section>

            {/* Clinical Process Section */}
            <section className="relative">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-amber-500/15 flex items-center justify-center flex-shrink-0 border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.2)] text-amber-400">
                  <UserCheck className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif text-gold mb-6">Klinik Süreç ve Tanı Yolculuğu</h2>
                  <div 
                    className="text-slate-200 text-lg leading-relaxed font-normal space-y-6"
                    dangerouslySetInnerHTML={{ __html: content.clinicalProcess }}
                  />
                </div>
              </div>
            </section>

            {/* Symptoms Section */}
            <section className="relative">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-amber-500/15 flex items-center justify-center flex-shrink-0 border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.2)] text-amber-400">
                  <Activity className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif text-gold mb-6">Belirtiler</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {content.symptoms.map((symptom, idx) => (
                      <li 
                        key={idx} 
                        className="flex items-start gap-3 text-slate-200 bg-[#0e172e]/90 p-6 rounded-xl border border-amber-500/25 leading-relaxed shadow-md hover:border-amber-400/60 transition-all"
                        dangerouslySetInnerHTML={{ __html: symptom }}
                      />
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Diagnosis Section */}
            <section className="relative">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-amber-500/15 flex items-center justify-center flex-shrink-0 border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.2)] text-amber-400">
                  <ShieldCheck className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif text-gold mb-6">Tanı Yöntemleri</h2>
                  <div className="flex flex-wrap gap-4">
                    {content.diagnosis.map((method, idx) => (
                      <span 
                        key={idx} 
                        className="px-6 py-3 bg-amber-500/10 border border-amber-500/30 rounded-full text-sm text-gold font-medium shadow-[0_0_12px_rgba(245,158,11,0.15)]"
                        dangerouslySetInnerHTML={{ __html: method }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Treatment Section */}
            <section className="relative">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-amber-500/15 flex items-center justify-center flex-shrink-0 border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.2)] text-amber-400">
                  <Stethoscope className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif text-gold mb-6">Tedavi Seçenekleri</h2>
                  <div className="space-y-6">
                    {content.treatments.map((treatment, idx) => (
                      <div key={idx} className="group p-8 bg-[#0e172e]/90 rounded-r-xl border-l-4 border-amber-500 border-y border-r border-amber-500/25 hover:border-amber-400 transition-all shadow-md">
                        <p 
                          className="text-slate-200 leading-relaxed text-lg"
                          dangerouslySetInnerHTML={{ __html: treatment }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* When to See Doctor Section */}
            <section className="relative">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-amber-500/15 flex items-center justify-center flex-shrink-0 border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.2)] text-amber-400">
                  <AlertCircle className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif text-gold mb-6">Hangi Durumlarda Doktora Başvurulmalı?</h2>
                  <div 
                    className="text-slate-200 text-lg leading-relaxed font-normal p-8 bg-[#0e172e]/90 border border-amber-500/30 rounded-xl shadow-md"
                    dangerouslySetInnerHTML={{ __html: content.whenToSeeDoctor }}
                  />
                </div>
              </div>
            </section>

            {/* Post Treatment Section */}
            <section className="relative">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-amber-500/15 flex items-center justify-center flex-shrink-0 border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.2)] text-amber-400">
                  <HeartPulse className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif text-gold mb-6">Tedavi Sonrası Süreç</h2>
                  <div 
                    className="text-slate-200 text-lg leading-relaxed font-normal"
                    dangerouslySetInnerHTML={{ __html: content.postTreatment }}
                  />
                </div>
              </div>
            </section>

            {/* Lifestyle Section */}
            <section className="relative">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-amber-500/15 flex items-center justify-center flex-shrink-0 border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.2)] text-amber-400">
                  <Sparkles className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif text-gold mb-6">Yaşam Tarzı Önerileri</h2>
                  <div 
                    className="text-slate-200 text-lg leading-relaxed font-normal p-8 bg-[#0e172e]/90 rounded-xl border border-amber-500/30 shadow-md"
                    dangerouslySetInnerHTML={{ __html: content.lifestyle }}
                  />
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="relative">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-amber-500/15 flex items-center justify-center flex-shrink-0 border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.2)] text-amber-400">
                  <HelpCircle className="w-6 h-6 text-amber-400" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-serif text-gold mb-6">Sıkça Sorulan Sorular</h2>
                  <div className="bg-[#0e172e]/90 rounded-xl border border-amber-500/30 px-8 shadow-md">
                    {content.faq.map((item, idx) => (
                      <FAQAccordion key={idx} question={item.question} answer={item.answer} />
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-20 pt-12 border-t border-gold/10 text-center">
            <p className="text-white/40 text-sm italic">
              * Bu bilgiler genel bilgilendirme amaçlıdır. Kesin tanı ve tedavi planı için lütfen uzman hekiminize danışınız.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
