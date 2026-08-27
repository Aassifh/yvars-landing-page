import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import PanelApp from './PanelApp.tsx';
import { LocaleProvider } from './lib/LocaleContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LocaleProvider>
      <PanelApp />
    </LocaleProvider>
  </StrictMode>,
);
