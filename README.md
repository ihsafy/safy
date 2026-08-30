# Personal Portfolio & Research Showcase — Iqbal Hossain Safy

A high-performance, fully responsive personal portfolio website showcasing **Web Development projects, AI & Machine Learning research, Computer Vision work, and academic publications**.

## ✨ Key Features

### Premium Design System
A refined dark/light theme built with CSS custom properties, `Space Grotesk` + `Inter` typography, restrained gradients, subtle background fields, and elegant cards, badges, and micro-interactions — designed with restraint rather than visual noise.

### Dark & Light Theme
First-visit theme follows the system preference and is also fully **persistable** via a toggle in the navigation (`localStorage`-backed), with correct `prefers-color-scheme` handling and a `theme-color` meta sync.

### Responsive Mobile Experience
A touch-friendly slide-in navigation drawer with a blurred backdrop scrim, **ESC / backdrop / link-click** to close, body scroll-lock, and accessible `aria-expanded` / `aria-controls` wiring.

### Navigation & Scroll State
Sticky blurred header with shadow-on-scroll, per-section **ScrollSpy active indicator** (`aria-current`), smooth scrolling, and a back-to-top control.

### SEO & Metadata
**Schema.org JSON-LD** (Person + WebSite), Open Graph + Twitter/X cards, canonical URL, semantic HTML5, proper heading hierarchy, and descriptive image alt text.

### Performance
Built on **native ES6+, zero dependencies** — no heavy frameworks or libraries. IntersectionObserver reveal animations, requestAnimationFrame-throttled scroll handlers, an **optimized WebP profile image** (96% smaller than the source JPEG), `preload` for the LCP image, and `prefers-reduced-motion` support throughout.

### Accessibility
Semantic landmarks, visible focus states, keyboard navigation, skip link, sufficient color contrast, and reduced-motion fallbacks.

---

## 🛠️ Project Structure

```text
safy/
├── assets/
│   ├── favicon/               # Favicon set, manifest, social OG image
│   ├── icons/                 # Tech logo SVGs (define-then-inline sprite)
│   └── images/
│       └── profile/           # Optimized profile imagery (WebP)
├── css/
│   └── style.css              # Tokens, layout, sections, responsive, motion
├── js/
│   └── main.js                # Theme, navigation, scrollspy, reveal, smooth scroll
├── index.html                 # Single page with SEO + JSON-LD metadata
└── README.md                  # Project documentation
```

## 🧱 Tech Stack

- **Vanilla HTML5 / CSS3** (custom properties, grid, backdrop-filter)
- **Native JavaScript (ES6+) — no frameworks, no build step**
- Google Fonts (Space Grotesk + Inter)
- Icons: inline `currentColor` SVGs — tech logos are a single inlined symbol sprite (no icon fonts, no external requests)

## ▶️ Run Locally

Open `index.html` directly in a web browser, or use a simple static server:

```bash
python3 -m http.server 8000
# or
npx serve
```

Then visit `http://localhost:8000`.

## 🌗 Theme

- Defaults to the OS color scheme on first visit.
- Use the sun/moon toggle in the header to switch and persist a preference.

## 📬 Contact & Social

- **Email:** ihsafy2k21@gmail.com
- **Phone / WhatsApp:** +880 1724 612320
- **GitHub:** [ihsafy](https://github.com/ihsafy)
- **LinkedIn:** [Iqbal Hossain Safy](https://linkedin.com/in/iqbal-hossain-safy)
- **Facebook:** [ih.safy](https://www.facebook.com/ih.safy/)

## 📄 License

This project is a personal portfolio website created by [Iqbal Hossain Safy](https://github.com/ihsafy).
