/* ==========================================================================
   Portfolio — Iqbal Hossain Safy
   Vanilla ES6: theme, navigation, skills tabs, scrollspy, reveal, cursor,
   magnetic buttons, scroll progress. No dependencies.
   ========================================================================== */
(function () {
    'use strict';

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(pointer: fine)').matches;

    /* ------------------------------------------------------------------
       1. Dynamic copyright year + Dhaka clock
       ------------------------------------------------------------------ */
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    const clockEl = document.getElementById('clock');
    if (clockEl && typeof Intl !== 'undefined' && Intl.DateTimeFormat) {
        let clockLocked = false;
        const render = () => {
            try {
                const now = new Date();
                const time = new Intl.DateTimeFormat('en-GB', {
                    timeZone: 'Asia/Dhaka',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                }).format(now);
                const date = new Intl.DateTimeFormat('en-GB', {
                    timeZone: 'Asia/Dhaka',
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric',
                }).format(now);
                clockEl.textContent = 'now in dhaka — ' + date + ' · ' + time;
                clockEl.hidden = false;
            } catch (e) {
                clockEl.hidden = true;
            }
        };
        render();
        setInterval(render, 30000);
    }

    /* ------------------------------------------------------------------
       2. Theme toggle (persisted, respects system preference)
       ------------------------------------------------------------------ */
    const themeToggle = document.getElementById('themeToggle');
    const STORAGE_KEY = 'safy-theme';

    function applyTheme(theme, save) {
        document.documentElement.setAttribute('data-theme', theme);
        if (themeToggle) themeToggle.setAttribute('aria-pressed', String(theme === 'light'));
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.content = theme === 'light' ? '#fcfcfe' : '#0b0b10';
        if (save) {
            try { localStorage.setItem(STORAGE_KEY, theme); } catch (e) { /* ignore */ }
        }
    }

    if (themeToggle) {
        applyTheme(document.documentElement.getAttribute('data-theme') || 'dark', false);
        themeToggle.addEventListener('click', () => {
            const next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
            applyTheme(next, true);
        });
    }

    /* ------------------------------------------------------------------
       3. Mobile navigation drawer (toggle, scrim, ESC, link-close, focus)
       ------------------------------------------------------------------ */
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const scrim = document.querySelector('[data-nav-scrim]');
    const header = document.querySelector('[data-header]');
    const mobileQuery = window.matchMedia('(max-width: 768px)');

    // Keep the off-canvas drawer out of the tab order until it's opened (mobile).
    if (mobileQuery.matches && navLinks) navLinks.inert = true;

    function setDrawer(open) {
        if (!menuToggle || !navLinks || !scrim) return;
        document.body.classList.toggle('nav-open', open);
        navLinks.classList.toggle('open', open);
        scrim.hidden = !open;
        if (scrim) scrim.classList.toggle('show', open);
        menuToggle.setAttribute('aria-expanded', String(open));
        menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');

        // Keep hidden drawer links out of the tab order (mobile only).
        if (mobileQuery.matches) navLinks.inert = !open;
    }

    if (menuToggle && navLinks && scrim) {
        menuToggle.addEventListener('click', () => {
            setDrawer(!navLinks.classList.contains('open'));
        });

        scrim.addEventListener('click', () => setDrawer(false));

        navLinks.addEventListener('click', (e) => {
            if (e.target.closest('a')) setDrawer(false);
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navLinks.classList.contains('open')) {
                setDrawer(false);
                menuToggle.focus();
            }
        });

        // Simple focus containment while the drawer is open.
        document.addEventListener('keydown', (e) => {
            if (e.key !== 'Tab' || !navLinks.classList.contains('open')) return;
            const focusables = navLinks.querySelectorAll('a[href]');
            if (!focusables.length) return;
            const first = focusables[0];
            const last = focusables[focusables.length - 1];
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        });

        // Move focus into the drawer when opened.
        navLinks.addEventListener('transitionend', (e) => {
            if (e.propertyName === 'transform' && navLinks.classList.contains('open')) {
                const first = navLinks.querySelector('a[href]');
                if (first) first.focus();
            }
        });

        const handleResize = () => {
            if (!mobileQuery.matches && navLinks.classList.contains('open')) setDrawer(false);
            if (!mobileQuery.matches) navLinks.inert = false;
        };
        window.addEventListener('resize', handleResize);
    }

    /* ------------------------------------------------------------------
       4. Smooth scrolling for in-page anchors
       ------------------------------------------------------------------ */
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            if (!targetId || targetId === '#') return;

            const target = document.querySelector(targetId);
            if (!target) return;

            e.preventDefault();
            const offset = header ? header.offsetHeight + 4 : 0;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({
                top: Math.max(top, 0),
                behavior: reducedMotion ? 'auto' : 'smooth',
            });
            history.pushState(null, '', targetId);
        });
    });

    /* ------------------------------------------------------------------
       5. Header state + scroll progress + scrollspy
       ------------------------------------------------------------------ */
    const sections = Array.from(document.querySelectorAll('main section[id]'));
    const navAnchors = Array.from(navLinks ? navLinks.querySelectorAll('a[href^="#"]') : []);
    const progressBar = document.querySelector('[data-scroll-progress]');
    const backTop = document.getElementById('backTop');

    function updateHeaderState() {
        if (header) header.classList.toggle('scrolled', window.scrollY > 8);
        if (progressBar) {
            const total = document.documentElement.scrollHeight - window.innerHeight;
            const p = total > 0 ? window.scrollY / total : 0;
            progressBar.style.transform = 'scaleX(' + p + ')';
        }
        if (backTop) {
            const docEnd = document.documentElement.scrollHeight - window.innerHeight;
            backTop.classList.toggle('is-visible', window.scrollY > 600 && window.scrollY < docEnd - 160);
        }
    }

    function updateActiveLink() {
        const pos = window.scrollY + 130;
        let currentId = sections[0] ? sections[0].id : null;

        for (const section of sections) {
            if (section.offsetTop <= pos) currentId = section.id;
        }

        navAnchors.forEach((link) => {
            const isActive = link.getAttribute('href') === '#' + currentId;
            link.classList.toggle('active', isActive);
            if (isActive) link.setAttribute('aria-current', 'true');
            else link.removeAttribute('aria-current');
        });
    }

    /* ------------------------------------------------------------------
       6. Scroll reveal (IntersectionObserver)
       ------------------------------------------------------------------ */
    const revealEls = document.querySelectorAll('[data-reveal]');

    if (!reducedMotion && 'IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, obs) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const delay = entry.target.getAttribute('data-delay');
                    if (delay) entry.target.style.setProperty('--reveal-delay', delay + 'ms');
                    entry.target.classList.add('is-revealed');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

        revealEls.forEach((el) => revealObserver.observe(el));
    } else {
        revealEls.forEach((el) => el.classList.add('is-revealed'));
    }

    /* ------------------------------------------------------------------
       7. Skills tabs (category filter)
       ------------------------------------------------------------------ */
    const tabs = document.querySelectorAll('.skill-tab');
    const panel = document.getElementById('panel-skills');
    const techCards = Array.from(document.querySelectorAll('.tech-card'));

    if (tabs.length && techCards.length) {
        let filterTimeout = null;

        function applyFilter(filter) {
            techCards.forEach((card) => {
                const show = filter === 'all' || card.dataset.cat === filter;
                if (!show) {
                    card.classList.add('is-fading');
                    filterTimeout = setTimeout(() => {
                        card.classList.add('is-hidden');
                        card.classList.remove('is-fading');
                    }, 260);
                } else {
                    card.classList.remove('is-hidden', 'is-fading');
                }
            });
        }

        function selectTab(tab) {
            tabs.forEach((t) => {
                const on = t === tab;
                t.classList.toggle('is-active', on);
                t.setAttribute('aria-selected', String(on));
            });
            if (panel) {
                panel.setAttribute('aria-labelledby', tab.id);
                const label = tab.textContent.trim();
                if (panel.previousElementSibling) panel.setAttribute('aria-label', label);
            }
            clearTimeout(filterTimeout);
            applyFilter(tab.dataset.filter);
        }

        tabs.forEach((tab) => {
            tab.addEventListener('click', () => selectTab(tab));
            tab.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                    e.preventDefault();
                    const idx = Array.from(tabs).indexOf(tab);
                    const next = e.key === 'ArrowRight'
                        ? tabs[(idx + 1) % tabs.length]
                        : tabs[(idx - 1 + tabs.length) % tabs.length];
                    next.focus();
                    selectTab(next);
                }
            });
        });
    }

    /* ------------------------------------------------------------------
       8. Back-to-top
       ------------------------------------------------------------------ */
    if (backTop) {
        backTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
        });
    }

    /* ------------------------------------------------------------------
       9. Custom cursor ring (fine pointers only)
       ------------------------------------------------------------------ */
    const cursor = document.querySelector('[data-cursor]');

    if (cursor && finePointer && !reducedMotion) {
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let ringX = mouseX;
        let ringY = mouseY;
        let visible = false;
        let raf = null;

        const ring = cursor.querySelector('.cursor-ring');

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            if (!visible) {
                visible = true;
                cursor.classList.add('is-visible');
                ringX = mouseX;
                ringY = mouseY;
            }
            const isInteractive = e.target.closest('a, button, .tech-card, .project-card, .skill-tab, .research-item, [data-cursor]');
            cursor.classList.toggle('is-on', Boolean(isInteractive));
            if (!raf) {
                raf = requestAnimationFrame(loop);
            }
        });

        function loop() {
            ringX += (mouseX - ringX) * 0.16;
            ringY += (mouseY - ringY) * 0.16;
            ring.style.transform = 'translate3d(' + ringX + 'px,' + ringY + 'px,0)';
            raf = null;
        }

        document.addEventListener('mouseleave', () => {
            visible = false;
            cursor.classList.remove('is-visible');
        });
    }

    /* ------------------------------------------------------------------
       10. Magnetic buttons (subtle, fine pointers)
       ------------------------------------------------------------------ */
    if (finePointer && !reducedMotion) {
        document.querySelectorAll('.magnetic').forEach((el) => {
            const strength = 0.28;
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const dx = e.clientX - (rect.left + rect.width / 2);
                const dy = e.clientY - (rect.top + rect.height / 2);
                el.style.transform = 'translate(' + dx * strength + 'px,' + dy * strength + 'px)';
            });
            el.addEventListener('mouseleave', () => {
                el.style.transform = '';
            });
        });
    }

    /* ------------------------------------------------------------------
       11. Scroll-driven UI (throttled)
       ------------------------------------------------------------------ */
    let ticking = false;
    function onScroll() {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(() => {
            updateHeaderState();
            updateActiveLink();
            ticking = false;
        });
    }

    updateHeaderState();
    updateActiveLink();
    window.addEventListener('scroll', onScroll, { passive: true });
})();