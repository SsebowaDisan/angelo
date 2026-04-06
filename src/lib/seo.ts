import { projects } from '../data/projectsData';
import { getServiceById, servicesData } from '../data/servicesData';
import {
  AppRoute,
  getContactPath,
  getDienstenPath,
  getHomePath,
  getProjectenPath,
  getVerhuurPath,
  getVoorwaardenPath,
  getWieBenIkPath,
  SITE_URL,
} from './routes';

const DEFAULT_OG_IMAGE = `${SITE_URL}/favicon.svg`;
const BUSINESS_NAME = 'Angelo Renovates';
const BUSINESS_SITE_ALTERNATE_NAMES = ['angelorenovates.be'];
const BUSINESS_EMAIL = 'info@angelorenovates.be';
const BUSINESS_PHONE = '+32478062748';
const BUSINESS_VAT_ID = 'BE0817410486';
const BUSINESS_AREAS = ['West-Vlaanderen', 'Oost-Vlaanderen', 'België'];
const BUSINESS_SOCIALS = [
  'https://www.facebook.com/share/16DaRUETFT/?mibextid=wwXIfr',
  'https://www.instagram.com/angelo_renovates?igsh=ZXl6NW9yY3BkYjcx',
];

export interface SeoDescriptor {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
}

interface BreadcrumbItem {
  name: string;
  path: string;
}

export function getCanonicalUrl(path: string) {
  return `${SITE_URL}${path === '/' ? '' : path}`;
}

function getAbsoluteAssetUrl(pathOrUrl: string) {
  if (/^https?:\/\//.test(pathOrUrl)) {
    return pathOrUrl;
  }

  return `${SITE_URL}${pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`}`;
}

function ensureMetaAttribute(selector: string, attribute: 'name' | 'property', value: string) {
  let meta = document.head.querySelector<HTMLMetaElement>(selector);

  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, value);
    document.head.appendChild(meta);
  }

  return meta;
}

function ensureLink(selector: string, rel: string) {
  let link = document.head.querySelector<HTMLLinkElement>(selector);

  if (!link) {
    link = document.createElement('link');
    link.rel = rel;
    document.head.appendChild(link);
  }

  return link;
}

function ensureStructuredDataScript() {
  let script = document.head.querySelector<HTMLScriptElement>('script[data-seo-jsonld="true"]');

  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    script.dataset.seoJsonld = 'true';
    document.head.appendChild(script);
  }

  return script;
}

export function getSeoDescriptor(route: AppRoute): SeoDescriptor {
  switch (route.name) {
    case 'wie-ben-ik':
      return {
        title: 'Over Angelo Renovates | Renovatiebedrijf in West- en Oost-Vlaanderen',
        description:
          'Maak kennis met Angelo Renovates: vakmanschap, renovatie-ervaring en persoonlijke begeleiding voor bouw- en renovatieprojecten in West- en Oost-Vlaanderen.',
        path: route.path,
      };
    case 'diensten':
      return {
        title: 'Diensten | Renovaties, Metselwerk, Vloerwerken en Meer',
        description:
          'Ontdek alle diensten van Angelo Renovates: metselwerk, voegwerk, muurinjectie, vloerwerken, opritten, totaalprojecten, camera-inspectie en schoorsteenrenovatie.',
        path: route.path,
      };
    case 'service-detail': {
      const service = route.serviceId ? getServiceById(route.serviceId) : undefined;

      return {
        title: service ? `${service.title} | Angelo Renovates` : 'Dienst | Angelo Renovates',
        description: service
          ? `${service.description} Actief in West- en Oost-Vlaanderen. Vraag een vrijblijvende offerte aan bij Angelo Renovates.`
          : 'Professionele renovatie- en bouwwerken door Angelo Renovates in West- en Oost-Vlaanderen.',
        path: route.path,
        type: 'article',
      };
    }
    case 'verhuur':
      return {
        title: 'Verhuur Aanhangwagen | Angelo Renovates',
        description:
          'Huur een aanhangwagen bij Angelo Renovates. Praktische verhuur met duidelijke voorwaarden, betrouwbare service en snelle reservatie.',
        path: route.path,
      };
    case 'projecten':
      return {
        title: 'Projecten | Renovatieprojecten van Angelo Renovates',
        description:
          'Bekijk recente renovatieprojecten van Angelo Renovates en ontdek het vakmanschap achter badkamers, keukens, vloeren, gevels en buitenwerken.',
        path: route.path,
      };
    case 'project-detail': {
      const project = route.projectId
        ? projects.find((entry) => entry.id === route.projectId)
        : undefined;

      return {
        title: project
          ? `${project.title} in ${project.location} | Angelo Renovates`
          : 'Project | Angelo Renovates',
        description: project
          ? `${project.description} Bekijk dit renovatieproject van Angelo Renovates in ${project.location}.`
          : 'Bekijk een recent renovatieproject van Angelo Renovates.',
        path: route.path,
        type: 'article',
      };
    }
    case 'contact':
      return {
        title: 'Contact | Vraag een Offerte aan bij Angelo Renovates',
        description:
          'Neem contact op met Angelo Renovates voor renovaties, metselwerken, vloerwerken en totaalprojecten. Vraag snel een vrijblijvende offerte aan.',
        path: route.path,
      };
    case 'voorwaarden':
      return {
        title: 'Algemene Voorwaarden | Angelo Renovates',
        description:
          'Lees de algemene voorwaarden van Angelo Renovates voor renovatie- en bouwwerken.',
        path: route.path,
      };
    case 'home':
    default:
      return {
        title: 'Angelo Renovates | Renovatie, Vloerwerken & Metselwerk',
        description:
          'Angelo Renovates verzorgt renovaties, metselwerk, voegwerk, vloerwerken, opritten, camera-inspectie en schoorsteenrenovatie. Actief in West- en Oost-Vlaanderen.',
        path: '/',
      };
  }
}

function getBreadcrumbs(route: AppRoute): BreadcrumbItem[] {
  const breadcrumbs: BreadcrumbItem[] = [{ name: 'Home', path: getHomePath() }];

  switch (route.name) {
    case 'wie-ben-ik':
      breadcrumbs.push({ name: 'Wie ben ik', path: getWieBenIkPath() });
      break;
    case 'diensten':
      breadcrumbs.push({ name: 'Diensten', path: getDienstenPath() });
      break;
    case 'service-detail': {
      const service = route.serviceId ? getServiceById(route.serviceId) : undefined;
      breadcrumbs.push({ name: 'Diensten', path: getDienstenPath() });
      if (service) {
        breadcrumbs.push({ name: service.title, path: route.path });
      }
      break;
    }
    case 'verhuur':
      breadcrumbs.push({ name: 'Verhuur', path: getVerhuurPath() });
      break;
    case 'projecten':
      breadcrumbs.push({ name: 'Projecten', path: getProjectenPath() });
      break;
    case 'project-detail': {
      const project = route.projectId
        ? projects.find((entry) => entry.id === route.projectId)
        : undefined;
      breadcrumbs.push({ name: 'Projecten', path: getProjectenPath() });
      if (project) {
        breadcrumbs.push({ name: project.title, path: route.path });
      }
      break;
    }
    case 'contact':
      breadcrumbs.push({ name: 'Contact', path: getContactPath() });
      break;
    case 'voorwaarden':
      breadcrumbs.push({ name: 'Algemene voorwaarden', path: getVoorwaardenPath() });
      break;
    default:
      break;
  }

  return breadcrumbs;
}

function getPageSchemaType(route: AppRoute) {
  switch (route.name) {
    case 'contact':
      return 'ContactPage';
    case 'diensten':
    case 'projecten':
      return 'CollectionPage';
    default:
      return 'WebPage';
  }
}

function getAreaServedSchema() {
  return BUSINESS_AREAS.map((name) => ({
    '@type': 'AdministrativeArea',
    name,
  }));
}

function getStructuredData(route: AppRoute, seo: SeoDescriptor, canonicalUrl: string) {
  const graph: Record<string, unknown>[] = [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: BUSINESS_NAME,
      alternateName: BUSINESS_SITE_ALTERNATE_NAMES,
    },
    {
      '@type': 'GeneralContractor',
      '@id': `${SITE_URL}/#business`,
      name: BUSINESS_NAME,
      url: SITE_URL,
      email: BUSINESS_EMAIL,
      telephone: BUSINESS_PHONE,
      vatID: BUSINESS_VAT_ID,
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'BE',
        addressRegion: 'West- en Oost-Vlaanderen',
      },
      areaServed: getAreaServedSchema(),
      sameAs: BUSINESS_SOCIALS,
    },
    {
      '@type': getPageSchemaType(route),
      '@id': `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: seo.title,
      description: seo.description,
      isPartOf: {
        '@id': `${SITE_URL}/#website`,
      },
      about: {
        '@id': `${SITE_URL}/#business`,
      },
    },
  ];

  const breadcrumbs = getBreadcrumbs(route);

  if (breadcrumbs.length > 1) {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${canonicalUrl}#breadcrumb`,
      itemListElement: breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: getCanonicalUrl(item.path),
      })),
    });
  }

  if (route.name === 'diensten') {
    graph.push({
      '@type': 'ItemList',
      '@id': `${canonicalUrl}#services`,
      itemListElement: servicesData.map((service, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: getCanonicalUrl(`/diensten/${service.id}`),
        name: service.title,
      })),
    });
  }

  if (route.name === 'projecten') {
    graph.push({
      '@type': 'ItemList',
      '@id': `${canonicalUrl}#projects`,
      itemListElement: projects.map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: getCanonicalUrl(`/projecten/${project.id}`),
        name: project.title,
      })),
    });
  }

  if (route.name === 'service-detail') {
    const service = route.serviceId ? getServiceById(route.serviceId) : undefined;

    if (service) {
      graph.push({
        '@type': 'Service',
        '@id': `${canonicalUrl}#service`,
        name: service.title,
        description: service.description,
        serviceType: service.title,
        areaServed: getAreaServedSchema(),
        provider: {
          '@id': `${SITE_URL}/#business`,
        },
        url: canonicalUrl,
      });
    }
  }

  if (route.name === 'project-detail') {
    const project = route.projectId
      ? projects.find((entry) => entry.id === route.projectId)
      : undefined;

    if (project) {
      graph.push({
        '@type': 'CreativeWork',
        '@id': `${canonicalUrl}#project`,
        name: project.title,
        description: project.description,
        url: canonicalUrl,
        image: [project.heroImage, ...project.images.slice(0, 2)].map(getAbsoluteAssetUrl),
        creator: {
          '@id': `${SITE_URL}/#business`,
        },
        keywords: project.tags.join(', '),
        locationCreated: {
          '@type': 'Place',
          name: project.location,
        },
      });
    }
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}

export function getStructuredDataForRoute(route: AppRoute) {
  const seo = getSeoDescriptor(route);
  const canonicalUrl = getCanonicalUrl(seo.path);
  return getStructuredData(route, seo, canonicalUrl);
}

export function applySeoMetadata(route: AppRoute) {
  const seo = getSeoDescriptor(route);
  const canonicalUrl = getCanonicalUrl(seo.path);

  document.title = seo.title;
  document.documentElement.lang = 'nl';

  ensureMetaAttribute('meta[name="description"]', 'name', 'description').content = seo.description;
  ensureMetaAttribute('meta[name="robots"]', 'name', 'robots').content = 'index,follow';
  ensureMetaAttribute('meta[property="og:title"]', 'property', 'og:title').content = seo.title;
  ensureMetaAttribute('meta[property="og:description"]', 'property', 'og:description').content =
    seo.description;
  ensureMetaAttribute('meta[property="og:url"]', 'property', 'og:url').content = canonicalUrl;
  ensureMetaAttribute('meta[property="og:type"]', 'property', 'og:type').content =
    seo.type || 'website';
  ensureMetaAttribute('meta[property="og:site_name"]', 'property', 'og:site_name').content =
    BUSINESS_NAME;
  ensureMetaAttribute('meta[property="og:locale"]', 'property', 'og:locale').content = 'nl_BE';
  ensureMetaAttribute('meta[property="og:image"]', 'property', 'og:image').content = DEFAULT_OG_IMAGE;
  ensureMetaAttribute('meta[name="twitter:card"]', 'name', 'twitter:card').content = 'summary';
  ensureMetaAttribute('meta[name="twitter:title"]', 'name', 'twitter:title').content = seo.title;
  ensureMetaAttribute('meta[name="twitter:description"]', 'name', 'twitter:description').content =
    seo.description;
  ensureMetaAttribute('meta[name="twitter:image"]', 'name', 'twitter:image').content =
    DEFAULT_OG_IMAGE;
  ensureLink('link[rel="canonical"]', 'canonical').href = canonicalUrl;
  ensureStructuredDataScript().textContent = JSON.stringify(
    getStructuredData(route, seo, canonicalUrl),
  );
}
