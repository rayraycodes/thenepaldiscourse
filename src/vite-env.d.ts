/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Google Analytics 4 measurement ID (e.g. G-XXXXXXXXXX). Optional; analytics disabled if empty. */
  readonly VITE_GA_MEASUREMENT_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
