import { projects } from '../data/projectsData';
import { getServiceById, servicesData } from '../data/servicesData';

export const SITE_URL = 'https://angelorenovates.be';

export type RouteName =
  | 'home'
  | 'wie-ben-ik'
  | 'diensten'
  | 'service-detail'
  | 'verhuur'
  | 'projecten'
  | 'project-detail'
  | 'contact'
  | 'voorwaarden';

export interface AppRoute {
  name: RouteName;
  path: string;
  serviceId?: string;
  projectId?: string;
}

export function getHomePath() {
  return '/';
}

export function getWieBenIkPath() {
  return '/wie-ben-ik';
}

export function getDienstenPath() {
  return '/diensten';
}

export function getServicePath(serviceId: string) {
  return `/diensten/${serviceId}`;
}

export function getVerhuurPath() {
  return '/verhuur';
}

export function getProjectenPath() {
  return '/projecten';
}

export function getProjectPath(projectId: string) {
  return `/projecten/${projectId}`;
}

export function getContactPath() {
  return '/contact';
}

export function getVoorwaardenPath() {
  return '/algemene-voorwaarden';
}

export function getPathForPage(page: string, itemId?: string) {
  switch (page) {
    case 'home':
      return getHomePath();
    case 'wie-ben-ik':
      return getWieBenIkPath();
    case 'diensten':
      return getDienstenPath();
    case 'verhuur':
      return getVerhuurPath();
    case 'projecten':
      return getProjectenPath();
    case 'project-detail':
      return itemId ? getProjectPath(itemId) : getProjectenPath();
    case 'contact':
      return getContactPath();
    case 'voorwaarden':
      return getVoorwaardenPath();
    default:
      return getHomePath();
  }
}

export function getRouteForPage(page: string, itemId?: string): AppRoute {
  switch (page) {
    case 'wie-ben-ik':
      return { name: 'wie-ben-ik', path: getWieBenIkPath() };
    case 'diensten':
      return { name: 'diensten', path: getDienstenPath() };
    case 'verhuur':
      return { name: 'verhuur', path: getVerhuurPath() };
    case 'projecten':
      return { name: 'projecten', path: getProjectenPath() };
    case 'project-detail':
      return itemId && projects.some((project) => project.id === itemId)
        ? { name: 'project-detail', path: getProjectPath(itemId), projectId: itemId }
        : { name: 'projecten', path: getProjectenPath() };
    case 'contact':
      return { name: 'contact', path: getContactPath() };
    case 'voorwaarden':
      return { name: 'voorwaarden', path: getVoorwaardenPath() };
    case 'home':
    default:
      return { name: 'home', path: getHomePath() };
  }
}

export function getServiceRoute(serviceId: string): AppRoute {
  return getServiceById(serviceId)
    ? { name: 'service-detail', path: getServicePath(serviceId), serviceId }
    : { name: 'diensten', path: getDienstenPath() };
}

function normalizePath(pathname: string) {
  if (!pathname) {
    return '/';
  }

  const trimmedPath = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;
  return trimmedPath || '/';
}

export function resolveRoute(pathname: string): AppRoute {
  const normalizedPath = normalizePath(pathname);
  const pathSegments = normalizedPath.split('/').filter(Boolean);

  if (pathSegments.length === 0) {
    return { name: 'home', path: getHomePath() };
  }

  if (normalizedPath === getWieBenIkPath()) {
    return { name: 'wie-ben-ik', path: normalizedPath };
  }

  if (normalizedPath === getDienstenPath()) {
    return { name: 'diensten', path: normalizedPath };
  }

  if (pathSegments[0] === 'diensten' && pathSegments[1]) {
    const serviceId = pathSegments[1];
    return getServiceById(serviceId)
      ? { name: 'service-detail', path: getServicePath(serviceId), serviceId }
      : { name: 'diensten', path: getDienstenPath() };
  }

  if (normalizedPath === getVerhuurPath()) {
    return { name: 'verhuur', path: normalizedPath };
  }

  if (normalizedPath === getProjectenPath()) {
    return { name: 'projecten', path: normalizedPath };
  }

  if (pathSegments[0] === 'projecten' && pathSegments[1]) {
    const projectId = pathSegments[1];
    return projects.some((project) => project.id === projectId)
      ? { name: 'project-detail', path: getProjectPath(projectId), projectId }
      : { name: 'projecten', path: getProjectenPath() };
  }

  if (normalizedPath === getContactPath()) {
    return { name: 'contact', path: normalizedPath };
  }

  if (normalizedPath === getVoorwaardenPath()) {
    return { name: 'voorwaarden', path: normalizedPath };
  }

  return { name: 'home', path: getHomePath() };
}

export function getNavigationPage(route: AppRoute) {
  switch (route.name) {
    case 'service-detail':
    case 'diensten':
      return 'diensten';
    case 'project-detail':
    case 'projecten':
      return 'projecten';
    case 'wie-ben-ik':
      return 'wie-ben-ik';
    case 'verhuur':
      return 'verhuur';
    case 'contact':
      return 'contact';
    default:
      return 'home';
  }
}

export const sitemapPaths = [
  getHomePath(),
  getWieBenIkPath(),
  getDienstenPath(),
  getVerhuurPath(),
  getProjectenPath(),
  getContactPath(),
  getVoorwaardenPath(),
  ...servicesData.map((service) => getServicePath(service.id)),
  ...projects.map((project) => getProjectPath(project.id)),
];
