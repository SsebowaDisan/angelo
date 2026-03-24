import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowLeft, MapPin, Calendar, Tag } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useRef } from 'react';
import { projects } from '../data/projectsData';
import { getContactPath, getProjectPath, getProjectenPath } from '../lib/routes';

interface ProjectDetailPageProps {
  projectId: string;
  onNavigate: (page: string) => void;
}

export function ProjectDetailPage({ projectId, onNavigate }: ProjectDetailPageProps) {
  const project = projects.find(p => p.id === projectId);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-white">Project niet gevonden</p>
      </div>
    );
  }

  // Get related projects (same category, excluding current)
  const relatedProjects = projects
    .filter(p => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <div ref={containerRef} className="min-h-screen bg-black">
      {/* Back Button - Fixed */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        onClick={() => onNavigate('projecten')}
        className="fixed top-24 left-6 lg:left-12 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:border-yellow-400 transition-all duration-300 group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:text-yellow-400 transition-colors" />
      </motion.button>

      {/* Hero Section - Full Screen with Parallax */}
      <section className="relative h-screen overflow-hidden">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <ImageWithFallback
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black" />
        </motion.div>

        {/* Vertical Project Title - Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 z-10"
        >
          <h1
            className="text-white tracking-tight"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            {project.title}
          </h1>
        </motion.div>

        {/* Project Meta - Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="absolute bottom-12 right-6 lg:right-12 z-10"
        >
          <div className="flex flex-col gap-4 items-end">
            <div className="flex items-center gap-2 text-white/80">
              <MapPin className="w-4 h-4" />
              <span style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                fontSize: '17px',
                fontWeight: 400,
              }}>
                {project.location}
              </span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Calendar className="w-4 h-4" />
              <span style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                fontSize: '17px',
                fontWeight: 400,
              }}>
                {project.year}
              </span>
            </div>
            <div className="flex items-center gap-2 text-yellow-400">
              <Tag className="w-4 h-4" />
              <span style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                fontSize: '17px',
                fontWeight: 500,
              }}>
                {project.category}
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Project Overview */}
      <section className="relative py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left - Description */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2
                className="text-white mb-6"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                  fontSize: 'clamp(32px, 5vw, 48px)',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                }}
              >
                Over dit project
              </h2>
              <p
                className="text-white/70 mb-8"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                  fontSize: '21px',
                  fontWeight: 400,
                  letterSpacing: '-0.022em',
                  lineHeight: 1.5,
                }}
              >
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag, index) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                      fontSize: '15px',
                      fontWeight: 400,
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Right - Challenge & Solution */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              {/* Challenge */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-px bg-yellow-400" />
                  <h3
                    className="text-yellow-400"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                      fontSize: '13px',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Uitdaging
                  </h3>
                </div>
                <p
                  className="text-white/70"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                    fontSize: '19px',
                    fontWeight: 400,
                    letterSpacing: '-0.022em',
                    lineHeight: 1.5,
                  }}
                >
                  {project.challenge}
                </p>
              </div>

              {/* Solution */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-px bg-yellow-400" />
                  <h3
                    className="text-yellow-400"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                      fontSize: '13px',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Oplossing
                  </h3>
                </div>
                <p
                  className="text-white/70"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                    fontSize: '19px',
                    fontWeight: 400,
                    letterSpacing: '-0.022em',
                    lineHeight: 1.5,
                  }}
                >
                  {project.solution}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-24 bg-black">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white mb-16 text-center"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            Project Gallery
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative aspect-[4/5] overflow-hidden bg-zinc-900"
              >
                <ImageWithFallback
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                
                {/* Corner Accents */}
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-32 bg-zinc-900">
          <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2
                className="text-white mb-4"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                  fontSize: 'clamp(32px, 5vw, 48px)',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                }}
              >
                Gerelateerde Projecten
              </h2>
              <p
                className="text-white/60"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                  fontSize: '19px',
                  fontWeight: 400,
                }}
              >
                Ontdek meer {project.category.toLowerCase()} projecten
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject, index) => (
                <motion.a
                  key={relatedProject.id}
                  href={getProjectPath(relatedProject.id)}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={(event) => {
                    event.preventDefault();
                    onNavigate('project-detail', relatedProject.id);
                  }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-zinc-800 mb-4">
                    <ImageWithFallback
                      src={relatedProject.heroImage}
                      alt={relatedProject.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    
                    {/* Title Overlay */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3
                        className="text-white"
                        style={{
                          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                          fontSize: '24px',
                          fontWeight: 600,
                          letterSpacing: '-0.02em',
                        }}
                      >
                        {relatedProject.title}
                      </h3>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-32 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-white mb-6"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                fontSize: 'clamp(32px, 5vw, 56px)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
              }}
            >
              Geïnspireerd door dit project?
            </h2>
            <p
              className="text-white/60 mb-10 max-w-2xl mx-auto"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                fontSize: '21px',
                fontWeight: 400,
                letterSpacing: '-0.022em',
                lineHeight: 1.5,
              }}
            >
              Laten we samen uw droomproject realiseren. Neem contact op voor een vrijblijvend gesprek.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={getContactPath()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(event) => {
                  event.preventDefault();
                  onNavigate('contact');
                }}
                className="px-8 py-4 bg-yellow-400 text-black rounded-full hover:bg-yellow-300 transition-colors duration-300"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                  fontSize: '17px',
                  fontWeight: 600,
                  letterSpacing: '-0.022em',
                }}
              >
                Neem Contact Op
              </motion.a>
              <motion.a
                href={getProjectenPath()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(event) => {
                  event.preventDefault();
                  onNavigate('projecten');
                }}
                className="px-8 py-4 bg-white/5 text-white rounded-full hover:bg-white/10 border border-white/20 transition-colors duration-300"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                  fontSize: '17px',
                  fontWeight: 600,
                  letterSpacing: '-0.022em',
                }}
              >
                Bekijk Alle Projecten
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
