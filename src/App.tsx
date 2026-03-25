import { useCallback, useEffect, useState } from 'react';
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
import { ReviewsSection } from './components/ReviewsSection';
import { getServiceById } from './data/servicesData';
import { applySeoMetadata } from './lib/seo';
import {
  AppRoute,
  getDienstenPath,
  getNavigationPage,
  getRouteForPage,
  getServiceRoute,
  getHomePath,
  resolveRoute,
} from './lib/routes';

function getInitialRoute() {
  if (typeof window === 'undefined') {
    return { name: 'home', path: '/' } satisfies AppRoute;
  }

  return resolveRoute(window.location.pathname);
}

export default function App() {
  const [route, setRoute] = useState<AppRoute>(getInitialRoute);

  const selectedService = route.serviceId ? getServiceById(route.serviceId) : null;

  const navigateToRoute = useCallback(
    (nextRoute: AppRoute, options?: { replace?: boolean; scroll?: boolean }) => {
      const { replace = false, scroll = true } = options || {};

      setRoute(nextRoute);

      if (window.location.pathname !== nextRoute.path) {
        const historyMethod = replace ? window.history.replaceState : window.history.pushState;
        historyMethod.call(window.history, null, '', nextRoute.path);
      }

      if (scroll) {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    },
    [],
  );

  const handleNavigation = useCallback(
    (page: string, projectId?: string) => {
      if (page === 'home' && route.name === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      navigateToRoute(getRouteForPage(page, projectId));
    },
    [navigateToRoute, route.name],
  );

  const handleServiceClick = useCallback(
    (serviceId: string) => {
      navigateToRoute(getServiceRoute(serviceId));
    },
    [navigateToRoute],
  );

  useEffect(() => {
    const handlePopState = () => {
      setRoute(resolveRoute(window.location.pathname));
      window.scrollTo({ top: 0, behavior: 'auto' });
    };

    const handleOpenService = (event: Event) => {
      const customEvent = event as CustomEvent<{ serviceId?: string }>;
      const serviceId = customEvent.detail?.serviceId;

      if (serviceId) {
        navigateToRoute(getServiceRoute(serviceId));
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('openService', handleOpenService as EventListener);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('openService', handleOpenService as EventListener);
    };
  }, [navigateToRoute]);

  useEffect(() => {
    applySeoMetadata(route);
  }, [route]);

  if (route.name === 'diensten') {
    return (
      <DienstenPage
        onClose={() => navigateToRoute({ name: 'home', path: getHomePath() })}
        onServiceClick={handleServiceClick}
        onNavigate={handleNavigation}
      />
    );
  }

  if (route.name === 'service-detail' && selectedService) {
    return (
      <ServiceDetailPage
        service={selectedService}
        onClose={() => navigateToRoute({ name: 'diensten', path: getDienstenPath() })}
        onServiceClick={handleServiceClick}
        onNavigate={handleNavigation}
      />
    );
  }

  if (route.name === 'verhuur') {
    return (
      <VerhuurPage
        onClose={() => navigateToRoute({ name: 'home', path: getHomePath() })}
        onNavigate={handleNavigation}
      />
    );
  }

  if (route.name === 'wie-ben-ik') {
    return (
      <WieBenIkPage
        onClose={() => navigateToRoute({ name: 'home', path: getHomePath() })}
        onNavigate={handleNavigation}
      />
    );
  }

  if (route.name === 'projecten') {
    return (
      <ProjectenPage
        onNavigate={handleNavigation}
        onClose={() => navigateToRoute({ name: 'home', path: getHomePath() })}
      />
    );
  }

  if (route.name === 'project-detail' && route.projectId) {
    return <ProjectDetailPage projectId={route.projectId} onNavigate={handleNavigation} />;
  }

  if (route.name === 'contact') {
    return (
      <ContactPage
        onClose={() => navigateToRoute({ name: 'home', path: getHomePath() })}
        onNavigate={handleNavigation}
      />
    );
  }

  if (route.name === 'voorwaarden') {
    return (
      <VoorwaardenPage
        onClose={() => navigateToRoute({ name: 'home', path: getHomePath() })}
        onNavigate={handleNavigation}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header
        currentPage={getNavigationPage(route)}
        onNavigate={handleNavigation}
        onServiceClick={handleServiceClick}
      />

      <Hero />
      <Team onNavigate={handleNavigation} />
      <ExclusiveTechnique />
      <ServicesGrid onServiceClick={handleServiceClick} />
      <Projecten onOpenProjecten={() => handleNavigation('projecten')} />
      <ReviewsSection />
      <Verhuur onOpenVerhuur={() => handleNavigation('verhuur')} />
      <Contact />
      <Footer
        onNavigate={handleNavigation}
        onOpenVoorwaarden={() => handleNavigation('voorwaarden')}
      />
    </div>
  );
}
