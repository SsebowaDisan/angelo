import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, Sparkles, FileText } from 'lucide-react';
import { sendContactMessage } from '../lib/contactApi';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const appleEase = [0.28, 0, 0.4, 1] as const;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await sendContactMessage(formData);
      setSubmitted(true);

      // Reset form after 4 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
      }, 4000);
    } catch (error) {
      if (error instanceof Error) {
        setSubmitError(error.message);
      } else {
        setSubmitError('Er is iets misgelopen. Probeer het later opnieuw.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (submitError) {
      setSubmitError(null);
    }

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section 
      id="contact" 
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #000000 0%, #1a1a1a 30%, #f5f5f7 100%)',
      }}
    >
      {/* Sophisticated background layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Noise texture */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Radial gradient overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 0%, rgba(251, 191, 36, 0.06) 0%, transparent 60%)',
          }}
        />
        
        {/* Bottom light glow */}
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-30 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(251, 191, 36, 0.15) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative container mx-auto px-6 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          {/* Grid Layout - Form & Info Side by Side on Desktop */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-stretch">
            
            {/* LEFT SIDE - Headline & Contact Info */}
            <div className="flex flex-col space-y-8 lg:space-y-12">
              {/* Massive Headline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: appleEase }}
              >
                <h2 
                  className="text-white mb-2 lg:mb-4 tracking-[-0.03em]"
                  style={{
                    fontSize: 'clamp(2.25rem, 8vw, 6rem)',
                    fontWeight: 300,
                    lineHeight: 1.05,
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                  }}
                >
                  Laten we iets
                </h2>
                <h2 
                  className="tracking-[-0.03em]"
                  style={{
                    fontSize: 'clamp(2.25rem, 8vw, 6rem)',
                    fontWeight: 600,
                    lineHeight: 1.05,
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                    background: 'linear-gradient(135deg, #FCD34D 0%, #FBBF24 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  moois bouwen.
                </h2>
              </motion.div>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: appleEase }}
                className="text-white/60 max-w-md"
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.375rem)',
                  fontWeight: 300,
                  lineHeight: 1.6,
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                }}
              >
                Vertel ons over uw droomproject. Wij nemen binnen 24 uur contact met u op.
              </motion.p>

              {/* Contact Info Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.3, ease: appleEase }}
                className="space-y-3 lg:space-y-4 pt-4 lg:pt-8"
              >
                {/* Email */}
                <motion.a
                  href="mailto:info@angelorenovates.be"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3, ease: appleEase }}
                  className="flex items-center gap-4 p-4 rounded-2xl group"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, #FCD34D 0%, #FBBF24 100%)',
                    }}
                  >
                    <Mail className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm mb-0.5">Email</p>
                    <p 
                      className="text-white group-hover:text-yellow-400 transition-colors duration-300"
                      style={{
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                        fontWeight: 500,
                      }}
                    >
                      info@angelorenovates.be
                    </p>
                  </div>
                </motion.a>

                {/* Phone */}
                <motion.a
                  href="tel:+32478062748"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3, ease: appleEase }}
                  className="flex items-center gap-4 p-4 rounded-2xl group"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, #FCD34D 0%, #FBBF24 100%)',
                    }}
                  >
                    <Phone className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm mb-0.5">Telefoon</p>
                    <p 
                      className="text-white group-hover:text-yellow-400 transition-colors duration-300"
                      style={{
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                        fontWeight: 500,
                      }}
                    >
                      +32 478 06 27 48
                    </p>
                  </div>
                </motion.a>

                {/* BTW Number */}
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3, ease: appleEase }}
                  className="flex items-center gap-4 p-4 rounded-2xl"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, #FCD34D 0%, #FBBF24 100%)',
                    }}
                  >
                    <FileText className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm mb-0.5">BTW-nummer</p>
                    <p 
                      className="text-white"
                      style={{
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                        fontWeight: 500,
                      }}
                    >
                      BE0817410486
                    </p>
                  </div>
                </motion.div>

                {/* Location */}
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3, ease: appleEase }}
                  className="flex items-center gap-4 p-4 rounded-2xl"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, #FCD34D 0%, #FBBF24 100%)',
                    }}
                  >
                    <MapPin className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm mb-0.5">Locatie</p>
                    <p 
                      className="text-white"
                      style={{
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                        fontWeight: 500,
                      }}
                    >
                      België & omstreken
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* RIGHT SIDE - Premium Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2, ease: appleEase }}
              className="relative"
            >
              {/* Glass morphism container */}
              <div 
                className="p-6 sm:p-8 lg:p-16 rounded-2xl lg:rounded-3xl relative overflow-hidden"
                style={{
                  background: 'rgba(255, 255, 255, 1.0)',
                  backdropFilter: 'blur(40px)',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 1px 0 0 rgba(255, 255, 255, 0.5)',
                }}
              >
                {/* Subtle gradient overlay */}
                <div 
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(251, 191, 36, 0.5) 50%, transparent 100%)',
                  }}
                />

                <AnimatePresence mode="wait">
                  {submitted ? (
                    // SUCCESS STATE
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5, ease: appleEase }}
                      className="py-16 text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
                        className="relative inline-flex mb-6"
                      >
                        <div 
                          className="w-24 h-24 rounded-full flex items-center justify-center"
                          style={{
                            background: 'linear-gradient(135deg, #FCD34D 0%, #FBBF24 100%)',
                            boxShadow: '0 10px 40px rgba(251, 191, 36, 0.4)',
                          }}
                        >
                          <CheckCircle2 className="w-12 h-12 text-black" strokeWidth={2} />
                        </div>
                        {/* Sparkle effects */}
                        {[...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ 
                              scale: [0, 1, 0],
                              opacity: [0, 1, 0],
                              x: Math.cos((i * Math.PI * 2) / 6) * 50,
                              y: Math.sin((i * Math.PI * 2) / 6) * 50,
                            }}
                            transition={{ 
                              duration: 1.2, 
                              delay: 0.3 + i * 0.1,
                              ease: appleEase 
                            }}
                            className="absolute top-1/2 left-1/2"
                          >
                            <Sparkles className="w-4 h-4 text-yellow-400" />
                          </motion.div>
                        ))}
                      </motion.div>

                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4, ease: appleEase }}
                        className="text-black mb-3"
                        style={{
                          fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                          fontWeight: 600,
                          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                        }}
                      >
                        Bericht verzonden!
                      </motion.h3>

                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5, ease: appleEase }}
                        className="text-black/60"
                        style={{
                          fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                        }}
                      >
                        We nemen binnen 24 uur contact met u op.
                      </motion.p>
                    </motion.div>
                  ) : (
                    // FORM STATE
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-6 sm:space-y-8 lg:space-y-10"
                    >
                      {/* Name Field */}
                      <div className="relative">
                        <motion.input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          placeholder=" "
                          className="peer w-full px-4 sm:px-5 py-4 sm:py-5 bg-white/50 border-2 border-black/10 rounded-xl sm:rounded-2xl outline-none transition-all duration-300 text-black"
                          style={{
                            fontSize: '1.125rem',
                            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                            borderColor: focusedField === 'name' ? '#FBBF24' : 'rgba(0, 0, 0, 0.1)',
                            boxShadow: focusedField === 'name' ? '0 0 0 4px rgba(251, 191, 36, 0.1)' : 'none',
                          }}
                        />
                        <label
                          className="absolute left-4 sm:left-5 transition-all duration-300 pointer-events-none text-black/50"
                          style={{
                            fontSize: formData.name || focusedField === 'name' ? '0.75rem' : '1.125rem',
                            top: formData.name || focusedField === 'name' ? '-8px' : '18px',
                            background: formData.name || focusedField === 'name' ? 'white' : 'transparent',
                            padding: formData.name || focusedField === 'name' ? '0 8px' : '0',
                            color: focusedField === 'name' ? '#FBBF24' : 'rgba(0, 0, 0, 0.5)',
                            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                            fontWeight: 500,
                          }}
                        >
                          Naam
                        </label>
                      </div>

                      {/* Email Field */}
                      <div className="relative">
                        <motion.input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          placeholder=" "
                          className="peer w-full px-4 sm:px-5 py-4 sm:py-5 bg-white/50 border-2 border-black/10 rounded-xl sm:rounded-2xl outline-none transition-all duration-300 text-black"
                          style={{
                            fontSize: '1.125rem',
                            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                            borderColor: focusedField === 'email' ? '#FBBF24' : 'rgba(0, 0, 0, 0.1)',
                            boxShadow: focusedField === 'email' ? '0 0 0 4px rgba(251, 191, 36, 0.1)' : 'none',
                          }}
                        />
                        <label
                          className="absolute left-4 sm:left-5 transition-all duration-300 pointer-events-none text-black/50"
                          style={{
                            fontSize: formData.email || focusedField === 'email' ? '0.75rem' : '1.125rem',
                            top: formData.email || focusedField === 'email' ? '-8px' : '18px',
                            background: formData.email || focusedField === 'email' ? 'white' : 'transparent',
                            padding: formData.email || focusedField === 'email' ? '0 8px' : '0',
                            color: focusedField === 'email' ? '#FBBF24' : 'rgba(0, 0, 0, 0.5)',
                            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                            fontWeight: 500,
                          }}
                        >
                          Email
                        </label>
                      </div>

                      {/* Phone Field */}
                      <div className="relative">
                        <motion.input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('phone')}
                          onBlur={() => setFocusedField(null)}
                          placeholder=" "
                          className="peer w-full px-4 sm:px-5 py-4 sm:py-5 bg-white/50 border-2 border-black/10 rounded-xl sm:rounded-2xl outline-none transition-all duration-300 text-black"
                          style={{
                            fontSize: '1.125rem',
                            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                            borderColor: focusedField === 'phone' ? '#FBBF24' : 'rgba(0, 0, 0, 0.1)',
                            boxShadow: focusedField === 'phone' ? '0 0 0 4px rgba(251, 191, 36, 0.1)' : 'none',
                          }}
                        />
                        <label
                          className="absolute left-4 sm:left-5 transition-all duration-300 pointer-events-none text-black/50"
                          style={{
                            fontSize: formData.phone || focusedField === 'phone' ? '0.75rem' : '1.125rem',
                            top: formData.phone || focusedField === 'phone' ? '-8px' : '18px',
                            background: formData.phone || focusedField === 'phone' ? 'white' : 'transparent',
                            padding: formData.phone || focusedField === 'phone' ? '0 8px' : '0',
                            color: focusedField === 'phone' ? '#FBBF24' : 'rgba(0, 0, 0, 0.5)',
                            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                            fontWeight: 500,
                          }}
                        >
                          Telefoon (optioneel)
                        </label>
                      </div>

                      {/* Message Field - Responsive Height */}
                      <div className="relative">
                        <motion.textarea
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                          placeholder=" "
                          rows={8}
                          className="peer w-full px-4 sm:px-5 py-4 sm:py-5 bg-white/50 border-2 border-black/10 rounded-xl sm:rounded-2xl outline-none transition-all duration-300 resize-none text-black sm:!rows-12"
                          style={{
                            fontSize: '1.125rem',
                            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                            borderColor: focusedField === 'message' ? '#FBBF24' : 'rgba(0, 0, 0, 0.1)',
                            boxShadow: focusedField === 'message' ? '0 0 0 4px rgba(251, 191, 36, 0.1)' : 'none',
                          }}
                        />
                        <label
                          className="absolute left-4 sm:left-5 transition-all duration-300 pointer-events-none text-black/50"
                          style={{
                            fontSize: formData.message || focusedField === 'message' ? '0.75rem' : '1.125rem',
                            top: formData.message || focusedField === 'message' ? '-8px' : '18px',
                            background: formData.message || focusedField === 'message' ? 'white' : 'transparent',
                            padding: formData.message || focusedField === 'message' ? '0 8px' : '0',
                            color: focusedField === 'message' ? '#FBBF24' : 'rgba(0, 0, 0, 0.5)',
                            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                            fontWeight: 500,
                          }}
                        >
                          Vertel ons over uw project
                        </label>
                      </div>

                      {/* Submit Button */}
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="relative w-full py-5 sm:py-6 px-8 rounded-full overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed mt-2 sm:mt-4"
                        style={{
                          background: 'linear-gradient(135deg, #FCD34D 0%, #FBBF24 100%)',
                          boxShadow: '0 10px 30px rgba(251, 191, 36, 0.3)',
                        }}
                        transition={{ duration: 0.3, ease: appleEase }}
                      >
                        {/* Hover shine effect */}
                        <motion.div
                          className="absolute inset-0 opacity-0"
                          whileHover={{ opacity: 1 }}
                          style={{
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 100%)',
                          }}
                          transition={{ duration: 0.5, ease: appleEase }}
                        />

                        <span 
                          className="relative z-10 text-black flex items-center justify-center gap-3"
                          style={{
                            fontSize: '1.125rem',
                            fontWeight: 600,
                            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                          }}
                        >
                          {isSubmitting ? (
                            <>
                              <motion.div 
                                className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                              />
                              Verzenden...
                            </>
                          ) : (
                            'Verstuur Bericht'
                          )}
                        </span>
                      </motion.button>

                      {submitError ? (
                        <p
                          className="text-red-600"
                          style={{
                            fontSize: '0.9375rem',
                            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                            fontWeight: 500,
                          }}
                        >
                          {submitError}
                        </p>
                      ) : null}
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
