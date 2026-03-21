import { motion } from 'motion/react';
import { Truck, Shield, CheckCircle, Award } from 'lucide-react';

interface VerhuurProps {
  onOpenVerhuur: () => void;
}

export function Verhuur({ onOpenVerhuur }: VerhuurProps) {
  const appleEase = [0.28, 0, 0.4, 1] as const;

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="verhuur" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle gradient glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(251, 191, 36, 0.2) 0%, transparent 70%)',
          }}
        />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="relative z-10 text-center px-6 py-32 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: appleEase }}
        >
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: appleEase }}
            className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-yellow-400/30"
          >
            <Truck className="w-4 h-4 text-yellow-400" strokeWidth={2.5} />
            <span
              className="text-yellow-400/90"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                fontSize: '0.875rem',
                fontWeight: 600,
                letterSpacing: '-0.01em',
              }}
            >
              Beschikbaar 7 dagen per week
            </span>
          </motion.div>

          {/* Title */}
          <h2 
            className="text-white mb-6"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
              fontSize: 'clamp(3.5rem, 10vw, 7.5rem)',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              lineHeight: 0.95,
            }}
          >
            Verhuur.
          </h2>
          
          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.15, ease: appleEase }}
            className="text-white/60 mb-4"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
              fontSize: 'clamp(1.25rem, 2vw, 1.625rem)',
              fontWeight: 400,
              letterSpacing: '-0.015em',
              lineHeight: 1.4,
            }}
          >
            Professionele aanhangwagen verhuur
          </motion.p>

          {/* Price */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25, ease: appleEase }}
            className="text-yellow-400 mb-12"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
              fontSize: 'clamp(1.375rem, 2.5vw, 1.875rem)',
              fontWeight: 600,
              letterSpacing: '-0.02em',
            }}
          >
            Vanaf €62 per dag
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.35, ease: appleEase }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            {/* Primary Button - Direct Reserveren */}
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.03, boxShadow: '0 20px 40px rgba(251, 191, 36, 0.4)' }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3, ease: appleEase }}
              className="relative px-10 py-4 bg-yellow-400 text-black rounded-full overflow-hidden group"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                fontSize: '1.0625rem',
                fontWeight: 600,
                letterSpacing: '-0.01em',
                boxShadow: '0 10px 30px rgba(251, 191, 36, 0.3)',
              }}
            >
              {/* Hover shine effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                style={{
                  background: 'linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.3) 100%)',
                }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 flex items-center gap-2">
                <span>Direct Reserveren</span>
              </span>
            </motion.button>

            {/* Secondary Button - Bekijk Tarieven */}
            <motion.button
              onClick={onOpenVerhuur}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3, ease: appleEase }}
              className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                fontSize: '1.0625rem',
                fontWeight: 600,
                letterSpacing: '-0.01em',
              }}
            >
              Bekijk Tarieven
            </motion.button>
          </motion.div>

          {/* Features - Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.45, ease: appleEase }}
            className="flex flex-wrap justify-center items-center gap-8 lg:gap-12"
          >
            {/* Verzekerd */}
            <motion.div 
              className="flex items-center gap-2.5 group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-10 h-10 rounded-full bg-yellow-400/10 flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors duration-300">
                <Shield className="w-5 h-5 text-yellow-400" strokeWidth={2.5} />
              </div>
              <span
                className="text-white/70 group-hover:text-white/90 transition-colors duration-300"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                  letterSpacing: '-0.01em',
                }}
              >
                Verzekerd
              </span>
            </motion.div>

            {/* Gecontroleerd */}
            <motion.div 
              className="flex items-center gap-2.5 group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-10 h-10 rounded-full bg-yellow-400/10 flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors duration-300">
                <CheckCircle className="w-5 h-5 text-yellow-400" strokeWidth={2.5} />
              </div>
              <span
                className="text-white/70 group-hover:text-white/90 transition-colors duration-300"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                  letterSpacing: '-0.01em',
                }}
              >
                Gecontroleerd
              </span>
            </motion.div>

            {/* Kwaliteit */}
            <motion.div 
              className="flex items-center gap-2.5 group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-10 h-10 rounded-full bg-yellow-400/10 flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors duration-300">
                <Award className="w-5 h-5 text-yellow-400" strokeWidth={2.5} />
              </div>
              <span
                className="text-white/70 group-hover:text-white/90 transition-colors duration-300"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                  letterSpacing: '-0.01em',
                }}
              >
                Kwaliteit
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
