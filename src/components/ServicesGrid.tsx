import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import vloerwerkzaamhedenImage from '../assets/Vloerwerkzaamheden.png';
import oprittenTerrassenImage from '../assets/Opritten en terrassen.png';
import totaleProjectenImage from '../assets/Totale projecten.png';
import schoorsteenvegenRenovatieImage from '../assets/Schoorsteenvegen en renovatie.png';
import exclusieveTegelherstellingImage from '../assets/Exclusieve tegelherstelling zonder breekwerk.png';

interface ServicesGridProps {
  onServiceClick: (serviceId: string) => void;
}

export function ServicesGrid({ onServiceClick }: ServicesGridProps) {
  const appleEase = [0.28, 0, 0.4, 1] as const;

  const services = [
    {
      id: 'vloerwerkzaamheden',
      title: 'Vloerwerkzaamheden',
      image: vloerwerkzaamhedenImage,
      description: 'Professionele vloerwerken met oog voor detail'
    },
    {
      id: 'opritten-terrassen',
      title: 'Opritten en terrassen',
      image: oprittenTerrassenImage,
      description: 'Duurzaam vakwerk met oog voor detail'
    },
    {
      id: 'totale-projecten',
      title: 'Totale projecten',
      image: totaleProjectenImage,
      description: 'Complete oplossingen uit één hand'
    },
    {
      id: 'muurinjectie-opstijgend-vocht',
      title: 'Muurinjectie tegen opstijgend vocht',
      image: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmljayUyMHdhbGwlMjBob3VzZXxlbnwxfHx8fDE3OTU0MjQ5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Doeltreffende behandeling tegen opstijgend vocht'
    },
    {
      id: 'camera-inspectie',
      title: 'Camera-inspectie',
      image: 'https://images.unsplash.com/photo-1643216790495-ed36d21b05c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBpbnNwZWN0aW9uJTIwcGlwZXxlbnwxfHx8fDE3NjIzNjI0OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Snel en nauwkeurig zonder breekwerken'
    },
    {
      id: 'schoorsteenvegen',
      title: 'Schoorsteenvegen en renovatie',
      image: schoorsteenvegenRenovatieImage,
      description: 'Voor een veilige en efficiënte rookafvoer'
    },
    {
      id: 'tegelherstelling',
      title: 'Exclusieve tegelherstelling zonder breekwerk',
      image: exclusieveTegelherstellingImage,
      description: 'Unieke techniek in België'
    }
  ];

  return (
    <section className="relative bg-white py-20 lg:py-32 overflow-hidden">
      {/* Subtle Gradient Background - Apple Style */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/30 via-white to-white pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header - Apple Minimalism */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: appleEase }}
          >
            <h2
              className="text-black mb-4"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                lineHeight: 1.05,
                fontWeight: 700,
                letterSpacing: '-0.04em',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
              }}
            >
              Onze diensten.
            </h2>
            <p
              className="text-gray-600 max-w-2xl mx-auto"
              style={{
                fontSize: 'clamp(1.125rem, 1.5vw, 1.5rem)',
                lineHeight: 1.5,
                fontWeight: 400,
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
              }}
            >
              Vakmanschap in elke discipline.
            </p>
          </motion.div>
        </div>

        {/* Services Grid - Apple Product Cards Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
          {services.map((service, index) => {
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: appleEase
                }}
                className="flex"
              >
                <motion.button
                  onClick={() => onServiceClick(service.id)}
                  className="relative w-full text-left group flex"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.5, ease: appleEase }}
                >
                  {/* Card Container */}
                  <div 
                    className="relative w-full rounded-[28px] overflow-hidden bg-white flex flex-col"
                    style={{
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)',
                    }}
                  >
                    {/* Large Image - Fixed aspect ratio */}
                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100 flex-shrink-0">
                      {/* Image with Ken Burns effect */}
                      <motion.div
                        className="w-full h-full"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.8, ease: appleEase }}
                      >
                        <ImageWithFallback 
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                        
                        {/* Subtle gradient overlay for depth */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                        
                        {/* Yellow accent bar - subtle Apple touch */}
                        <motion.div 
                          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400"
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.2 + index * 0.08, ease: appleEase }}
                        />
                      </motion.div>
                    </div>

                    {/* Content Section - Clean & Minimal */}
                    <div className="relative p-8 lg:p-10 flex flex-col flex-1">
                      {/* Title */}
                      <h3
                        className="text-black mb-3 group-hover:text-yellow-600 transition-colors duration-500"
                        style={{
                          fontSize: 'clamp(1.375rem, 1.75vw, 1.75rem)',
                          fontWeight: 600,
                          letterSpacing: '-0.02em',
                          lineHeight: 1.2,
                          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
                        }}
                      >
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p
                        className="text-gray-600 mb-6 flex-1"
                        style={{
                          fontSize: 'clamp(1rem, 1.125vw, 1.125rem)',
                          lineHeight: 1.6,
                          fontWeight: 400,
                          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
                        }}
                      >
                        {service.description}
                      </p>

                      {/* CTA Link - Apple Style */}
                      <motion.div
                        className="inline-flex items-center gap-2 text-yellow-600 group-hover:gap-3 transition-all duration-300 mt-auto"
                        style={{
                          fontSize: '1.0625rem',
                          fontWeight: 500,
                          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
                        }}
                      >
                        <span>Meer informatie</span>
                        <ArrowRight 
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                          strokeWidth={2.5} 
                        />
                      </motion.div>
                    </div>

                    {/* Hover shine effect - Apple signature */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                      style={{
                        background: 'linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%)',
                        backgroundSize: '200% 200%',
                      }}
                      animate={{
                        backgroundPosition: ['0% 0%', '100% 100%'],
                      }}
                      transition={{
                        duration: 1.5,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
