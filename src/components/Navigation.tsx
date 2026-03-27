import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type NavSection = { kind: 'section'; label: string; id: string };
type NavPage = { kind: 'page'; label: string; path: string };

const navItems: (NavSection | NavPage)[] = [
  { kind: 'section', label: 'Agenda', id: 'agenda' },
  { kind: 'section', label: 'Team', id: 'organizers' },
  { kind: 'section', label: 'FAQ', id: 'faq' },
  { kind: 'section', label: 'Tickets', id: 'cta' },
  { kind: 'page', label: 'Our Story', path: '/our-story' },
];

const navLinkClass =
  'relative text-sm tracking-wide group text-foreground no-underline hover:opacity-90';

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

  return (
    <>
      <motion.nav
        role="navigation"
        aria-label="Primary"
        className={`fixed top-0 left-0 right-0 z-50 nav-bg-match transition-all duration-[260ms] ${
          isScrolled ? 'border-b border-border shadow-[0_4px_24px_rgba(0,0,0,0.12)]' : ''
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <Link
              to="/"
              onClick={onLogoClick}
              className="hover:opacity-70 transition-opacity duration-[180ms]"
            >
              <img src="/tnd.png" alt="The Nepal Discourse" className="h-10" />
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) =>
                item.kind === 'page' ? (
                  <Link key={item.path} to={item.path} className={navLinkClass}>
                    {item.label}
                    <span className="absolute left-0 bottom-0 w-0 h-px bg-foreground transition-all duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
                  </Link>
                ) : (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => goToSection(item.id)}
                    className={`${navLinkClass} bg-transparent border-0 cursor-pointer font-inherit p-0`}
                  >
                    {item.label}
                    <span className="absolute left-0 bottom-0 w-0 h-px bg-foreground transition-all duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
                  </button>
                ),
              )}
              <a
                href="https://www.instagram.com/thenepaldiscourse/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:opacity-80 transition-opacity duration-[180ms] flex items-center"
                aria-label="Follow us on Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                  <defs>
                    <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#833AB4" />
                      <stop offset="50%" stopColor="#FD1D1D" />
                      <stop offset="100%" stopColor="#F77737" />
                    </linearGradient>
                  </defs>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="url(#instagram-gradient)" />
                </svg>
              </a>
            </div>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2"
              aria-label={isMobileMenuOpen ? 'Close main menu' : 'Open main menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-primary-navigation"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-primary-navigation"
            className="fixed inset-0 z-40 nav-bg-match md:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
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
                      className="text-2xl text-foreground"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ) : (
                  <motion.button
                    key={item.id}
                    type="button"
                    onClick={() => goToSection(item.id)}
                    className="text-2xl bg-transparent border-0 cursor-pointer font-inherit text-foreground"
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
              <motion.a
                href="https://www.instagram.com/thenepaldiscourse/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 hover:opacity-80 transition-opacity duration-[180ms] flex items-center justify-center"
                aria-label="Follow us on Instagram"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.26,
                  delay: navItems.length * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                  <defs>
                    <linearGradient id="instagram-gradient-mobile" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#833AB4" />
                      <stop offset="50%" stopColor="#FD1D1D" />
                      <stop offset="100%" stopColor="#F77737" />
                    </linearGradient>
                  </defs>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="url(#instagram-gradient-mobile)" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
