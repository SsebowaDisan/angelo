import { motion, useScroll, useTransform } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useRef, useEffect, useState } from 'react';
import { X, Check, Clock, Shield, Award, Truck, Calendar, Phone, ChevronDown, FileCheck, Gauge, Sparkles, AlertCircle, CheckCircle } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { ContactFormSection } from './ContactFormSection';
import trailerImage1 from 'figma:asset/2159ba89794c801936f7fead7e98accf92982f65.png';
import trailerImage2 from 'figma:asset/2cffd9321d857e4c81f6ccf034dce00e05a1939a.png';
import trailerImage3 from 'figma:asset/7e536aceb3ce54b27e7063c60b105aa589259a4d.png';

interface VerhuurPageProps {
  onClose: () => void;
  onNavigate?: (page: string) => void;
}

export function VerhuurPage({ onClose, onNavigate }: VerhuurPageProps) {
  const [isExiting, setIsExiting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 0.4 }}
      ref={containerRef}
      className="fixed inset-0 z-[9999] overflow-y-auto bg-white"
      style={{
        scrollBehavior: 'smooth',
      }}
    >
      <Header 
        currentPage="verhuur"
        onNavigate={onNavigate}
        onClose={handleClose}
        isOverlay={true}
      />

      {/* Hero Section - Apple Style */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Animated ambient particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Radial gradient background */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, #FCD34D 0%, transparent 70%)',
            }}
          />
        </div>

        <motion.div
          style={{ scale: heroScale }}
          className="relative z-10 text-center px-6 py-32"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-8"
            >
              <Truck size={16} className="text-yellow-400" />
              <span
                className="text-white/80"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                  fontSize: '14px',
                  fontWeight: 500,
                  letterSpacing: '0.02em',
                }}
              >
                Beschikbaar 7 dagen per week
              </span>
            </motion.div>

            <h1 
              className="text-white mb-6"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                fontSize: 'clamp(56px, 10vw, 120px)',
                fontWeight: 700,
                letterSpacing: '-0.04em',
                lineHeight: 1,
              }}
            >
              Verhuur.
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-white/60 mb-4"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                fontSize: 'clamp(21px, 2.5vw, 28px)',
                fontWeight: 400,
                letterSpacing: '-0.022em',
                lineHeight: 1.3,
              }}
            >
              Professionele aanhangwagen verhuur
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-yellow-400 mb-12"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                fontSize: 'clamp(18px, 2vw, 22px)',
                fontWeight: 600,
                letterSpacing: '-0.022em',
                lineHeight: 1.3,
              }}
            >
              Vanaf €62 per dag
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.a
                href="tel:+32478062748"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-full transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                  fontSize: '17px',
                  fontWeight: 600,
                  letterSpacing: '-0.022em',
                  boxShadow: '0 8px 32px rgba(251, 191, 36, 0.4)',
                }}
              >
                <Phone size={18} />
                Direct Reserveren
              </motion.a>
              <motion.button
                onClick={() => {
                  const element = document.getElementById('pricing-section');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-xl text-white rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                  fontSize: '17px',
                  fontWeight: 500,
                  letterSpacing: '-0.022em',
                }}
              >
                Bekijk Tarieven
              </motion.button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-wrap justify-center gap-6 mt-12"
            >
              {[
                { icon: Shield, text: 'Verzekerd' },
                { icon: Check, text: 'Gecontroleerd' },
                { icon: Award, text: 'Kwaliteit' },
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-2">
                  <badge.icon size={16} className="text-yellow-400" />
                  <span
                    className="text-white/60"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                      fontSize: '14px',
                      fontWeight: 400,
                    }}
                  >
                    {badge.text}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
          onClick={() => {
            window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
          }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span
              className="text-white/40 text-xs"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
              }}
            >
              Scroll om meer te ontdekken
            </span>
            <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-white/60 rounded-full" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Hero Image Gallery - World-Class Apple Style */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#fbfbfd] via-white to-[#fbfbfd]">
        {/* Ambient Background Glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px] opacity-30"
            style={{
              background: 'radial-gradient(circle, #FCD34D 0%, #FBBF24 30%, transparent 70%)',
            }}
          />
        </div>

        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2
              className="mb-3"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                fontSize: 'clamp(28px, 4.5vw, 48px)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1.07,
                color: '#1d1d1f',
              }}
            >
              Kennis maken met uw<br />nieuwe werkpartner.
            </h2>
            <p
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                fontSize: 'clamp(16px, 1.8vw, 19px)',
                fontWeight: 400,
                letterSpacing: '-0.022em',
                lineHeight: 1.47,
                color: '#6e6e73',
              }}
            >
              Betrouwbaar. Krachtig. Altijd klaar.
            </p>
          </motion.div>

          {/* Main Cinematic Hero Image with Parallax */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative mb-6 group cursor-pointer"
            whileHover={{ scale: 1.01 }}
          >
            {/* Image container with sophisticated shadow */}
            <div className="relative overflow-hidden rounded-[20px] lg:rounded-[28px]">
              {/* Gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 rounded-[20px] lg:rounded-[28px]" />
              
              <motion.div
                className="w-full overflow-hidden"
                style={{ maxHeight: '500px' }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src={trailerImage1}
                  alt="Angelo Renovates Aanhangwagen"
                  className="w-full h-full object-cover"
                  style={{
                    filter: 'brightness(1.02) contrast(1.03)',
                    maxHeight: '500px',
                  }}
                />
              </motion.div>
              
              {/* Caption overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-6 left-6 right-6 z-20"
              >
                <div className="backdrop-blur-2xl bg-white/80 rounded-xl p-4 lg:p-5 border border-white/60 shadow-2xl">
                  <p
                    className="text-black/90"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                      fontSize: 'clamp(14px, 1.8vw, 16px)',
                      fontWeight: 600,
                      letterSpacing: '-0.022em',
                    }}
                  >
                    Angelo Renovates Fleet
                  </p>
                  <p
                    className="text-black/60 mt-0.5"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                      fontSize: 'clamp(12px, 1.4vw, 14px)',
                      fontWeight: 400,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    Professionele uitrusting voor elk project
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Premium shadow */}
            <div 
              className="absolute inset-0 -z-10 scale-[0.98] blur-3xl opacity-40"
              style={{
                background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 100%)',
                transform: 'translateY(30px)',
              }}
            />
          </motion.div>

          {/* Secondary Images - Balanced Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative group cursor-pointer"
              whileHover={{ y: -6 }}
            >
              <div className="relative overflow-hidden rounded-[18px] lg:rounded-[24px]" style={{ height: '280px' }}>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 rounded-[18px] lg:rounded-[24px]" />
                
                <motion.img
                  src={trailerImage2}
                  alt="Angelo Renovates Aanhangwagen Detail"
                  className="w-full h-full object-cover"
                  style={{
                    filter: 'brightness(1.01) saturate(1.05)',
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                />

                {/* Info Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute top-4 right-4 backdrop-blur-xl bg-black/60 rounded-full px-4 py-2 border border-white/20"
                >
                  <p
                    className="text-white"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                      fontSize: '12px',
                      fontWeight: 500,
                      letterSpacing: '0.02em',
                    }}
                  >
                    1500 kg MTM
                  </p>
                </motion.div>
              </div>

              {/* Soft shadow */}
              <div 
                className="absolute inset-0 -z-10 blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"
                style={{
                  background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.4) 0%, rgba(0,0,0,0.2) 100%)',
                  transform: 'translateY(20px) scale(0.95)',
                }}
              />
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative group cursor-pointer"
              whileHover={{ y: -6 }}
            >
              <div className="relative overflow-hidden rounded-[18px] lg:rounded-[24px]" style={{ height: '280px' }}>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-tl from-yellow-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 rounded-[18px] lg:rounded-[24px]" />
                
                <motion.img
                  src={trailerImage3}
                  alt="Angelo Renovates Aanhangwagen Zijaanzicht"
                  className="w-full h-full object-cover"
                  style={{
                    filter: 'brightness(1.01) saturate(1.05)',
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                />

                {/* Info Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="absolute top-4 right-4 backdrop-blur-xl bg-black/60 rounded-full px-4 py-2 border border-white/20"
                >
                  <p
                    className="text-white"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                      fontSize: '12px',
                      fontWeight: 500,
                      letterSpacing: '0.02em',
                    }}
                  >
                    3,20 m lengte
                  </p>
                </motion.div>
              </div>

              {/* Soft shadow */}
              <div 
                className="absolute inset-0 -z-10 blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"
                style={{
                  background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.4) 0%, rgba(0,0,0,0.2) 100%)',
                  transform: 'translateY(20px) scale(0.95)',
                }}
              />
            </motion.div>
          </div>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap justify-center gap-2.5 mt-10 lg:mt-12"
          >
            {[
              'Geremde dubbelas',
              'Neerklapbare zijkanten',
              'Volledig in orde',
              'Spanriemen inbegrepen'
            ].map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-xl border border-black/5 shadow-lg"
              >
                <p
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                    fontSize: '13px',
                    fontWeight: 500,
                    letterSpacing: '-0.01em',
                    color: '#1d1d1f',
                  }}
                >
                  {feature}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Description */}
      <section className="py-32 bg-white">
        <div className="max-w-[980px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-20"
          >
            <h2 
              className="mb-6"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                fontSize: 'clamp(40px, 6vw, 64px)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1.07,
                color: '#1d1d1f',
              }}
            >
              Gemaakt voor elk project.
            </h2>
            <p 
              className="mx-auto max-w-[640px]"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                fontSize: '21px',
                fontWeight: 400,
                letterSpacing: '-0.022em',
                lineHeight: 1.47,
                color: '#6e6e73',
              }}
            >
              Een stevige, geremde dubbelas aanhangwagen — ideaal voor het vervoeren van bouwmaterialen, puin, hout of tuinafval.
            </p>
          </motion.div>

          {/* Key Features - Apple Style */}
          <div className="grid md:grid-cols-3 gap-12 mb-32">
            {[
              { title: '3,20 m', subtitle: 'Lengte', description: 'Ruim genoeg voor elk project' },
              { title: '1500 kg', subtitle: 'MTM', description: 'Geremd voor extra veiligheid' },
              { title: 'Saris', subtitle: 'Merk', description: 'Betrouwbare kwaliteit' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-center"
              >
                <div 
                  className="mb-3"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                    fontSize: 'clamp(48px, 6vw, 64px)',
                    fontWeight: 700,
                    letterSpacing: '-0.04em',
                    lineHeight: 1,
                    color: '#1d1d1f',
                  }}
                >
                  {feature.title}
                </div>
                <div 
                  className="mb-2"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                    fontSize: '17px',
                    fontWeight: 600,
                    letterSpacing: '-0.022em',
                    color: '#1d1d1f',
                  }}
                >
                  {feature.subtitle}
                </div>
                <p 
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                    fontSize: '17px',
                    fontWeight: 400,
                    letterSpacing: '-0.022em',
                    lineHeight: 1.47,
                    color: '#6e6e73',
                  }}
                >
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* All Specifications */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-32"
          >
            <h3 
              className="text-center mb-12"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                fontSize: 'clamp(32px, 5vw, 48px)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1.07,
                color: '#1d1d1f',
              }}
            >
              Specificaties
            </h3>
            <div className="space-y-6">
              {[
                { label: 'Afmetingen laadbak', value: '3,20 m × 1,70 m' },
                { label: 'Type', value: 'Geremde dubbelas' },
                { label: 'Maximum toegelaten massa', value: '1500 kg' },
                { label: 'Zijkanten', value: 'Neerklapbaar voor makkelijk laden' },
                { label: 'Verlichting', value: 'Volledig in orde met nummerplaathouder' },
                { label: 'Maximum snelheid', value: '90 km/u' },
              ].map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="flex justify-between items-baseline py-4 border-b border-[#d2d2d7]"
                >
                  <span 
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                      fontSize: '17px',
                      fontWeight: 400,
                      letterSpacing: '-0.022em',
                      color: '#6e6e73',
                    }}
                  >
                    {spec.label}
                  </span>
                  <span 
                    className="text-right"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                      fontSize: '17px',
                      fontWeight: 600,
                      letterSpacing: '-0.022em',
                      color: '#1d1d1f',
                    }}
                  >
                    {spec.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16 lg:mb-20"
          >
            <h2
              className="mb-4"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                fontSize: 'clamp(36px, 5.5vw, 56px)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1.07,
                color: '#1d1d1f',
              }}
            >
              Waarom Angelo Renovates?
            </h2>
            <p
              className="max-w-2xl mx-auto"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                fontSize: 'clamp(17px, 2vw, 21px)',
                fontWeight: 400,
                letterSpacing: '-0.022em',
                lineHeight: 1.47,
                color: '#6e6e73',
              }}
            >
              Professionele service, betrouwbare uitrusting en transparante prijzen
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                icon: Shield,
                title: 'Volledig verzekerd',
                description: 'Uw gemoedsrust is onze prioriteit. Elk verhuur is volledig verzekerd.',
              },
              {
                icon: Check,
                title: 'Altijd gecontroleerd',
                description: 'Voor elk vertrek controleren we de aanhangwagen grondig.',
              },
              {
                icon: Clock,
                title: 'Flexibele tijden',
                description: 'Ophalen en terugbrengen op momenten die u schikken.',
              },
              {
                icon: Award,
                title: 'Premium kwaliteit',
                description: 'Saris aanhangwagen in perfecte staat met alle voorzieningen.',
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
                className="relative group h-full"
              >
                <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-black/5 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 mb-6 group-hover:scale-110 transition-transform duration-500">
                    <benefit.icon size={24} className="text-black" />
                  </div>

                  {/* Content */}
                  <h3
                    className="mb-3"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                      fontSize: '19px',
                      fontWeight: 600,
                      letterSpacing: '-0.022em',
                      color: '#1d1d1f',
                    }}
                  >
                    {benefit.title}
                  </h3>
                  <p
                    className="flex-grow"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                      fontSize: '15px',
                      fontWeight: 400,
                      letterSpacing: '-0.01em',
                      lineHeight: 1.5,
                      color: '#6e6e73',
                    }}
                  >
                    {benefit.description}
                  </p>
                </div>

                {/* Glow effect */}
                <div 
                  className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-yellow-400/0 to-yellow-400/0 group-hover:from-yellow-400/20 group-hover:to-yellow-500/10 blur-xl transition-all duration-500"
                  style={{ transform: 'scale(0.95)' }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-[#fbfbfd] to-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16 lg:mb-20"
          >
            <h2
              className="mb-4"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                fontSize: 'clamp(36px, 5.5vw, 56px)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1.07,
                color: '#1d1d1f',
              }}
            >
              Hoe werkt het?
            </h2>
            <p
              className="max-w-2xl mx-auto"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                fontSize: 'clamp(17px, 2vw, 21px)',
                fontWeight: 400,
                letterSpacing: '-0.022em',
                lineHeight: 1.47,
                color: '#6e6e73',
              }}
            >
              Verhuren in 3 eenvoudige stappen
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                step: '01',
                title: 'Reserveer',
                description: 'Bel of mail ons om uw gewenste periode door te geven. We bevestigen direct de beschikbaarheid.',
              },
              {
                step: '02',
                title: 'Ophalen',
                description: 'Kom de aanhangwagen ophalen op het afgesproken moment. We nemen alles samen door.',
              },
              {
                step: '03',
                title: 'Terugbrengen',
                description: 'Breng de aanhangwagen proper terug. Na controle krijgt u direct uw borgsom terug.',
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                {/* Connection line */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-yellow-400/50 to-transparent -translate-x-6" />
                )}

                <div className="text-center">
                  {/* Step number */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3, type: "spring" }}
                    className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 mb-6 shadow-2xl"
                  >
                    <span
                      style={{
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                        fontSize: '24px',
                        fontWeight: 700,
                        color: '#000',
                      }}
                    >
                      {step.step}
                    </span>
                  </motion.div>

                  <h3
                    className="mb-3"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                      fontSize: '24px',
                      fontWeight: 600,
                      letterSpacing: '-0.022em',
                      color: '#1d1d1f',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                      fontSize: '17px',
                      fontWeight: 400,
                      letterSpacing: '-0.01em',
                      lineHeight: 1.5,
                      color: '#6e6e73',
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - Black Background */}
      <section id="pricing-section" className="py-32 bg-black">
        <div className="max-w-[980px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-20"
          >
            <h2 
              className="text-white mb-6"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                fontSize: 'clamp(40px, 6vw, 64px)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1.07,
              }}
            >
              Transparante tarieven.
            </h2>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-5 lg:gap-6 mb-8 auto-rows-fr">
            {[
              { duration: 'Per dag', price: '€62', period: '', popular: false },
              { duration: 'Weekend', price: '€95', period: 'Vrijdag t/m zondag', popular: true, badge: 'Meest Gekozen' },
              { duration: 'Per week', price: '€210', period: 'Maandag t/m zondag', popular: false, savings: 'Bespaar €224' },
              { duration: '4 weken', price: '€420', period: '', popular: false, savings: 'Bespaar €1.318' },
            ].map((pricing, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative group h-full flex flex-col"
                whileHover={{ scale: pricing.popular ? 1.03 : 1.02, y: -6 }}
              >
                {/* Popular Badge */}
                {pricing.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <motion.div 
                      className="px-5 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-2xl"
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, type: "spring" }}
                    >
                      <span
                        style={{
                          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                          fontSize: '13px',
                          fontWeight: 700,
                          letterSpacing: '0.03em',
                          color: '#000',
                          textTransform: 'uppercase',
                        }}
                      >
                        ⭐ {pricing.badge}
                      </span>
                    </motion.div>
                  </div>
                )}

                <div className={`relative overflow-hidden flex-grow flex flex-col p-8 lg:p-10 rounded-3xl backdrop-blur-2xl border-2 transition-all duration-500 ${
                  pricing.popular 
                    ? 'bg-gradient-to-br from-white/15 to-white/5 border-yellow-400/60 shadow-[0_20px_60px_rgba(251,191,36,0.3)]' 
                    : 'bg-white/5 border-white/10 hover:bg-white/8 hover:border-white/20'
                }`}>
                  {/* Background gradient effect for popular card */}
                  {pricing.popular && (
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-transparent opacity-50" />
                  )}

                  <div className="relative z-10 flex flex-col flex-grow">
                    {/* Duration */}
                    <div 
                      className={`mb-3 ${pricing.popular ? 'text-yellow-400/90' : 'text-white/50'}`}
                      style={{
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                        fontSize: '15px',
                        fontWeight: 500,
                        letterSpacing: '0.03em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {pricing.duration}
                    </div>

                    {/* Price */}
                    <div className="flex items-baseline gap-2 mb-3">
                      <div 
                        className={`${pricing.popular ? 'text-yellow-400' : 'text-white'}`}
                        style={{
                          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                          fontSize: 'clamp(44px, 5.5vw, 64px)',
                          fontWeight: 700,
                          letterSpacing: '-0.04em',
                          lineHeight: 1,
                        }}
                      >
                        {pricing.price}
                      </div>
                    </div>

                    {/* Period - Fixed height container */}
                    <div className="mb-4" style={{ minHeight: '24px' }}>
                      {pricing.period && (
                        <div 
                          className="text-white/40"
                          style={{
                            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                            fontSize: '15px',
                            fontWeight: 400,
                            letterSpacing: '-0.01em',
                          }}
                        >
                          {pricing.period}
                        </div>
                      )}
                    </div>

                    {/* Spacer to push savings badge to bottom */}
                    <div className="flex-grow" />

                    {/* Savings Badge - Fixed height container */}
                    <div style={{ minHeight: '44px' }}>
                      {pricing.savings && (
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/40 backdrop-blur-xl">
                          <Check size={16} className="text-green-400" strokeWidth={3} />
                          <span
                            className="text-green-400"
                            style={{
                              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                              fontSize: '14px',
                              fontWeight: 600,
                              letterSpacing: '-0.01em',
                            }}
                          >
                            {pricing.savings}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Enhanced glow effect */}
                <div 
                  className={`absolute inset-0 -z-10 rounded-3xl blur-2xl transition-opacity duration-500 ${
                    pricing.popular 
                      ? 'bg-yellow-400/30 opacity-60 group-hover:opacity-80' 
                      : 'bg-white/5 opacity-0 group-hover:opacity-30'
                  }`}
                  style={{ transform: 'scale(0.95)' }}
                />
              </motion.div>
            ))}
          </div>

          {/* Deposit - Better integrated */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative group"
          >
            <div className="relative overflow-hidden p-6 lg:p-8 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 hover:bg-white/8 hover:border-white/20 transition-all duration-500">
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10">
                    <Shield size={16} className="text-yellow-400" />
                  </div>
                  <span
                    className="text-white/90"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                      fontSize: '17px',
                      fontWeight: 600,
                      letterSpacing: '-0.022em',
                    }}
                  >
                    Borgsom €75
                  </span>
                </div>
                <span className="text-white/40 hidden sm:inline">•</span>
                <p 
                  className="text-white/60 text-center sm:text-left"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                    fontSize: '15px',
                    fontWeight: 400,
                    letterSpacing: '-0.01em',
                  }}
                >
                  Volledig terugbetaald bij correcte en propere teruggave
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-white via-[#fbfbfd] to-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16 lg:mb-20"
          >
            <h2 
              className="mb-4"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                fontSize: 'clamp(36px, 5.5vw, 56px)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1.07,
                color: '#1d1d1f',
              }}
            >
              Huurvoorwaarden
            </h2>
            <p
              className="max-w-2xl mx-auto"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                fontSize: 'clamp(17px, 2vw, 19px)',
                fontWeight: 400,
                letterSpacing: '-0.022em',
                lineHeight: 1.47,
                color: '#6e6e73',
              }}
            >
              Eenvoudig en transparant
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: FileCheck,
                title: 'Rijbewijs BE vereist',
                type: 'requirement',
              },
              {
                icon: Gauge,
                title: 'Maximum snelheid: 90 km/u',
                type: 'requirement',
              },
              {
                icon: Sparkles,
                title: 'Proper en in goede staat teruggeven',
                type: 'requirement',
              },
              {
                icon: AlertCircle,
                title: 'Schade en boetes ten laste van huurder',
                type: 'requirement',
              },
              {
                icon: Calendar,
                title: 'Vooraf reserveren verplicht',
                type: 'requirement',
              },
              {
                icon: CheckCircle,
                title: 'Spanriemen gratis op aanvraag',
                type: 'benefit',
              },
            ].map((condition, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="group relative"
              >
                <div className={`relative p-6 rounded-2xl border transition-all duration-500 ${
                  condition.type === 'benefit'
                    ? 'bg-gradient-to-br from-yellow-50 to-white border-yellow-200 hover:shadow-xl hover:shadow-yellow-400/20'
                    : 'bg-white border-black/5 hover:shadow-xl hover:border-black/10'
                }`}>
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 transition-all duration-500 group-hover:scale-110 ${
                    condition.type === 'benefit'
                      ? 'bg-gradient-to-br from-yellow-400 to-yellow-500 shadow-lg shadow-yellow-400/30'
                      : 'bg-gradient-to-br from-gray-100 to-gray-50 border border-black/5'
                  }`}>
                    <condition.icon 
                      size={20} 
                      className={condition.type === 'benefit' ? 'text-black' : 'text-black/70'} 
                      strokeWidth={2}
                    />
                  </div>

                  {/* Title */}
                  <p
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                      fontSize: '16px',
                      fontWeight: 500,
                      letterSpacing: '-0.01em',
                      lineHeight: 1.4,
                      color: '#1d1d1f',
                    }}
                  >
                    {condition.title}
                  </p>
                </div>

                {/* Glow effect for benefit card */}
                {condition.type === 'benefit' && (
                  <div className="absolute inset-0 -z-10 rounded-2xl bg-yellow-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Additional Info - Redesigned */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden"
          >
            <div className="relative p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-gray-50 via-white to-gray-50 border border-black/5 shadow-2xl">
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-500">
                    <Shield size={20} className="text-black" />
                  </div>
                  <h3
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                      fontSize: '21px',
                      fontWeight: 600,
                      letterSpacing: '-0.022em',
                      color: '#1d1d1f',
                    }}
                  >
                    Betrouwbare service
                  </h3>
                </div>

                <p 
                  className="mb-4"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                    fontSize: '17px',
                    fontWeight: 400,
                    letterSpacing: '-0.01em',
                    lineHeight: 1.5,
                    color: '#6e6e73',
                  }}
                >
                  De aanhangwagen wordt altijd netjes gecontroleerd voor vertrek, zodat je zonder zorgen op pad kan. Dankzij de stevige constructie en neerklapbare zijkanten is laden en lossen eenvoudig en veilig.
                </p>
                <p 
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                    fontSize: '17px',
                    fontWeight: 400,
                    letterSpacing: '-0.01em',
                    lineHeight: 1.5,
                    color: '#6e6e73',
                  }}
                >
                  Zo ben je zeker van een vlotte, betrouwbare huurservice bij Angelo Renovates.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[980px] mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16 lg:mb-20"
          >
            <h2
              className="mb-4"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                fontSize: 'clamp(36px, 5.5vw, 56px)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1.07,
                color: '#1d1d1f',
              }}
            >
              Veelgestelde vragen
            </h2>
            <p
              className="max-w-2xl mx-auto"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                fontSize: 'clamp(17px, 2vw, 21px)',
                fontWeight: 400,
                letterSpacing: '-0.022em',
                lineHeight: 1.47,
                color: '#6e6e73',
              }}
            >
              Alles wat u moet weten over onze verhuurservice
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: 'Welk rijbewijs heb ik nodig?',
                answer: 'Voor deze aanhangwagen (1500 kg MTM) is rijbewijs BE vereist. Dit is een aanvulling op uw gewone rijbewijs B.',
              },
              {
                question: 'Is de borgsom verplicht?',
                answer: 'Ja, we vragen een borgsom van €75. Deze krijgt u direct terug na correcte en propere teruggave van de aanhangwagen.',
              },
              {
                question: 'Zijn spanriemen inbegrepen?',
                answer: 'Ja, spanriemen zijn gratis op aanvraag. We zorgen ervoor dat u alles heeft om uw lading veilig te vervoeren.',
              },
              {
                question: 'Kan ik de aanhangwagen ook in het weekend huren?',
                answer: 'Absoluut! We bieden speciale weekendtarieven aan van vrijdag tot zondag. Ideaal voor grotere projecten.',
              },
              {
                question: 'Wat als ik de aanhangwagen beschadig?',
                answer: 'Alle schade en boetes zijn ten laste van de huurder. We raden aan om voorzichtig te rijden en de lading goed vast te maken.',
              },
              {
                question: 'Hoe reserveer ik de aanhangwagen?',
                answer: 'Reserveren is eenvoudig: bel ons op +32 478 06 27 48 of vul het contactformulier in. We bevestigen direct de beschikbaarheid.',
              },
            ].map((faq, index) => {
              const [isOpen, setIsOpen] = useState(false);
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="group"
                >
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full text-left p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-black/5 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3
                        style={{
                          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                          fontSize: 'clamp(17px, 2vw, 19px)',
                          fontWeight: 600,
                          letterSpacing: '-0.022em',
                          color: '#1d1d1f',
                        }}
                      >
                        {faq.question}
                      </h3>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="flex-shrink-0"
                      >
                        <ChevronDown size={20} className="text-black/40" />
                      </motion.div>
                    </div>
                    
                    <motion.div
                      initial={false}
                      animate={{ 
                        height: isOpen ? 'auto' : 0,
                        opacity: isOpen ? 1 : 0,
                        marginTop: isOpen ? 16 : 0,
                      }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p
                        style={{
                          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                          fontSize: '17px',
                          fontWeight: 400,
                          letterSpacing: '-0.01em',
                          lineHeight: 1.5,
                          color: '#6e6e73',
                        }}
                      >
                        {faq.answer}
                      </p>
                    </motion.div>
                  </button>
                </motion.div>
              );
            })}
          </div>

          {/* Still have questions CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 text-center"
          >
            <p
              className="mb-6"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                fontSize: '17px',
                fontWeight: 400,
                color: '#6e6e73',
              }}
            >
              Nog vragen? We helpen u graag verder.
            </p>
            <motion.a
              href="tel:+32478062748"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full hover:bg-black/90 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                fontSize: '17px',
                fontWeight: 500,
                letterSpacing: '-0.022em',
              }}
            >
              <Phone size={18} />
              Bel ons direct
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactFormSection />

      <Footer hideCTA={true} />
    </motion.div>
  );
}
