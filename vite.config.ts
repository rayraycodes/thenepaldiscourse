  import fs from 'node:fs';
  import path from 'path';
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react-swc';

  /**
   * Two pages:
   *   /       → index.html, the 2027 home (static HTML, no React)
   *   /2026/* → 2026/index.html, the original 2026 SPA (BrowserRouter basename="/2026")
   *
   * GitHub Pages only serves real files, so deep links like /2026/speakers 404.
   * GitHub serves 404.html for missing paths, so it must be the 2026 SPA shell;
   * that shell also redirects old links (/speakers → /2026/speakers).
   *
   * Staging: `vite build --base=/staging/` builds the same site for thenepaldiscourse.com/staging/
   * (see .github/workflows/deploy.yml).
   */
  function spaFallback404() {
    let outDir = path.resolve(__dirname, 'dist');
    return {
      name: 'spa-fallback-404',
      configResolved(config: { root: string; build: { outDir: string } }) {
        outDir = path.resolve(config.root, config.build.outDir);
      },
      closeBundle() {
        fs.copyFileSync(path.join(outDir, '2026', 'index.html'), path.join(outDir, '404.html'));
      },
    };
  }

  /** Keep non-production builds (e.g. /staging/) out of search results. */
  function noindexOffRoot() {
    let base = '/';
    return {
      name: 'noindex-off-root',
      configResolved(config: { base: string }) {
        base = config.base;
      },
      transformIndexHtml() {
        return base === '/' ? [] : [{ tag: 'meta', attrs: { name: 'robots', content: 'noindex, nofollow' }, injectTo: 'head' as const }];
      },
    };
  }

  /** Dev server: serve the 2026 SPA shell for /2026/* deep links. */
  function devRoute2026() {
    return {
      name: 'dev-route-2026',
      configureServer(server: { middlewares: { use: (fn: (req: { url?: string }, res: unknown, next: () => void) => void) => void } }) {
        server.middlewares.use((req, _res, next) => {
          const url = req.url ?? '';
          if (/^\/2026(\/[^.]*)?(\?.*)?$/.test(url)) req.url = '/2026/index.html';
          next();
        });
      },
    };
  }

  export default defineConfig({
    base: '/',
    appType: 'mpa',
    plugins: [react(), spaFallback404(), noindexOffRoot(), devRoute2026()],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        'vaul@1.1.2': 'vaul',
        'sonner@2.0.3': 'sonner',
        'recharts@2.15.2': 'recharts',
        'react-resizable-panels@2.1.7': 'react-resizable-panels',
        'react-hook-form@7.55.0': 'react-hook-form',
        'react-day-picker@8.10.1': 'react-day-picker',
        'next-themes@0.4.6': 'next-themes',
        'lucide-react@0.487.0': 'lucide-react',
        'input-otp@1.4.2': 'input-otp',
        'figma:asset/e6940fff033820f8eca805c49d509b32870892dd.png': path.resolve(__dirname, './src/assets/e6940fff033820f8eca805c49d509b32870892dd.png'),
        'embla-carousel-react@8.6.0': 'embla-carousel-react',
        'cmdk@1.1.1': 'cmdk',
        'class-variance-authority@0.7.1': 'class-variance-authority',
        '@radix-ui/react-tooltip@1.1.8': '@radix-ui/react-tooltip',
        '@radix-ui/react-toggle@1.1.2': '@radix-ui/react-toggle',
        '@radix-ui/react-toggle-group@1.1.2': '@radix-ui/react-toggle-group',
        '@radix-ui/react-tabs@1.1.3': '@radix-ui/react-tabs',
        '@radix-ui/react-switch@1.1.3': '@radix-ui/react-switch',
        '@radix-ui/react-slot@1.1.2': '@radix-ui/react-slot',
        '@radix-ui/react-slider@1.2.3': '@radix-ui/react-slider',
        '@radix-ui/react-separator@1.1.2': '@radix-ui/react-separator',
        '@radix-ui/react-select@2.1.6': '@radix-ui/react-select',
        '@radix-ui/react-scroll-area@1.2.3': '@radix-ui/react-scroll-area',
        '@radix-ui/react-radio-group@1.2.3': '@radix-ui/react-radio-group',
        '@radix-ui/react-progress@1.1.2': '@radix-ui/react-progress',
        '@radix-ui/react-popover@1.1.6': '@radix-ui/react-popover',
        '@radix-ui/react-navigation-menu@1.2.5': '@radix-ui/react-navigation-menu',
        '@radix-ui/react-menubar@1.1.6': '@radix-ui/react-menubar',
        '@radix-ui/react-label@2.1.2': '@radix-ui/react-label',
        '@radix-ui/react-hover-card@1.1.6': '@radix-ui/react-hover-card',
        '@radix-ui/react-dropdown-menu@2.1.6': '@radix-ui/react-dropdown-menu',
        '@radix-ui/react-dialog@1.1.6': '@radix-ui/react-dialog',
        '@radix-ui/react-context-menu@2.2.6': '@radix-ui/react-context-menu',
        '@radix-ui/react-collapsible@1.1.3': '@radix-ui/react-collapsible',
        '@radix-ui/react-checkbox@1.1.4': '@radix-ui/react-checkbox',
        '@radix-ui/react-avatar@1.1.3': '@radix-ui/react-avatar',
        '@radix-ui/react-aspect-ratio@1.1.2': '@radix-ui/react-aspect-ratio',
        '@radix-ui/react-alert-dialog@1.1.6': '@radix-ui/react-alert-dialog',
        '@radix-ui/react-accordion@1.2.3': '@radix-ui/react-accordion',
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      target: 'esnext',
      outDir: 'dist',
      modulePreload: { polyfill: false },
      rollupOptions: {
        input: {
          home: path.resolve(__dirname, 'index.html'),
          y2026: path.resolve(__dirname, '2026/index.html'),
        },
      },
    },
    server: {
      port: 3000,
      open: true,
    },
  });