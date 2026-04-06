import { Suspense, lazy, useCallback, useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Verhuur } from './components/Verhuur';
import { Projecten } from './components/Projecten';
import { Team } from './components/Team';
import { ExclusiveTechnique } from './components/ExclusiveTechnique';
import { ServicesGrid } from './components/ServicesGrid';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ReviewsSection } from './components/ReviewsSection';
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

const DienstenPage = lazy(() =>
  import('./components/DienstenPage').then((module) => ({ default: module.DienstenPage })),
);
const ServiceDetailPage = lazy(() =>
  import('./components/ServiceDetailPage').then((module) => ({
    default: module.ServiceDetailPage,
  })),
);
const VerhuurPage = lazy(() =>
  import('./components/VerhuurPage').then((module) => ({ default: module.VerhuurPage })),
);
const WieBenIkPage = lazy(() =>
  import('./components/WieBenIkPage').then((module) => ({ default: module.WieBenIkPage })),
);
const ProjectenPage = lazy(() =>
  import('./components/ProjectenPage').then((module) => ({ default: module.ProjectenPage })),
);
const ProjectDetailPage = lazy(() =>
  import('./components/ProjectDetailPage').then((module) => ({
    default: module.ProjectDetailPage,
  })),
);
const ContactPage = lazy(() =>
  import('./components/ContactPage').then((module) => ({ default: module.ContactPage })),
);
const VoorwaardenPage = lazy(() =>
  import('./components/VoorwaardenPage').then((module) => ({
    default: module.VoorwaardenPage,
  })),
);

function getInitialRoute() {
  if (typeof window === 'undefined') {
    return { name: 'home', path: '/' } satisfies AppRoute;
  }

  return resolveRoute(window.location.pathname);
}

function RouteLoadingFallback({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`min-h-screen ${dark ? 'bg-black' : 'bg-white'}`} aria-hidden="true" />
  );
}

export default function App() {
  const [route, setRoute] = useState<AppRoute>(getInitialRoute);

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
      <Suspense fallback={<RouteLoadingFallback dark={true} />}>
        <DienstenPage
          onClose={() => navigateToRoute({ name: 'home', path: getHomePath() })}
          onServiceClick={handleServiceClick}
          onNavigate={handleNavigation}
        />
      </Suspense>
    );
  }

  if (route.name === 'service-detail' && route.serviceId) {
    return (
      <Suspense fallback={<RouteLoadingFallback />}>
        <ServiceDetailPage
          serviceId={route.serviceId}
          onClose={() => navigateToRoute({ name: 'diensten', path: getDienstenPath() })}
          onServiceClick={handleServiceClick}
          onNavigate={handleNavigation}
        />
      </Suspense>
    );
  }

  if (route.name === 'verhuur') {
    return (
      <Suspense fallback={<RouteLoadingFallback dark={true} />}>
        <VerhuurPage
          onClose={() => navigateToRoute({ name: 'home', path: getHomePath() })}
          onNavigate={handleNavigation}
        />
      </Suspense>
    );
  }

  if (route.name === 'wie-ben-ik') {
    return (
      <Suspense fallback={<RouteLoadingFallback />}>
        <WieBenIkPage
          onClose={() => navigateToRoute({ name: 'home', path: getHomePath() })}
          onNavigate={handleNavigation}
        />
      </Suspense>
    );
  }

  if (route.name === 'projecten') {
    return (
      <Suspense fallback={<RouteLoadingFallback dark={true} />}>
        <ProjectenPage
          onNavigate={handleNavigation}
          onClose={() => navigateToRoute({ name: 'home', path: getHomePath() })}
        />
      </Suspense>
    );
  }

  if (route.name === 'project-detail' && route.projectId) {
    return (
      <Suspense fallback={<RouteLoadingFallback dark={true} />}>
        <ProjectDetailPage projectId={route.projectId} onNavigate={handleNavigation} />
      </Suspense>
    );
  }

  if (route.name === 'contact') {
    return (
      <Suspense fallback={<RouteLoadingFallback />}>
        <ContactPage
          onClose={() => navigateToRoute({ name: 'home', path: getHomePath() })}
          onNavigate={handleNavigation}
        />
      </Suspense>
    );
  }

  if (route.name === 'voorwaarden') {
    return (
      <Suspense fallback={<RouteLoadingFallback />}>
        <VoorwaardenPage
          onClose={() => navigateToRoute({ name: 'home', path: getHomePath() })}
          onNavigate={handleNavigation}
        />
      </Suspense>
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
