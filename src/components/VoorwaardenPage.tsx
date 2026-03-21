import { motion } from 'motion/react';
import { useEffect } from 'react';
import { AlgemeneVoorwaarden } from './AlgemeneVoorwaarden';
import { Header } from './Header';

interface VoorwaardenPageProps {
  onClose: () => void;
  onNavigate?: (page: string) => void;
}

export function VoorwaardenPage({ onClose, onNavigate }: VoorwaardenPageProps) {
  const appleEase = [0.28, 0, 0.4, 1] as const;

  // Prevent body scroll when page is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[9999] bg-white overflow-y-auto"
    >
      {/* Header */}
      <Header 
        onNavigate={onNavigate}
        onClose={onClose}
        isOverlay={true}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: appleEase }}
      >
        <AlgemeneVoorwaarden />
      </motion.div>
    </motion.div>
  );
}