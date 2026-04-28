import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type NavSection = { kind: 'section'; label: string; id: string };
type NavPage = { kind: 'page'; label: string; path: string };

const navItems: (NavSection | NavPage)[] = [
  { kind: 'page', label: 'Home', path: '/' },
  { kind: 'page', label: 'Speakers', path: '/speakers' },
  { kind: 'page', label: 'Schedule', path: '/itinerary' },
  { kind: 'page', label: 'Buy Tickets', path: '/apply' },
  { kind: 'page', label: 'Transparency', path: '/transparency' },
  { kind: 'page', label: 'Team', path: '/team' },
  { kind: 'page', label: 'Our Story', path: '/our-story' },
  { kind: 'page', label: 'Thought Pieces', path: '/thoughtpieces' },
  { kind: 'page', label: 'FAQs', path: '/faq' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the mobile menu automatically when crossing into desktop width
  useEffect(() => {
    const mql = window.matchMedia('(min-width: 1024px)');
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setIsMobileMenuOpen(false);
    };
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

  // ESC closes the mobile menu
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isMobileMenuOpen]);

  // Defensive: close on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const goToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname === '/') {
      scrollToSection(id);
    } else {
      navigate(`/#${id}`);
    }
  };

  const onLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === '/') {
      e.preventDefault();
      scrollToSection('hero');
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  const onPageLinkClick = (path: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (path === '/' && location.pathname === '/') {
      e.preventDefault();
      scrollToSection('hero');
    }
    setIsMobileMenuOpen(false);
  };

  const renderLogo = () => (
    <Link
      to="/"
      onClick={onLogoClick}
      className="tnd-nav-logo"
      aria-label="The Nepal Discourse — home"
    >
      <img src="/tnd.png" alt="The Nepal Discourse" className="tnd-nav-logo-img" />
    </Link>
  );

  const desktopLinks = navItems.map((item) =>
    item.kind === 'page' ? (
      <Link
        key={item.path}
        to={item.path}
        className={`tnd-nav-link${item.path === '/thoughtpieces' ? ' tnd-nav-link--cta' : ''}`}
        onClick={onPageLinkClick(item.path)}
        aria-current={location.pathname === item.path ? 'page' : undefined}
      >
        {item.label}
        <span className="tnd-nav-link-underline" />
      </Link>
    ) : (
      <button
        key={item.id}
        type="button"
        onClick={() => goToSection(item.id)}
        className="tnd-nav-link"
      >
        {item.label}
        <span className="tnd-nav-link-underline" />
      </button>
    ),
  );

  const desktopSocials = (
    <div className="tnd-nav-socials">
      <a
        href="https://www.instagram.com/thenepaldiscourse/"
        target="_blank"
        rel="noopener noreferrer"
        className="tnd-nav-social"
        aria-label="Follow us on Instagram"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#833AB4" />
              <stop offset="50%" stopColor="#FD1D1D" />
              <stop offset="100%" stopColor="#F77737" />
            </linearGradient>
          </defs>
          <path
            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
            fill="url(#instagram-gradient)"
          />
        </svg>
      </a>
      <a
        href="https://www.linkedin.com/company/the-nepal-discourse-2026/"
        target="_blank"
        rel="noopener noreferrer"
        className="tnd-nav-social"
        aria-label="The Nepal Discourse on LinkedIn"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#0A66C2"
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
          />
        </svg>
      </a>
    </div>
  );

  return (
    <>
      <motion.nav
        role="navigation"
        aria-label="Primary"
        className={`fixed top-0 left-0 right-0 z-50 nav-bg-match transition-all ${
          isScrolled ? 'border-b border-border shadow-[0_4px_24px_rgba(0,0,0,0.12)]' : ''
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="tnd-nav-shell">
          {/* Hamburger row: phones + tablets (< 1024px) */}
          <div className="tnd-nav-mobile-row">
            {renderLogo()}
            <div className="tnd-nav-mobile-actions">
              <Link
                to="/thoughtpieces"
                className="tnd-nav-mobile-cta"
                onClick={onPageLinkClick('/thoughtpieces')}
              >
                Thought Pieces
              </Link>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="tnd-nav-toggle"
                aria-label={isMobileMenuOpen ? 'Close main menu' : 'Open main menu'}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-primary-navigation"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Inline desktop nav: >= 1024px */}
          <div className="tnd-nav-desktop-row">
            {renderLogo()}
            <div className="tnd-nav-cluster">
              <div className="tnd-nav-links">{desktopLinks}</div>
              {desktopSocials}
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-primary-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Primary navigation"
            className="tnd-nav-overlay nav-bg-match"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="tnd-nav-overlay-inner">
              {navItems.map((item, index) =>
                item.kind === 'page' ? (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.26,
                      delay: index * 0.04,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      to={item.path}
                      className={`tnd-nav-overlay-link${item.path === '/thoughtpieces' ? ' tnd-nav-overlay-link--cta' : ''}`}
                      onClick={onPageLinkClick(item.path)}
                      aria-current={location.pathname === item.path ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ) : (
                  <motion.button
                    key={item.id}
                    type="button"
                    onClick={() => goToSection(item.id)}
                    className="tnd-nav-overlay-link"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.26,
                      delay: index * 0.04,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {item.label}
                  </motion.button>
                ),
              )}
              <motion.div
                className="tnd-nav-overlay-socials"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.26,
                  delay: navItems.length * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <a
                  href="https://www.instagram.com/thenepaldiscourse/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tnd-nav-overlay-social"
                  aria-label="Follow us on Instagram"
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="instagram-gradient-mobile" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#833AB4" />
                        <stop offset="50%" stopColor="#FD1D1D" />
                        <stop offset="100%" stopColor="#F77737" />
                      </linearGradient>
                    </defs>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="url(#instagram-gradient-mobile)" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/the-nepal-discourse-2026/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tnd-nav-overlay-social"
                  aria-label="The Nepal Discourse on LinkedIn"
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="#0A66C2"
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                    />
                  </svg>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
