# SEO Launch Checklist

## Before Deploy

- Confirm the canonical production domain is `https://angelorenovates.be`.
- Make sure the host rewrites all frontend routes to `index.html` so these URLs never 404:
  - `/`
  - `/wie-ben-ik`
  - `/diensten`
  - `/diensten/:service`
  - `/verhuur`
  - `/projecten`
  - `/projecten/:project`
  - `/contact`
  - `/algemene-voorwaarden`
- Verify `robots.txt` is reachable at `/robots.txt`.
- Verify `sitemap.xml` is reachable at `/sitemap.xml`.
- Keep only one canonical version of the site live:
  - either `https://angelorenovates.be`
  - or `https://www.angelorenovates.be`
- Keep the SPF record live for email trust:
  - `v=spf1 include:secureserver.net -all`

## Google Search Console

- Add a `Domain property` for `angelorenovates.be`.
- Complete the DNS verification.
- Submit the sitemap:
  - `https://angelorenovates.be/sitemap.xml`
- Use `URL Inspection` on these priority pages:
  - `/`
  - `/diensten`
  - `/diensten/vloerwerkzaamheden`
  - `/diensten/muurinjectie-opstijgend-vocht`
  - `/projecten`
  - `/contact`
- Request indexing for any newly deployed service or project page.

## Content Checks

- Keep one clear `h1` per page.
- Ensure each service page contains:
  - what the service is
  - where you work
  - how to contact you
- Add real project photos over time to replace generic stock imagery where possible.
- Keep business details consistent across site, Google Business Profile, and directories:
  - `info@angelorenovates.be`
  - `+32 478 06 27 48`
  - `BE0817410486`

## Performance Checks

- Run PageSpeed Insights for:
  - home
  - one service detail page
  - one project detail page
- Watch these metrics:
  - LCP
  - CLS
  - INP
- Compress any newly added image before publishing.
- Prefer WebP or AVIF for local assets.

## After Launch

- Check Search Console coverage after a few days.
- Fix any `404`, `Duplicate without user-selected canonical`, or `Crawled - currently not indexed` warnings.
- Track which pages get impressions and clicks.
- Expand the sitemap when new projects or services are added.
