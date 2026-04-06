import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react';
import { ArrowLeft, Calendar, ChevronLeft, ChevronRight, MapPin, Tag, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useEffect, useRef, useState } from 'react';
import { projects } from '../data/projectsData';
import { getResponsiveImageProps } from '../lib/images';
import { getContactPath, getProjectenPath } from '../lib/routes';

interface ProjectDetailPageProps {
  projectId: string;
  onNavigate: (page: string) => void;
}

export function ProjectDetailPage({ projectId, onNavigate }: ProjectDetailPageProps) {
  const project = projects.find(p => p.id === projectId);
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const galleryImages = project?.images ?? [];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    if (selectedImageIndex === null) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedImageIndex(null);
        return;
      }

      if (galleryImages.length === 0) {
        return;
      }

      if (event.key === 'ArrowLeft') {
        setSelectedImageIndex((current) =>
          current === null ? current : (current - 1 + galleryImages.length) % galleryImages.length,
        );
      }

      if (event.key === 'ArrowRight') {
        setSelectedImageIndex((current) =>
          current === null ? current : (current + 1) % galleryImages.length,
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [galleryImages.length, selectedImageIndex]);

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-white">Project niet gevonden</p>
      </div>
    );
  }

  const heroImageProps = getResponsiveImageProps(project.heroImage, {
    sizes: '100vw',
    widths: [768, 1280, 1600, 2400],
  });
  const activeLightboxImage =
    selectedImageIndex !== null ? galleryImages[selectedImageIndex] : undefined;
  const activeLightboxIndex = selectedImageIndex ?? 0;
  const activeLightboxImageProps = activeLightboxImage
    ? getResponsiveImageProps(activeLightboxImage, {
        sizes: '100vw',
        widths: [768, 1280, 1600, 2400],
      })
    : {};

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const showPreviousImage = () => {
    if (galleryImages.length === 0) {
      return;
    }

    setSelectedImageIndex((current) =>
      current === null ? current : (current - 1 + galleryImages.length) % galleryImages.length,
    );
  };

  const showNextImage = () => {
    if (galleryImages.length === 0) {
      return;
    }

    setSelectedImageIndex((current) =>
      current === null ? current : (current + 1) % galleryImages.length,
    );
  };

  const getGalleryImageAlt = (imageIndex: number) =>
    `${project.title} in ${project.location} - ${project.category} foto ${imageIndex + 1}`;

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
            alt={`${project.title} in ${project.location}`}
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            {...heroImageProps}
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
              <motion.button
                key={index}
                type="button"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedImageIndex(index)}
                className="group relative aspect-[4/5] overflow-hidden bg-zinc-900 text-left"
              >
                <ImageWithFallback
                  src={image}
                  alt={getGalleryImageAlt(index)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  {...getResponsiveImageProps(image, {
                    sizes: '(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw',
                    widths: [480, 768, 1080, 1600],
                  })}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                <div className="absolute inset-x-0 bottom-0 p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-white"
                    style={{
                      background: 'rgba(255, 255, 255, 0.08)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    Bekijk groot
                  </div>
                </div>
                
                {/* Corner Accents */}
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

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

      <AnimatePresence>
        {activeLightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[120] bg-black/96 backdrop-blur-xl"
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} afbeeldingvergroting`}
            onClick={closeLightbox}
          >
            <div
              className="absolute inset-0 opacity-40"
              style={{
                background:
                  'radial-gradient(circle at top, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.02) 30%, transparent 60%)',
              }}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 12 }}
              transition={{ duration: 0.35, ease: [0.28, 0, 0.4, 1] }}
              className="relative mx-auto flex h-full w-full max-w-[1900px] flex-col px-4 pb-4 pt-4 sm:px-6 sm:pb-6 sm:pt-6 lg:px-10 lg:pb-8"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-4 flex items-start justify-between gap-4 lg:mb-6">
                <div className="space-y-3">
                  <div
                    className="inline-flex items-center gap-3 rounded-full px-4 py-2 text-white/85"
                    style={{
                      background: 'rgba(255, 255, 255, 0.06)',
                      backdropFilter: 'blur(24px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                      fontSize: '0.9375rem',
                      fontWeight: 500,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    <span>{project.title}</span>
                    <span className="text-white/30">•</span>
                    <span>
                      {activeLightboxIndex + 1} / {galleryImages.length}
                    </span>
                  </div>

                  <div
                    className="hidden text-white/55 sm:block"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                      fontSize: '0.9375rem',
                      fontWeight: 400,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {project.location} • {project.category}
                  </div>
                </div>

                <motion.button
                  type="button"
                  onClick={closeLightbox}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white/80 transition-colors hover:text-white"
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(24px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                  aria-label="Sluit vergroting"
                >
                  <X className="h-5 w-5" />
                </motion.button>
              </div>

              <div className="relative flex min-h-0 flex-1 items-center justify-center">
                <div className="relative flex h-full w-full items-center justify-center">
                  <div className="absolute inset-0 overflow-hidden opacity-25">
                    <ImageWithFallback
                      src={activeLightboxImage}
                      alt=""
                      aria-hidden="true"
                      className="h-full w-full object-cover blur-3xl scale-110"
                      {...activeLightboxImageProps}
                    />
                  </div>

                  <div
                    className="relative flex h-full w-full max-w-[min(94vw,1560px)] items-center justify-center overflow-hidden rounded-[28px] sm:rounded-[32px]"
                    style={{
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      boxShadow: '0 30px 80px rgba(0, 0, 0, 0.45)',
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] via-transparent to-black/10" />

                    {galleryImages.length > 1 && (
                      <motion.button
                        type="button"
                        onClick={showPreviousImage}
                        whileHover={{ scale: 1.04, x: -2 }}
                        whileTap={{ scale: 0.96 }}
                        className="absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full text-white/85 transition-colors hover:text-white sm:left-4 sm:h-14 sm:w-14"
                        style={{
                          background: 'rgba(0, 0, 0, 0.38)',
                          backdropFilter: 'blur(24px)',
                          border: '1px solid rgba(255, 255, 255, 0.12)',
                        }}
                        aria-label="Vorige afbeelding"
                      >
                        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
                      </motion.button>
                    )}

                    <AnimatePresence mode="wait" initial={false}>
                      <motion.div
                        key={activeLightboxImage}
                        initial={{ opacity: 0, scale: 0.985, y: 12 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.99, y: -12 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        className="relative flex h-full w-full items-center justify-center p-3 sm:p-4 lg:p-6"
                      >
                        <ImageWithFallback
                          src={activeLightboxImage}
                          alt={getGalleryImageAlt(activeLightboxIndex)}
                          className="max-h-[calc(100vh-250px)] w-auto max-w-full rounded-[20px] object-contain sm:max-h-[calc(100vh-270px)] lg:max-h-[calc(100vh-290px)]"
                          loading="eager"
                          fetchPriority="high"
                          {...activeLightboxImageProps}
                        />
                      </motion.div>
                    </AnimatePresence>

                    {galleryImages.length > 1 && (
                      <motion.button
                        type="button"
                        onClick={showNextImage}
                        whileHover={{ scale: 1.04, x: 2 }}
                        whileTap={{ scale: 0.96 }}
                        className="absolute right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full text-white/85 transition-colors hover:text-white sm:right-4 sm:h-14 sm:w-14"
                        style={{
                          background: 'rgba(0, 0, 0, 0.38)',
                          backdropFilter: 'blur(24px)',
                          border: '1px solid rgba(255, 255, 255, 0.12)',
                        }}
                        aria-label="Volgende afbeelding"
                      >
                        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
                      </motion.button>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-4 lg:mt-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div
                    className="max-w-fit rounded-full px-5 py-3 text-white/75"
                    style={{
                      background: 'rgba(255, 255, 255, 0.06)',
                      backdropFilter: 'blur(24px)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                      fontSize: '0.9375rem',
                      fontWeight: 400,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {project.title} in {project.location} • {project.category}
                  </div>

                  {galleryImages.length > 1 && (
                    <div
                      className="hidden text-white/45 lg:block"
                      style={{
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                        fontSize: '0.875rem',
                        fontWeight: 400,
                        letterSpacing: '-0.01em',
                      }}
                    >
                      Gebruik de pijlen of miniaturen om door de foto's te bladeren
                    </div>
                  )}
                </div>

                {galleryImages.length > 1 && (
                  <div className="overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    <div className="flex w-max min-w-full gap-3">
                      {galleryImages.map((image, index) => (
                        <motion.button
                          key={image}
                          type="button"
                          onClick={() => setSelectedImageIndex(index)}
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          className="relative h-20 w-16 shrink-0 overflow-hidden rounded-[18px] sm:h-24 sm:w-20 lg:h-28 lg:w-24"
                          style={{
                            border:
                              index === activeLightboxIndex
                                ? '1px solid rgba(250, 204, 21, 0.9)'
                                : '1px solid rgba(255, 255, 255, 0.08)',
                            boxShadow:
                              index === activeLightboxIndex
                                ? '0 0 0 1px rgba(250, 204, 21, 0.18)'
                                : 'none',
                          }}
                          aria-label={`Bekijk foto ${index + 1}`}
                          aria-pressed={index === activeLightboxIndex}
                        >
                          <ImageWithFallback
                            src={image}
                            alt=""
                            aria-hidden="true"
                            className="h-full w-full object-cover"
                            {...getResponsiveImageProps(image, {
                              sizes: '96px',
                              widths: [160, 240],
                            })}
                          />
                          <div
                            className="absolute inset-0 transition-opacity"
                            style={{
                              background:
                                index === activeLightboxIndex
                                  ? 'linear-gradient(to top, rgba(0,0,0,0.12), rgba(0,0,0,0.02))'
                                  : 'linear-gradient(to top, rgba(0,0,0,0.35), rgba(0,0,0,0.08))',
                            }}
                          />
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
