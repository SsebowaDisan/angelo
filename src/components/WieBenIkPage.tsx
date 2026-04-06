import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown, Award, Target, Heart, Sparkles, Phone, Mail } from 'lucide-react';
import { Header } from './Header';
import { ContactFormSection } from './ContactFormSection';
import { Footer } from './Footer';
import { useRef, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ReviewsSection } from './ReviewsSection';
import myHandsYourHomeImage from '../assets/angelo-renovates-wie-ben-ik-bouwexpert.webp';

interface WieBenIkPageProps {
  onClose: () => void;
  onNavigate?: (page: string) => void;
}

export function WieBenIkPage({ onClose, onNavigate }: WieBenIkPageProps) {
  const appleEase = [0.28, 0, 0.4, 1] as const;
  const heroRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: appleEase }}
      className="fixed inset-0 z-[100] bg-white overflow-y-auto"
      style={{ scrollBehavior: 'smooth' }}
    >
      {/* Header */}
      <Header 
        currentPage="wie-ben-ik"
        onNavigate={onNavigate}
        onClose={onClose}
        isOverlay={true}
      />

      {/* HERO SECTION - Full Screen Cinematic */}
      <section 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{ marginTop: '80px' }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <ImageWithFallback 
            src={myHandsYourHomeImage}
            alt="Angelo Renovates bouwexpert en renovatiespecialist"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center' }}
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: appleEase }}
          >
            {/* Eyebrow */}
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <span 
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: '#FCD34D',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                }}
              >
                Angelo Renovates
              </span>
            </motion.div>

            {/* Main Title */}
            <h1
              className="mb-8"
              style={{
                fontSize: 'clamp(4rem, 12vw, 9rem)',
                lineHeight: 0.9,
                letterSpacing: '-0.06em',
                color: '#FFF',
                textShadow: '0 4px 60px rgba(0, 0, 0, 0.5)',
              }}
            >
              Angelo
            </h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mb-12"
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                lineHeight: 1.4,
                color: 'rgba(255, 255, 255, 0.9)',
                letterSpacing: '-0.02em',
              }}
            >
              Building with passion,<br />finishing with pride
            </motion.p>

            {/* Yellow Line Accent */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 1, ease: appleEase }}
              className="h-1 w-32 mx-auto mb-12"
              style={{
                background: 'linear-gradient(90deg, #FBBF24 0%, #FCD34D 100%)',
              }}
            />

            {/* Signature Slogan */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontFamily: '"Dancing Script", cursive',
                color: '#FBBF24',
                textShadow: '0 2px 30px rgba(251, 191, 36, 0.5)',
              }}
            >
              My hands your home
            </motion.p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={24} className="text-white/60" strokeWidth={1.5} />
          </motion.div>
        </motion.div>
      </section>

      {/* INTRO SECTION - Large Statement */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: appleEase }}
            className="text-center mb-24"
          >
            <h2
              className="mb-12"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.04em',
                color: '#000',
              }}
            >
              Waar ik voor sta
            </h2>
            <p
              className="max-w-4xl mx-auto"
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                lineHeight: 1.5,
                color: 'rgba(0, 0, 0, 0.6)',
                letterSpacing: '-0.02em',
              }}
            >
              Bij Angelo Renovates draait alles om <span style={{ color: '#FBBF24' }}>passie voor de bouw</span>. Al van kleins af wist ik dat dit mijn roeping was. De bouw fascineerde me — hoe je iets kunt omvormen tot iets helemaal <span style={{ color: '#FBBF24' }}>nieuws en vol leven</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* VALUES SECTION - Interactive Cards Grid */}
      <section 
        className="py-32 px-6"
        style={{
          background: 'linear-gradient(180deg, #FFFFFF 0%, #FAFAFA 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: appleEase }}
            className="text-center mb-20"
          >
            <h2
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                letterSpacing: '-0.04em',
                color: '#000',
                marginBottom: '1rem',
              }}
            >
              Mijn kernwaarden
            </h2>
            <p
              style={{
                fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
                color: 'rgba(0, 0, 0, 0.5)',
              }}
            >
              De fundamenten van mijn werk
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Passie",
                description: "Elke dag opnieuw met liefde en energie aan het werk",
                color: "#FBBF24"
              },
              {
                icon: Award,
                title: "Vakmanschap",
                description: "15+ jaar ervaring in elk detail zichtbaar",
                color: "#FBBF24"
              },
              {
                icon: Target,
                title: "Precisie",
                description: "Perfectie in planning, uitvoering en afwerking",
                color: "#FBBF24"
              },
              {
                icon: Sparkles,
                title: "Vertrouwen",
                description: "Transparante communicatie van begin tot eind",
                color: "#FBBF24"
              }
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: appleEase }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="relative group"
                >
                  <motion.div
                    animate={{
                      y: hoveredCard === index ? -8 : 0,
                    }}
                    transition={{ duration: 0.3, ease: appleEase }}
                    className="h-full p-10 rounded-3xl"
                    style={{
                      background: hoveredCard === index 
                        ? 'linear-gradient(135deg, rgba(251, 191, 36, 0.1) 0%, rgba(252, 211, 77, 0.05) 100%)'
                        : '#FFFFFF',
                      border: hoveredCard === index
                        ? '1px solid rgba(251, 191, 36, 0.3)'
                        : '1px solid rgba(0, 0, 0, 0.06)',
                      boxShadow: hoveredCard === index
                        ? '0 30px 80px -20px rgba(251, 191, 36, 0.25)'
                        : '0 10px 40px -15px rgba(0, 0, 0, 0.1)',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {/* Icon */}
                    <motion.div
                      animate={{
                        scale: hoveredCard === index ? 1.1 : 1,
                        rotate: hoveredCard === index ? 5 : 0,
                      }}
                      transition={{ duration: 0.3, ease: appleEase }}
                      className="mb-8"
                    >
                      <div
                        className="inline-flex p-5 rounded-2xl"
                        style={{
                          background: 'rgba(251, 191, 36, 0.1)',
                          border: '1px solid rgba(251, 191, 36, 0.2)',
                        }}
                      >
                        <Icon 
                          size={32} 
                          className="text-yellow-600" 
                          strokeWidth={1.5}
                        />
                      </div>
                    </motion.div>

                    {/* Title */}
                    <h3
                      className="mb-4"
                      style={{
                        fontSize: 'clamp(1.5rem, 2.5vw, 1.875rem)',
                        letterSpacing: '-0.02em',
                        color: '#000',
                      }}
                    >
                      {value.title}
                    </h3>

                    {/* Description */}
                    <p
                      style={{
                        fontSize: '1.0625rem',
                        lineHeight: 1.6,
                        color: 'rgba(0, 0, 0, 0.6)',
                      }}
                    >
                      {value.description}
                    </p>

                    {/* Bottom accent line */}
                    <motion.div
                      animate={{
                        scaleX: hoveredCard === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.4, ease: appleEase }}
                      className="absolute bottom-0 left-0 right-0 h-1 origin-left rounded-b-3xl"
                      style={{
                        background: 'linear-gradient(90deg, #FBBF24 0%, #FCD34D 100%)',
                      }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SPLIT IMAGE SECTION 1 - Experience */}
      <section className="relative">
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          {/* Image Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: appleEase }}
            className="relative h-[400px] lg:h-auto"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1667922578520-61558e79aa7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBjcmFmdHNtYW4lMjB3b3JraW5nfGVufDF8fHx8MTc2MjIwMzA1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Craftsmanship"
              className="w-full h-full object-cover"
            />
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.2) 100%)',
              }}
            />
          </motion.div>

          {/* Text Right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: appleEase }}
            className="flex items-center px-8 lg:px-20 py-16 lg:py-24 bg-white"
          >
            <div>
              {/* Number Badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
                className="inline-block mb-8"
              >
                <div
                  className="inline-flex items-center gap-4 px-6 py-3 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.15) 0%, rgba(252, 211, 77, 0.1) 100%)',
                    border: '1px solid rgba(251, 191, 36, 0.3)',
                  }}
                >
                  <span
                    style={{
                      fontSize: '2rem',
                      color: '#FBBF24',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    15+
                  </span>
                  <span
                    style={{
                      fontSize: '0.875rem',
                      color: 'rgba(0, 0, 0, 0.6)',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Jaar Ervaring
                  </span>
                </div>
              </motion.div>

              <h3
                className="mb-6"
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                  letterSpacing: '-0.04em',
                  lineHeight: 1.1,
                  color: '#000',
                }}
              >
                Van klein tot<br />compleet
              </h3>
              <p
                className="mb-6"
                style={{
                  fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                  lineHeight: 1.7,
                  color: 'rgba(0, 0, 0, 0.65)',
                }}
              >
                Met meer dan 15 jaar ervaring in de bouwsector heb ik geleerd dat geen twee projecten hetzelfde zijn. Van kleine herstellingen tot complete renovaties — elk werk krijgt dezelfde zorg, toewijding en liefde.
              </p>
              <p
                style={{
                  fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                  lineHeight: 1.7,
                  color: 'rgba(0, 0, 0, 0.65)',
                }}
              >
                Die ervaring zet ik nu in samen met een gespecialiseerd team voor totaaloplossingen: <span style={{ color: '#FBBF24' }}>renovaties, vloeren, opritten en terrassen</span>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROCESS SECTION - Numbered Steps */}
      <section 
        className="py-32 px-6"
        style={{
          background: 'linear-gradient(180deg, #FAFAFA 0%, #FFFFFF 100%)',
        }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: appleEase }}
            className="text-center mb-24"
          >
            <h2
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                letterSpacing: '-0.04em',
                color: '#000',
                marginBottom: '1rem',
              }}
            >
              Mijn werkwijze
            </h2>
            <p
              style={{
                fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
                color: 'rgba(0, 0, 0, 0.5)',
              }}
            >
              Eenvoud, transparantie, resultaat
            </p>
          </motion.div>

          <div className="space-y-24">
            {[
              {
                number: "01",
                title: "Persoonlijk contact",
                description: "Direct contact met mij, de uitvoerder. Geen tussenpersonen. Ik begeleid uw project persoonlijk van begin tot eind. Uw vragen, ideeën en zorgen komen direct bij mij terecht."
              },
              {
                number: "02",
                title: "Transparante aanpak",
                description: "Duidelijke communicatie over planning, budget en uitvoering. U weet altijd waar u aan toe bent. Geen verrassingen achteraf, alleen eerlijke afspraken die we samen nakomen."
              },
              {
                number: "03",
                title: "Vakmanschap in detail",
                description: "Elk detail moet kloppen. Elke hoek, elke finish, elke afwerking krijgt de aandacht die het verdient. 15 jaar ervaring in elk vierkant centimeter zichtbaar."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: appleEase }}
                className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center"
              >
                {/* Number - Large and Bold */}
                <div className="lg:col-span-3">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.2, type: "spring" }}
                  >
                    <span
                      style={{
                        fontSize: 'clamp(6rem, 12vw, 10rem)',
                        fontWeight: 300,
                        color: 'rgba(251, 191, 36, 0.15)',
                        letterSpacing: '-0.05em',
                        lineHeight: 1,
                      }}
                    >
                      {step.number}
                    </span>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="lg:col-span-9">
                  <h3
                    className="mb-6"
                    style={{
                      fontSize: 'clamp(2rem, 4vw, 3rem)',
                      letterSpacing: '-0.03em',
                      color: '#000',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
                      lineHeight: 1.7,
                      color: 'rgba(0, 0, 0, 0.6)',
                    }}
                  >
                    {step.description}
                  </p>

                  {/* Accent line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.2 + 0.4, ease: appleEase }}
                    className="h-1 w-32 mt-8 origin-left"
                    style={{
                      background: 'linear-gradient(90deg, #FBBF24 0%, #FCD34D 100%)',
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SPLIT IMAGE SECTION 2 - Story */}
      <section className="relative">
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          {/* Text Left (order reversed on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: appleEase }}
            className="flex items-center px-8 lg:px-20 py-16 lg:py-24 bg-black text-white order-2 lg:order-1"
          >
            <div>
              <h3
                className="mb-8"
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                  letterSpacing: '-0.04em',
                  lineHeight: 1.1,
                  color: '#FFF',
                }}
              >
                Mijn belofte<br />aan u
              </h3>
              <p
                className="mb-6"
                style={{
                  fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                  lineHeight: 1.7,
                  color: 'rgba(255, 255, 255, 0.8)',
                }}
              >
                Bij Angelo Renovates staan <span style={{ color: '#FCD34D' }}>kwaliteit, vertrouwen en tevreden klanten</span> centraal. Elk afgewerkt resultaat beschouw ik als mijn eigen visitekaartje — iets waar ik trots op ben.
              </p>
              <p
                style={{
                  fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                  lineHeight: 1.7,
                  color: 'rgba(255, 255, 255, 0.8)',
                }}
              >
                Uw huis behandel ik met hetzelfde respect als mijn eigen. Transparantie, eerlijkheid en vakmanschap zonder compromissen.
              </p>

              {/* Yellow divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3, ease: appleEase }}
                className="h-1 w-32 mt-10 origin-left"
                style={{
                  background: 'linear-gradient(90deg, #FBBF24 0%, #FCD34D 100%)',
                }}
              />
            </div>
          </motion.div>

          {/* Image Right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: appleEase }}
            className="relative h-[400px] lg:h-auto order-1 lg:order-2"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1615974679960-414c1c7f08ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMGJ1aWxkaW5nJTIwd29vZHxlbnwxfHx8fDE3NjIyMDMwNTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Hands building"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* STATS SECTION - Clean Numbers */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: appleEase }}
            className="text-center mb-20"
          >
            <h2
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                letterSpacing: '-0.04em',
                color: '#000',
              }}
            >
              In cijfers
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-16 lg:gap-24">
            {[
              {
                number: "15+",
                label: "Jaar ervaring",
                description: "Een breed scala aan projecten"
              },
              {
                number: "100%",
                label: "Persoonlijke opvolging",
                description: "Van start tot afwerking"
              },
              {
                number: "∞",
                label: "Tevreden klanten",
                description: "Uw tevredenheid = mijn trots"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: appleEase }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.2, type: "spring" }}
                  className="mb-6"
                >
                  <div
                    style={{
                      fontSize: 'clamp(5rem, 10vw, 7rem)',
                      fontWeight: 300,
                      letterSpacing: '-0.04em',
                      background: 'linear-gradient(135deg, #FBBF24 0%, #FCD34D 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      lineHeight: 1,
                    }}
                  >
                    {stat.number}
                  </div>
                </motion.div>
                <div
                  className="mb-3"
                  style={{
                    fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
                    color: '#000',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {stat.label}
                </div>
                <p
                  style={{
                    fontSize: '1rem',
                    lineHeight: 1.6,
                    color: 'rgba(0, 0, 0, 0.5)',
                  }}
                >
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ReviewsSection />

      {/* FINAL CTA SECTION - Clean & Simple */}
      <section 
        className="py-40 px-6"
        style={{
          background: '#F5F5F7',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: appleEase }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2
            className="mb-8"
            style={{
              fontSize: 'clamp(3rem, 8vw, 5.5rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.05em',
              color: '#000',
            }}
          >
            Klaar om<br />te beginnen?
          </h2>
          
          <p
            className="max-w-2xl mx-auto"
            style={{
              fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
              lineHeight: 1.6,
              color: 'rgba(0, 0, 0, 0.6)',
            }}
          >
            Laten we samen uw droomproject realiseren.<br />
            Met passie, precisie en persoonlijke aandacht.
          </p>
        </motion.div>
      </section>

      {/* CONTACT FORM SECTION */}
      <ContactFormSection />

      {/* FOOTER */}
      <Footer hideCTA={true} onNavigate={onNavigate} />
    </motion.div>
  );
}
