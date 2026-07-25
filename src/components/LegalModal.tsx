import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, X } from 'lucide-react';

export interface LegalSection {
  heading?: string;
  text: string[];
}

export interface LegalDocument {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  updatedAt: string;
  sections: LegalSection[];
}

interface LegalModalProps {
  selectedLegalDoc: LegalDocument | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ selectedLegalDoc, onClose }) => {
  return (
    <AnimatePresence>
      {selectedLegalDoc && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[500] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[85vh] bg-[#0a192f] border border-gold/30 rounded-2xl p-6 sm:p-10 shadow-[0_0_80px_rgba(212,175,55,0.25)] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-start justify-between pb-5 border-b border-gold/20 gap-4 shrink-0">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {selectedLegalDoc.badge}
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight">
                  {selectedLegalDoc.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/50 font-light mt-1">
                  {selectedLegalDoc.subtitle}
                </p>
              </div>
              <button 
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white/5 border border-gold/30 text-gold flex items-center justify-center hover:bg-gold hover:text-dark-stitch hover:scale-105 transition-all shrink-0"
                aria-label="Kapat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto my-4 pr-2 space-y-6 text-white/80 text-xs sm:text-sm leading-relaxed custom-scrollbar flex-1">
              {selectedLegalDoc.sections.map((sec, idx) => (
                <div key={idx} className="space-y-2">
                  {sec.heading && (
                    <h4 className="text-sm sm:text-base font-serif font-bold text-gold">
                      {sec.heading}
                    </h4>
                  )}
                  {sec.text.map((p, pIdx) => (
                    <p key={pIdx} className="text-white/70 font-light leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              ))}

              {/* Footnote */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between text-[11px] text-white/40 gap-2">
                <span>Op. Dr. Ekrem Yalçın - Beyin, Omurilik ve Sinir Cerrahisi Uzmanı</span>
                <span>Son Güncelleme: {selectedLegalDoc.updatedAt}</span>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="pt-4 border-t border-gold/20 flex justify-end shrink-0">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-gold text-dark-stitch font-bold text-xs uppercase tracking-wider hover:bg-[#F5E6AD] transition-colors shadow-[0_0_15px_rgba(212,175,55,0.4)]"
              >
                Anladım, Kapat
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LegalModal;
