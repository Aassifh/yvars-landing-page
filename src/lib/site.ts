export function isPanelPage() {
  if (typeof window === 'undefined') return false;
  return window.location.pathname.includes('panel');
}

export function homeHref() {
  return isPanelPage() ? './' : '#top';
}

export function sectionHref(hash: `#${string}`) {
  return isPanelPage() ? `./${hash}` : hash;
}

export function panelHref() {
  return isPanelPage() ? '#formulaire' : './panel.html';
}
