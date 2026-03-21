import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight } from 'lucide-react';
import logo from 'figma:asset/8cb1fca3c902220c667fee9042542c6d500eb0b2.png';
import { servicesData } from '../data/servicesData';

interface HeaderProps {
  currentPage?: 'home' | 'wie-ben-ik' | 'diensten' | 'verhuur' | 'projecten' | 'contact';
  onNavigate?: (page: string) => void;
  onClose?: () => void;
  isOverlay?: boolean;
  onServiceClick?: (serviceId: string) => void;
}

export function Header({ 
  currentPage = 'home',
  onNavigate,
  onClose,
  isOverlay = false,
  onServiceClick
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Navigation items
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'wie-ben-ik', label: 'Wie ben ik' },
    { id: 'diensten', label: 'Diensten', hasDropdown: true },
    { id: 'verhuur', label: 'Verhuur' },
    { id: 'projecten', label: 'Projecten' },
    { id: 'contact', label: 'Contact' },
  ];

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isMobileMenuOpen) setIsMobileMenuOpen(false);
        if (isDropdownOpen) setIsDropdownOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen, isDropdownOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Handle navigation
  const handleNavClick = useCallback((itemId: string) => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
    
    if (onNavigate) {
      onNavigate(itemId);
    }
  }, [onNavigate]);

  // Handle service click
  const handleServiceClick = useCallback((serviceId: string) => {
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
    
    if (onServiceClick) {
      onServiceClick(serviceId);
    } else if (onNavigate) {
      // Trigger custom event for service click
      window.dispatchEvent(new CustomEvent('openService', { detail: { serviceId } }));
    }
  }, [onServiceClick, onNavigate]);

  // Dropdown hover handlers
  const handleDropdownEnter = useCallback(() => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setIsDropdownOpen(true);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  }, []);

  // Cleanup timeout
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
          isOverlay ? 'z-[10000]' : 'z-50'
        }`}
      >
        {/* Glassmorphic Background */}
        <div 
          className="absolute inset-0 transition-all duration-500"
          style={{
            background: isScrolled 
              ? 'linear-gradient(180deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.85) 100%)'
              : 'linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 100%)',
            backdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'blur(16px) saturate(150%)',
            WebkitBackdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'blur(16px) saturate(150%)',
          }}
        />
        
        {/* Subtle border when scrolled */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-px transition-opacity duration-500"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%)',
            opacity: isScrolled ? 1 : 0,
          }}
        />

        <div className="relative mx-auto px-6 lg:px-8 max-w-[1400px]">
          <nav className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <motion.button 
              onClick={() => handleNavClick('home')}
              className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-lg relative z-10"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              aria-label="Angelo Renovates - Home"
            >
              <img 
                src={logo} 
                alt="Angelo Renovates" 
                className="h-16 lg:h-24 brightness-110"
                style={{
                  filter: 'drop-shadow(0 4px 12px rgba(251, 191, 36, 0.2))',
                }}
              />
            </motion.button>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = currentPage === item.id || 
                  (item.id === 'diensten' && currentPage === 'diensten');
                
                // Special handling for Diensten with dropdown
                if (item.hasDropdown) {
                  return (
                    <div 
                      key={item.id}
                      className="relative"
                      onMouseEnter={handleDropdownEnter}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <motion.button
                        onClick={() => handleNavClick(item.id)}
                        className={`relative px-4 py-2 text-[15px] transition-colors duration-200 rounded-lg ${
                          isActive
                            ? 'text-yellow-400'
                            : 'text-white/90 hover:text-yellow-400'
                        }`}
                        style={{
                          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                          fontWeight: 500,
                          letterSpacing: '-0.01em',
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      >
                        {item.label}
                        
                        {/* Active indicator */}
                        {isActive && (
                          <motion.div
                            layoutId="activeIndicator"
                            className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-yellow-400"
                            style={{
                              boxShadow: '0 0 8px rgba(251, 191, 36, 0.8)',
                            }}
                            transition={{ 
                              type: "spring", 
                              stiffness: 380, 
                              damping: 30 
                            }}
                          />
                        )}
                      </motion.button>

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2, ease: [0.28, 0, 0.4, 1] }}
                            className="absolute top-full right-0 mt-2 w-[420px] rounded-2xl overflow-hidden"
                            style={{
                              background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.98) 0%, rgba(0, 0, 0, 0.95) 100%)',
                              backdropFilter: 'blur(24px) saturate(180%)',
                              WebkitBackdropFilter: 'blur(24px) saturate(180%)',
                              border: '1px solid rgba(255, 255, 255, 0.1)',
                              boxShadow: '0 20px 60px -15px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.05)',
                            }}
                          >
                            {/* Header */}
                            <div className="px-6 py-4 border-b border-white/10">
                              <p 
                                className="text-white/50 text-xs uppercase tracking-wider"
                                style={{
                                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                                  fontWeight: 500,
                                }}
                              >
                                Onze Diensten
                              </p>
                            </div>

                            {/* Services Grid */}
                            <div className="p-3 max-h-[500px] overflow-y-auto">
                              {servicesData.map((service, index) => (
                                <motion.button
                                  key={service.id}
                                  onClick={() => handleServiceClick(service.id)}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ 
                                    duration: 0.2, 
                                    delay: index * 0.03,
                                    ease: [0.28, 0, 0.4, 1]
                                  }}
                                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group"
                                  style={{
                                    background: 'transparent',
                                  }}
                                  whileHover={{
                                    background: 'rgba(251, 191, 36, 0.1)',
                                  }}
                                >
                                  <span 
                                    className="text-white/80 group-hover:text-yellow-400 transition-colors duration-200 text-left text-[14px]"
                                    style={{
                                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                                      fontWeight: 500,
                                      letterSpacing: '-0.01em',
                                    }}
                                  >
                                    {service.title}
                                  </span>
                                  <ChevronRight 
                                    size={16} 
                                    className="text-white/30 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all duration-200" 
                                  />
                                </motion.button>
                              ))}
                            </div>

                            {/* Footer - View All */}
                            <div className="px-6 py-4 border-t border-white/10">
                              <button
                                onClick={() => handleNavClick('diensten')}
                                className="w-full py-2.5 rounded-lg text-center text-yellow-400 hover:bg-yellow-400/10 transition-colors duration-200"
                                style={{
                                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                                  fontWeight: 500,
                                  fontSize: '14px',
                                  letterSpacing: '-0.01em',
                                }}
                              >
                                Bekijk alle diensten
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative px-4 py-2 text-[15px] transition-colors duration-200 rounded-lg ${
                      isActive
                        ? 'text-yellow-400'
                        : 'text-white/90 hover:text-yellow-400'
                    }`}
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                      fontWeight: 500,
                      letterSpacing: '-0.01em',
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    {item.label}
                    
                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-yellow-400"
                        style={{
                          boxShadow: '0 0 8px rgba(251, 191, 36, 0.8)',
                        }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 380, 
                          damping: 30 
                        }}
                      />
                    )}
                  </motion.button>
                );
              })}
              
              {/* Close button for overlays */}
              {isOverlay && onClose && (
                <motion.button
                  onClick={onClose}
                  className="ml-4 w-10 h-10 rounded-full flex items-center justify-center text-white/80 hover:text-yellow-400 hover:bg-white/5 transition-colors duration-200"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  aria-label="Close"
                >
                  <X size={20} strokeWidth={2.5} />
                </motion.button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-3">
              {isOverlay && onClose && (
                <motion.button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white/80 hover:text-yellow-400 hover:bg-white/5 transition-colors duration-200"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  aria-label="Close"
                >
                  <X size={20} strokeWidth={2.5} />
                </motion.button>
              )}
              
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-10 h-10 rounded-full flex items-center justify-center text-white/90 hover:text-yellow-400 hover:bg-white/5 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X size={24} strokeWidth={2.5} />
                ) : (
                  <Menu size={24} strokeWidth={2.5} />
                )}
              </motion.button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9999] lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/95 backdrop-blur-xl"
              style={{
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              }}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.28, 0, 0.4, 1] }}
              className="relative h-full flex flex-col items-center justify-center gap-2 px-8 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {navItems.map((item, index) => {
                const isActive = currentPage === item.id;
                
                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.05,
                      ease: [0.28, 0, 0.4, 1]
                    }}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full max-w-sm py-4 px-6 rounded-2xl text-center transition-all duration-200 ${
                      isActive
                        ? 'bg-yellow-400/10 text-yellow-400'
                        : 'text-white/90 hover:text-yellow-400 hover:bg-white/5'
                    }`}
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {item.label}
                  </motion.button>
                );
              })}
              
              {/* Close hint */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8 text-white/40 text-sm"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                }}
              >
                Tik ergens om te sluiten
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
