import { Suspense, lazy, useCallback, useEffect, useRef, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
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
const BedanktPage = lazy(() =>
  import('./components/BedanktPage').then((module) => ({ default: module.BedanktPage })),
);
const VoorwaardenPage = lazy(() =>
  import('./components/VoorwaardenPage').then((module) => ({
    default: module.VoorwaardenPage,
  })),
);
const Team = lazy(() => import('./components/Team').then((module) => ({ default: module.Team })));
const ExclusiveTechnique = lazy(() =>
  import('./components/ExclusiveTechnique').then((module) => ({
    default: module.ExclusiveTechnique,
  })),
);
const ServicesGrid = lazy(() =>
  import('./components/ServicesGrid').then((module) => ({ default: module.ServicesGrid })),
);
const Projecten = lazy(() =>
  import('./components/Projecten').then((module) => ({ default: module.Projecten })),
);
const ReviewsSection = lazy(() =>
  import('./components/ReviewsSection').then((module) => ({ default: module.ReviewsSection })),
);
const Verhuur = lazy(() =>
  import('./components/Verhuur').then((module) => ({ default: module.Verhuur })),
);
const Contact = lazy(() =>
  import('./components/Contact').then((module) => ({ default: module.Contact })),
);
const Footer = lazy(() =>
  import('./components/Footer').then((module) => ({ default: module.Footer })),
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

function HomepageSections({
  onNavigate,
  onServiceClick,
}: {
  onNavigate: (page: string, projectId?: string) => void;
  onServiceClick: (serviceId: string) => void;
}) {
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoadSections, setShouldLoadSections] = useState(false);

  useEffect(() => {
    if (shouldLoadSections) {
      return;
    }

    const sentinel = sentinelRef.current;
    if (!sentinel || !('IntersectionObserver' in window)) {
      const timeoutId = window.setTimeout(() => setShouldLoadSections(true), 1600);
      return () => window.clearTimeout(timeoutId);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadSections(true);
          observer.disconnect();
        }
      },
      { rootMargin: '700px 0px' },
    );

    observer.observe(sentinel);

    return () => observer.disconnect();
  }, [shouldLoadSections]);

  return (
    <>
      <div ref={sentinelRef} className="h-px bg-black" aria-hidden="true" />
      {shouldLoadSections ? (
        <Suspense fallback={<div className="min-h-[60vh] bg-white" aria-hidden="true" />}>
          <Team onNavigate={onNavigate} />
          <ExclusiveTechnique />
          <ServicesGrid onServiceClick={onServiceClick} />
          <Projecten onOpenProjecten={() => onNavigate('projecten')} />
          <ReviewsSection />
          <Verhuur onOpenVerhuur={() => onNavigate('verhuur')} />
          <Contact />
          <Footer
            onNavigate={onNavigate}
            onOpenVoorwaarden={() => onNavigate('voorwaarden')}
          />
        </Suspense>
      ) : null}
    </>
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

  if (route.name === 'bedankt') {
    return (
      <Suspense fallback={<RouteLoadingFallback />}>
        <BedanktPage onNavigate={handleNavigation} />
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
      <HomepageSections onNavigate={handleNavigation} onServiceClick={handleServiceClick} />
    </div>
  );
}
