import { motion } from 'motion/react';
import { ArrowRight, Hammer, Wrench, Home, Drill, Package, Truck, Camera, Flame, Sparkles, Building, Droplets } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Header } from './Header';
import { ContactFormSection } from './ContactFormSection';
import { Footer } from './Footer';
import vloerwerkzaamhedenImage from '../assets/Vloerwerkzaamheden.png';
import oprittenTerrassenImage from '../assets/Opritten en terrassen.png';
import totaleProjectenImage from '../assets/Totale projecten.png';
import schoorsteenvegenRenovatieImage from '../assets/Schoorsteenvegen en renovatie.png';
import exclusieveTegelherstellingImage from '../assets/Exclusieve tegelherstelling zonder breekwerk.png';

const services = [
  {
    id: 'metselwerk',
    title: 'Metselwerken',
    description: 'Degelijk metselwerk van fundering tot afwerking. Met jarenlange ervaring zorgen wij voor een resultaat dat zowel functioneel als esthetisch sterk staat.',
    image: 'https://images.unsplash.com/photo-1673865641469-34498379d8af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlja2xheWluZyUyMG1hc29ucnklMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzYyMjA3MzA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: Hammer,
  },
  {
    id: 'voegwerk',
    title: 'Voegwerken',
    description: 'Professionele voegwerken die uw gevel beschermen tegen vocht en slijtage. Voor een duurzame én fraaie afwerking.',
    image: 'https://images.unsplash.com/photo-1628574498258-30a3e702f8a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2ludGluZyUyMG1vcnRhciUyMGpvaW50c3xlbnwxfHx8fDE3NjIyMDczMDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: Wrench,
  },
  {
    id: 'muurinjectie-opstijgend-vocht',
    title: 'Muurinjectie tegen opstijgend vocht',
    description: 'Professionele muurinjectiebehandeling met waterafstotende barrière om opstijgend vocht duurzaam te stoppen.',
    image: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmljayUyMHdhbGwlMjBob3VzZXxlbnwxfHx8fDE3OTU0MjQ5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: Droplets,
  },
  {
    id: 'renovatiewerkzaamheden',
    title: 'Renovatiewerken',
    description: 'Complete renovaties van A tot Z. Van kleine aanpassingen tot grote transformaties, wij begeleiden uw project van begin tot eind.',
    image: 'https://images.unsplash.com/photo-1761986757577-140af8859587?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwcmVub3ZhdGlvbiUyMGludGVyaW9yfGVufDF8fHx8MTc2MjA4NDI4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: Home,
  },
  {
    id: 'sloop-ruwbouw',
    title: 'Afbraak en structurele werken',
    description: 'Kracht, vakmanschap en veiligheid gecombineerd. Van binnenafbraak tot het verwijderen van draagmuren, wij klaren de klus efficiënt.',
    image: 'https://images.unsplash.com/photo-1678944827354-fb54b9040a04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW1vbGl0aW9uJTIwY29uc3RydWN0aW9uJTIwd29ya3xlbnwxfHx8fDE3NjIyMDczMDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: Drill,
  },
  {
    id: 'vloerwerkzaamheden',
    title: 'Vloerwerken',
    description: 'Professionele vloerwerken op maat. Van tegels tot parket, wij zorgen voor een vloer die perfect past bij uw interieur.',
    image: vloerwerkzaamhedenImage,
    icon: Package,
  },
  {
    id: 'tegelherstelling',
    title: 'Exclusieve tegelherstelling zonder breekwerk',
    description: 'Unieke techniek in België. Holle of losliggende tegels herstellen zonder uitbraak, stof of schade aan uw vloer.',
    image: exclusieveTegelherstellingImage,
    icon: Sparkles,
    featured: true,
  },
  {
    id: 'opritten-terrassen',
    title: 'Opritten en terrassen',
    description: 'Duurzaam vakwerk met oog voor detail. Het visitekaartje van uw woning, perfect uitgevoerd.',
    image: oprittenTerrassenImage,
    icon: Truck,
  },
  {
    id: 'totale-projecten',
    title: 'Totaalprojecten',
    description: 'Complete bouw- en renovatieoplossingen uit één hand. Van ontwerp tot oplevering, zorgeloos en met één aanspreekpunt.',
    image: totaleProjectenImage,
    icon: Building,
  },
  {
    id: 'camera-inspectie',
    title: 'Camera-inspectie',
    description: 'Snel en nauwkeurig zonder breekwerken. Professionele inspectie van uw rioleringsbuizen met uitgebreid verslag.',
    image: 'https://images.unsplash.com/photo-1706206140285-fd36d93aaa83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmFpbiUyMHBpcGUlMjBpbnNwZWN0aW9ufGVufDF8fHx8MTc2MjIwNzMxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: Camera,
  },
  {
    id: 'schoorsteenvegen',
    title: 'Schoorsteenreiniging en renovatie',
    description: 'Voor een veilige en efficiënte rookafvoer. Professionele reiniging met officieel attest en deskundige renovatie.',
    image: schoorsteenvegenRenovatieImage,
    icon: Flame,
  },
];

interface DienstenPageProps {
  onClose: () => void;
  onServiceClick: (serviceId: string) => void;
  onNavigate?: (page: string) => void;
}

export function DienstenPage({ 
  onClose, 
  onServiceClick,
  onNavigate
}: DienstenPageProps) {
  return (
    <div className="fixed inset-0 bg-black z-[9999] overflow-y-auto">
      {/* Header */}
      <Header 
        currentPage="diensten"
        onNavigate={onNavigate}
        onClose={onClose}
        isOverlay={true}
        onServiceClick={onServiceClick}
      />

      {/* Hero Section */}
      <section id="alle-diensten" className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#0a0a0a]" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 -left-32 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 -right-32 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
          />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8 py-20 lg:py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/20 backdrop-blur-sm">
                <span
                  className="text-yellow-400"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                    fontSize: '14px',
                    fontWeight: 600,
                    letterSpacing: '0.02em',
                    textTransform: 'uppercase',
                  }}
                >
                  Onze Expertise
                </span>
              </div>
            </motion.div>

            <h1
              className="text-white mb-6"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                fontSize: 'clamp(48px, 8vw, 96px)',
                fontWeight: 700,
                letterSpacing: '-0.04em',
                lineHeight: 1.05,
              }}
            >
              Diensten
            </h1>

            <p
              className="text-white/60 max-w-2xl mx-auto"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                fontSize: 'clamp(18px, 2.5vw, 24px)',
                fontWeight: 400,
                letterSpacing: '-0.01em',
                lineHeight: 1.5,
              }}
            >
              Van metselwerk tot totaalprojecten.
              <br />
              Professionele bouwdiensten met oog voor detail.
            </p>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-white/40"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Grid Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-b from-[#0a0a0a] to-black">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative"
              >
                <div 
                  onClick={() => onServiceClick(service.id)} 
                  className="block cursor-pointer"
                >
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="relative h-full"
                  >
                    {/* Featured badge */}
                    {service.featured && (
                      <div className="absolute -top-3 -right-3 z-20">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.5, type: "spring", stiffness: 200 }}
                          className="px-3 py-1.5 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-xl shadow-yellow-400/30"
                        >
                          <span
                            className="text-black"
                            style={{
                              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                              fontSize: '11px',
                              fontWeight: 700,
                              letterSpacing: '0.05em',
                              textTransform: 'uppercase',
                            }}
                          >
                            Uniek
                          </span>
                        </motion.div>
                      </div>
                    )}

                    {/* Card */}
                    <div className="relative h-full overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-500 group-hover:bg-white/8 group-hover:border-yellow-400/40">
                      {/* Image */}
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <motion.div
                          className="absolute inset-0"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <ImageWithFallback
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                        
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />
                        
                        {/* Icon badge on image */}
                        <div className="absolute top-4 left-4 z-10">
                          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-black/60 backdrop-blur-xl border border-white/20 transition-all duration-500 group-hover:bg-yellow-400 group-hover:border-yellow-400">
                            <service.icon 
                              size={20} 
                              className="text-white transition-colors duration-500 group-hover:text-black" 
                              strokeWidth={2}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 lg:p-8">
                        <h3
                          className="text-white mb-3 transition-colors duration-500 group-hover:text-yellow-400"
                          style={{
                            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                            fontSize: 'clamp(20px, 2.5vw, 24px)',
                            fontWeight: 600,
                            letterSpacing: '-0.02em',
                            lineHeight: 1.2,
                          }}
                        >
                          {service.title}
                        </h3>

                        <p
                          className="text-white/60 mb-6"
                          style={{
                            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                            fontSize: '15px',
                            fontWeight: 400,
                            letterSpacing: '-0.01em',
                            lineHeight: 1.5,
                          }}
                        >
                          {service.description}
                        </p>

                        {/* CTA */}
                        <div className="flex items-center gap-2 text-yellow-400 transition-all duration-300 group-hover:gap-4">
                          <span
                            style={{
                              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                              fontSize: '15px',
                              fontWeight: 600,
                              letterSpacing: '-0.01em',
                            }}
                          >
                            Meer info
                          </span>
                          <ArrowRight size={18} strokeWidth={2.5} />
                        </div>
                      </div>
                    </div>

                    {/* Glow effect */}
                    <div className="absolute inset-0 -z-10 rounded-3xl bg-yellow-400/20 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ transform: 'scale(0.95)' }} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 lg:py-32 bg-black">
        <div className="max-w-[980px] mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2
              className="text-white mb-6"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                fontSize: 'clamp(36px, 6vw, 56px)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
              }}
            >
              Klaar om te starten?
            </h2>

            <p
              className="text-white/60 mb-10 max-w-2xl mx-auto"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                fontSize: 'clamp(17px, 2vw, 21px)',
                fontWeight: 400,
                letterSpacing: '-0.01em',
                lineHeight: 1.5,
              }}
            >
              Neem contact op voor een vrijblijvend adviesgesprek.
              <br />
              Wij denken graag met u mee!
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <button
                onClick={() => {
                  // Scroll to contact section
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    const headerOffset = 80;
                    const elementPosition = contactSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/30"
              >
                <span
                  className="text-black"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                    fontSize: '17px',
                    fontWeight: 600,
                    letterSpacing: '-0.01em',
                  }}
                >
                  Vraag offerte aan
                </span>
                <ArrowRight size={20} className="text-black" strokeWidth={2.5} />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactFormSection />

      {/* Footer */}
      <Footer hideCTA={true} />
    </div>
  );
}
