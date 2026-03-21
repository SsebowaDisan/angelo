import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Header } from './Header';
import { ContactFormSection } from './ContactFormSection';
import { Footer } from './Footer';
import { projects } from '../data/projectsData';

interface ProjectenPageProps {
  onNavigate: (page: string, projectId?: string) => void;
  onClose?: () => void;
}

export function ProjectenPage({ onNavigate, onClose }: ProjectenPageProps) {
  const filteredProjects = projects;

  return (
    <div className="fixed inset-0 bg-black z-[9999] overflow-y-auto">
      {/* Header */}
      <Header 
        currentPage="projecten"
        onNavigate={onNavigate}
        onClose={onClose}
        isOverlay={true}
      />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2400"
            alt="Construction Projects"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.28, 0, 0.4, 1] }}
          >
            <h1
              className="text-white mb-6"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                fontSize: 'clamp(48px, 8vw, 120px)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
              }}
            >
              Onze Projecten
            </h1>
            <p
              className="text-white/70 max-w-2xl mx-auto"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                fontSize: 'clamp(19px, 2.5vw, 24px)',
                fontWeight: 400,
                letterSpacing: '-0.022em',
                lineHeight: 1.5,
              }}
            >
              Ontdek ons vakmanschap door een selectie van onze meest recente renovatieprojecten.
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-white/50 text-sm flex flex-col items-center gap-2"
          >
            <span>Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-black">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.28, 0, 0.4, 1] }}
                className="group relative cursor-pointer"
                onClick={() => onNavigate('project-detail', project.id)}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900">
                  <ImageWithFallback
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    {/* Category Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="mb-4"
                    >
                      <span
                        className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20"
                        style={{
                          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                          fontSize: '13px',
                          fontWeight: 500,
                          letterSpacing: '-0.022em',
                        }}
                      >
                        {project.category}
                      </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      className="text-white mb-2"
                      style={{
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                        fontSize: 'clamp(24px, 3vw, 32px)',
                        fontWeight: 700,
                        letterSpacing: '-0.02em',
                        lineHeight: 1.2,
                      }}
                    >
                      {project.title}
                    </motion.h3>

                    {/* Location & Year */}
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                      className="text-white/60 mb-6"
                      style={{
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                        fontSize: '15px',
                        fontWeight: 400,
                        letterSpacing: '-0.022em',
                      }}
                    >
                      {project.location} • {project.year}
                    </motion.p>

                    {/* Read More Button */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    >
                      <div className="inline-flex items-center gap-2 text-yellow-400 group/btn">
                        <span
                          style={{
                            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                            fontSize: '17px',
                            fontWeight: 500,
                            letterSpacing: '-0.022em',
                          }}
                        >
                          Lees Meer
                        </span>
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <ArrowRight className="w-5 h-5" />
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Corner Accent - Construction Detail */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24"
            >
              <p className="text-white/40" style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                fontSize: '19px',
              }}>
                Geen projecten gevonden in deze categorie.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactFormSection />

      {/* Footer */}
      <Footer onOpenVoorwaarden={() => onNavigate('voorwaarden')} />
    </div>
  );
}