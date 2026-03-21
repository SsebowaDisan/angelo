import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

interface ProjectenProps {
  onOpenProjecten?: () => void;
}

export function Projecten({ onOpenProjecten }: ProjectenProps) {
  const appleEase = [0.28, 0, 0.4, 1] as const;

  return (
    <section id="projecten" className="relative py-32 bg-black overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(250, 204, 21, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(250, 204, 21, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Gradient Glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-400/5 rounded-full blur-[150px] pointer-events-none"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.08, 0.05],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: appleEase }}
          className="mb-16 text-center"
        >
          {/* Label */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-yellow-400" />
            <span 
              className="text-yellow-400"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              Portfolio
            </span>
            <div className="w-12 h-px bg-yellow-400" />
          </div>

          <h2
            className="text-white mb-6"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
              fontSize: 'clamp(48px, 8vw, 96px)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1,
            }}
          >
            Onze Projecten
          </h2>
          <p
            className="text-white/60 max-w-2xl mx-auto"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
              fontSize: '21px',
              fontWeight: 400,
              letterSpacing: '-0.022em',
              lineHeight: 1.5,
            }}
          >
            Een showcase van ons vakmanschap. Elk project vertelt het verhaal van precisie, passie en perfectie.
          </p>
        </motion.div>

        {/* Single Large Project Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: appleEase }}
          onClick={onOpenProjecten}
          className="group relative cursor-pointer"
        >
          {/* Main Container */}
          <div className="relative aspect-[21/10] overflow-hidden rounded-3xl bg-zinc-950">
            {/* Background Image */}
            <div className="absolute inset-0">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2400"
                alt="Angelo Renovates Projects"
                className="w-full h-full object-cover transition-all duration-[1.2s] ease-out group-hover:scale-105"
              />
              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
            </div>

            {/* Corner Accent Lines */}
            <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75" />
            <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100" />
            <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-125" />
            <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150" />

            {/* Content Container */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 lg:p-16">
              {/* Main Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: appleEase }}
                className="mb-8"
              >
                <h3
                  className="text-white mb-4"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                    fontSize: 'clamp(32px, 5vw, 72px)',
                    fontWeight: 700,
                    letterSpacing: '-0.03em',
                    lineHeight: 1.1,
                  }}
                >
                  Bekijk Ons Werk
                </h3>
                <p
                  className="text-white/70 max-w-2xl mx-auto"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                    fontSize: 'clamp(16px, 2vw, 21px)',
                    fontWeight: 400,
                    letterSpacing: '-0.022em',
                    lineHeight: 1.6,
                  }}
                >
                  Ontdek onze afgeronde projecten en laat u inspireren door vakmanschap van de hoogste kwaliteit
                </p>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5, ease: appleEase }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group/btn"
                >
                  <div className="px-10 py-5 bg-yellow-400 group-hover/btn:bg-white text-black rounded-full overflow-hidden relative transition-colors duration-500">
                    {/* Shine Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      initial={{ x: '-100%' }}
                      animate={{ x: '200%' }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        repeatDelay: 1,
                      }}
                    />
                    <span 
                      className="relative z-10 flex items-center gap-3"
                      style={{
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                        fontSize: '19px',
                        fontWeight: 600,
                        letterSpacing: '-0.022em',
                      }}
                    >
                      Bekijk Alle Projecten
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </span>
                  </div>
                  {/* Button Glow */}
                  <div className="absolute inset-0 bg-white rounded-full blur-2xl opacity-0 group-hover/btn:opacity-40 transition-opacity duration-700 -z-10" />
                </motion.div>
              </motion.div>

              {/* Bottom Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7, ease: appleEase }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-8"
              >
                <div className="text-center">
                  <div 
                    className="text-yellow-400 mb-1"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                      fontSize: 'clamp(24px, 3vw, 36px)',
                      fontWeight: 700,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    100+
                  </div>
                  <div 
                    className="text-white/60"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                      fontSize: '13px',
                      fontWeight: 500,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Projecten
                  </div>
                </div>
                <div className="w-px h-12 bg-white/20" />
                <div className="text-center">
                  <div 
                    className="text-yellow-400 mb-1"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                      fontSize: 'clamp(24px, 3vw, 36px)',
                      fontWeight: 700,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    98%
                  </div>
                  <div 
                    className="text-white/60"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                      fontSize: '13px',
                      fontWeight: 500,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Tevredenheid
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Hover Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 to-yellow-400/0 group-hover:from-yellow-400/10 group-hover:to-yellow-400/5 transition-all duration-700 pointer-events-none"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}