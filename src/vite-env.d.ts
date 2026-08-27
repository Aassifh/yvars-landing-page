/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CONTACT_EMAIL?: string;
  readonly VITE_PANEL_EMAIL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
