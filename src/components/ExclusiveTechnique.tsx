import { motion } from 'motion/react';
import { Sparkles, CheckCircle, Shield, Zap } from 'lucide-react';

export function ExclusiveTechnique() {
  const appleEase = [0.28, 0, 0.4, 1] as const;

  const benefits = [
    { icon: CheckCircle, text: 'Geen breekwerk of stof' },
    { icon: Shield, text: 'Bestaande vloer blijft behouden' },
    { icon: Zap, text: 'Snel en zonder overlast' },
  ];

  return (
    <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(251, 191, 36, 0.15) 0%, transparent 70%)',
          }}
        />
        
        {/* Subtle grid */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: appleEase }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-black/5 border border-yellow-400/30">
            <Sparkles className="w-4 h-4 text-yellow-500" strokeWidth={2.5} />
            <span
              className="text-yellow-600"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                fontSize: '0.875rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              Exclusieve Techniek
            </span>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: appleEase }}
            className="text-black mb-6"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
              fontSize: 'clamp(2.25rem, 6vw, 4rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
            }}
          >
            Holle tegels herstellen
            <br />
            <span className="text-yellow-500">zonder breekwerk</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: appleEase }}
            className="text-gray-600 mb-12"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
              fontSize: 'clamp(1.0625rem, 1.5vw, 1.375rem)',
              lineHeight: 1.7,
              letterSpacing: '-0.01em',
            }}
          >
            Wij passen een exclusieve hersteltechniek toe die in België slechts zelden wordt aangeboden. 
            Zonder uitbreken, zonder stof, zonder schade aan je vloer. Met deze professionele methode 
            herstellen we holle of losliggende vloertegels zodat ze weer stevig vastzitten — snel, proper 
            en nagenoeg onzichtbaar.
          </motion.p>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: appleEase }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12"
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1, ease: appleEase }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative group"
                >
                  <div 
                    className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-200/60 hover:border-yellow-400/40 transition-all duration-500"
                    style={{
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                    }}
                  >
                    {/* Icon */}
                    <div className="mb-4 flex justify-center">
                      <div className="relative">
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-yellow-400/20 rounded-2xl blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <div className="relative w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center">
                          <Icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" strokeWidth={2} />
                        </div>
                      </div>
                    </div>

                    {/* Text */}
                    <p
                      className="text-black group-hover:text-yellow-600 transition-colors duration-300"
                      style={{
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                        fontSize: 'clamp(0.9375rem, 1.125vw, 1.0625rem)',
                        fontWeight: 600,
                        lineHeight: 1.5,
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {benefit.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bottom Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.6, ease: appleEase }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-10 border border-gray-200/60"
            style={{
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
            }}
          >
            {/* Section Title */}
            <h3
              className="text-black mb-6"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                fontSize: 'clamp(1.25rem, 2vw, 1.625rem)',
                fontWeight: 600,
                letterSpacing: '-0.02em',
              }}
            >
              Ideaal voor
            </h3>

            {/* Applications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              {[
                'Woningen en appartementen',
                'Luxe en moderne interieurs',
                'Winkelruimtes en showrooms',
                'Keramische tegels en natuursteen',
                'Holklinkende of losliggende tegels',
                'Renovatieprojecten zonder overlast',
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.05, ease: appleEase }}
                  className="flex items-start gap-3 group"
                >
                  {/* Dot */}
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-yellow-400 group-hover:bg-yellow-500 transition-colors duration-300" />
                  
                  <p
                    className="text-gray-700 group-hover:text-black transition-colors duration-300 flex-1"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                      fontSize: 'clamp(0.9375rem, 1.125vw, 1.0625rem)',
                      fontWeight: 400,
                      lineHeight: 1.6,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
