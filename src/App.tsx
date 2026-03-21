import { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Verhuur } from './components/Verhuur';
import { Projecten } from './components/Projecten';
import { ProjectenPage } from './components/ProjectenPage';
import { ProjectDetailPage } from './components/ProjectDetailPage';
import { Team } from './components/Team';
import { ExclusiveTechnique } from './components/ExclusiveTechnique';
import { ServicesGrid } from './components/ServicesGrid';
import { VoorwaardenPage } from './components/VoorwaardenPage';
import { VerhuurPage } from './components/VerhuurPage';
import { WieBenIkPage } from './components/WieBenIkPage';
import { DienstenPage } from './components/DienstenPage';
import { ServiceDetailPage } from './components/ServiceDetailPage';
import { Contact } from './components/Contact';
import { ContactPage } from './components/ContactPage';
import { Footer } from './components/Footer';
import { getServiceById } from './data/servicesData';

export default function App() {
  const [showVoorwaarden, setShowVoorwaarden] = useState(false);
  const [showVerhuur, setShowVerhuur] = useState(false);
  const [showWieBenIk, setShowWieBenIk] = useState(false);
  const [showDiensten, setShowDiensten] = useState(false);
  const [showProjecten, setShowProjecten] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const selectedService = selectedServiceId ? getServiceById(selectedServiceId) : null;

  // Determine current page for navigation state
  const currentPage = showVerhuur ? 'verhuur' : 
                     showWieBenIk ? 'wie-ben-ik' : 
                     showDiensten || selectedServiceId ? 'diensten' : 
                     showProjecten || selectedProjectId ? 'projecten' :
                     showContact ? 'contact' :
                     'home';

  // Handle navigation from header
  const handleNavigation = useCallback((page: string, projectId?: string) => {
    // Close all overlays first
    setShowVerhuur(false);
    setShowWieBenIk(false);
    setShowDiensten(false);
    setShowProjecten(false);
    setShowContact(false);
    setSelectedServiceId(null);
    setSelectedProjectId(null);
    setShowVoorwaarden(false);

    // Navigate based on page
    switch (page) {
      case 'wie-ben-ik':
        setShowWieBenIk(true);
        break;
      case 'diensten':
        setShowDiensten(true);
        break;
      case 'verhuur':
        setShowVerhuur(true);
        break;
      case 'projecten':
        setShowProjecten(true);
        break;
      case 'contact':
        setShowContact(true);
        break;
      case 'project-detail':
        if (projectId) {
          setSelectedProjectId(projectId);
        }
        break;
      case 'home':
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
    }
  }, []);

  // Listen for custom events from overlay pages
  useEffect(() => {
    const handleOpenService = (e: CustomEvent) => {
      setSelectedServiceId(e.detail.serviceId);
    };

    window.addEventListener('openService', handleOpenService as EventListener);
    return () => {
      window.removeEventListener('openService', handleOpenService as EventListener);
    };
  }, []);

  // Check if any overlay is open
  const isAnyOverlayOpen = showVerhuur || showWieBenIk || showDiensten || showProjecten || showContact || !!selectedServiceId || !!selectedProjectId || showVoorwaarden;

  return (
    <div className="min-h-screen bg-white">
      {/* Main Header - Only show when no overlays are open */}
      {!isAnyOverlayOpen && (
        <Header 
          currentPage={currentPage}
          onNavigate={handleNavigation}
          onServiceClick={(serviceId) => setSelectedServiceId(serviceId)}
        />
      )}
      
      {/* Home Section */}
      <Hero />

      {/* Team Section - Angelo & Values (Right after Hero) */}
      <Team onNavigate={handleNavigation} />

      {/* Exclusive Technique Section */}
      <ExclusiveTechnique />

      {/* Services Grid - Main Services */}
      <ServicesGrid onServiceClick={(serviceId) => setSelectedServiceId(serviceId)} />

      {/* Projecten Section */}
      <Projecten onOpenProjecten={() => setShowProjecten(true)} />

      {/* Verhuur Section */}
      <Verhuur onOpenVerhuur={() => setShowVerhuur(true)} />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer onOpenVoorwaarden={() => setShowVoorwaarden(true)} />

      {/* Voorwaarden Page - Full Screen Overlay */}
      {showVoorwaarden && (
        <VoorwaardenPage 
          onClose={() => setShowVoorwaarden(false)}
          onNavigate={handleNavigation}
        />
      )}

      {/* Verhuur Page - Full Screen Overlay */}
      {showVerhuur && (
        <VerhuurPage 
          onClose={() => setShowVerhuur(false)}
          onNavigate={handleNavigation}
        />
      )}

      {/* Wie Ben Ik Page - Full Screen Overlay */}
      {showWieBenIk && (
        <WieBenIkPage 
          onClose={() => setShowWieBenIk(false)}
          onNavigate={handleNavigation}
        />
      )}

      {/* Diensten Page - Full Screen Overlay */}
      {showDiensten && (
        <DienstenPage 
          onClose={() => setShowDiensten(false)}
          onServiceClick={(serviceId) => {
            setShowDiensten(false);
            setSelectedServiceId(serviceId);
          }}
          onNavigate={handleNavigation}
        />
      )}

      {/* Service Detail Page - Full Screen Overlay */}
      {selectedService && (
        <ServiceDetailPage 
          service={selectedService} 
          onClose={() => setSelectedServiceId(null)}
          onServiceClick={(serviceId) => setSelectedServiceId(serviceId)}
          onNavigate={handleNavigation}
        />
      )}

      {/* Projecten Page - Full Screen Overlay */}
      {showProjecten && (
        <ProjectenPage 
          onNavigate={handleNavigation}
          onClose={() => setShowProjecten(false)}
        />
      )}

      {/* Project Detail Page - Full Screen Overlay */}
      {selectedProjectId && (
        <ProjectDetailPage 
          projectId={selectedProjectId}
          onNavigate={handleNavigation}
        />
      )}

      {/* Contact Page - Full Screen Overlay */}
      {showContact && (
        <ContactPage 
          onClose={() => setShowContact(false)}
          onNavigate={handleNavigation}
        />
      )}
    </div>
  );
}
