# Yejun Lee — Research Website

An English-language, responsive academic portfolio for **Yejun Lee** (Pusan National University).

Built with plain HTML, CSS, JavaScript and original SVG illustrations. No framework, build step, API key, or paid hosting is required.

## Files

- `index.html`: homepage content and links
- `cv.html`: separate English curriculum vitae page
- `START_HERE_KR.md`: Korean setup guide
- `assets/style.css`: responsive design, typography and colors
- `assets/site.js`: mobile menu and copyright year
- `assets/research-*.svg`, `assets/hero-network.svg`: editable original research illustrations
- `assets/favicon.svg`: browser icon

## Publishing with GitHub Pages

1. Log in to GitHub as **lyj6720**.
2. Create a **public** repository named exactly `lyj6720.github.io`. Initialize it with a README if desired.
3. Upload **the contents of this folder**, maintaining `index.html` in the repository root and the `assets` directory.
4. In the repository: **Settings → Pages → Build and deployment → Deploy from a branch → `main` / `(root)` → Save** (if not enabled automatically).
5. Allow a few minutes for deployment, then open **https://lyj6720.github.io/**.

The linked GitHub connector currently sees zero accessible repositories, and its provided actions do not include creating a repository. Once this repository exists, the assistant can maintain the site through the connector.

## Updating content

- Paper titles, dates, statuses and DOIs are found in `index.html` under `#publications`.
- Contact email is `lyj6720@pusan.ac.kr`.
- Domestic conference contributions can be expanded on the page.
- The three research figures are **new conceptual illustrations**, not extracted figures from the author's manuscripts.
- To use a real paper figure, replace an `assets/research-*.svg` with a properly licensed image and update the image path and alt text in `index.html`.
- To offer a CV PDF, add `cv.pdf` at the root and add a link such as `<a href="cv.pdf" target="_blank">Download CV</a>`.

## Design

Pretendard is loaded via a CDN with system-font fallbacks. The site works without a build step and has responsive navigation, accessible heading landmarks, alt text, and reduced-motion support.

## Editorial note

Publication information is based on the supplied October 2026 CV. One journal manuscript is listed as under review, and one i3CE conference paper is listed as presented with proceedings forthcoming. Please update these once the status changes. Current research is described as work in progress, not as a completed publication. Contact phone numbers and unpublished full manuscripts are not hosted.