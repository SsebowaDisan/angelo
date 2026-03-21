import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MessageSquare, Wrench, Handshake, ArrowRight } from 'lucide-react';
import angeloHomeImage from '../assets/Angelo_home.png';

const teamMembers = [
  {
    name: 'Angelo',
    role: 'Oprichter & Vakman',
    description: 'Met jarenlange ervaring in de bouwsector streef ik naar perfectie in elk project.',
    image: angeloHomeImage
  }
];

const values = [
  {
    title: 'Vakmanschap',
    description: 'Perfectie in elk detail, traditie met moderne technieken.'
  },
  {
    title: 'Betrouwbaarheid',
    description: 'Afspraken nakomen, transparante communicatie.'
  },
  {
    title: 'Kwaliteit',
    description: 'Alleen de beste materialen en afwerking.'
  },
  {
    title: 'Persoonlijk',
    description: 'Elk project krijgt volledige aandacht en zorg.'
  }
];

interface TeamProps {
  onNavigate?: (page: string) => void;
}

export function Team({ onNavigate }: TeamProps) {
  const appleEase = [0.28, 0, 0.4, 1] as const;

  return (
    <div id="team" className="relative bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: appleEase }}
          className="mb-20 lg:mb-28"
        >
          <h2
            className="text-black tracking-tight mb-6"
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 6rem)',
              lineHeight: 1.05,
              fontWeight: 700,
              letterSpacing: '-0.03em',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
            }}
          >
            Over Angelo Renovates.
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: appleEase }}
            className="text-gray-600 max-w-3xl"
            style={{
              fontSize: 'clamp(1.125rem, 1.5vw, 1.375rem)',
              lineHeight: 1.6,
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
            }}
          >
            Uw droomhuis verdient de beste vakmanschap. Met passie voor het vak en oog voor detail maken we van elk project een meesterwerk.
          </motion.p>
        </motion.div>

        {/* Team Member */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 lg:mb-32">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: appleEase }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl bg-gray-100 border border-gray-200/60">
              <ImageWithFallback
                src={teamMembers[0].image}
                alt={teamMembers[0].name}
                className="block w-full h-auto transition-all duration-700"
              />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: appleEase }}
              className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 lg:p-8 shadow-xl border border-gray-200/60"
            >
              <p
                className="text-gray-600 mb-1"
                style={{
                  fontSize: '0.875rem',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
                }}
              >
                BTW-nummer
              </p>
              <p
                className="text-black"
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 700,
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
                }}
              >
                BE0817410486
              </p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: appleEase }}
          >
            <h3
              className="text-black mb-2"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                lineHeight: 1.1,
                fontWeight: 700,
                letterSpacing: '-0.02em',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
              }}
            >
              {teamMembers[0].name}
            </h3>
            <p
              className="text-yellow-500 mb-6"
              style={{
                fontSize: 'clamp(1.125rem, 1.5vw, 1.375rem)',
                fontWeight: 600,
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
              }}
            >
              {teamMembers[0].role}
            </p>
            <p
              className="text-gray-600 mb-8"
              style={{
                fontSize: 'clamp(1rem, 1.25vw, 1.125rem)',
                lineHeight: 1.7,
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
              }}
            >
              {teamMembers[0].description}
            </p>

            {/* Quote */}
            <div className="border-l-4 border-yellow-400 pl-6 py-2 mb-10">
              <p
                className="text-gray-900 italic"
                style={{
                  fontSize: 'clamp(1.125rem, 1.5vw, 1.375rem)',
                  lineHeight: 1.6,
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
                }}
              >
                "My hands your home"
              </p>
            </div>

            {/* CTA Button - Meer over Angelo */}
            {onNavigate && (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5, ease: appleEase }}
                onClick={() => onNavigate('wie-ben-ik')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-black text-white hover:bg-black/90 transition-all duration-300 group"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                  fontSize: '1.0625rem',
                  fontWeight: 600,
                  letterSpacing: '-0.01em',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
                }}
              >
                <span>Meer over Angelo</span>
                <ArrowRight 
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                  strokeWidth={2.5}
                />
              </motion.button>
            )}
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2, ease: appleEase }}
        >
          <h3
            className="text-black mb-12 lg:mb-16 text-center"
            style={{
              fontSize: 'clamp(1.875rem, 4vw, 3rem)',
              lineHeight: 1.1,
              fontWeight: 700,
              letterSpacing: '-0.02em',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
            }}
          >
            Onze Waarden.
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: appleEase
                }}
                className="group"
              >
                {/* Number */}
                <div
                  className="text-yellow-400 mb-4 opacity-40 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                    fontWeight: 700,
                    lineHeight: 1,
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
                  }}
                >
                  {(index + 1).toString().padStart(2, '0')}
                </div>

                {/* Title */}
                <h4
                  className="text-black mb-3 group-hover:text-yellow-500 transition-colors duration-300"
                  style={{
                    fontSize: 'clamp(1.25rem, 1.75vw, 1.5rem)',
                    fontWeight: 700,
                    letterSpacing: '-0.01em',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
                  }}
                >
                  {value.title}
                </h4>

                {/* Description */}
                <p
                  className="text-gray-600"
                  style={{
                    fontSize: 'clamp(0.9375rem, 1.125vw, 1.0625rem)',
                    lineHeight: 1.6,
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
                  }}
                >
                  {value.description}
                </p>

                {/* Accent line */}
                <motion.div
                  className="h-1 bg-yellow-400 origin-left mt-4"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.5, ease: appleEase }}
                  style={{ width: '60px' }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Vakmanschap Section - World Class Design */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, ease: appleEase }}
          className="mt-32 lg:mt-48 relative"
        >
          {/* Animated Blueprint Background Grid */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(250, 204, 21, 0.08) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(250, 204, 21, 0.08) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px'
              }}
              animate={{
                backgroundPosition: ['0px 0px', '40px 40px']
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* Radial Gradient Orbs */}
            <motion.div
              className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-yellow-400/5 rounded-full blur-[120px]"
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 30, 0],
                y: [0, -20, 0],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-20 -left-40 w-[500px] h-[500px] bg-yellow-400/3 rounded-full blur-[100px]"
              animate={{
                scale: [1, 1.15, 1],
                x: [0, -20, 0],
              }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
            {/* Section Header with Technical Labels */}
            <div className="text-center mb-20 lg:mb-28">
              {/* Technical Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: appleEase }}
                className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-black/5 backdrop-blur-sm border border-yellow-400/20"
              >
                <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                <span
                  className="text-yellow-600"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                    fontSize: '13px',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  15+ Jaar Expertise
                </span>
              </motion.div>

              {/* Main Title with Measurement Decoration */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1, ease: appleEase }}
                className="relative inline-block"
              >
                <h3
                  className="text-black mb-2 relative"
                  style={{
                    fontSize: 'clamp(2.25rem, 6vw, 4.5rem)',
                    lineHeight: 1.1,
                    fontWeight: 700,
                    letterSpacing: '-0.035em',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
                  }}
                >
                  Vakmanschap waar u op
                  <br />
                  <span className="text-yellow-400">kunt bouwen</span>
                </h3>

                {/* Decorative measurement lines */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5, ease: appleEase }}
                  className="absolute -left-20 top-1/2 -translate-y-1/2 hidden lg:block"
                >
                  <div className="w-16 h-px bg-yellow-400 relative">
                    <div className="absolute -left-1 -top-1 w-2 h-2 bg-yellow-400 rounded-full" />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5, ease: appleEase }}
                  className="absolute -right-20 top-1/2 -translate-y-1/2 hidden lg:block"
                >
                  <div className="w-16 h-px bg-yellow-400 relative">
                    <div className="absolute -right-1 -top-1 w-2 h-2 bg-yellow-400 rounded-full" />
                  </div>
                </motion.div>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: appleEase }}
                className="text-gray-600 max-w-3xl mx-auto mt-6"
                style={{
                  fontSize: 'clamp(1.0625rem, 1.5vw, 1.375rem)',
                  lineHeight: 1.7,
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
                }}
              >
                Met meer dan 15 jaar ervaring in de bouwsector leveren wij kwaliteit die blijft. Elk project behandelen we met dezelfde toewijding en precisie.
              </motion.p>
            </div>

            {/* Revolutionary 3D Cards Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 perspective-1000">
              {[
                {
                  icon: MessageSquare,
                  number: '01',
                  title: 'Transparante communicatie',
                  description: 'Duidelijke afspraken en open dialoog tijdens het hele project.',
                  color: '#FBBF24'
                },
                {
                  icon: Wrench,
                  number: '02',
                  title: 'Vakkundige uitvoering',
                  description: 'Hoogstaand werk met oog voor detail en moderne technieken.',
                  color: '#F59E0B'
                },
                {
                  icon: Handshake,
                  number: '03',
                  title: 'Afspraak is afspraak',
                  description: 'Betrouwbaarheid en punctualiteit bij elke stap.',
                  color: '#FBBF24'
                }
              ].map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 60, rotateX: 15 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                      duration: 0.9,
                      delay: 0.3 + index * 0.2,
                      ease: appleEase
                    }}
                    style={{
                      transformStyle: 'preserve-3d',
                    }}
                    className="group"
                  >
                    <motion.div
                      whileHover={{
                        y: -16,
                        rotateX: 5,
                        rotateY: index === 1 ? 0 : index === 0 ? -5 : 5,
                        scale: 1.03
                      }}
                      transition={{ duration: 0.4, ease: appleEase }}
                      className="relative h-full"
                      style={{
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      {/* Card Container */}
                      <div className="relative h-full min-h-[420px] rounded-3xl overflow-hidden bg-white border border-gray-200/60"
                        style={{
                          boxShadow: '0 20px 60px -10px rgba(0, 0, 0, 0.08), 0 8px 24px -8px rgba(0, 0, 0, 0.04)',
                        }}
                      >
                        {/* Construction Tape Border (Top) */}
                        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="absolute inset-0" style={{
                            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)'
                          }} />
                        </div>

                        {/* Blueprint Grid Overlay */}
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700"
                          style={{
                            backgroundImage: `
                              linear-gradient(rgba(250, 204, 21, 0.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(250, 204, 21, 0.5) 1px, transparent 1px)
                            `,
                            backgroundSize: '20px 20px'
                          }}
                        />

                        {/* Corner Markers */}
                        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-yellow-400/0 group-hover:border-yellow-400/60 transition-all duration-500" />
                        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-yellow-400/0 group-hover:border-yellow-400/60 transition-all duration-500" />
                        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-yellow-400/0 group-hover:border-yellow-400/60 transition-all duration-500" />
                        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-yellow-400/0 group-hover:border-yellow-400/60 transition-all duration-500" />

                        {/* Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/30 to-white group-hover:from-yellow-50/20 group-hover:via-yellow-50/10 group-hover:to-white transition-all duration-700" />

                        {/* Content */}
                        <div className="relative h-full p-8 lg:p-10 flex flex-col"
                          style={{
                            transform: 'translateZ(20px)',
                          }}
                        >
                          {/* Number Badge - Top Right */}
                          <motion.div
                            className="absolute top-8 right-8"
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          >
                            <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center border-2 border-yellow-400/20 group-hover:border-yellow-400/60 transition-colors duration-500">
                              <span
                                className="text-yellow-400"
                                style={{
                                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                                  fontSize: '18px',
                                  fontWeight: 700,
                                }}
                              >
                                {principle.number}
                              </span>
                            </div>
                          </motion.div>

                          {/* Icon Container with Floating Animation */}
                          <motion.div
                            animate={{
                              y: [0, -8, 0],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: index * 0.3
                            }}
                            className="mb-8"
                          >
                            <div className="relative inline-block">
                              {/* Glow effect behind icon */}
                              <div className="absolute inset-0 bg-yellow-400/20 rounded-3xl blur-xl scale-110 group-hover:bg-yellow-400/30 transition-all duration-500" />
                              
                              <motion.div
                                className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-3xl bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-400 flex items-center justify-center shadow-lg"
                                whileHover={{
                                  rotate: [0, -5, 5, -5, 0],
                                  scale: 1.05
                                }}
                                transition={{ duration: 0.5 }}
                                style={{
                                  boxShadow: '0 8px 32px rgba(251, 191, 36, 0.3)'
                                }}
                              >
                                <Icon 
                                  className="w-10 h-10 lg:w-12 lg:h-12 text-white"
                                  strokeWidth={1.8}
                                />
                              </motion.div>
                            </div>
                          </motion.div>

                          {/* Title */}
                          <h4
                            className="text-black mb-4 group-hover:text-yellow-600 transition-colors duration-500"
                            style={{
                              fontSize: 'clamp(1.25rem, 1.75vw, 1.625rem)',
                              fontWeight: 600,
                              letterSpacing: '-0.015em',
                              lineHeight: 1.3,
                              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
                            }}
                          >
                            {principle.title}
                          </h4>

                          {/* Description */}
                          <p
                            className="text-gray-600 mb-8 flex-grow"
                            style={{
                              fontSize: 'clamp(0.9375rem, 1.125vw, 1.0625rem)',
                              lineHeight: 1.7,
                              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
                            }}
                          >
                            {principle.description}
                          </p>

                          {/* Bottom Accent - Technical Measurement Line */}
                          <motion.div
                            className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            initial={{ x: -20 }}
                            whileInView={{ x: 0 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                          >
                            <div className="flex-1 h-px bg-gradient-to-r from-yellow-400/60 to-transparent relative">
                              <div className="absolute left-0 -top-1 w-2 h-2 rounded-full bg-yellow-400" />
                              <div className="absolute left-8 -top-1 w-2 h-2 rounded-full bg-yellow-400/60" />
                              <div className="absolute left-16 -top-1 w-2 h-2 rounded-full bg-yellow-400/30" />
                            </div>
                          </motion.div>
                        </div>

                        {/* Shine Effect on Hover */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-transparent via-white/0 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none"
                          animate={{
                            backgroundPosition: ['200% 200%', '-200% -200%'],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                          style={{
                            backgroundImage: 'linear-gradient(135deg, transparent 40%, rgba(255, 255, 255, 0.3) 50%, transparent 60%)',
                            backgroundSize: '200% 200%',
                          }}
                        />
                      </div>

                      {/* 3D Shadow Layer */}
                      <div 
                        className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/10 rounded-3xl -z-10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          transform: 'translateZ(-30px) translateY(20px)',
                        }}
                      />
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
