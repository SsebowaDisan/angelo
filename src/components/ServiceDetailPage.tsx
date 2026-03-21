import { motion, useScroll, useTransform } from 'motion/react';
import { X, CheckCircle2, ArrowRight, Phone, Mail } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Header } from './Header';
import { Footer } from './Footer';
import { ContactFormSection } from './ContactFormSection';

export interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  sections: {
    title?: string;
    content: string;
    list?: string[];
  }[];
  benefits?: {
    title: string;
    items: string[];
    image?: string;
  };
  cta?: string;
}

interface ServiceDetailPageProps {
  service: ServiceDetail;
  onClose: () => void;
  onServiceClick?: (serviceId: string) => void;
  onNavigate?: (page: string) => void;
}

export function ServiceDetailPage({ service, onClose, onServiceClick, onNavigate }: ServiceDetailPageProps) {
  const [isExiting, setIsExiting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const appleEase = [0.28, 0, 0.4, 1] as const;

  // Scroll progress for the entire page container
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

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

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection && containerRef.current) {
      const offsetTop = contactSection.offsetTop - 80;
      containerRef.current.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 0.4 }}
      ref={containerRef}
      id="service-detail-container"
      className="fixed inset-0 z-[9999] overflow-y-auto bg-white"
      style={{
        scrollBehavior: 'smooth',
      }}
    >
      <Header 
        currentPage="diensten"
        onNavigate={onNavigate}
        onClose={onClose}
        isOverlay={true}
      />

      {/* Progress Indicator - Yellow */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-[60] origin-left"
        style={{ 
          scaleX: scrollYProgress,
          background: 'linear-gradient(90deg, #FCD34D 0%, #FBBF24 100%)',
        }}
      />

      {/* Close Button - Refined */}
      <button
        onClick={handleClose}
        className="fixed top-6 right-6 z-50 w-11 h-11 rounded-full flex items-center justify-center bg-black/5 hover:bg-black/10 backdrop-blur-xl text-black/60 hover:text-black transition-all duration-300"
      >
        <X size={20} strokeWidth={2} />
      </button>

      {/* Hero Section - Cinematic & Immersive */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Background Image with Ken Burns Effect */}
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: appleEase }}
        >
          <ImageWithFallback
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          {/* Sophisticated Gradient Overlay */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.8) 100%)',
            }}
          />
        </motion.div>

        {/* Hero Content - Apple-style */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: appleEase }}
            className="space-y-8"
          >
            {/* Subtitle Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: appleEase }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full"
              style={{
                background: 'rgba(251, 191, 36, 0.15)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(251, 191, 36, 0.3)',
              }}
            >
              <div className="w-2 h-2 rounded-full bg-yellow-400" />
              <span 
                className="text-yellow-400"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                {service.subtitle}
              </span>
            </motion.div>

            {/* Main Title - Massive */}
            <h1 
              className="text-white"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                fontSize: 'clamp(2.5rem, 10vw, 7rem)',
                fontWeight: 700,
                letterSpacing: '-0.04em',
                lineHeight: 0.95,
              }}
            >
              {service.title}
            </h1>

            {/* Description */}
            <p 
              className="text-white/80 max-w-3xl mx-auto"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                fontWeight: 400,
                letterSpacing: '-0.01em',
                lineHeight: 1.5,
              }}
            >
              {service.description}
            </p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: appleEase }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
            >
              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-10 py-5 rounded-full text-black group relative overflow-hidden"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                  fontSize: '1.0625rem',
                  fontWeight: 600,
                  background: 'linear-gradient(135deg, #FCD34D 0%, #FBBF24 100%)',
                  boxShadow: '0 10px 40px rgba(251, 191, 36, 0.3)',
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Offerte Aanvragen
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </motion.button>

              <motion.a
                href="tel:+32478062748"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-10 py-5 rounded-full text-white backdrop-blur-xl"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                  fontSize: '1.0625rem',
                  fontWeight: 600,
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1.5px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                <span className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  +32 478 06 27 48
                </span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator - Elegant */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <span 
            className="text-white/40 tracking-wider"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.1em',
            }}
          >
            SCROLL
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-12 bg-gradient-to-b from-white/40 via-white/20 to-transparent"
          />
        </motion.div>
      </section>

      {/* Service Details - Premium Layout */}
      <section className="relative bg-gradient-to-b from-white to-gray-50">
        {service.sections.map((section, index) => (
          <div 
            key={index}
            className="relative"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32">
              {/* Section Number Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: appleEase }}
                className="flex items-center gap-4 mb-12"
              >
                <div className="w-16 h-px bg-yellow-400" />
                <span 
                  className="text-yellow-600"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                  }}
                >
                  Sectie {(index + 1).toString().padStart(2, '0')}
                </span>
              </motion.div>

              {/* Grid Layout - Alternating */}
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image Column */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: appleEase }}
                  className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                >
                  <div className="relative group">
                    {/* Main Image */}
                    <div 
                      className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
                      style={{
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
                      }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6, ease: appleEase }}
                        className="w-full h-full"
                      >
                        <ImageWithFallback
                          src={index === 0 
                            ? "https://images.unsplash.com/photo-1697946594607-04d755acff2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMHJlbm92YXRpb24lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjE4NTQ3MTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                            : index === 1
                            ? "https://images.unsplash.com/photo-1678803262992-d79d06dd5d96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MTczNzg3M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                            : "https://images.unsplash.com/photo-1760030427726-9b1798b7ed2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwYmx1ZXByaW50JTIwcGxhbm5pbmd8ZW58MXx8fHwxNzYxODU0NzEyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                          }
                          alt={section.title || 'Service detail'}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      
                      {/* Subtle overlay */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1) 0%, transparent 100%)',
                        }}
                      />
                    </div>

                    {/* Floating accent */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3, ease: appleEase }}
                      className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full opacity-20 blur-2xl"
                      style={{
                        background: 'linear-gradient(135deg, #FCD34D 0%, #FBBF24 100%)',
                      }}
                    />
                  </div>
                </motion.div>

                {/* Content Column */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: appleEase }}
                  className={`space-y-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                >
                  {/* Title */}
                  {section.title && (
                    <h2 
                      className="text-black"
                      style={{
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                        fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                        fontWeight: 700,
                        letterSpacing: '-0.03em',
                        lineHeight: 1.1,
                      }}
                    >
                      {section.title}
                    </h2>
                  )}

                  {/* Content */}
                  {section.content && (
                    <p 
                      className="text-black/60 whitespace-pre-line"
                      style={{
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                        fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                        fontWeight: 400,
                        letterSpacing: '-0.01em',
                        lineHeight: 1.7,
                      }}
                    >
                      {section.content}
                    </p>
                  )}

                  {/* List Items - Premium Checkmarks */}
                  {section.list && section.list.length > 0 && (
                    <div className="space-y-4 pt-4">
                      {section.list.map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.6, 
                            delay: 0.4 + (itemIndex * 0.08),
                            ease: appleEase 
                          }}
                          className="flex items-start gap-4 group"
                        >
                          {/* Premium Check Icon */}
                          <div 
                            className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full flex items-center justify-center"
                            style={{
                              background: 'linear-gradient(135deg, #FCD34D 0%, #FBBF24 100%)',
                            }}
                          >
                            <CheckCircle2 className="w-4 h-4 text-black" strokeWidth={2.5} />
                          </div>
                          
                          <span 
                            className="text-black/80 group-hover:text-black transition-colors duration-300"
                            style={{
                              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                              fontSize: 'clamp(0.9375rem, 1.8vw, 1.0625rem)',
                              fontWeight: 500,
                              letterSpacing: '-0.01em',
                              lineHeight: 1.6,
                            }}
                          >
                            {item}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>
            </div>

            {/* Section Divider */}
            {index < service.sections.length - 1 && (
              <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Benefits Section - World-Class Design */}
      {service.benefits && (
        <section className="relative py-32 lg:py-40 bg-white overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-40">
            <div 
              className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl"
              style={{
                background: 'radial-gradient(circle, rgba(251, 191, 36, 0.15) 0%, transparent 70%)',
              }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: appleEase }}
              className="text-center mb-20 lg:mb-32"
            >
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full mb-6"
                style={{
                  background: 'rgba(251, 191, 36, 0.1)',
                  border: '1px solid rgba(251, 191, 36, 0.2)',
                }}
              >
                <span 
                  className="text-yellow-600"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  Waarom Kiezen Voor Ons
                </span>
              </div>

              <h2 
                className="text-black max-w-4xl mx-auto"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                  fontSize: 'clamp(2rem, 6vw, 4.5rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.1,
                }}
              >
                {service.benefits.title}
              </h2>
            </motion.div>

            {/* Benefits Grid - 3 Columns */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {service.benefits.items.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.1,
                    ease: appleEase 
                  }}
                  className="group"
                >
                  <div 
                    className="relative p-10 rounded-3xl bg-white hover:bg-gray-50 transition-all duration-500 h-full flex flex-col"
                    style={{
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                      boxShadow: '0 4px 24px rgba(0, 0, 0, 0.04)',
                    }}
                  >
                    {/* Number Badge */}
                    <div 
                      className="mb-8 w-12 h-12 rounded-full flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, #FCD34D 0%, #FBBF24 100%)',
                      }}
                    >
                      <span 
                        className="text-black"
                        style={{
                          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                          fontSize: '1.125rem',
                          fontWeight: 700,
                        }}
                      >
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                    </div>

                    {/* Benefit Text */}
                    <p 
                      className="text-black flex-1"
                      style={{
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                        fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                        fontWeight: 600,
                        letterSpacing: '-0.02em',
                        lineHeight: 1.4,
                      }}
                    >
                      {benefit}
                    </p>

                    {/* Hover Accent */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.4, ease: appleEase }}
                      style={{
                        background: 'linear-gradient(90deg, #FCD34D 0%, #FBBF24 100%)',
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Feature Image - If Provided */}
            {service.benefits.image && (
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: appleEase }}
                className="mt-20 lg:mt-32"
              >
                <div 
                  className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl"
                  style={{
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                  }}
                >
                  <ImageWithFallback
                    src={service.benefits.image}
                    alt={service.benefits.title}
                    className="w-full h-full object-cover"
                  />
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 100%)',
                    }}
                  />
                </div>
              </motion.div>
            )}
          </div>
        </section>
      )}

      {/* Contact Section */}
      <ContactFormSection />

      {/* Footer */}
      <Footer hideCTA={true} />
    </motion.div>
  );
}
