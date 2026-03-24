import { motion } from 'motion/react';
import { Phone, Mail, MapPin, ArrowRight, Star, Facebook, Instagram } from 'lucide-react';
import logo from 'figma:asset/8cb1fca3c902220c667fee9042542c6d500eb0b2.png';
import {
  getContactPath,
  getHomePath,
  getPathForPage,
  getServicePath,
  getVoorwaardenPath,
} from '../lib/routes';

interface FooterProps {
  onOpenVoorwaarden?: () => void;
  onNavigate?: (page: string) => void;
  hideCTA?: boolean;
}

export function Footer({ onOpenVoorwaarden, onNavigate, hideCTA = false }: FooterProps) {
  const appleEase = [0.28, 0, 0.4, 1] as const;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 60;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { page: 'home', label: 'Home' },
    { page: 'wie-ben-ik', label: 'Wie ben ik' },
    { page: 'diensten', label: 'Diensten' },
    { page: 'verhuur', label: 'Verhuur' },
    { page: 'projecten', label: 'Projecten' },
    { page: 'contact', label: 'Contact' },
  ];

  const services = [
    { id: 'renovatiewerkzaamheden', label: 'Volledige renovaties' },
    { id: 'metselwerk', label: 'Metselwerken' },
    { id: 'vloerwerkzaamheden', label: 'Vloerwerken' },
    { id: 'opritten-terrassen', label: 'Opritten en terrassen' },
    { id: 'muurinjectie-opstijgend-vocht', label: 'Muurinjectie tegen opstijgend vocht' },
    { id: 'camera-inspectie', label: 'Camera-inspectie' },
  ];

  const navigateToPage = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
      return;
    }

    if (page === 'home') {
      if (window.location.pathname === getHomePath()) {
        scrollToSection('home');
        return;
      }

      window.location.href = getHomePath();
      return;
    }

    if (page === 'contact') {
      if (window.location.pathname === getHomePath()) {
        scrollToSection('contact');
        return;
      }

      window.location.href = getContactPath();
      return;
    }

    window.location.href = getPathForPage(page);
  };

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Pre-Footer CTA Section - Apple Store Style */}
      {!hideCTA && (
      <div className="relative">
        {/* Ambient glow background */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
            style={{
              background: 'radial-gradient(circle, #FCD34D 0%, #FBBF24 50%, transparent 70%)',
            }}
          />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: appleEase }}
            className="text-center"
          >
            {/* Icon badges */}
            <motion.div 
              className="flex justify-center items-center gap-2 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: appleEase }}
            >
              {[1, 2, 3, 4, 5].map((star, i) => (
                <motion.div
                  key={star}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: appleEase }}
                >
                  <Star size={20} className="fill-yellow-400 text-yellow-400" />
                </motion.div>
              ))}
            </motion.div>

            {/* Headline */}
            <h2 
              className="text-white mb-4"
              style={{
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                fontWeight: 600,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
              }}
            >
              Klaar om te beginnen?
            </h2>

            {/* Subheadline */}
            <p 
              className="text-white/50 mb-10 max-w-2xl mx-auto"
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.375rem)',
                fontWeight: 400,
                lineHeight: 1.5,
                letterSpacing: '-0.01em',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
              }}
            >
              Vraag vandaag nog een gratis offerte aan en ontdek hoe wij uw droomhuis werkelijkheid maken.
            </p>

            {/* Premium CTA Button */}
            <motion.button
              onClick={() => navigateToPage('contact')}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.4, ease: appleEase }}
              style={{
                background: 'linear-gradient(135deg, #FCD34D 0%, #FBBF24 100%)',
                padding: '20px 56px',
                boxShadow: '0 8px 32px rgba(251, 191, 36, 0.4), 0 4px 12px rgba(0, 0, 0, 0.3)',
              }}
            >
              {/* Animated shine effect */}
              <motion.div
                className="absolute inset-0"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6, ease: appleEase }}
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
                }}
              />
              
              <span 
                className="relative z-10 text-black"
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  letterSpacing: '-0.01em',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                }}
              >
                Gratis Offerte Aanvragen
              </span>
              
              <ArrowRight 
                size={20} 
                className="relative z-10 text-black group-hover:translate-x-1 transition-transform duration-300" 
              />
            </motion.button>
          </motion.div>
        </div>
      </div>
      )}

      {/* Elegant divider */}
      {!hideCTA && (
      <div 
        className="h-px"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.12) 50%, transparent 100%)',
        }}
      />
      )}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="pt-20 pb-16 lg:pt-24 lg:pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            
            {/* Brand Column - Wider */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: appleEase }}
              className="lg:col-span-4"
            >
              <motion.img 
                src={logo} 
                alt="Angelo Renovates" 
                className="h-20 mb-5 brightness-110"
                whileHover={{ scale: 1.05, brightness: 1.25 }}
                transition={{ duration: 0.3, ease: appleEase }}
                style={{
                  filter: 'drop-shadow(0 4px 16px rgba(251, 191, 36, 0.2))',
                }}
              />
              <motion.p 
                className="text-white mb-6"
                animate={{ 
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  fontFamily: '"Dancing Script", cursive',
                  fontSize: '1.75rem',
                  fontWeight: 600,
                  filter: 'drop-shadow(0 4px 20px rgba(251, 191, 36, 0.6)) drop-shadow(0 2px 8px rgba(251, 191, 36, 0.4))',
                }}
              >
                My hands your home
              </motion.p>
              <p 
                className="text-white/40 leading-relaxed mb-6 max-w-xs"
                style={{
                  fontSize: '0.9375rem',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                  fontWeight: 400,
                  lineHeight: 1.6,
                }}
              >
                Professionele renovaties met extreme aandacht voor detail en vakmanschap. Uw droomhuis begint hier.
              </p>
              
              {/* Trust indicators */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  <span className="text-white/30 text-xs">15+ jaar ervaring</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  <span className="text-white/30 text-xs">500+ projecten</span>
                </div>
              </div>
            </motion.div>

            {/* Navigation Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: appleEase }}
              className="lg:col-span-3"
            >
              <h3 
                className="text-white mb-7"
                style={{
                  fontSize: '0.9375rem',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                }}
              >
                Navigatie
              </h3>
              <ul className="space-y-4">
                {navLinks.map((link, index) => (
                  <motion.li 
                    key={link.page}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.05, ease: appleEase }}
                  >
                    <motion.a
                      href={getPathForPage(link.page)}
                      onClick={(event) => {
                        event.preventDefault();
                        navigateToPage(link.page);
                      }}
                      className="text-white/50 hover:text-yellow-400 transition-all duration-300 group relative inline-flex items-center gap-2"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2, ease: appleEase }}
                      style={{
                        fontSize: '0.9375rem',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                        fontWeight: 400,
                      }}
                    >
                      <span className="w-1 h-1 rounded-full bg-white/0 group-hover:bg-yellow-400 transition-colors duration-300" />
                      {link.label}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: appleEase }}
              className="lg:col-span-2"
            >
              <h3 
                className="text-white mb-7"
                style={{
                  fontSize: '0.9375rem',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                }}
              >
                Diensten
              </h3>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <motion.li 
                    key={service.id}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.05, ease: appleEase }}
                  >
                    <motion.a
                      href={getServicePath(service.id)}
                      onClick={(event) => {
                        if (!onNavigate) {
                          return;
                        }

                        event.preventDefault();
                        window.dispatchEvent(new CustomEvent('openService', { detail: { serviceId: service.id } }));
                      }}
                      className="text-white/50 hover:text-yellow-400 transition-colors duration-300 flex items-start gap-2"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2, ease: appleEase }}
                      style={{
                        fontSize: '0.9375rem',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                        fontWeight: 400,
                      }}
                    >
                      <span className="w-1 h-1 rounded-full bg-yellow-400/40 mt-2 flex-shrink-0" />
                      {service.label}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: appleEase }}
              className="lg:col-span-3"
            >
              <h3 
                className="text-white mb-7"
                style={{
                  fontSize: '0.9375rem',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                }}
              >
                Contact
              </h3>
              <ul className="space-y-5">
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3, ease: appleEase }}
                >
                  <motion.a
                    href="tel:+32478062748"
                    className="flex items-center gap-3 text-white/50 hover:text-yellow-400 transition-all duration-300 group"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2, ease: appleEase }}
                    style={{
                      fontSize: '0.9375rem',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                      fontWeight: 400,
                    }}
                  >
                    <div className="relative">
                      <Phone size={18} className="group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-yellow-400/20 blur-lg scale-0 group-hover:scale-150 transition-transform duration-300" />
                    </div>
                    <span>+32 478 06 27 48</span>
                  </motion.a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.35, ease: appleEase }}
                >
                  <motion.a
                    href="mailto:info@angelorenovates.be"
                    className="flex items-center gap-3 text-white/50 hover:text-yellow-400 transition-all duration-300 group"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.3, ease: appleEase }}
                  >
                    <div className="relative">
                      <Mail className="w-4 h-4 relative z-10" />
                      <div className="absolute inset-0 bg-yellow-400/20 blur-lg scale-0 group-hover:scale-150 transition-transform duration-300" />
                    </div>
                    <span>info@angelorenovates.be</span>
                  </motion.a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4, ease: appleEase }}
                >
                  <div
                    className="flex items-start gap-3 text-white/50"
                    style={{
                      fontSize: '0.9375rem',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                      fontWeight: 400,
                      lineHeight: 1.6,
                    }}
                  >
                    <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                    <span>België<br />BTW: BE0817410486</span>
                  </div>
                </motion.li>
              </ul>

              {/* Social Media */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.45, ease: appleEase }}
                className="mt-8 pt-8"
                style={{
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <h4
                  className="text-white/50 mb-4"
                  style={{
                    fontSize: '0.8125rem',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                    fontWeight: 500,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                  }}
                >
                  Volg ons
                </h4>
                <div className="flex items-center gap-3">
                  <motion.a
                    href="https://www.facebook.com/share/16DaRUETFT/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3, ease: appleEase }}
                    style={{
                      background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1) 0%, rgba(252, 211, 77, 0.15) 100%)',
                      border: '1px solid rgba(251, 191, 36, 0.2)',
                    }}
                  >
                    <div className="relative">
                      <Facebook 
                        size={20} 
                        className="text-white/70 group-hover:text-yellow-400 transition-colors duration-300" 
                      />
                      <div className="absolute inset-0 bg-yellow-400/20 blur-lg scale-0 group-hover:scale-150 transition-transform duration-300" />
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://www.instagram.com/angelo_renovates?igsh=ZXl6NW9yY3BkYjcx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3, ease: appleEase }}
                    style={{
                      background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1) 0%, rgba(252, 211, 77, 0.15) 100%)',
                      border: '1px solid rgba(251, 191, 36, 0.2)',
                    }}
                  >
                    <div className="relative">
                      <Instagram 
                        size={20} 
                        className="text-white/70 group-hover:text-yellow-400 transition-colors duration-300" 
                      />
                      <div className="absolute inset-0 bg-yellow-400/20 blur-lg scale-0 group-hover:scale-150 transition-transform duration-300" />
                    </div>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Premium divider with glow */}
        <motion.div 
          className="h-px relative"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: appleEase }}
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.15) 50%, transparent 100%)',
          }}
        >
          <div 
            className="absolute inset-0 blur-sm"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(251, 191, 36, 0.2) 50%, transparent 100%)',
            }}
          />
        </motion.div>

        {/* Bottom Bar - World Class */}
        <motion.div 
          className="py-8 lg:py-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, ease: appleEase }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <motion.p 
              className="text-white/30 text-center md:text-left"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6, ease: appleEase }}
              style={{
                fontSize: '0.8125rem',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                fontWeight: 400,
                letterSpacing: '-0.01em',
              }}
            >
              © {new Date().getFullYear()} Angelo Renovates. Alle rechten voorbehouden.
            </motion.p>
            <motion.div 
              className="flex items-center gap-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7, ease: appleEase }}
            >
              <motion.button
                className="text-white/30 hover:text-yellow-400 transition-colors duration-300 relative group"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2, ease: appleEase }}
                style={{
                  fontSize: '0.8125rem',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                  fontWeight: 400,
                  letterSpacing: '-0.01em',
                }}
              >
                Privacy
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-yellow-400 group-hover:w-full transition-all duration-300" />
              </motion.button>
              <div className="w-px h-3 bg-white/10" />
              <motion.a
                href={getVoorwaardenPath()}
                className="text-white/30 hover:text-yellow-400 transition-colors duration-300 relative group"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2, ease: appleEase }}
                onClick={(event) => {
                  if (!onOpenVoorwaarden) {
                    return;
                  }

                  event.preventDefault();
                  onOpenVoorwaarden();
                }}
                style={{
                  fontSize: '0.8125rem',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                  fontWeight: 400,
                  letterSpacing: '-0.01em',
                }}
              >
                Voorwaarden
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-yellow-400 group-hover:w-full transition-all duration-300" />
              </motion.a>
              <div className="w-px h-3 bg-white/10" />
              <motion.a
                href={getHomePath()}
                onClick={(e) => {
                  e.preventDefault();
                  navigateToPage('home');
                }}
                className="text-white/30 hover:text-yellow-400 transition-colors duration-300 relative group"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2, ease: appleEase }}
                style={{
                  fontSize: '0.8125rem',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                  fontWeight: 400,
                  letterSpacing: '-0.01em',
                }}
              >
                Terug naar boven ↑
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Premium bottom ambient glow */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at bottom, rgba(251, 191, 36, 0.05) 0%, transparent 70%)',
        }}
      />
    </footer>
  );
}
