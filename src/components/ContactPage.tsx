import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, Sparkles, FileText, ArrowRight, Clock, X } from 'lucide-react';
import { Header } from './Header';
import { sendContactMessage } from '../lib/contactApi';

interface ContactPageProps {
  onClose: () => void;
  onNavigate: (page: string) => void;
}

export function ContactPage({ onClose, onNavigate }: ContactPageProps) {
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: appleEase }}
      className="fixed inset-0 z-[9999] bg-white overflow-y-auto"
    >
      {/* Header */}
      <Header 
        currentPage="contact"
        onNavigate={onNavigate}
        isOverlay={false}
      />

      {/* Main Content */}
      <section className="relative overflow-hidden bg-white pt-24 lg:pt-32">
        {/* Background Decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Top gradient glow */}
          <div 
            className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] opacity-20 blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(251, 191, 36, 0.3) 0%, transparent 70%)',
            }}
          />
          
          {/* Grid pattern */}
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '48px 48px',
            }}
          />
        </div>

        <div className="relative container mx-auto px-6 py-12 lg:py-20">
          <div className="max-w-7xl mx-auto">
            
            {/* Section Header - Centered */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: appleEase }}
              className="text-center mb-16 lg:mb-24"
            >
              {/* Badge */}
              <div 
                className="inline-flex items-center gap-3 px-5 py-2 rounded-full mb-6"
                style={{
                  background: 'rgba(251, 191, 36, 0.1)',
                  border: '1px solid rgba(251, 191, 36, 0.2)',
                }}
              >
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                <span 
                  className="text-yellow-600"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  Contact
                </span>
              </div>

              {/* Main Heading */}
              <h1 
                className="text-black mb-6"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                  fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.04em',
                  lineHeight: 1.05,
                }}
              >
                Laten we iets
                <br />
                <span 
                  style={{
                    background: 'linear-gradient(135deg, #FCD34D 0%, #FBBF24 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  moois bouwen.
                </span>
              </h1>

              {/* Subheadline */}
              <p 
                className="text-black/60 max-w-2xl mx-auto"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                  fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                  fontWeight: 400,
                  letterSpacing: '-0.01em',
                  lineHeight: 1.5,
                }}
              >
                Vertel ons over uw droomproject. Wij nemen binnen 24 uur contact met u op.
              </p>
            </motion.div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
              
              {/* LEFT SIDE - Contact Cards (2/5 width) */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: appleEase }}
                className="lg:col-span-2 space-y-4"
              >
                {/* Quick Contact Title */}
                <h2 
                  className="text-black mb-6"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    fontWeight: 600,
                    letterSpacing: '-0.02em',
                  }}
                >
                  Direct Contact
                </h2>

                {/* Email Card */}
                <motion.a
                  href="mailto:info@angelorenovates.be"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: appleEase }}
                  className="block p-6 rounded-2xl group bg-white"
                  style={{
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div 
                      className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, #FCD34D 0%, #FBBF24 100%)',
                      }}
                    >
                      <Mail className="w-5 h-5 text-black" strokeWidth={2} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p 
                        className="text-black/40 mb-1"
                        style={{
                          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                          fontSize: '0.8125rem',
                          fontWeight: 600,
                          letterSpacing: '0.05em',
                          textTransform: 'uppercase',
                        }}
                      >
                        Email
                      </p>
                      <p 
                        className="text-black group-hover:text-yellow-600 transition-colors duration-300 break-words"
                        style={{
                          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                          fontSize: '1rem',
                          fontWeight: 600,
                          letterSpacing: '-0.01em',
                        }}
                      >
                        info@angelorenovates.be
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-black/20 group-hover:text-yellow-600 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                  </div>
                </motion.a>

                {/* Phone Card */}
                <motion.a
                  href="tel:+32478062748"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: appleEase }}
                  className="block p-6 rounded-2xl group bg-white"
                  style={{
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div 
                      className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, #FCD34D 0%, #FBBF24 100%)',
                      }}
                    >
                      <Phone className="w-5 h-5 text-black" strokeWidth={2} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p 
                        className="text-black/40 mb-1"
                        style={{
                          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                          fontSize: '0.8125rem',
                          fontWeight: 600,
                          letterSpacing: '0.05em',
                          textTransform: 'uppercase',
                        }}
                      >
                        Telefoon
                      </p>
                      <p 
                        className="text-black group-hover:text-yellow-600 transition-colors duration-300"
                        style={{
                          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                          fontSize: '1.125rem',
                          fontWeight: 600,
                          letterSpacing: '0.02em',
                        }}
                      >
                        +32 478 06 27 48
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-black/20 group-hover:text-yellow-600 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                  </div>
                </motion.a>

                {/* Info Cards - Stacked */}
                <div className="space-y-4 pt-4">
                  {/* BTW Number */}
                  <div 
                    className="p-5 rounded-xl"
                    style={{
                      background: 'rgba(251, 191, 36, 0.05)',
                      border: '1px solid rgba(251, 191, 36, 0.1)',
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-yellow-600" strokeWidth={2} />
                      <div>
                        <p 
                          className="text-black/40 mb-0.5"
                          style={{
                            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                          }}
                        >
                          BTW-nummer
                        </p>
                        <p 
                          className="text-black"
                          style={{
                            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                            fontSize: '0.9375rem',
                            fontWeight: 600,
                            letterSpacing: '0.02em',
                          }}
                        >
                          BE0817410486
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div 
                    className="p-5 rounded-xl"
                    style={{
                      background: 'rgba(251, 191, 36, 0.05)',
                      border: '1px solid rgba(251, 191, 36, 0.1)',
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-yellow-600" strokeWidth={2} />
                      <div>
                        <p 
                          className="text-black/40 mb-0.5"
                          style={{
                            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                          }}
                        >
                          Locatie
                        </p>
                        <p 
                          className="text-black"
                          style={{
                            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                            fontSize: '0.9375rem',
                            fontWeight: 600,
                          }}
                        >
                          België & omstreken
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Response Time */}
                  <div 
                    className="p-5 rounded-xl"
                    style={{
                      background: 'rgba(251, 191, 36, 0.05)',
                      border: '1px solid rgba(251, 191, 36, 0.1)',
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-yellow-600" strokeWidth={2} />
                      <div>
                        <p 
                          className="text-black/40 mb-0.5"
                          style={{
                            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                          }}
                        >
                          Reactietijd
                        </p>
                        <p 
                          className="text-black"
                          style={{
                            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                            fontSize: '0.9375rem',
                            fontWeight: 600,
                          }}
                        >
                          Binnen 24 uur
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* RIGHT SIDE - Contact Form (3/5 width) */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: appleEase }}
                className="lg:col-span-3"
              >
                {/* Premium Form Container */}
                <div 
                  className="p-8 lg:p-12 rounded-3xl relative overflow-hidden bg-white"
                  style={{
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)',
                  }}
                >
                  {/* Top accent line */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{
                      background: 'linear-gradient(90deg, transparent 0%, #FCD34D 25%, #FBBF24 75%, transparent 100%)',
                    }}
                  />

                  <AnimatePresence mode="wait">
                    {submitted ? (
                      // SUCCESS STATE
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5, ease: appleEase }}
                        className="py-20 text-center"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 150 }}
                          className="relative inline-flex mb-8"
                        >
                          <div 
                            className="w-28 h-28 rounded-full flex items-center justify-center"
                            style={{
                              background: 'linear-gradient(135deg, #FCD34D 0%, #FBBF24 100%)',
                              boxShadow: '0 20px 60px rgba(251, 191, 36, 0.4)',
                            }}
                          >
                            <CheckCircle2 className="w-14 h-14 text-black" strokeWidth={2.5} />
                          </div>
                          
                          {/* Sparkle effects */}
                          {[...Array(8)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ 
                                scale: [0, 1, 0],
                                opacity: [0, 1, 0],
                                x: Math.cos((i * Math.PI * 2) / 8) * 60,
                                y: Math.sin((i * Math.PI * 2) / 8) * 60,
                              }}
                              transition={{ 
                                duration: 1.4, 
                                delay: 0.3 + i * 0.08,
                                ease: appleEase 
                              }}
                              className="absolute top-1/2 left-1/2"
                            >
                              <Sparkles className="w-5 h-5 text-yellow-400" />
                            </motion.div>
                          ))}
                        </motion.div>

                        <motion.h3
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.4, ease: appleEase }}
                          className="text-black mb-4"
                          style={{
                            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                            fontWeight: 700,
                            letterSpacing: '-0.02em',
                          }}
                        >
                          Bericht verzonden!
                        </motion.h3>

                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.5, ease: appleEase }}
                          className="text-black/60 max-w-md mx-auto"
                          style={{
                            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                            fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                            fontWeight: 400,
                            lineHeight: 1.6,
                          }}
                        >
                          Bedankt voor uw bericht. We nemen zo snel mogelijk contact met u op.
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
                        className="space-y-6"
                      >
                        {/* Name Field */}
                        <div className="relative">
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('name')}
                            onBlur={() => setFocusedField(null)}
                            placeholder=" "
                            className="peer w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl outline-none transition-all duration-300 text-black"
                            style={{
                              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                              fontSize: '1rem',
                              borderColor: focusedField === 'name' ? '#FBBF24' : 'transparent',
                              boxShadow: focusedField === 'name' ? '0 0 0 4px rgba(251, 191, 36, 0.1)' : 'none',
                            }}
                          />
                          <label
                            className="absolute left-5 transition-all duration-300 pointer-events-none text-black/50"
                            style={{
                              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                              fontSize: formData.name || focusedField === 'name' ? '0.75rem' : '1rem',
                              top: formData.name || focusedField === 'name' ? '-8px' : '16px',
                              background: formData.name || focusedField === 'name' ? 'white' : 'transparent',
                              padding: formData.name || focusedField === 'name' ? '0 8px' : '0',
                              color: focusedField === 'name' ? '#FBBF24' : 'rgba(0, 0, 0, 0.5)',
                              fontWeight: 500,
                            }}
                          >
                            Naam *
                          </label>
                        </div>

                        {/* Email Field */}
                        <div className="relative">
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('email')}
                            onBlur={() => setFocusedField(null)}
                            placeholder=" "
                            className="peer w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl outline-none transition-all duration-300 text-black"
                            style={{
                              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                              fontSize: '1rem',
                              borderColor: focusedField === 'email' ? '#FBBF24' : 'transparent',
                              boxShadow: focusedField === 'email' ? '0 0 0 4px rgba(251, 191, 36, 0.1)' : 'none',
                            }}
                          />
                          <label
                            className="absolute left-5 transition-all duration-300 pointer-events-none text-black/50"
                            style={{
                              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                              fontSize: formData.email || focusedField === 'email' ? '0.75rem' : '1rem',
                              top: formData.email || focusedField === 'email' ? '-8px' : '16px',
                              background: formData.email || focusedField === 'email' ? 'white' : 'transparent',
                              padding: formData.email || focusedField === 'email' ? '0 8px' : '0',
                              color: focusedField === 'email' ? '#FBBF24' : 'rgba(0, 0, 0, 0.5)',
                              fontWeight: 500,
                            }}
                          >
                            E-mail *
                          </label>
                        </div>

                        {/* Phone Field */}
                        <div className="relative">
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('phone')}
                            onBlur={() => setFocusedField(null)}
                            placeholder=" "
                            className="peer w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl outline-none transition-all duration-300 text-black"
                            style={{
                              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                              fontSize: '1rem',
                              borderColor: focusedField === 'phone' ? '#FBBF24' : 'transparent',
                              boxShadow: focusedField === 'phone' ? '0 0 0 4px rgba(251, 191, 36, 0.1)' : 'none',
                            }}
                          />
                          <label
                            className="absolute left-5 transition-all duration-300 pointer-events-none text-black/50"
                            style={{
                              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                              fontSize: formData.phone || focusedField === 'phone' ? '0.75rem' : '1rem',
                              top: formData.phone || focusedField === 'phone' ? '-8px' : '16px',
                              background: formData.phone || focusedField === 'phone' ? 'white' : 'transparent',
                              padding: formData.phone || focusedField === 'phone' ? '0 8px' : '0',
                              color: focusedField === 'phone' ? '#FBBF24' : 'rgba(0, 0, 0, 0.5)',
                              fontWeight: 500,
                            }}
                          >
                            Telefoon
                          </label>
                        </div>

                        {/* Message Field */}
                        <div className="relative">
                          <textarea
                            name="message"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('message')}
                            onBlur={() => setFocusedField(null)}
                            placeholder=" "
                            rows={6}
                            className="peer w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl outline-none transition-all duration-300 resize-none text-black"
                            style={{
                              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                              fontSize: '1rem',
                              borderColor: focusedField === 'message' ? '#FBBF24' : 'transparent',
                              boxShadow: focusedField === 'message' ? '0 0 0 4px rgba(251, 191, 36, 0.1)' : 'none',
                            }}
                          />
                          <label
                            className="absolute left-5 transition-all duration-300 pointer-events-none text-black/50"
                            style={{
                              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                              fontSize: formData.message || focusedField === 'message' ? '0.75rem' : '1rem',
                              top: formData.message || focusedField === 'message' ? '-8px' : '16px',
                              background: formData.message || focusedField === 'message' ? 'white' : 'transparent',
                              padding: formData.message || focusedField === 'message' ? '0 8px' : '0',
                              color: focusedField === 'message' ? '#FBBF24' : 'rgba(0, 0, 0, 0.5)',
                              fontWeight: 500,
                            }}
                          >
                            Vertel ons over uw project *
                          </label>
                        </div>

                        {/* Submit Button */}
                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="relative w-full py-5 px-8 rounded-full overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed mt-4"
                          style={{
                            background: 'linear-gradient(135deg, #FCD34D 0%, #FBBF24 100%)',
                            boxShadow: '0 10px 30px rgba(251, 191, 36, 0.3)',
                          }}
                          transition={{ duration: 0.3, ease: appleEase }}
                        >
                          <span 
                            className="relative z-10 text-black flex items-center justify-center gap-3"
                            style={{
                              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                              fontSize: '1.0625rem',
                              fontWeight: 700,
                              letterSpacing: '-0.01em',
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
                              <>
                                Verstuur Bericht
                                <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                              </>
                            )}
                          </span>
                        </motion.button>

                        {submitError ? (
                          <p
                            className="text-red-600"
                            style={{
                              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                              fontSize: '0.9375rem',
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
    </motion.div>
  );
}
