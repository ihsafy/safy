# Iqbal Hossain Safy — Portfolio

Personal portfolio site for **Iqbal Hossain Safy** — Web Developer · Machine Learning · Computer Vision · App Testing.

Built with **React 19 + Vite**. Design direction: motorsport-engineering editorial — carbon-black and paper surfaces, one racing-red signal colour, condensed uppercase technical labels (Barlow Condensed), Fraunces for the display serif and Inter for body text. All motion is 2D (CSS/SVG transforms and opacity); there is no 3D, no WebGL, and no animation library.

The hero, the technology-icon strip, and the ICIDA 2025 certificate block were rebuilt in this revision; the previous blank-hero bug is fixed at the root (see "Reveal system" below).

## Run locally

```bash
npm install
npm run dev       # dev server
npm run build     # production build → dist/
npm run preview   # serve the production build
```

## Structure

```
index.html            # Vite entry + SEO metadata + JSON-LD
public/assets/        # favicons, portrait, project screenshot, certificate
src/
  App.jsx             # section composition
  hooks.js            # reveal (fail-safe), scroll-spy, Dhaka clock
  styles.css          # design system — tokens + all component styles
  components/         # Header, Hero, About, Skills, Work, AiVision,
                      # Research, ResearchProfiles, CertificateModal,
                      # Experience, Contact, Footer, SecHead, SplitWords,
                      # TechIcon
  data/content.js     # ALL site content in one place
```

Edit `src/data/content.js` to update projects, experience, skills, research, and contact details.

### Reveal system (why the hero can no longer go blank)

Content is **visible by default**. JavaScript measures which elements are already
on screen and only then adds `reveal-armed` to `<html>`, which is the sole switch
that lets CSS hide below-the-fold elements for their entrance animation. If the
script never runs, throws, or the observer never fires, everything stays visible;
a 2.5 s timer also reveals anything still hidden. `prefers-reduced-motion` skips
the animation entirely.

### Technology icons

Logos come from [`simple-icons`](https://simpleicons.org) (CC0-1.0) as inline SVG.
Only named imports are used so Vite tree-shakes them, and every slug is verified
to exist in the installed version. Logos that Simple Icons does not ship for
brand-policy reasons (Java, VS Code, the Microsoft Office apps) render as a
plain row label with no substitute image.

### Certificate image

The ICIDA 2025 certificate is stored as `.jpg` (not `.jfif`) so it is served with
the correct `image/jpeg` content type. The original file is preserved outside the
repository and was not modified.

### Hero accent image

The image beneath the portrait in the hero is the file supplied by Iqbal, copied
unchanged into `public/assets/images/hero-car.avif`. It is a 3392×1908 (16:9)
AVIF; the markup declares those intrinsic dimensions and the CSS uses
`aspect-ratio` plus `object-fit: contain`, so the picture is never cropped or
stretched. It shares the right column's width with the portrait card, sitting at
a constant 340px maximum on desktop and scaling down with the viewport. The
earlier inline-SVG racing-car illustration and its frame have been removed.

### Research profiles

`ResearchProfiles` renders the two academic links (Google Scholar, ResearchGate)
as a compact panel inside the Research section. Both open in a new tab with
`rel="noopener noreferrer"`. No citation counts, publication counts, or other
metrics are displayed, because none were supplied.

## Deploy (Vercel)

- Framework: **Vite** (auto-detected)
- Build command: `npm run build`
- Output directory: `dist`
- No server, database, or paid services required — static build, Vercel Hobby compatible.

Canonical URL: <https://ihsafy.vercel.app>
