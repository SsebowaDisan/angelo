import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import heroImage from '../assets/hero-home.webp';
import heroImageMobile from '../assets/hero-home-mobile.jpg';

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Subtle parallax effect - Apple style
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Apple's signature ease curve
  const appleEase = [0.28, 0, 0.4, 1] as const;

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="relative h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Image with Parallax & Sophisticated Overlay */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <div className="absolute inset-0">
          <picture>
            <source media="(max-width: 767px)" srcSet={heroImageMobile} />
            <img 
              src={heroImage}
              alt="Modern house renovation by Angelo Renovates"
              className="w-full h-full object-cover scale-105"
              width={1920}
              height={964}
              fetchPriority="high"
              decoding="async"
              sizes="100vw"
            />
          </picture>
          {/* Sophisticated multi-layer overlay - Apple technique */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/60"></div>
          {/* Subtle vignette for depth */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-40"></div>
        </div>
      </motion.div>
      
      {/* Main Content - Ultra Refined */}
      <motion.div 
        className="relative z-10 text-center px-6 max-w-[1400px] mx-auto"
        style={{ opacity }}
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.12, ease: appleEase }}
          className="mb-6 text-yellow-400/95"
          style={{
            fontSize: 'clamp(0.9rem, 1.8vw, 1.1rem)',
            fontWeight: 700,
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
          }}
        >
          Angelo Renovates
        </motion.p>

        {/* Headline - Refined Typography */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: appleEase }}
          className="text-white mb-1 tracking-[-0.03em]"
          style={{
            fontSize: 'clamp(3.5rem, 11vw, 8rem)',
            fontWeight: 300,
            lineHeight: 1.05,
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
          }}
        >
          Uw droomhuis.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: appleEase }}
          className="mb-8 tracking-[-0.03em]"
          style={{
            fontSize: 'clamp(3.5rem, 11vw, 8rem)',
            fontWeight: 600,
            lineHeight: 1.05,
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
            background: 'linear-gradient(135deg, #FCD34D 0%, #FBBF24 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Perfectie.
        </motion.h2>

        {/* Slogan - Handwritten Script with Animation */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: 1, 
            y: [0, -6, 0],
            scale: [1, 1.02, 1],
          }}
          transition={{ 
            opacity: { duration: 1, delay: 0.55, ease: appleEase },
            y: { duration: 1, delay: 0.55, ease: appleEase },
            scale: { 
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.55,
            }
          }}
          className="text-white mb-8"
          style={{
            fontSize: 'clamp(1.75rem, 3vw, 3rem)',
            fontWeight: 600,
            letterSpacing: '0.02em',
            fontFamily: '"Dancing Script", cursive',
            filter: 'drop-shadow(0 4px 20px rgba(251, 191, 36, 0.6)) drop-shadow(0 2px 8px rgba(251, 191, 36, 0.4))',
          }}
        >
          My hands your home
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.72, ease: appleEase }}
          className="mx-auto mb-10 max-w-3xl text-white/80"
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.3rem)',
            fontWeight: 400,
            lineHeight: 1.6,
            letterSpacing: '-0.01em',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
          }}
        >
          Renovatie, vloerwerken en metselwerk in West- en Oost-Vlaanderen.
        </motion.p>

        {/* Refined CTA - Premium Glass Morphism */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: appleEase }}
        >
          <motion.button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative overflow-hidden rounded-full"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.4, ease: appleEase }}
            style={{
              background: 'linear-gradient(135deg, #FCD34D 0%, #FBBF24 100%)',
              padding: '18px 48px',
              boxShadow: '0 4px 24px rgba(251, 191, 36, 0.3), 0 2px 8px rgba(0, 0, 0, 0.2)',
            }}
          >
            {/* Hover shine effect */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 100%)',
              }}
              transition={{ duration: 0.5, ease: appleEase }}
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
              Gratis Offerte
            </span>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Minimal gradient fade for seamless transition */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
    </section>
  );
}
