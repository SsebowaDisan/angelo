import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { getStaticRoutes } from '../src/lib/routes';
import {
  getCanonicalUrl,
  getSeoDescriptor,
  getSeoImageUrl,
  getStructuredDataForRoute,
} from '../src/lib/seo';

const BUILD_DIR = path.resolve(process.cwd(), 'build');
const TEMPLATE_PATH = path.join(BUILD_DIR, 'index.html');
const SITEMAP_PATH = path.join(BUILD_DIR, 'sitemap.xml');
const BUILD_DATE = new Date().toISOString().slice(0, 10);

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function replaceTag(html: string, pattern: RegExp, replacement: string, label: string) {
  if (!pattern.test(html)) {
    throw new Error(`Could not find ${label} in build/index.html`);
  }

  return html.replace(pattern, replacement);
}

function getImagePreloadTags(route: ReturnType<typeof getStaticRoutes>[number], seoImageUrl: string) {
  if (route.name === 'home') {
    return null;
  }

  if (route.name !== 'project-detail' || !seoImageUrl.startsWith(getCanonicalUrl('/'))) {
    return '';
  }

  const imagePath = new URL(seoImageUrl).pathname;
  const imageType = imagePath.endsWith('.webp')
    ? 'image/webp'
    : imagePath.endsWith('.jpg') || imagePath.endsWith('.jpeg')
      ? 'image/jpeg'
      : undefined;
  const typeAttribute = imageType ? ` type="${imageType}"` : '';

  return `      <link rel="preload" href="${imagePath}" as="image"${typeAttribute} fetchpriority="high" />`;
}

function applyRouteMetadata(template: string, route: ReturnType<typeof getStaticRoutes>[number]) {
  const seo = getSeoDescriptor(route);
  const canonicalUrl = getCanonicalUrl(seo.path);
  const seoImageUrl = getSeoImageUrl(route);
  const preloadTags = getImagePreloadTags(route, seoImageUrl);
  const escapedTitle = escapeHtml(seo.title);
  const escapedDescription = escapeHtml(seo.description);
  const structuredData = JSON.stringify(getStructuredDataForRoute(route), null, 2).replaceAll(
    '<',
    '\\u003c',
  );

  let html = template;
  if (preloadTags !== null) {
    html = html.replace(
      /\s*<link rel="preload" href="[^"]+" as="image"[^>]*fetchpriority="high"\s*\/>/g,
      '',
    );

    if (preloadTags) {
      html = html.replace(/(<link rel="icon"[^>]*>\n)/, `$1${preloadTags}\n`);
    }
  }
  html = replaceTag(html, /<title>[\s\S]*?<\/title>/, `<title>${escapedTitle}</title>`, 'title');
  html = replaceTag(
    html,
    /<meta name="description" content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${escapedDescription}" />`,
    'meta description',
  );
  html = replaceTag(
    html,
    /<meta name="robots" content="[^"]*"\s*\/?>/,
    `<meta name="robots" content="${seo.robots || 'index,follow'}" />`,
    'meta robots',
  );
  html = replaceTag(
    html,
    /<link rel="canonical" href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${canonicalUrl}" />`,
    'canonical link',
  );
  html = replaceTag(
    html,
    /<meta property="og:title" content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${escapedTitle}" />`,
    'og:title',
  );
  html = replaceTag(
    html,
    /<meta property="og:description" content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${escapedDescription}" />`,
    'og:description',
  );
  html = replaceTag(
    html,
    /<meta property="og:url" content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${canonicalUrl}" />`,
    'og:url',
  );
  html = replaceTag(
    html,
    /<meta property="og:type" content="[^"]*"\s*\/?>/,
    `<meta property="og:type" content="${seo.type || 'website'}" />`,
    'og:type',
  );
  html = replaceTag(
    html,
    /<meta property="og:image" content="[^"]*"\s*\/?>/,
    `<meta property="og:image" content="${seoImageUrl}" />`,
    'og:image',
  );
  html = replaceTag(
    html,
    /<meta property="og:image:width" content="[^"]*"\s*\/?>/,
    '<meta property="og:image:width" content="1200" />',
    'og:image:width',
  );
  html = replaceTag(
    html,
    /<meta property="og:image:height" content="[^"]*"\s*\/?>/,
    '<meta property="og:image:height" content="630" />',
    'og:image:height',
  );
  html = replaceTag(
    html,
    /<meta name="twitter:card" content="[^"]*"\s*\/?>/,
    '<meta name="twitter:card" content="summary_large_image" />',
    'twitter:card',
  );
  html = replaceTag(
    html,
    /<meta name="twitter:title" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${escapedTitle}" />`,
    'twitter:title',
  );
  html = replaceTag(
    html,
    /<meta name="twitter:description" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${escapedDescription}" />`,
    'twitter:description',
  );
  html = replaceTag(
    html,
    /<meta name="twitter:image" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:image" content="${seoImageUrl}" />`,
    'twitter:image',
  );
  html = replaceTag(
    html,
    /<script type="application\/ld\+json" data-seo-jsonld="true">[\s\S]*?<\/script>/,
    `<script type="application/ld+json" data-seo-jsonld="true">\n${structuredData}\n      </script>`,
    'JSON-LD',
  );

  return html;
}

async function writeRouteHtml(
  route: ReturnType<typeof getStaticRoutes>[number],
  template: string,
) {
  const outputPath =
    route.path === '/'
      ? path.join(BUILD_DIR, 'index.html')
      : path.join(BUILD_DIR, route.path.slice(1), 'index.html');

  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, applyRouteMetadata(template, route), 'utf8');
}

async function writeSitemap(routes: ReturnType<typeof getStaticRoutes>) {
  const entries = routes
    .filter((route) => route.name !== 'bedankt')
    .map((route) => {
      const canonicalUrl = getCanonicalUrl(route.path);
      const priority =
        route.name === 'home'
          ? '1.0'
          : route.name === 'contact'
            ? '0.9'
            : route.name === 'service-detail' || route.name === 'project-detail'
              ? '0.8'
              : '0.7';
      const changefreq =
        route.name === 'project-detail' || route.name === 'voorwaarden' ? 'monthly' : 'weekly';

      return `  <url>\n    <loc>${canonicalUrl}</loc>\n    <lastmod>${BUILD_DATE}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;
  await writeFile(SITEMAP_PATH, xml, 'utf8');
}

async function main() {
  const routes = getStaticRoutes();
  const template = await readFile(TEMPLATE_PATH, 'utf8');

  await Promise.all(routes.map((route) => writeRouteHtml(route, template)));
  await writeSitemap(routes);

  console.log(`Generated ${routes.length} prerendered routes and sitemap.xml in ${BUILD_DIR}.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
