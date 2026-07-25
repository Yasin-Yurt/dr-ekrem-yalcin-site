/**
 * Security & Input Sanitization Utilities for Dr. Ekrem Yalçın Web Application
 */

// Environment variable for reCAPTCHA Site Key with a fallback demo key
const importMetaEnv = (import.meta as any).env || {};
export const RECAPTCHA_SITE_KEY = 
  importMetaEnv.VITE_RECAPTCHA_SITE_KEY || 
  importMetaEnv.REACT_APP_RECAPTCHA_SITE_KEY || 
  '6LdX_5kpAAAAAJ89-Xp-x2mK5u_demo_key';

let isRecaptchaLoading = false;
let isRecaptchaLoaded = false;

/**
 * Lazy loads Google reCAPTCHA v3 script dynamically on user interaction.
 * Ensures initial page load performance is 100% unaffected.
 */
export const loadRecaptchaScript = (): Promise<boolean> => {
  return new Promise((resolve) => {
    if (isRecaptchaLoaded || (window as any).grecaptcha) {
      isRecaptchaLoaded = true;
      resolve(true);
      return;
    }

    if (isRecaptchaLoading) {
      const checkInterval = setInterval(() => {
        if ((window as any).grecaptcha) {
          clearInterval(checkInterval);
          isRecaptchaLoaded = true;
          resolve(true);
        }
      }, 100);
      return;
    }

    isRecaptchaLoading = true;
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      isRecaptchaLoaded = true;
      isRecaptchaLoading = false;
      resolve(true);
    };
    script.onerror = () => {
      isRecaptchaLoading = false;
      resolve(false);
    };
    document.head.appendChild(script);
  });
};

/**
 * Executes reCAPTCHA v3 for a given action and returns a verification token.
 */
export const executeRecaptcha = async (action: string = 'submit_appointment'): Promise<string | null> => {
  try {
    const loaded = await loadRecaptchaScript();
    if (!loaded) return null;

    return new Promise((resolve) => {
      const grecaptcha = (window as any).grecaptcha;
      if (!grecaptcha || typeof grecaptcha.ready !== 'function') {
        resolve(null);
        return;
      }

      grecaptcha.ready(() => {
        grecaptcha
          .execute(RECAPTCHA_SITE_KEY, { action })
          .then((token: string) => resolve(token))
          .catch(() => resolve(null));
      });
    });
  } catch {
    return null;
  }
};

/**
 * XSS & Script Injection Prevention Utility
 * Strips HTML tags, script vectors, and dangerous characters from user inputs.
 */
export const sanitizeInput = (input: string): string => {
  if (!input) return '';
  
  return input
    // Remove HTML tags completely
    .replace(/<[^>]*>/g, '')
    // Remove inline event handlers (e.g. onerror=, onload=)
    .replace(/on\w+\s*=/gi, '')
    // Remove javascript: pseudo protocol
    .replace(/javascript:/gi, '')
    // Encode potentially dangerous characters
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
    .trim();
};

/**
 * Clean sanitization specially tailored for WhatsApp & text messages
 * (Preserves readable text while neutralizing executable scripts/HTML)
 */
export const sanitizeForMessage = (input: string): string => {
  if (!input) return '';
  return input
    .replace(/<[^>]*>/g, '') // strip tags
    .replace(/[\{\}\[\]\<\>\/]/g, '') // strip brackets/code symbols
    .replace(/(script|select|insert|delete|update|drop|eval)/gi, '') // strip keywords
    .trim();
};
