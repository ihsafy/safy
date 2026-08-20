document.addEventListener('DOMContentLoaded', () => {

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Mobile Menu Toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');
    const menuIcon = mobileMenuToggle?.querySelector('i');

    const setMenuState = (isOpen) => {
        navLinks.classList.toggle('active', isOpen);
        mobileMenuToggle.setAttribute('aria-expanded', String(isOpen));
        if (menuIcon) {
            menuIcon.classList.toggle('ph-list', !isOpen);
            menuIcon.classList.toggle('ph-x', isOpen);
        }
    };

    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', () => {
            setMenuState(!navLinks.classList.contains('active'));
        });

        // Close mobile menu on link click (event delegation)
        navLinks.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                setMenuState(false);
            }
        });
    }

    // 2. Dynamic Copyright Year
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // 3. Scroll Reveal Animations
    if (!prefersReducedMotion && 'IntersectionObserver' in window) {
        const revealElements = document.querySelectorAll('.section, .hero-content, .hero-image-wrapper');
        revealElements.forEach(el => el.classList.add('reveal'));

        const revealOnScroll = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        });

        revealElements.forEach(el => revealOnScroll.observe(el));
    }

    // 4. Smooth Scrolling for Navigation Links
    const navbar = document.querySelector('.navbar');
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;

            e.preventDefault();

            const headerOffset = navbar ? navbar.offsetHeight : 0;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: prefersReducedMotion ? 'auto' : 'smooth'
            });

            history.pushState(null, '', targetId);
        });
    });
});